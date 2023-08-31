import { Button, Input, Collapse, message } from "antd";
import React, { useRef, useState } from "react";
import { Rating } from "../../Components/Create/Rating";
import { Trash2 } from "lucide-react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { mainActions } from "../../context/mainslice";
import { postDataCreate } from "../../API";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const descRef = useRef(null);
  const catalogdescRef = useRef(null);

  const dispatch = useDispatch();

  const catalog = useSelector((state) => state.main.catalog);

  const addCatalog = () => {
    const newcatalog = catalogdescRef.current.input.value;
    catalogdescRef.current.input.value = "";
    dispatch(
      mainActions.addCatalog({ catalog_number: newcatalog, rating: [] })
    );
  };

  const items = catalog.map((e, i) => {
    return {
      key: i,
      label: e.catalog_number,
      children: (
        <>
          <div
            onClick={() => {
              dispatch(mainActions.deleteCatalog(i));
            }}
            className="cursor-pointer bg-blue-700 w-fit px-2 rounded-xl text-white flex gap-1 items-center hover:bg-blue-500"
          >
            <Trash2 />
            <p className="p-2 font-semibold">Delete this Catalog</p>
          </div>
          <Rating rating={e.rating} cat_number={e.catalog_number} index={i} />
        </>
      ),
    };
  });

  const submitHandler = async () => {
    if (descRef.current.input.value === "") {
      message.error("Please enter the description");
      return;
    }
    try {
      const data = {
        desc: descRef.current.input.value,
        catalog: catalog,
      };

      const response = await postDataCreate({ data: data });
      if (response.message === "successfully created data") {
        message.success("Successfully Created the Description");
        navigate("/list");
      } else {
        message.error("Error");
      }
    } catch (e) {
      console.log(e);
      message.error("Error");
    }
  };

  return (
    <div className="w-full p-2">
      <h1 className="text-center font-semibold text-2xl">Create</h1>
      <div className="w-full flex justify-center">
        <div className="w-3/6">
          <h3 className="p-2">Description</h3>
          <Input className="w-full" ref={descRef} placeholder="Description" />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-3/6 flex flex-col gap-3">
          <div>
            <h3 className="p-2">Catalog</h3>
            <Input
              className="w-full"
              ref={catalogdescRef}
              placeholder="Catalog Name"
            />
          </div>
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
        <div
          className="w-fit bg-blue-600 text-white text-center rounded px-8 py-2 cursor-pointer"
          onClick={submitHandler}
        >
          Create
        </div>
      </div>
    </div>
  );
};

export default Create;
