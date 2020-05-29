import React, { Component } from 'react'
import { Modal, Button , Form, Input} from 'antd';
import { connect } from "dva"


@connect(({ home }) =>{
  return {
      datas:home.datas
  }
})
export default class index extends Component {
  componentDidMount () {
    if(this.props.user == '修改') {
      console.log(this.$refs)
    }
  }
  state = {
    onivis:false
  };
  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  render() {
    const { onivis  } = this.state
    const { showModals ,user, visi , datas, onFinish } = this.props
    return (
      <div className="add">
        <Modal
          title={user}
          visible={ visi }
          footer={null}
        >
          <Form
            ref="forms"
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={(values) => onFinish( values , onivis)}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="姓名"
              name="name"
              rules={[
                {
                  required: true,
                  message: '姓名不能为空!',
                },
              ]}
            >
              <Input/>
            </Form.Item>
            <Form.Item
              label="年龄"
              name="age"
              rules={[
                {
                  required: true,
                  message: '年龄不能为空!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="地址"
              name="msg"
              rules={[
                {
                  required: true,
                  message: '地址不能为空!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" 
                style={{marginRight:'0.5rem'}} 
                onClick={() => showModals(onivis)}
              >
                取消
              </Button>
              <Button type="primary" htmlType="submit">
                确定
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}
