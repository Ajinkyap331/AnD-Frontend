import React from 'react'
import { Table } from 'antd'

const Companies = ({ companies }) => {
    
    const columns = [
        {
            title: 'Company ID',
            dataIndex: 'company_id',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            render: (text) => <p>{text}</p>,
        },
        {
            title: 'Discount',
            dataIndex: 'discount',
            render: (text) => <p>{text}</p>,
        }
    ]

  return (
      <div>
          <h3>Company</h3>
          <Table className='mt-2' dataSource={companies} columns={columns} />
      </div>
  )
}

export default Companies