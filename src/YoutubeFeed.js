import React, { Component } from 'react';
import TorchItemComponent from './TorchItemComponent.js'


class YoutubeFeed extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }
  componentDidMount(){
    fetch("https://cors-anywhere.herokuapp.com/https://www.torch1.com/fc-api/915")
    //fetch("https://cors-anywhere.herokuapp.com/https://www.torch1.com/posts/pol-api/977")
      .then(res => res.json())
      .then(json=>{
        this.setState({
          isLoaded:true,
          items:json
        })
      })
  }

  render() {
    var { isLoaded, items } = this.state;
    var containerStyle = {
      width:'850px'
    }
    if(!isLoaded){
      return (
        <div> Loading...  </div>
      );
    }else{
    return ( 
      <div style={containerStyle}>
        {items.map(item =>(
            <div>
          <TorchItemComponent item={item} />
          </div>
        ))}
      </div>
    )
  }}
}


export default YoutubeFeed

