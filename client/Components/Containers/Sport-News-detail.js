import React, { Component } from 'react';
import { Link } from 'react-router';
import Detail from '../presentational/Details';
//import foxSports from '../../../public/DataToJson/fox-sports.json';
import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8080');

class SportNewsDetail extends Component {
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
      socket.on('sport', data => cb(null, data));
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

export default SportNewsDetail;
