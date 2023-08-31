import React from "react";
import { Collapse } from "antd";
import Companies from "./Companies";

const Rating2 = ({ ratings }) => {

    const items = ratings.map((e, i) => {
        return {
            key: i,
            label: e.rating_value,
            children: <>
                <Companies companies={e.companies} />
            </>
        }
    })

    return (
        <div className='w-full flex flex-col items-center'>
            <h3>{ratings.rating_value}</h3>
            <div className='w-3/6 '>
                <div className='p-5'>
                    <Collapse items={items} defaultActiveKey={[0]} />
                </div>
            </div>
        </div>
    );
};

export default Rating2;
