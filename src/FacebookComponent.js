import React, { Component } from 'react';
import YouTube from 'react-youtube';
class FacebookComponent extends Component {
  constructor(props) {
    super(props);

  }


  render() {



    var postStyle = {
      padding: 10,
      margin:10,
      backgroundColor:"#eff0f1",
      color:"#333",
      display:"inline-block",
      width:'400px'
      
    }
    var post = this.props.item.post;
    var embed = <div></div>
    embed = <div>
                <div><img width="400px" src={post.image_url} /></div>
            </div>
    return ( 
      <div style={postStyle}>
        <div >{embed}</div>
        <h3>{post.name}</h3>
        <h4>{post.attachment_title}</h4>
        <div>
        <span>@{post.username}</span> | 
        <span>{post.plays_count} views </span> | <span>{post.created}</span>
        </div>
      </div>
    )
  }
}

export default FacebookComponent
