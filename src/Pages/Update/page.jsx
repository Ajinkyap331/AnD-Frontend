import React from "react";
import { getDataAll } from "../../API";
import { Catalog } from "./Catalog";
import { Input, Collapse } from "antd";

const Update = () => {
  const [data, setData] = React.useState([]);
  const [showInputDesc, setShowInputDesc] = React.useState("");
  const getData = async () => {
    const response = await getDataAll();
    setData(response.data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="w-screen flex flex-col p-2 mt-10">
        <h1 className="text-center font-semibold text-2xl">Update</h1>
        {data.map((e, i) => {
          return (
            <Catalog
              setShowInputDesc={setShowInputDesc}
              showInputDesc={showInputDesc}
              index={i}
              key={i}
              data={e}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Update;
