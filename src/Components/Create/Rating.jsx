import React from 'react'
import { Input, Button } from 'antd'
import { Companies } from './Companies'

export const Rating = () => {

    const [Rating, setRating] = React.useState([])
    const RatingRef = React.useRef(null)

    const addRating = () => {
        const newRating = RatingRef.current.input.value
        setRating(Rating => [...Rating, newRating])
    }

    return (
        <div>
            <h3>Rating</h3>
            <Input ref={RatingRef} placeholder='Rating Value' />
            <Button onClick={() => addRating()} type='primary'>Add</Button>
            {
                Rating.map((e) => {
                    return <div>
                        <p>{e}</p>
                        <Companies/>
                    </div>
                })
            }
        </div>
       

    )
}
