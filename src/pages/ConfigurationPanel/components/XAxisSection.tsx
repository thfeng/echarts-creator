import React, { useState } from "react";
import { Form, Card, Row, Col, Switch, Input, Radio, InputNumber, Button, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import type { FormInstance } from 'antd';

interface XAxisSectionProps {
  form: FormInstance;
}

export default function XAxisSection(props: XAxisSectionProps) {

  const { form } = props;

  const [enable, setEnable] = useState(false);

  const handleEnableChange = (checked: boolean) => {
    setEnable(checked);
  }

  return (
    <Form form={form}>
      <Card title="X轴（xAxis）">
        <Row>
          <Col span={24}>
            <Form.Item name="enableXAxis" label="显示X轴">
              <Switch onChange={handleEnableChange} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="xAxisPosition" label="X轴位置">
              <Radio.Group defaultValue="bottom" disabled={!enable}>
                <Radio.Button value="top">顶部</Radio.Button>
                <Radio.Button value="bottom">底部</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="xAxisOffset" label="X轴偏移量">
              <InputNumber disabled={!enable} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="xAxisType" label="X轴类型">
              <Radio.Group defaultValue="category" disabled={!enable}>
                <Radio.Button value="value">数值轴</Radio.Button>
                <Radio.Button value="category">类目轴</Radio.Button>
                <Radio.Button value="time">时间轴</Radio.Button>
                <Radio.Button value="log">对数轴</Radio.Button>
              </Radio.Group>
              <Tooltip
                title={`
                  数值轴，适用于连续数据。\n
                  类目轴，适用于离散的类目数据。为该类型时类目数据可自动从 series.data 或 dataset.source 中取，或者可通过 xAxis.data 设置类目数据。\n
                  时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。\n
                  对数轴。适用于对数数据。\n
                `}
              >
                <Button type="link" shape="circle" icon={<QuestionCircleOutlined />} disabled={!enable} />
              </Tooltip>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="xAxisName" label="X轴名称">
              <Input disabled={!enable} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="xAxisNameLocation" label="X轴名称位置">
              <Radio.Group defaultValue="end" disabled={!enable}>
                <Radio.Button value="end">尾部</Radio.Button>
                <Radio.Button value="center">中间</Radio.Button>
                <Radio.Button value="start">头部</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
      </Card>
    </Form>
  );
}