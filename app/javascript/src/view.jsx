// view.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import qs from 'qs';

class Demo extends React.Component{
  state = {
    id: 'ems-demo-hk-1',
    title: 'Tshirt',
    price: 100,
    image: 'https://drive.google.com/uc?id=1Jh3zJQKnAAFpEkubFVpU3OUhVTLPghng'
  }

  componentDidMount() {
    if(this.getUrlParams()) {
      // send ITM values to Google Analytics for web channel
      gtag('event', 'view_item', {'itm_source_h': 'emsdemohk', 'itm_medium_h': 'webchannel', 'itm_campaign_h': Object.values(this.getUrlParams())[0], 'itm_content_h': Object.values(this.getUrlParams())[1], 'itm_term_h': Object.values(this.getUrlParams())[2]});
      console.log("itm data sent");
      console.log(Object.values(this.getUrlParams())[0]);
      console.log(Object.values(this.getUrlParams())[1]);
      console.log(Object.values(this.getUrlParams())[2]);
    }
  }

  webExtendView(id) {
    ScarabQueue.push(['view', id]);
    ScarabQueue.push(['go']);
    console.log('view command sent');
  }

  getUrlParams() {
    const param = qs.parse(window.location.href.split('?')[1]);
    return param;
  }

  render () {
    const { id, title, price, image } = this.state;

    return (
      <Layout>
        <div className="container">
          <h1>Products</h1>
          <h4>{title}</h4>
          <h5>${price}</h5>
          <img src={image} alt={title} width="200" />
          <div>
            <button className="btn btn-dark" onClick={() => this.webExtendView(id)}>Send View</button>
          </div>
        </div>
      </Layout>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Demo/>,
    document.body.appendChild(document.createElement('div'))
  )
})
