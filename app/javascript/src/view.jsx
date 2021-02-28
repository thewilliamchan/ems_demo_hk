// view.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

const Demo = () => (
  <Layout>
    <div className="container">
      <h1>Products</h1>
      <h4>Tshirt</h4>
      <h5>$100</h5>
      <img src="https://drive.google.com/uc?id=1Jh3zJQKnAAFpEkubFVpU3OUhVTLPghng" alt="tshirt" width="200" />
    </div>
  </Layout>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Demo />,
    document.body.appendChild(document.createElement('div'))
  )
})
