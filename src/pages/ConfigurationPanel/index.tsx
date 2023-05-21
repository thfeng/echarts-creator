import React from "react";
import { Form, Button } from 'antd';
import TitleSection from "./components/TitleSection";
import XAxisSection from "./components/XAxisSection";
import YAxisSection from "./components/YAxisSection";
import SeriesSection from "./components/SeriresSection";
import LegendSection from "./components/LegendSection";
import GridSection from "./components/GridSection";
import './index.css';
import DEFAULT_CONFIG_VALUES from './default.json';

interface ConfigurationPanelProps {
  onSubmit: (formValues: { [key: string]: any }) => void;
}

export default function ConfigurationPanel(props: ConfigurationPanelProps) {
  const { onSubmit } = props;

  const [form] = Form.useForm();

  const handleClickPreview = () => {
    form.submit();
  }

  const handleFormSubmit = (values: any) => {
    console.log(values);
    if (onSubmit && typeof onSubmit === 'function') {
      onSubmit(values);
    }
  }

  return (
    <div className="configuration-panel">
        <Form
          className="configuration-form"
          name="configForm"
          initialValues={DEFAULT_CONFIG_VALUES}
          form={form}
          onFinish={handleFormSubmit}
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