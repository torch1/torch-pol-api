import React from 'react';
import StatText from './StatText';


export default function StatList({post}) {
	let {type} = post;
	return (
		<ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', marginTop: 12,}}>
        {!( type == 'tweet' && !(post.retweet_count > 0  || post.shares_count > 0)) ? null :
          <li style={{marginRight: 20}}>
            <StatText fa_icon_name="retweet" stat_number={Math.max(post.shares_count,post.retweet_count)} name="Retweets" />
          </li>
       }
         {!(post.favorite_count > 0  || post.like_count > 0) ? null :
          <li style={{marginRight: 20}}>
            <StatText fa_icon_name="heart" stat_number={Math.max(post.like_count,post.favorite_count)} name="Likes" />
          </li>
         }
         {!(post.followers_count > 0) ? null :
          <li>
            <StatText fa_icon_name="users" stat_number={post.followers_count} name="Followers" />
          </li>
         }
        </ul>


		)
}