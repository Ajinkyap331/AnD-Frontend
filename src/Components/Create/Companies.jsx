import React, { useState } from "react";
import { Input, Button, Table, Select } from "antd";
import lo from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { mainActions } from "../../context/mainslice";
import { getCompanies } from "../../API";

export const Companies = ({ index, cat_index, companies }) => {
  const [companiesData, setCompaniesData] = useState([]);
  const [company, setCompany] = useState("");
  const priceRef = React.useRef(null);
  const discountRef = React.useRef(null);

  const dispatch = useDispatch();

  const addCompany = () => {
    const newCompany = {
      key: companies.length,
      company_id: company,
      price: priceRef.current.input.value,
      discount: discountRef.current.input.value,
    };

    dispatch(
      mainActions.setCompanies({
        index: cat_index,
        rating_index: index,
        company: newCompany,
      })
    );
  };

  React.useEffect(() => {
    const getAllCompanies = async () => {
      const response = await getCompanies();
      setCompaniesData(
        response.data.map((e, i) => ({ value: e._id, label: e._id }))
      );
    };
    getAllCompanies();
  }, []);


  const columns = [
    {
      title: "Company ID",
      dataIndex: "company_id",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Discount",
      dataIndex: "discount",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Action",
      render: (_, record) => (
        <Button
          onClick={() => {
            dispatch(
              mainActions.deleteCompany({
                index: cat_index,
                rating_index: index,
                company_index: record.key,
              })
            );
          }}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div>
      <h3 className="w-full text-center p-2 m-2 font-semibold text-2xl">
        Company
      </h3>
      <div className="flex flex-col gap-5">
        <Select
          className="w-full"
          placeholder="Company Id"
          onChange={(e) => {
            setCompany(e);
          }}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={companiesData}
        />
        <Input
          type="number"
          className="w-full"
          ref={priceRef}
          placeholder="Price"
        />
        <Input
          type="number"
          min={0}
          max={100}
          className="w-full"
          ref={discountRef}
          placeholder="Discount"
        />
        <Button
          className="bg-blue-700 text-white"
          onClick={() => addCompany()}
          type="primary"
        >
          Add
        </Button>
      </div>
      <Table className="mt-2" dataSource={companies} columns={columns} />
    </div>
  );
};
