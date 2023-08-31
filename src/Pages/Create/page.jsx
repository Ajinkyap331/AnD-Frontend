import { Button, Input } from 'antd'
import React, { useRef, useState } from 'react'
import { Rating } from '../../Components/Create/Rating'

const Create = () => {

    const [Catalog, setCatalog] = useState([])
    const descRef = useRef(null)
    const catalogdescRef = useRef(null)

    const addCatalog = () => {
        const newcatalog = catalogdescRef.current.input.value
        setCatalog(Catalog => [... Catalog, newcatalog])
    }

    return (
        <div>
            <h1>Create</h1>
            <div>
              <h3>Description</h3>
              <Input ref={descRef} placeholder='Description' />
            </div>
            <div>
                <h3>Catalog</h3>
                <Input ref = {catalogdescRef} placeholder='Catalog Name' />
                <Button onClick={() => addCatalog() } type='primary'>Add</Button>
            </div>
            <div>
                {
                    Catalog.map((e) => {
                        return <div>
                            <p>{e}</p>
                            <Rating  />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Create