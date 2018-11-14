import React, { Component } from 'react';
import YoutubeComponent from './YoutubeComponent.js'
import FacebookComponent from './FacebookComponent.js'
import TwitterComponent from './TwitterComponent.js'

class TorchItemComponent extends Component {
  render() {
    var type = this.props.item.post_type;
    if(type == 'youtube'){
          return ( <YoutubeComponent item={this.props.item} /> )
    }
    if(type == 'tweet'){
          return ( <TwitterComponent item={this.props.item} /> )
    }
    if(type == 'facebook'){
          return ( <FacebookComponent item={this.props.item} /> )
    }
    return <div></div>
  }
}

export default TorchItemComponent

