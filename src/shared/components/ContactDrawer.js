import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showContact } from '../../features/contact/actions'
import { Drawer, Form, Input, InputNumber, Button } from 'antd';
import {
    UploadOutlined,
  } from '@ant-design/icons'
  

const FORM_ITEM_NAME = 'submit'

class ContactDrawer extends Component {
    formRef = React.createRef();

    onClose = () => {
        this.props.showContact(false)
      };
    
      onChange = e => {
        this.setState({
          placement: e.target.value,
        });
      };
      onFinish = values => {
          console.log(values)
          this.formRef.current.resetFields()
          this.props.showContact(false)
      };
    
    render() {
        const layout = {
          labelCol: { span: 8 },
          wrapperCol: { span: 16 },
        };

        const validateMessages = {
          required: '${label} is required!',
          types: {
            email: '${label} is not validate email!',
            number: '${label} is not a validate number!',
          },
          number: {
            range: '${label} must be between ${min} and ${max}',
          },
        };

        return (
            <Drawer
            className='contactDrawer'
            title="Contact Us"
            placement='left'
            closable={false}
            onClose={this.onClose}
            visible={this.props.contact.showDrawer}
            width='25vw'
            >
                <Form ref={this.formRef} {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
                  <Form.Item name={[FORM_ITEM_NAME, 'name']} label="Name" rules={[{ required: true }]}>
                    <Input />
                  </Form.Item>
                  <Form.Item name={[FORM_ITEM_NAME, 'email']} label="Email" rules={[{ required: true, type: 'email' }]}>
                    <Input />
                  </Form.Item>
                  <Form.Item name={[FORM_ITEM_NAME, 'company']} label="Company">
                    <InputNumber />
                  </Form.Item>
                  <Form.Item name={[FORM_ITEM_NAME, 'website']} label="Website">
                    <Input />
                  </Form.Item>
                  <Form.Item name={[FORM_ITEM_NAME, 'introduction']} label="Introduction">
                    <Input.TextArea />
                  </Form.Item>
                  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button icon={<UploadOutlined />} type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
            </Drawer>
  
        );
    }
}


const mapStateToProps = ({ contact }) => {
    return { 
        contact
    }
  }
  
  export default connect (mapStateToProps, {
    showContact 
  }) (ContactDrawer)