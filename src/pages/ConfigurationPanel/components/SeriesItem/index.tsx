import React from "react";
import { Card, Row, Col, Form, Select, Input, Button, Radio, Tooltip } from 'antd';
import type { FormInstance } from 'antd';
import { QuestionCircleOutlined, CloseOutlined } from '@ant-design/icons'

import './index.css';

interface SeriesItemProps {
  form: FormInstance;
}

export default function SeriesItem(props: SeriesItemProps) {

  const [form] = Form.useForm();

  return (
    <Card className="series-item">
      <Button className="series-item-delete" type="primary" shape="circle" icon={<CloseOutlined />} size="small" danger />
      <Form form={form}>
        <Row>
          <Col span={24}>
            <Form.Item name="type" label="系列类型">
              <Select
                defaultValue="line"
                options={[
                  { value: 'line', label: '折线图' },
                  { value: 'bar', label: '柱状图' },
                  { value: 'pie', label: '饼图' },
                  { value: 'scatter', label: '散点（气泡）图' },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="name" label="系列名称">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="colorBy" label="取色策略">
            <Radio.Group defaultValue="series">
                <Radio.Button value="series">按照系列</Radio.Button>
                <Radio.Button value="data">按照数据</Radio.Button>
              </Radio.Group>
              <Tooltip
                title={`
                  'series'：按照系列分配调色盘中的颜色，同一系列中的所有数据都是用相同的颜色；
                  'data'：按照数据项分配调色盘中的颜色，每个数据项都使用不同的颜色。
                `}
              >
                <Button type="link" shape="circle" icon={<QuestionCircleOutlined />} />
              </Tooltip>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}