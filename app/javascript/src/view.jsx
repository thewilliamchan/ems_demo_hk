// view.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

class Demo extends React.Component{
  state = {
    id: 'ems-demo-hk-1',
    title: 'Tshirt',
    price: 100,
    image: 'https://drive.google.com/uc?id=1Jh3zJQKnAAFpEkubFVpU3OUhVTLPghng'
  }

  WebExtendView(id) {
    ScarabQueue.push(['view', id]);
    ScarabQueue.push(['go']);
    console.log(view command sent);
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
            <button className="btn btn-dark" onClick={() => this.WebExtendView(id)}>Send View</button>
          </div>
        </div>
      </Layout>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Demo />,
    document.body.appendChild(document.createElement('div'))
  )
})
