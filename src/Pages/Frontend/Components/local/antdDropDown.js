import React from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Space } from 'antd';

export default function AntdDropDown(props) {
    const items = props.items
    return (
        <Dropdown menu={items} className="w-100 text-start d-flex justify-content-between align-items-center py-4">
            <Button>
                <Space>
                    {props.title}
                </Space>
                <DownOutlined />
            </Button>
        </Dropdown>
    )
}
