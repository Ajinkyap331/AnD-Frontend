import React from "react";
import { getDataAll } from "../../API";
import { Catalog } from "./Catalog";
import { Input, Collapse } from "antd";

const List = () => {
  const [data, setData] = React.useState([]);
  const getData = async () => {
    const response = await getDataAll();
    console.log(response.data);
    setData(response.data.reverse());
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="w-screen p-2">
        <h1 className="text-center font-semibold text-2xl mt-10">List</h1>
        {data.map((e, i) => {
          return <Catalog data={e} />;
        })}
      </div>
    </div>
  );
};

export default List;
