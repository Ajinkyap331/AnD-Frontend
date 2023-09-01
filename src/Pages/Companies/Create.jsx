import React from "react";
import { Input, message } from "antd";
import { createCompanies, updateCompany } from "../../API";
import { useNavigate } from "react-router";

const CompanyCreate = () => {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");

  const submitHandler = async () => {
    try {
      const response = await createCompanies({
        data: name,
      });
      message.success("Successfully Created company");
      navigate("/clist");
    } catch (e) {
      console.log(e);
      message.error("Error");
    }
  };

  return (
    <div className="w-screen p-2">
      <h1 className="text-center text-2xl">Create Company</h1>
      <div className="w-full flex justify-center">
        <div className="w-3/6 flex flex-col p-2 gap-2">
          <h3>Name</h3>
          <Input
            value={name}
            onChange={(input) => {
              setName(input.target.value);
            }}
            className="w-full border-1 border-black"
            placeholder="Name"
          />
          <div className="w-full flex justify-center items-center">
            <button
              className="w-1/4 p-2 bg-blue-600 text-white rounded-md"
              onClick={submitHandler}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;
