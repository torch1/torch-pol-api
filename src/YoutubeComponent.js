import React, { Component } from 'react';

class YoutubeComponent extends Component {

  render() {
    var post = this.props.item.post
    return ( 
      <div>
        <div>
         {this.props.item.post_type} 
        </div>
        <div>
         {post.username}
        </div>
      </div>
    )
  }
}


export default YoutubeComponent


