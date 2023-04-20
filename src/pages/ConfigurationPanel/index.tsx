import React from "react";
import { Form, Button } from 'antd';
import TitleSection from "./components/TitleSection";
import XAxisSection from "./components/XAxisSection";
import YAxisSection from "./components/YAxisSection";
import SeriesSection from "./components/SeriresSection";
import LegendSection from "./components/LegendSection";
import GridSection from "./components/GridSection";
import './index.css';

export default function ConfigurationPanel() {
  const [form] = Form.useForm();

  const handleClickPreview = () => {
    const values = form.getFieldsValue();
    console.log(values);
  }

  return (
    <div className="configuration-panel">
      <Form
        className="configuration-form"
        name="configForm"
        initialValues={{name: ''}}
        form={form}
      >
        <TitleSection form={form} />
        <XAxisSection form={form} />
        <YAxisSection form={form} />
        <SeriesSection form={form} />
        <LegendSection form={form} />
        <GridSection form={form} />
      </Form>
      <div className="configuration-actions">
        <Button type="primary" onClick={handleClickPreview}>预览</Button>
      </div>
    </div>
  );
}