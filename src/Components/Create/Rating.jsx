import React, { useEffect } from 'react'
import { Input, Button, Collapse } from 'antd'
import { Companies } from './Companies'
import { Trash2 } from 'lucide-react'
import _ from 'lodash'
import { useDispatch, useSelector } from "react-redux";
import { mainActions } from '../../context/mainslice'

export const Rating = ({ rating, cat_number, index }) => {

    const [Rating, setRating] = React.useState([])
    const [trigger, setTrigger] = React.useState("")
    const RatingRef = React.useRef(null)

    let catalog = useSelector((state) => state.main.catalog);
    const dispatch = useDispatch();

    console.log(catalog)

    const addRating = () => {

        dispatch(mainActions.setRatings({ index: index, rating: { rating_value: RatingRef.current.input.value, companies: [] } }))

    }

    useEffect(() => {
        console.log(trigger)
        if (trigger !== "") {
            rating = Array.from(rating.filter((e) => { return e.rating_value !== trigger.value }))
            // console.log(rating)
            rating.push({ rating_value: trigger.value, companies: trigger.company })
            // console.log(rating)
        }
        // setRating(rating)
    }, [trigger])

    console.log(rating)

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
                <Companies cat_index = {index} index = {i} companies = {e.companies} cat_number={cat_number} rating_value={e.rating_value} />
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
                    <Collapse items={items} bordered={Rating.length === 0 ? false : true} defaultActiveKey={[0]} />
                </div>
            </div>
        </div>
    )
}
