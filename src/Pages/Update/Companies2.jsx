import React, { useState } from 'react'
import { Input, Button, Table } from 'antd'
import lo from 'lodash'
import { useSelector, useDispatch } from 'react-redux'
import { mainActions } from '../../context/mainslice'

export const Companies2 = ({ index, cat_index, companies }) => {
    const CompanyRef = React.useRef(null)
    const priceRef = React.useRef(null)
    const discountRef = React.useRef(null)

    const dispatch = useDispatch();
    
    companies = lo.cloneDeep(companies)
    
    // companies.forEach((company, index) => {
    //     return company.key = index
    // })
    
    // console.log(companies)

    const addCompany = () => {
        const newCompany = {
            key: companies.length,
            company_id: CompanyRef.current.input.value,
            price: priceRef.current.input.value,
            discount: discountRef.current.input.value
        }

        dispatch(mainActions.setCompanies({ index: cat_index, rating_index: index, company: newCompany }))
    }

    console.log(companies)

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
        }, {
            title: 'Action',
            render: (no, record) => {
                return <Button onClick={() => {
                    dispatch(mainActions.deleteCompany({ index: cat_index, rating_index: index, company_index: record.key,_id: record._id }))
                }} >Delete</Button>
            }
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
            <Table className='mt-2' dataSource={companies} columns={columns} />
        </div>


    )
}
