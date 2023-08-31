import React from "react";
import Rating from "./Rating";
import { Button, Collapse } from "antd";
import { FileEdit } from "lucide-react";
import { Input } from "antd";
import Rating2 from "./Rating2";


export const Catalog = ({ data }) => {
  console.log(data);

  const [showInputDesc, setShowInputDesc] = React.useState(false);
  const [edit, setEdit] = React.useState(-1);

  const items = data.catalog.map((e, i) => {
    return {
      key: i,
      label: <div>{e.catalog_number}</div>,
      children:
        <>
          {
            edit === i ? (
              <>
                <div className="flex items-center gap-2">
                  <Input />
                  <Button>Save</Button>
                </div>
                <Rating2 ratings={e.rating} />
              </>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <p>{e.desc}</p>
                  <FileEdit
                    className="cursor-pointer"
                    onClick={() => setEdit(i)}
                  />
                </div>
                <Rating ratings={e.rating} />
              </>

            )
          }
        </>,

    };
  });


  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-4/6 flex gap-2">
          <p>{data.desc}</p>
          {
            showInputDesc ? (
              <div className="flex items-center gap-2">
                <Input />
                <Button>Save</Button>
              </div>
            ) : (
              <FileEdit
                className="cursor-pointer"
                onClick={() => setShowInputDesc(true)}
              />

            )
          }
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
