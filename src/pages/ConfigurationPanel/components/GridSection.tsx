import React, { useState } from "react";
import { Form, Card, Row, Col, Switch, Input, Radio, InputNumber, Button, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import type { FormInstance } from 'antd';

interface GridSectionProps {
  form: FormInstance;
}

export default function GridSection(props: GridSectionProps) {

  const { form } = props;

  const [enable, setEnable] = useState(false);

  const handleEnableChange = (checked: boolean) => {
    setEnable(checked);
  }

  return (
    <Form form={form}>
      <Card title="网格（grid）">
        <Row>
          <Col span={24}>
            <Form.Item name="enableGrid" label="显示网格">
              <Switch onChange={handleEnableChange} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="borderWidth" label="网格边框线宽">
              <InputNumber disabled={!enable} />
            </Form.Item>
          </Col>
        </Row>
      </Card>
    </Form>
  );
}