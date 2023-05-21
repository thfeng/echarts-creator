import React, { useState } from "react";
import { Form, Card, Row, Col, Switch, Input, Radio, InputNumber, Button, Tooltip } from 'antd';
import type { FormInstance } from 'antd';

interface LegendSectionProps {
  form: FormInstance;
}

export default function LegendSection(props: LegendSectionProps) {

  const { form } = props;

  const [enable, setEnable] = useState(form.getFieldValue(['legend', 'show']));

  const handleEnableChange = (checked: boolean) => {
    setEnable(checked);
  }

  return (
    <Form form={form}>
      <Card title="图例（legend）">
        <Row>
          <Col span={24}>
            <Form.Item name={['legend', 'show']} label="显示图例" valuePropName="checked">
              <Switch onChange={handleEnableChange} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name={['legend', 'orient']} label="图例布局朝向">
              <Radio.Group defaultValue="horizontal" disabled={!enable}>
                <Radio.Button value="horizontal">水平</Radio.Button>
                <Radio.Button value="vertical">垂直</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={['legend', 'align']} label="图例文本对齐方式">
              <Radio.Group defaultValue="auto" disabled={!enable}>
                <Radio.Button value="auto">自动对齐</Radio.Button>
                <Radio.Button value="left">左对齐</Radio.Button>
                <Radio.Button value="right">右对齐</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
      </Card>
    </Form>
  );
}