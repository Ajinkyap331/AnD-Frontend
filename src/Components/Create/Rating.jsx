import React from 'react'
import { Input, Button, Collapse } from 'antd'
import { Companies } from './Companies'

export const Rating = () => {

    const [Rating, setRating] = React.useState([])
    const RatingRef = React.useRef(null)

    const addRating = () => {
        const newRating = RatingRef.current.input.value
        setRating(Rating => [...Rating, newRating])
    }

    const items = Rating.map((e, i) => {
        return {
            key: i,
            label: e,
            children: <Companies />,
        }
    })

    return (
        <div className='w-full flex flex-col items-center'>
            <h3>Rating</h3>
            <div className='w-3/6 '>
                <div className='w-full flex flex-col justify-center gap-2'>
                    <Input className='w-full' ref={RatingRef} placeholder='Rating Value' />
                    <Button className='w-full bg-blue-700 text-white' onClick={() => addRating()} type='primary'>Add</Button>
                </div>
                <div className='p-5'>
                    <Collapse  items={items} bordered={Rating.length === 0 ? false : true} defaultActiveKey={[0]} />
                </div>
            </div>
        </div>
    )
}
