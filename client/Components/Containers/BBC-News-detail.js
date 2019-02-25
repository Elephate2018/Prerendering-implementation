import React, { Component } from 'react';
import { Link } from 'react-router';
import Detail from '../presentational/Details';
//import bbcNews from '../../../public/DataToJson/bbc-news.json';
import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8080');

class BBCNewsDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            singleNews: {}
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
      socket.on('bbc', data => cb(null, data));
      socket.emit('subscribeToTimer', 1000);
    }

    get news() {
      const single = this.state.messages.filter(item => item.title.replace(/ /g, "_") == this.props.params.title.replace(/ /g, "_") );
        return <Detail messages={single}/>
    }

    render() {
        return (
            <div>
              {this.news}
          </div>
        )
    }
}

export default BBCNewsDetails;
