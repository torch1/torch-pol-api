import React, { Component } from 'react';
import YouTube from 'react-youtube';
class YoutubeComponent extends Component {
  state = { showVideo:false}

  constructor(props) {
    super(props);
        this.toggleVideo = this.toggleVideo.bind(this);

  }

  toggleVideo(){
    //this.state.showVideo = !this.state.showVideo;
    this.setState((state,props) => {
      return {showVideo:!state.showVideo}
    });
    //this.state.showVideo = !this.state.showVideo;
  }

  render() {

   var overlay= {
position:"absolute",
		margin:" 0 auto",
marginLeft:"25%",
opacity:.60
  }


    var postStyle = {
      padding: 10,
      margin:10,
      backgroundColor:"#eff0f1",
      color:"#333",
      dipslay:"inline-block"
    }
    var post = this.props.item.post;
    var embed = <div></div>
    if(this.state.showVideo){
      embed = <div width="100%"><YouTube videoId={post.youtube_id} /></div>
    }else{
      embed = <div>
									<div><img width="100%" src={post.image_url} /></div>
							</div>
    }
    return ( 
      <div style={postStyle}>
        <div onClick={this.toggleVideo}>{embed}</div>
        <h4>{post.attachment_title}</h4>
        <div>
        <span>@{post.username}</span> | 
        <span>{post.plays_count} views </span> | <span>{post.created}</span>
        </div>
      </div>
    )
  }
}

export default YoutubeComponent
