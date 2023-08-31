import React, { useEffect } from 'react'
import { Input, Button, Collapse } from 'antd'
import { Companies } from './Companies'
import { Trash2 } from 'lucide-react'
import _ from 'lodash'
import { useDispatch, useSelector } from "react-redux";
import { mainActions } from '../../context/mainslice'

export const Rating = ({ index }) => {

    const RatingRef = React.useRef(null)

    let catalog = useSelector((state) => state.main.catalog);
    const dispatch = useDispatch();

    const addRating = () => {

        dispatch(mainActions.setRatings({ index: index, rating: { rating_value: RatingRef.current.input.value, companies: [] } }))

    }

    const items = catalog[index].rating.map((e, i) => {
        return {
            key: i,
            label: e.rating_value,
            children: <>
                <div onClick={() => {
                    dispatch(mainActions.deleteRating({ index: index, rating_index: i }))
                }} className='cursor-pointer bg-blue-700 w-fit p-3 rounded-xl text-white flex gap-1 items-center'>
                    <Trash2 />
                    <p>Delete This Rating</p>
                </div>
                <Companies cat_index = {index} index = {i} companies = {e.companies} />
            </>
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
                    <Collapse items={items} bordered={catalog[index].rating.length === 0 ? false : true} defaultActiveKey={[0]} />
                </div>
            </div>
        </div>
    )
}
