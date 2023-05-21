import React, { useEffect } from "react";
import { Form, Card, Row, Col, Switch, Input, Radio } from 'antd';
import type { FormInstance } from 'antd';
import { useState } from 'react';

interface TitleSectionProps {
  form: FormInstance;
}

export default function TitleSection(props: TitleSectionProps) {

  const { form } = props;

  const show = Form.useWatch(['title', 'show'], form);

  return (
    <Card title="标题（title）">
      <Row>
        <Col span={24}>
          <Form.Item name={['title', 'show']} label="显示标题" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name={['title', 'text']} label="标题">
            <Input disabled={!show} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            name={['title', 'textAlign']}
            label="对齐方式"
            initialValue="auto"
          >
            <Radio.Group defaultValue="auto" disabled={!show}>
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