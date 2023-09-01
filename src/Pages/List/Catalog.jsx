import React from "react";
import Rating from "./Rating";
import { Collapse } from "antd";
import { Trash2 } from "lucide-react";

export const Catalog = ({ data }) => {
  const items = data.catalog.map((e, i) => {
    return {
      key: i,
      label: e.catalog_number,
      children: (
        <>
          <Rating ratings={e.rating} />
        </>
      ),
    };
  });

  return (
    <>
      <div className="w-full flex justify-center mt-10">
        <div className="w-9/12 ">
          <p className="w-fit px-4 py-2 bg-blue-600 text-white rounded">
            {data.desc}
          </p>
        </div>
      </div>
      <div className="w-full p-10 flex justify-center">
        <Collapse
          className="w-5/6"
          bordered={data.length === 0 ? false : true}
          items={items}
          defaultActiveKey={[0]}
        />
      </div>
    </>
  );
};
