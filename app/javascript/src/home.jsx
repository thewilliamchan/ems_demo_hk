// home.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

class Home extends React.Component {
  componentDidMount() {
    this.timer = setInterval(
      () => {
        if (document.getElementById('wps_popup').querySelectorAll("div[data-wps-ad='wps_squVEmn-wk.1--1']")) {
          gtag('event', 'impression', {
            'event_category': 'web-channel-popup',
            'event_label': 'wps_squVEmn-wk.1--1'
          });
        }
      }
      , 1000);
  }

  sendITM_A() {
    // send ITM values to Google Analytics for ad A
    //gtag('event', 'view_item', {'itm_source_h': 'emsdemohk', 'itm_medium_h': 'banner', 'itm_campaign_h': 'new-products-2021-A', 'itm_content_h': 'small-banner', 'itm_term_h': 'new-products'});
    console.log("itm data sent");
  }

  sendITM_B() {
    // send ITM values to Google Analytics for ad B
    //gtag('event', 'view_item', {'itm_source_h': 'emsdemohk', 'itm_medium_h': 'banner', 'itm_campaign_h': 'new-products-2021-B', 'itm_content_h': 'small-banner', 'itm_term_h': 'new-products'});
    console.log("itm data sent");
  }

  render() {
    return (
      <Layout>
        <div className="container">
          <h1>Home page</h1>
          <h4>Internal ad A</h4>
          <a onClick={() => this.sendITM_A()} href="/view">
            <img src="https://drive.google.com/uc?id=1uhpdpC2ugvJsMo-iszMse4pGmgn0BZBg" alt="internal-ad-a" width="200" />
          </a>
          <br />
          <br />
          <h4>Internal ad B</h4>
          <a onClick={() => this.sendITM_B()} href="/view">
            <img src="https://drive.google.com/uc?id=12gO5oML-4UaJ5wDuWUEbSqT8_aN5IXsZ" alt="internal-ad-b" width="200" />
          </a>
        </div>
      </Layout>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div'))
  )
})
