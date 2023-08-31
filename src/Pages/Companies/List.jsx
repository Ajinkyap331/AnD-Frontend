import React from "react";
import { deleteCompany, getCompanies } from "../../API";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const CompanyList = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const getData = async () => {
    const response = await getCompanies();
    console.log(response.data);
    setData(response.data);
  };
  React.useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this company?"
    );
    if (!confirmDelete) return;
    try {
      const response = await deleteCompany({ id: id });
      message.success("Successfully Deleted company");
      getData();
    } catch (e) {
      message.error("Error");
    }
  };

  const handleUpdate = (id, name) => {
    localStorage.setItem("companyId", id);
    localStorage.setItem("companyName", name);
    navigate("/cupdate");
  };

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold mb-4">Company List</h1>
      <ul className="space-y-2">
        {data.map((company) => (
          <li
            key={company._id}
            className="flex items-center justify-between bg-white p-3 rounded shadow"
          >
            <span className="text-lg">{company.name}</span>
            <div className="space-x-2">
              <button
                onClick={() => handleDelete(company._id)}
                className="px-2 py-1 text-red-600 hover:bg-red-100 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => handleUpdate(company._id, company.name)}
                className="px-2 py-1 text-blue-600 hover:bg-blue-100 rounded"
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;
