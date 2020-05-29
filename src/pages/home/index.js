import React, { Component } from 'react'
import { Table, Button, Space } from 'antd';
import { connect } from "dva"
import Add from "@/pages/add"


@connect(({ home }) =>{
  return {
    data:home.data,
    datas:home.datas,
  }
})
export default class index extends Component {
  state = {
    visible: false,
    user:''
  }
  columns = [
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '年龄', dataIndex: 'age', key: 'age' },
    { title: '地址', dataIndex: 'msg', key: 'msg' },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => this.showModals(true)}>添加</Button>
          <Button type="ghost" onClick={() => this.changes(true , text )}>修改</Button>
          <Button type="primary" danger onClick={() => this.del(text)}>删除</Button>
        </Space>
      ),
    },
  ];
  del = ( data ) => {
    let ids = data.id
    this.props.dispatch({
      type:"home/delData",
      payload: ids
    })
  }

  changes = ( isv , data) => {
    this.props.dispatch({
      type:"home/change",
      payload: data
    })
    this.setState({
      visible: isv,
      user:'修改',
    });
  }
  showModals = ( isv ) => {
    this.setState({
      visible: isv,
      user:'添加'
    });
  };
  onFinish = (values , isv ) => {
    if (this.state.user === '添加') {
      this.props.dispatch({
        type:"home/addData",
        payload: values
      })
    }
    if(this.state.user === '修改') {
      const data = Object.assign(this.props.datas,values)
      this.props.dispatch({
        type:"home/upData",
        payload: data
      })
    }
    this.setState({
      visible: isv
    });
  };
  render() {
    const { data} = this.props
    const { visible , user} = this.state
    return (
      <div className="pages_home">
         <Table columns={this.columns} dataSource={data} rowKey="id" />
         <Add 
          showModals={this.showModals} 
          visi={visible} 
          user={user}
          onFinish={this.onFinish}
        />
      </div>
    )
  }
}
