import { Button, Form, Input } from 'antd';
import React from 'react';
import {useTranslation} from "react-i18next";

export const SubscribeForm: React.FC = () => {

    const {t, i18n} = useTranslation('body');

    const onFinish = (values: any) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
  
    return (
      <div className="ant-form-container">
        <Form
          name="SubscribeForm"
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="subscribeEmail"
            rules={[
                { required: true, message: t('errors.emailRequired') },
                { type: 'email', message: t('errors.invalidEmail')  }
            ]}
          >
            <Input placeholder={t('forms.emailPlaceholder')} />
          </Form.Item>
  
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Subscribe <i className="fa fa-user"></i>
            </Button>
          </Form.Item>
        </Form>
      </div>  
    );
  };
