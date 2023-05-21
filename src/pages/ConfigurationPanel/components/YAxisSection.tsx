import React, { useState } from "react";
import { Form, Card, Row, Col, Switch, Input, Radio, InputNumber, Button, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import type { FormInstance } from 'antd';
import { AXIS_TYPE } from '../../../common/Constant';

interface YAxisSectionProps {
  form: FormInstance;
}

export default function YAxisSection(props: YAxisSectionProps) {

  const { form } = props;

  const [enable, setEnable] = useState(form.getFieldValue(['yAxis', 'show']));

  const handleEnableChange = (checked: boolean) => {
    setEnable(checked);
  }

  return (
    <Form form={form}>
      <Card title="Y轴（yAxis）">
        <Row>
          <Col span={24}>
            <Form.Item name={['yAxis', 'show']} label="显示Y轴" valuePropName="checked">
              <Switch onChange={handleEnableChange} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name={['yAxis', 'type']} label="Y轴类型">
              <Radio.Group defaultValue={AXIS_TYPE.VALUE} disabled={!enable}>
                <Radio.Button value={AXIS_TYPE.VALUE}>数值轴</Radio.Button>
                <Radio.Button value={AXIS_TYPE.CATEGORY}>类目轴</Radio.Button>
                <Radio.Button value={AXIS_TYPE.TIME}>时间轴</Radio.Button>
                <Radio.Button value={AXIS_TYPE.LOG}>对数轴</Radio.Button>
              </Radio.Group>
              <Tooltip
                title={`
                  数值轴，适用于连续数据。\n
                  类目轴，适用于离散的类目数据。为该类型时类目数据可自动从 series.data 或 dataset.source 中取，或者可通过 yAxis.data 设置类目数据。\n
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
            <Form.Item name={['yAxis', 'position']} label="Y轴位置">
              <Radio.Group defaultValue="left" disabled={!enable}>
                <Radio.Button value="right">右侧</Radio.Button>
                <Radio.Button value="left">左侧</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={['yAxis', 'offset']} label="Y轴偏移量">
              <InputNumber disabled={!enable} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name={['yAxis', 'name']} label="Y轴名称">
              <Input disabled={!enable} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={['yAxis', 'nameLocation']} label="Y轴名称位置">
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