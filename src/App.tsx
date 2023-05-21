import { useState } from 'react'
import { Layout } from 'antd';
import 'antd/dist/reset.css'
import './App.css'
import ConfigurationPanel from './pages/ConfigurationPanel';
import EchartsPanel from './pages/EChartsPanel';
import OptionsPanel from './pages/OptionsPanel';

function App() {

  const [options, setOptions] = useState(null);

  const handleConfigurationSubmit = (values: any) => {
    setOptions(values);
  }

  return (
    <div className="App">
      <Layout>
        <Layout.Header className="header">
          <h1>Charts Creator</h1>
        </Layout.Header>
        <Layout.Content>
          <Layout className="left-content">
            <ConfigurationPanel onSubmit={handleConfigurationSubmit} />
          </Layout>
          <Layout className="right-content">
            <EchartsPanel options={options} />
            <OptionsPanel options={options} />
          </Layout>
        </Layout.Content>
      </Layout>
    </div>
  )
}

export default App
