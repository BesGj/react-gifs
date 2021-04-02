import React, { Component } from 'react';

class Gif extends Component {
 updateImg = (event) => {
  if(this.props.selectImg) {
    this.props.selectImg(this.props.id)
  }

 }
  render() {
    const src = `https://media4.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e477c505657b7a149fcfba563f8f3225e698af4473a&rid=giphy.gif&ct=g`
    return(
    <div>
      <img src={src} className="gif" onClick={this.updateImg}/>
    </div>
    );
  }
}

export default Gif;
