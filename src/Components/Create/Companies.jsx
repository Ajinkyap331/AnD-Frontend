import React, { useState } from 'react'
import { Input, Button, Table } from 'antd'
import lo from 'lodash'
import { useSelector, useDispatch } from 'react-redux'

export const Companies = ({ cat_number, rating_value }) => {
    const [Company, setCompany] = useState([])
    const CompanyRef = React.useRef(null)
    const priceRef = React.useRef(null)
    const discountRef = React.useRef(null)

    const catalog = useSelector((state) => state.main.catalog);
    const dispatch = useDispatch();

    console.log(cat_number, rating_value)
    console.log(catalog)

    const addCompany = () => {
        const newCompany = {
            company_id: CompanyRef.current.input.value,
            price: priceRef.current.input.value,
            discount: discountRef.current.input.value
        }

        let newCatalog = catalog.find(e => e.catalog_number === cat_number);
        let newRating = newCatalog.rating.find(e => e.rating_value === rating_value)
        newRating = { ...newRating, companies: [...newRating.companies, newCompany] }

        companies.push(newCompany)
        console.log(companies)
        setTrigger({ value: rating_value, company: companies })
        setCompany(Company => [...Company, newCompany])
        console.log(Company)
    }


    console.log(Company)

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
            // dataIndex: 'action',
            render: (_, record) => (
                <Button onClick={() => setCompany(Company.filter((com) => { return com.company_id !== record.company_id }))} >Delete</Button>
            )

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
