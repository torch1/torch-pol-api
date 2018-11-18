import React, { Component } from 'react';
import TorchItemComponent from './TorchItemComponent.js'


class YoutubeFeed extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      url : "https://cors-anywhere.herokuapp.com/https://www.torch1.com/posts/pol-api/977"
    }

      this.changeChannelPolitician = this.changeChannelPolitician.bind(this);
      this.changeChannelIndia = this.changeChannelIndia.bind(this);
      this.changeChannelCarnegie = this.changeChannelCarnegie.bind(this);
      this.get = this.get.bind(this);
  }
  get(){
    if(!this.state.url){return}
    fetch(this.state.url)
      .then(res => res.json())
      .then(json=>{
        this.setState({
          isLoaded:true,
          items:json
        })
      })
  }
  componentDidMount(){
    this.get()
  }
  changeChannelIndia(){
    this.setState(
        { url :"https://cors-anywhere.herokuapp.com/https://www.torch1.com/fc-api/915", 
            isLoaded:false},
        () => this.get()
    )
  }
  changeChannelPolitician(){

    this.setState(
        { url :"https://cors-anywhere.herokuapp.com/https://www.torch1.com/posts/pol-api/977",
            isLoaded:false},
        () => this.get()
    )
  }
  changeChannelCarnegie(){
    this.setState(
        { url : "https://cors-anywhere.herokuapp.com/https://www.torch1.com/posts/carnegie-api/1091",
            isLoaded:false},
        () => this.get()
    )
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
    <div>
    <div>
      <button onClick={this.changeChannelPolitician}>All U.S. Politicians</button>
      <button onClick={this.changeChannelIndia}>India Philanthropy Scan</button>
      <button onClick={this.changeChannelCarnegie}>Carnegie</button>
    </div>
      <div style={containerStyle}>
        {items.map(item =>(
            <div>
          <TorchItemComponent item={item} />
          </div>
        ))}
      </div>
      </div>
    )
  }}
}


export default YoutubeFeed

