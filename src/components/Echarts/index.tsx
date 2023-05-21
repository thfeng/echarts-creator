import React, { useEffect, useRef } from "react";
import * as echarts from 'echarts';

interface EchartsProps {
  id?: string;
  options: echarts.EChartsOption
}

const Echarts: React.FC<EchartsProps> = ({ id = Date.now().toString(), options }) => {

  const chart = useRef<echarts.EChartsType>(null);

  useEffect(() => {
    const dom = document.getElementById(id);
    if (dom) {
      chart.current = echarts.init(dom);
      chart.current.setOption(options);
    }
  }, []);

  return (
    <div id={id} style={{ height: '100%' }}></div>
  );
}

export default Echarts;