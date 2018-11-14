import React, { Component } from 'react';
import YoutubeComponent from './YoutubeComponent.js'


class YoutubeFeed extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }
  componentDidMount(){
    fetch("https://cors-anywhere.herokuapp.com/https://www.torch1.com/posts/pol-api/977")
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
    if(!isLoaded){
      return (
        <div> Loading...  </div>
      );
    }else{
    return ( 
      <div>
        {items.map(item =>(
            <div>
          <YoutubeComponent item={item} />
          </div>
        ))}
      </div>
    )
  }}
}


export default YoutubeFeed

