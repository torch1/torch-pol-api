import React, { Component } from 'react';
import { card_style, header_style, thumbnail_style, title_style, text_style,  content_style, username_style, social_tag_style, social_tag_icon_style } from './CommonStyles';
import DateText from './DateText';
import StatText from './StatText';
import {faRetweet, faHeart, faUsers} from '@fortawesome/free-solid-svg-icons'
import {faTwitter} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import pa from 'postgres-array';

class TwitterComponent extends Component {
  state = { showVideo:false}

  render() {  

    var post = this.props.item.post;
    let image_url = pa.parse(post.media);
    return ( 
      <div style={card_style} className="clearfix">
        <header style={header_style}>
          <img style={thumbnail_style} src={post.profile_image} />
          <h3 style={title_style}>
          <a style={{textDecoration: 'none', color: "inherit", textTransform: 'capitalize'}} target="_blank" href={"http://twitter.com/"+post.username+"/status/"+ post.post_id_str}>
            {post.name.toLowerCase()}
          </a>
          <div style={username_style}>@{post.username}</div> 
          </h3>
        </header>
        {/*<h4>{post.attachment_title}</h4>*/}
        <div style={content_style}>
        {!image_url.length ? null: <img className="post-thumbnail" alt="thumbnail" width="192px" src={image_url[0].replace("http:","https:").replace("_normal","_400x400")} style={{float: 'left', marginRight: 12}} /> }
        <div style={{...username_style ,paddingBottom: 6}}><DateText date_string={post.created} /></div>
        <p style={text_style} dangerouslySetInnerHTML={{__html: post.text}}></p>
        {/*<span>{post.plays_count} views </span> | */}
        </div>
        <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', marginTop: 12,}}>
        {!(post.retweet_count > 0  || post.shares_count > 0) ? null :
          <li style={{marginRight: 20}}>
            <StatText fa_icon_name={faRetweet} stat_number={Math.max(post.shares_count,post.retweet_count)} name="Retweets" />
          </li>
         }
         {!(post.favorite_count > 0  || post.like_count > 0) ? null :
          <li style={{marginRight: 20}}>
            <StatText fa_icon_name={faHeart} stat_number={Math.max(post.like_count,post.favorite_count)} name="Likes" />
          </li>
         }
         {!(post.followers_count > 0) ? null :
          <li>
            <StatText fa_icon_name={faUsers} stat_number={post.followers_count} name="Followers" />
          </li>
         }
        </ul>
        <div style={{...social_tag_style, backgroundColor: "#55acee"}}>
        <FontAwesomeIcon style={{...social_tag_icon_style}} icon={faTwitter} />
        </div>
      </div>
    )
  }
}

export default TwitterComponent
