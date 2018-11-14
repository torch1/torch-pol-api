import React, { Component } from 'react';
class TwitterComponent extends Component {
  state = { showVideo:false}

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
    var embed = <div><img width="400px" src={post.image_url} /></div>
    return ( 
      <div style={postStyle}>
        <img src={post.profile_image} />
        <h3>{post.name}</h3>
        <h4>{post.attachment_title}</h4>
        <div>
        <p dangerouslySetInnerHTML={{__html: post.text}}></p>
        <span>@{post.username}</span> | 
        <span>{post.plays_count} views </span> | <span><a href={"https://twitter.com/"+post.username+"/status/"+post.post_id} target="_blank">{post.created}</a></span>
        </div>
      </div>
    )
  }
}

export default TwitterComponent
