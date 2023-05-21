import { Layout } from 'antd';
import React, { useEffect } from 'react';
import Echarts from '../../components/Echarts';
import * as echarts from 'echarts';
import './index.css';
import { useState } from 'react';
[]
interface EchartsPanelProps {
  options: { [key: string ]: any } | null
}

const OPTIONS_TEMPLATE: echarts.EChartsOption = {
  title: {
    text: 'New Chart'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    type: 'category',
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
};

const EchartsPanel: React.FC<EchartsPanelProps> = (props) => {

  const [options, setOptions] = useState(props.options);


  useEffect(() => {
    const option = {
      ...OPTIONS_TEMPLATE,
      ...props.options
    }
    setOptions(option);
  }, [props.options]);

  return (
    <Layout className="echarts-panel">
      <Echarts options={options || {}} />
    </Layout>
  );
}

export default EchartsPanel;
