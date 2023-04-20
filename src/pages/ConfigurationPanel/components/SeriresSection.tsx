import React from "react";
import { Form, Card, Row, Col, Layout, Input, Radio, InputNumber, Button, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { FormInstance } from 'antd';
import { useState } from 'react';
import SeriesItem from "./SeriesItem";

interface SeriesSectionProps {
  form: FormInstance;
}

export default function SeriesSection(props: SeriesSectionProps) {

  const { form } = props;

  const [series, setSeries] = useState<any>([]);

  const handleClickAdd = () => {
    setSeries([...series, {}]);
  }

  return (
    <Card title="系列（series）">
      <Form form={form}>
        <Row style={{ marginBottom: '1rem' }}>
          <Col span={24}>
            <Button type="default" icon={<PlusOutlined />} onClick={handleClickAdd} >添加系列</Button>
          </Col>
        </Row>
        <div>
          {
            series.map(item => <SeriesItem key={Date.now()} form={form} />)
          }
        </div>
      </Form>
    </Card>
  );
}