import { useState } from 'react'
import { Layout } from 'antd';
import 'antd/dist/reset.css'
import './App.css'
import ConfigurationPanel from './pages/ConfigurationPanel';

function App() {

  return (
    <div className="App">
      <Layout>
        <Layout.Header className="header">
          <h1>Charts Creator</h1>
        </Layout.Header>
        <Layout.Content>
          <Layout className="left-content">
            <ConfigurationPanel />
          </Layout>
          <Layout className="right-content">right</Layout>
        </Layout.Content>
      </Layout>
    </div>
  )
}

export default App
