import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const { Item } = Form;

const Admin = () => {
  const onFinish = async (values) => {
    try {
      const apiUrl = 'http://localhost:3001/api/products';
      
      await axios.post(apiUrl, values);

      console.log('Product successfully added!');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <Form
      name="productForm"
      onFinish={onFinish}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
    >
      <Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please enter the product name!' }]}
      >
        <Input />
      </Item>

      <Item
        label="Image URL"
        name="imageUrl"
        rules={[{ required: true, message: 'Please enter the image URL!' }]}
      >
        <Input />
      </Item>

      <Item
        label="Price"
        name="price"
        rules={[{ required: true, message: 'Please enter the product price!' }]}
      >
        <Input type="number" />
      </Item>

      <Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
};

export default Admin;
