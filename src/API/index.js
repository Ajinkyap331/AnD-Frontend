import axios from "axios";

// create companies API
export const createCompanies = async ({ data }) => {
  try {
    const response = await axios.post("/api/company/create", { name: data });
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Get All Companies Data
export const getCompanies = async () => {
  try {
    const response = await axios.get("/api/company/getAll");
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Get One Company Data
export const getCompany = async ({ id }) => {
  try {
    const response = await axios.get(`/api/company/getOne/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Update Company Data
export const updateCompany = async ({ id, data }) => {
  try {
    // Prepare Send Data
    const sendData = {
      id: id,
      name: data,
    };

    const response = await axios.put(`/api/company/update`, sendData);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Delete Company Data
export const deleteCompany = async ({ id }) => {
  try {
    console.log(id);
    const response = await axios.delete(`/api/company/delete/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Create Data API
export const postDataCreate = async ({ data }) => {
  try {
    console.log(data);
    const response = await axios.post("/api/data/create", data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Get Data API
export const getDataOne = async ({ id }) => {
  try {
    const response = await axios.get(`/api/data/getOne/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getDataAll = async () => {
  try {
    const response = await axios.get("/api/data/getAll");
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Delete Data API

export const deleteData = async (id) => {
  try {
    const response = await axios.delete(`/api/data/delete/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Update Data API
export const updateData = async ({ id, data, type }) => {
  try {
    // Prepare Send Data
    const sendData = {
      type: type,
      id: id,
      data: data,
    };

    const response = await axios.put(`/api/data/update`, sendData);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Delete All Data API
export const deleteAllData = async (data) => {
  try {
    const response = await axios.put(`/api/data/delete`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
