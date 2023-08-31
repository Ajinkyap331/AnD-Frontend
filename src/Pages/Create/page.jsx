import { Button, Input, Collapse } from "antd";
import React, { useRef, useState } from "react";
import { Rating } from "../../Components/Create/Rating";
import { Trash2 } from "lucide-react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { mainActions } from "../../context/mainslice";

const Create = () => {
    const descRef = useRef(null);
    const catalogdescRef = useRef(null);

    const dispatch = useDispatch();

    const catalog = useSelector((state) => state.main.catalog);



    const addCatalog = () => {
        const newcatalog = catalogdescRef.current.input.value;
        catalogdescRef.current.input.value = "";
        dispatch(mainActions.addCatalog({ catalog_number: newcatalog, rating: [] }))
    };

    const items = catalog.map((e, i) => {
        return {
            key: i,
            label: e.catalog_number,
            children: <>
                <div onClick={() => {
                    dispatch(mainActions.deleteCatalog(i))
                }} className='cursor-pointer bg-blue-700 w-fit p-3 rounded-xl text-white flex gap-1 items-center'>
                    <Trash2 />
                    <p>Delete This Catalog</p>
                </div>
                <Rating index={i} />
            </>,

        };
    });

    return (
        <div className="w-screen p-2">
            <h1 className="text-center text-2xl">Create</h1>
            <div className="w-full flex justify-center">
                <div className="w-3/6">
                    <h3>Description</h3>
                    <Input className="w-full" ref={descRef} placeholder="Description" />
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="w-3/6 flex flex-col gap-3">
                    <h3>Catalog</h3>
                    <Input
                        className="w-full"
                        ref={catalogdescRef}
                        placeholder="Catalog Name"
                    />
                    <Button
                        className="w-full bg-blue-700 text-white"
                        onClick={() => addCatalog()}
                    >
                        Add
                    </Button>
                </div>
            </div>
            <div className="w-full p-10 flex justify-center">
                <Collapse
                    className="w-5/6"
                    bordered={catalog.length === 0 ? false : true}
                    items={items}
                    defaultActiveKey={[0]}
                />
            </div>
            <div className="full flex justify-center">
                <div className="w-fit bg-blue-600 text-white text-center rounded px-8 py-2" onClick={() => console.log(catalog)}>Create</div>
            </div>
        </div>
    );
};

export default Create;
