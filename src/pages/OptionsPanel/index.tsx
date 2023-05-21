import { Layout } from 'antd';
import React from 'react';
import './index.css';

interface OptionsPanelProps {
  options: { [key: string ]: any } | null
}

const OptionsPanel: React.FC<OptionsPanelProps> = (props) => {

  return (
    <Layout className="options-panel">
      <pre>
        <code>{JSON.stringify(props.options, null, ' ')}</code>
      </pre>
    </Layout>
  );
}

export default OptionsPanel;
