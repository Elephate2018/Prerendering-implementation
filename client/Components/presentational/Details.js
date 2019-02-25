
import React, { Component } from 'react';

class Detail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
          this.props.messages.map(item => {
            return (
              <section key={item.source.id}>
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <img className="card-img-top"src={item.urlToImage} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-content">{item.content}</p>
                  <a href={`${item.url}`} target="_blank" >link to the article</a>
                  <p className="card-author">Author: {item.author}</p>
                </div>
              </section>
            )
          })
        }
      </div>
    )
  }
}


export default Detail;
