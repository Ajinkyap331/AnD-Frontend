import React from "react";
import { getDataAll } from "../../API";
import { Catalog } from "./Catalog";
import { Input, Collapse } from "antd";

const Update = () => {
  const [data, setData] = React.useState([]);
  const getData = async () => {
    const response = await getDataAll();
    console.log(response.data);
    setData(response.data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="w-screen p-2">
        <h1 className="text-center text-2xl">Create</h1>
        {
          data.map((e, i) => {
            return <Catalog data={e} />
          })
        }
      </div>
    </div>
  );
};

export default Update;
