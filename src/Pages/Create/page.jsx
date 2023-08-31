import { Button, Input, Collapse } from 'antd'
import React, { useRef, useState } from 'react'
import { Rating } from '../../Components/Create/Rating'

const Create = () => {

    const [Catalog, setCatalog] = useState([])
    const descRef = useRef(null)
    const catalogdescRef = useRef(null)

    const addCatalog = () => {
        const newcatalog = catalogdescRef.current.input.value
        setCatalog(Catalog => [...Catalog, newcatalog])
    }

    const items = Catalog.map((e, i) => {
        return {
            key: i,
            label: e,
            children: <Rating />,
        }
    })

    return (
        <div className='w-screen'>
            <h1 className='text-center text-2xl'>Create</h1>
            <div className='w-full flex justify-center'>
                <div className='w-3/6'>
                    <h3>Description</h3>
                    <Input className='w-full' ref={descRef} placeholder='Description' />
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <div className='w-3/6 flex flex-col gap-3'>
                    <h3>Catalog</h3>
                    <Input className='w-full' ref={catalogdescRef} placeholder='Catalog Name' />
                    <Button className='w-full bg-blue-700 text-white' onClick={() => addCatalog()}>Add</Button>
                </div>
            </div>
            <div className='w-full p-10 flex justify-center'>
                <Collapse className='w-5/6' bordered = {Catalog.length === 0 ? false : true} items={items} defaultActiveKey={[0]} />
            </div> 
        </div>
    )
}

export default Create