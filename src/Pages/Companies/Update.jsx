import React from "react";
import { Input, message } from "antd";
import { updateCompany } from "../../API";
import { useNavigate } from "react-router";

const CompanyUpdate = () => {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");

  const submitHandler = async () => {
    try {
      const response = await updateCompany({
        id: localStorage.getItem("companyId"),
        data: name,
      });
      message.success("Successfully Updated company");
      navigate("/clist");
    } catch (e) {
      console.log(e);
      message.error("Error");
    }
  };

  React.useEffect(() => {
    setName(localStorage.getItem("companyName"));
  }, []);

  return (
    <div className="w-screen p-2">
      <h1 className="text-center text-2xl">Update Company</h1>
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
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyUpdate;
