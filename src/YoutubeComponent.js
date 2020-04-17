import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { card_style, title_style, text_style,  content_style, username_style } from './CommonStyles';
import DateText from './DateText';
import StatText from './StatText';
import {faHeart, faComments, faShareAlt} from '@fortawesome/free-solid-svg-icons';
import {faYoutube} from "@fortawesome/free-brands-svg-icons";

class YoutubeComponent extends Component {
  state = { showVideo:true}

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
    var post = this.props.item.post;
    var embed = null; 
    if(this.state.showVideo){
      embed = <div style={{width: "100%"}}><YouTube videoId={post.youtube_id} /></div>
    }else{
			embed = <div style={{width: "100%"}}><img style={{maxWidth: 400}} src={post.image_url} /></div>
    }
    return ( 
      <div style={card_style} className="clearfix">
        <h3 style={title_style}>
        <a style={{textDecoration: 'none', color: "inherit"}} target="_blank" href={"https://www.youtube.com/watch?v=" + post.youtube_id}>
          {post.name}
        </a>
        <div style={username_style}>@{post.username}</div> 
        </h3>
        <h4>{post.attachment_title}</h4>
        <div style={content_style}>
        <div style={{...username_style ,paddingBottom: 6}}><DateText date_string={post.created} /></div>
        <p style={text_style} dangerouslySetInnerHTML={{__html: post.text}}></p>
        <div style={{marginTop: 16}} onClick={this.toggleVideo}>{embed}</div>
        </div>
        <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', marginTop: 12,}}>
         {!(post.plays_count > 0) ? null :
          <li style={{marginRight: 20}}>
            <StatText icon_style={{color: "#bb0000"}} fa_icon_name={faYoutube} stat_number={post.followers_count} name="Views" />
          </li>
         }
        {!(post.like_count > 0) ? null :
          <li style={{marginRight: 20}}>
            <StatText fa_icon_name={faHeart} stat_number={post.like_count} name="Likes" />
          </li>
         }
         {!(post.comment_count > 0) ? null :
          <li style={{marginRight: 20}}>
            <StatText fa_icon_name={faComments} stat_number={post.comment_count} name="Comments" />
          </li>
         }
         {!(post.shares_count > 0) ? null :
          <li style={{marginRight: 20}}>
            <StatText fa_icon_name={faShareAlt} stat_number={post.shares_count} name="Shares" />
          </li>
         }
        </ul>
      </div>
    )
  }
}

export default YoutubeComponent
