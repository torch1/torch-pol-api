import React, { Component } from 'react';
import TorchItemComponent from './TorchItemComponent.js'


class TorchFeed extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,

      url : `https://cors-anywhere.herokuapp.com/${props.base_url}/api/${props.feed_type}/${props.feed_id}`
     //url : `/torch-api-feed/posts.json`
    }
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
      }).catch(err => {
        console.log(err);

      });
  }
  componentDidMount(){
    this.get()
  }

  render() {
    var { isLoaded, items } = this.state;
    var containerStyle = {
      maxWidth:'850px',
      width: '100%',
      display: 'inline-block',
      verticalAlign: 'top',
    }
    
    if(!isLoaded){
      return (<div style={containerStyle}><span style={{color: '#4f5f6f', fontSize: 18, fontWeight: 'bold'}}>Loading...</span></div> );
    } else if(items && items.length === 0){
      return (<div style={containerStyle}><span style={{color: '#4f5f6f', fontSize: 18, fontWeight: 'bold'}}>No feed to show.</span></div> );
    } else{
    return ( 
      <div style={containerStyle}>
        {items.map((item, i) =>(
          <div className="torch-api-feed-post-container" key={"torch_posts_feed_" + i}>
            <TorchItemComponent item={item} />
          </div>
        ))}
      </div>
    )
  }}
}


export default TorchFeed

