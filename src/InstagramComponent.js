import React, { Component } from 'react';
import { card_style, header_style, thumbnail_style, title_style, text_style,  content_style, username_style, social_tag_style, social_tag_icon_style } from './CommonStyles';
import DateText from './DateText';
import StatText from './StatText';
import {faHeart, faUsers} from '@fortawesome/free-solid-svg-icons'
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function on_image_error(post_id) {
  /*
    var post_endpoint = `https://api.instagram.com/oembed/?url=http://instagr.am/p/${post_id}`;
    return fetch(post_endpoint).then(response => response.json()).then(data => data.thumbnail_url).catch(() => {
      console.log('We could not load image from: ' + `//instagr.am/p/${post_id}`);
    }); 
    */
}

export default class InstagramComponent extends Component {
  //state = {thumbnail_url:  null};


    /*
  componentDidMount() {

    var post = this.props.item.post;
    var post_endpoint = `https://api.instagram.com/oembed/?url=http://instagr.am/p/${post.youtube_id}`;
    fetch(post_endpoint).then(response => {
      response.json().then(data => {
        this.setState({thumbnail_url: data.thumbnail_url});
      });
    });

  }
  */

  render() {  
    var post = this.props.item.post;

    //var embed = <div><img width="400px" src={post.image_url} /></div>
    return ( 
      <div style={card_style} className="clearfix ">
        <header style={header_style}>
          <img style={thumbnail_style} src={post.profile_image} />
          <h3 style={title_style}>
          <a style={{textDecoration: 'none', color: "inherit"}} target="_blank" href={"https://www.instagram.com/p/" + post.youtube_id}>
            {post.name + '\n'}
          </a>
          <div style={username_style}>@{post.username}</div> 
          </h3>
        </header>
        {/*<h4>{post.attachment_title}</h4>*/}
        <div style={content_style}>
          <img width="192px" onError={() => {
            /*
            if (!this.state.thumbnail_url) {
              on_image_error(post.youtube_id).then(thumbnail_url => {
                this.setState({thumbnail_url: thumbnail_url})
              });
            }
              */
          }} src={`https://api.instagram.com/p/${post.youtube_id}/media`} style={{float: 'left', marginRight: 12}} />
          <div style={{...username_style ,paddingBottom: 6}}><DateText date_string={post.created} /></div>
          <p style={text_style} dangerouslySetInnerHTML={{__html: post.text}}></p>
          {/*<span>{post.plays_count} views </span> | */}
        </div>
        <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', marginTop: 12,}}>
        {!(post.favorite_count > 0) ? null :
          <li style={{marginRight: 20}}>
            <StatText fa_icon_name={faHeart} stat_number={post.favorite_count} name="Likes" />
          </li>
         }
         {!(post.followers_count > 0) ? null :
          <li>
            <StatText fa_icon_name={faUsers} stat_number={post.followers_count} name="Followers" />
          </li>
         }
        </ul>
        <div style={{...social_tag_style,  backgroundImage: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"}}>
          <FontAwesomeIcon style={{...social_tag_icon_style}} icon={faInstagram} />
        </div>
      </div>
    )
  }
}

