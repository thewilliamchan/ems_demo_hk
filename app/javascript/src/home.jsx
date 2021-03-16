// home.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

class Home extends React.Component {
  componentDidMount() {
    this.overlayTimer = setInterval(
      () => {
        const overlay = document.querySelectorAll('div[data-wps-ad][data-wps-popup-content-body]');
        if (overlay.length > 0) {
          console.log('overlay');
          gtag('event', 'impression', {
            'event_category': 'web-channel-popup',
            'event_label': overlay[0].getAttribute('data-wps-ad')
          });
        }
        clearInterval(this.overlayTimer);
      }
    , 1000);

    this.ribbonTimer = setInterval(
      () => {
        const ribbon = document.querySelectorAll('div[data-wps-ad][data-wps-ribbon-content-body]');
        if (ribbon.length > 0) {
          for (var i = 0; i < ribbon.length; i++) {
            console.log('ribbon');
            gtag('event', 'impression', {
              'event_category': 'web-channel-ribbon',
              'event_label': ribbon[0].getAttribute('data-wps-ad')
            });
          }
        }
        clearInterval(this.ribbonTimer);
      }
    , 1000);

    this.embedTimer = setInterval(
      () => {
        const embed = document.querySelectorAll('div[data-wps-ad][data-wps-embed-content-body]');
        if (embed.length > 0) {
          for (var i = 0; i < embed.length; i++) {
            console.log('embed');
            gtag('event', 'impression', {
              'event_category': 'web-channel-embed',
              'event_label': embed[0].getAttribute('data-wps-ad')
            });
          }
        }
        clearInterval(this.embedTimer);
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
        <div className='container' data-wps-popup-content-body="" data-wps-ad="overlay1">
          <h1>Home page</h1>
          <h4>Internal ad A</h4>
          <a onClick={() => this.sendITM_A()} href="/view">
            <img src='https://drive.google.com/uc?id=1uhpdpC2ugvJsMo-iszMse4pGmgn0BZBg' alt='internal-ad-a' width='200' />
          </a>
          <br />
          <br />
          <div data-wps-ad="ribbon1" data-wps-ribbon-content-body=""></div>
          <div data-wps-ad="ribbon2" data-wps-ribbon-content-body=""></div>
          <h4>Internal ad B</h4>
          <a onClick={() => this.sendITM_B()} href="/view">
            <img src='https://drive.google.com/uc?id=12gO5oML-4UaJ5wDuWUEbSqT8_aN5IXsZ' alt='internal-ad-b' width='200' />
          </a>
          <div data-wps-ad="embed1" data-wps-embed-content-body=""></div>
          <div data-wps-ad="embed2" data-wps-embed-content-body=""></div>
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
