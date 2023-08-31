import React, { useEffect } from 'react'
import { Input, Button, Collapse } from 'antd'
import { Companies2 } from './Companies2'
import { Trash2 } from 'lucide-react'
import _ from 'lodash'
import { useDispatch, useSelector } from "react-redux";
import { mainActions } from '../../context/mainslice'

export const Rating2 = ({ index }) => {

    const RatingRef = React.useRef(null)
    const [changeRatingValue, setChangeRatingValue] = React.useState(-1)

    let catalog = useSelector((state) => state.main.catalog);
    const dispatch = useDispatch();

    console.log(catalog)

    const addRating = () => {
        console.log(RatingRef.current.input.value)
        dispatch(mainActions.setRatings({ index: index, rating: { rating_value: RatingRef.current.input.value, companies: [] } }))

    }

    const items = catalog[index].rating.map((e, i) => {
        return {
            key: i,
            label: <div>
                {
                    changeRatingValue === i ? (
                        <div className='flex items-center gap-2'>
                            <Input ref={RatingRef} defaultValue={e.rating_value} />
                            <Button onClick={() => {
                                dispatch(mainActions.changeRatingValue({ index: index, rating_index: i, rating_value: RatingRef.current.input.value }))
                                setChangeRatingValue(-1)
                            }
                            }>Save</Button>
                        </div>
                    ) : (
                        <div className='flex items-center gap-2'>
                            <p>{e.rating_value}</p>
                            <Button onClick={() => setChangeRatingValue(i)}>Change</Button>
                        </div>
                    )

                }
            </div>,
            children: <>
                <div onClick={() => {
                    dispatch(mainActions.deleteRating({ index: index, rating_index: i }))
                }} className='cursor-pointer bg-blue-700 w-fit p-3 rounded-xl text-white flex gap-1 items-center'>
                    <Trash2 />
                    <p>Delete This Rating</p>
                </div>
                <Companies2 cat_index={index} index={i} companies={e.companies} />
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
