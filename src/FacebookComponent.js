import React, { Component } from 'react';
import { card_style, header_style, thumbnail_style, title_style, text_style,  content_style, username_style, social_tag_style, social_tag_icon_style } from './CommonStyles';
import DateText from './DateText';
import StatText from './StatText';
import {faThumbsUp, faShareAlt, faComments, faUsers} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import pa from 'postgres-array';

export default class FacebookComponent extends Component {



  render() {  

    var post = this.props.item.post;
    return ( 
      <div style={card_style} className="clearfix">
        <header style={header_style}>
          <img style={thumbnail_style} src={post.profile_image} />
          <h3 style={title_style}>
          <a style={{textDecoration: 'none', color: "inherit"}} target="_blank" href={"https://facebook.com/" + post.post_id}>
            {post.name}
          </a>
          <div style={username_style}>@{post.username}</div> 
          </h3>
        </header>
        {/*<h4>{post.attachment_title}</h4>*/}
        <div style={content_style}>
        {!post.image_url ? null: <img className="post-thumbnail" alt="thumbnail" width="192px" src={post.image_url} style={{float: 'left', marginRight: 12}} /> }
        <div style={{...username_style ,paddingBottom: 6}}><DateText date_string={post.created} /></div >
        <p style={text_style} dangerouslySetInnerHTML={{__html: post.text}}></p>
        {/*<span>{post.plays_count} views </span> | */}
        </div>
        <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', marginTop: 12,}}>
        {!(post.like_count > 0) ? null :
          <li style={{marginRight: 20}}>
            <StatText fa_icon_name={faThumbsUp} stat_number={post.like_count} name="Likes" />
          </li>
         }
         {!(post.comment_count > 0 ) ? null :
          <li style={{marginRight: 20}}>
            <StatText fa_icon_name={faComments} stat_number={post.comment_count} name="Comments" />
          </li>
         }
         {!(post.shares_count > 0) ? null :
          <li style={{marginRight: 20}}>
            <StatText fa_icon_name={faShareAlt} stat_number={post.shares_count} name="Shares" />
          </li>
         }
         {!(post.followers_count > 0) ? null :
          <li>
            <StatText fa_icon_name={faUsers} stat_number={post.followers_count} name="Followers" />
          </li>
         }
        </ul>
        <div style={{...social_tag_style, backgroundColor: "rgb(59, 89, 152)"}}>
        <FontAwesomeIcon style={{...social_tag_icon_style}} icon={faFacebookF} />
        </div>
      </div>
    )
  }
}

