import React from 'react';
import {render} from 'react-dom';
import './App.css';

import TorchFeed from './TorchFeed.js';
function App (props) {

  /*
  var base_url = "http://jesus2.torch1.com";
  var feed_id = "1282";
  var feed_type = "saved-search";
  */
  var base_url = props.base_url;
  var feed_id = props.api_feed_id;
  var feed_type = props.api_feed_type;
  return (
      <div className="torch-api-feed-app">
        <header className="torch-api-feed-app-header">
        <a href="https://torch1.com" target="_blank">
          <img style={{maxWidth: '100%'}} src={base_url + "/embed/torch-api-feed/logo.svg"} />
        </a>
        </header>
        <main>
          <TorchFeed feed_id={feed_id} feed_type={feed_type} base_url={base_url}/>
        </main>
      </div>
    );
}

export default function TorchRoot() {
  return (
    <div style={{width: '100%', height: '100%'}} id="torch_root"></div>
  );

}

window.torch_app_init = function (api_feed_type, api_feed_id, base_url) {
  render(<App api_feed_id={api_feed_id} api_feed_type={api_feed_type} base_url={base_url} />, document.getElementById('torch_root') )
}


