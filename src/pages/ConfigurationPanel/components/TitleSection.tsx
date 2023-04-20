import React from "react";
import { Form, Card, Row, Col, Switch, Input, Radio } from 'antd';
import type { FormInstance } from 'antd';
import { useState } from 'react';

interface TitleSectionProps {
  form: FormInstance;
}

export default function TitleSection(props: TitleSectionProps) {

  const { form } = props;

  const [enable, setEnable] = useState(false);

  const handleEnableChange = (checked: boolean) => {
    setEnable(checked);
  }

  return (
    <Card title="标题（title）">
      <Row>
        <Col span={24}>
          <Form.Item name="enableTitle" label="显示标题">
            <Switch onChange={handleEnableChange} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="title" label="标题">
            <Input disabled={!enable} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="titleTextAlign" label="对齐方式">
            <Radio.Group defaultValue="auto" disabled={!enable}>
              <Radio.Button value="auto">自动对齐</Radio.Button>
              <Radio.Button value="left">左对齐</Radio.Button>
              <Radio.Button value="right">右对齐</Radio.Button>
              <Radio.Button value="center">居中对齐</Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
    </Card>
  );
}