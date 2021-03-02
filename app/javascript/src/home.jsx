// home.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

class Home extends React.Component {
  SendITM() {
    // itm_source_h
    ga('set', 'dimension1', 'emsdemohk');
    // itm_medium_h
    ga('set', 'dimension2', 'banner');
    // itm_campaign_h
    ga('set', 'dimension3', 'new-products-2021');
    // itm_content_h
    ga('set', 'dimension4', 'small-banner');
    // itm_term_h
    ga('set', 'dimension5', 'new-products');
  }

  render() {
    return (
      <Layout>
        <div className="container">
          <h1>Home page</h1>
          <h4>Internal ad 1</h4>
          <a onClick={() => this.SendITM()} href="/view">
            <img src="https://drive.google.com/uc?id=1uhpdpC2ugvJsMo-iszMse4pGmgn0BZBg" alt="internal-ad-1" width="200" />
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
