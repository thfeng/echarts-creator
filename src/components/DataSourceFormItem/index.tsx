import { UploadOutlined } from "@ant-design/icons";
import { Row, Col, Form, Select, FormInstance, Button, Input, Upload } from "antd";
import React, { useState } from "react";
import { SOURCE_TYPE } from "../../common/Constant";

interface DataSourceFormItemProps {
  form: FormInstance
}

const urlInputAddonBefore = (
  <Select defaultValue="http://">
    <Select.Option value="http://">http://</Select.Option>
    <Select.Option value="https://">https://</Select.Option>
  </Select>
);

const DataSourceFormItem =  (props: DataSourceFormItemProps) => {

  const { form } = props;

  const [selectedSourceType, setSelectedSourceType] = useState(SOURCE_TYPE.TEXT);

  const renderSourceInput = () => {
    const type = form.getFieldValue('sourceType');
    let element = null;
    switch(type) {
      case SOURCE_TYPE.TEXT:
        element = <Input />
        break;
      case SOURCE_TYPE.URL:
        element = <Input addonBefore={urlInputAddonBefore}/>
        break;
      case SOURCE_TYPE.CSV:
        element = (
          <Upload
            beforeUpload ={(file) => {
              return false;
            }}
          >
            <Button icon={<UploadOutlined />}>上传</Button>
          </Upload>
        );
        break;
      default:
        element = <Input />
    }
    return element;
  }

  return (
    <Row gutter={16}>
          <Col span={6}>
            <Form.Item name="sourceType" label="数据源">
              <Select
                defaultValue={selectedSourceType}
                options={[
                  { value: SOURCE_TYPE.TEXT, label: '文本' },
                  { value: SOURCE_TYPE.URL, label: 'URL' },
                  { value: SOURCE_TYPE.CSV, label: 'CSV' },
                ]}
                onChange={(val) => {
                  setSelectedSourceType(val);
                }}
              />
            </Form.Item>
          </Col>
          <Col span={18}>
            <Form.Item
              name="source"
            >
              {
                renderSourceInput()
              }
            </Form.Item>
          </Col>
        </Row>
  );
}

export default DataSourceFormItem;
