import React, { Component } from 'react';
import YouTube from 'react-youtube';


class YoutubeComponent extends Component {

  render() {
    var post = this.props.item.post;
    return ( 
      <div>
        <div>{post.organization_name}</div>
        <div>
         {post.username}
        </div>
        <YouTube videoId={post.youtube_id} />
      </div>
    )
  }
}

//<img src={post.image_url} />

export default YoutubeComponent


