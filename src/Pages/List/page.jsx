import React from "react";
import { getDataAll } from "../../API";
import { Catalog } from "./Catalog";

const List = () => {
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
      {data.map((item) => {
        return <Catalog key={item._id} data={item} />;
      })}
    </div>
  );
};

export default List;
