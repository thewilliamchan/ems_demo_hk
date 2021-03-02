// home.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

const Home = () => (
  <Layout>
    <div className="container">
      <h1>Home page</h1>
      <h4>Internal ad 1</h4>
      <a href="/view?itm_source_h=emsdemohk&itm_medium_h=banner_ad&itm_campaign_h=new_products_2021&itm_content_h=small_banner&itm_term_h=new_products">
        <img src="https://doc-0k-9o-docs.googleusercontent.com/docs/securesc/q12n5n9dh0glpu3l2mee1arv2nd5tc64/tmsdp41t294n9vfkt11i15q2il18q31o/1614664650000/08929955126707880999/03277970015415550772/1uhpdpC2ugvJsMo-iszMse4pGmgn0BZBg?authuser=0" alt="internal-ad-1" width="200" />
      </a>
    </div>
  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div'))
  )
})
