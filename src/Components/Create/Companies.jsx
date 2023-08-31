import React, { useState } from 'react'
import { Input, Button, Table } from 'antd'
import _ from 'lodash'

export const Companies = () => {
    const [Company, setCompany] = useState([])
    const CompanyRef = React.useRef(null)
    const priceRef = React.useRef(null)
    const discountRef = React.useRef(null)

    const addCompany = () => {
        const newCompany = {
            company_id: CompanyRef.current.input.value, 
            price: priceRef.current.input.value,
            discount: discountRef.current.input.value
        }
        setCompany(Company => [...Company, newCompany])
    }

    const columns = [
        {
            title: 'Company ID',
            dataIndex: 'company_id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Discount',
            dataIndex: 'discount',
            key: 'name',
            render: (text) => <a>{text}</a>,
        }
    ]
    
    return (
        <div>
            <h3>Company</h3>
            <div className='flex gap-5'>
                <Input className='w-fit' ref={CompanyRef} placeholder='Company Id' />
                <Input className='w-fit' ref={priceRef} placeholder='Price' />
                <Input className='w-fit' ref={discountRef} placeholder='Discount' />
                <Button className='bg-blue-700 text-white' onClick={() => addCompany()} type='primary'>Add</Button>
            </div>
            <Table className='mt-2' dataSource={Company} columns={columns} />
        </div>


    )
}
