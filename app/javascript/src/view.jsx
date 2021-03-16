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
      // send event to Google Analytics for web channel
      console.log('web channel click event sent');
      gtag('event', 'click', {
        'event_category': this.getUrlParams()['event_category'],
        'event_campaign': this.getUrlParams()['event_campaign']
      });
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
        <div className='container'>
          <h1>Products</h1>
          <h4>{title}</h4>
          <h5>${price}</h5>
          <img src={image} alt={title} width='200' />
          <div>
            <button className='btn btn-dark' onClick={() => this.webExtendView(id)}>Send View</button>
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
