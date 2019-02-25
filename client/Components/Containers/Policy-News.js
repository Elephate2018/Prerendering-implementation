import React, { Component } from 'react';
import { Link } from 'react-router';
import ListComponent from '../presentational/List-presentation.js';
//import policy from '../../../public/DataToJson/politico.json';
import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8080');

class PolicyNews extends Component {
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
      socket.on('policy', data => cb(null, data));
      socket.emit('subscribeToTimer', 1000);
    }

    get news() {
      return this.state.messages.map((item, index) => {
        return  <ListComponent key={index} messages={item} id={index} path={`Policy/`}/>
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

export default PolicyNews;
