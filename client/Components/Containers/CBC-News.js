import React, { Component } from 'react';
import { Link } from 'react-router';
import ListComponent from '../presentational/List-presentation.js';
//import cbcNews from '../../../public/DataToJson/cbc-news.json';
import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8080');

class CBCNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        this._isMount = true;
        if(this._isMount) {
          this.subscribeToTimer((err, data) => this.setState({
            messages: data
          }))
        }
    }

    componentWillUnmount() {
      this._isMount = false;
    }

    subscribeToTimer(cb) {
      socket.on('cbcNews', data => cb(null, data));
      socket.emit('subscribeToTimer', 1000);
    }

    get news() {
      return this.state.messages.map((item, index) => {
        return  <ListComponent key={index} messages={item} id={index} path={`CBC_News/`}/>
      });
    }

    render() {
        return (
            <div>
             {this.news}
          </div>
        )
    }
}

export default CBCNews;
