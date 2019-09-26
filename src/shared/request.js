import axios from "axios";

// TODO: supply as env
const URL = 'http://127.0.0.1'
const PORT = 8000

const ApiRequest = axios.create({
  baseURL: `${URL}:${PORT}/`,
});

const request = async(url) => {
  const result = await ApiRequest.get(url)
  const { data: { data, meta }, status } = result
  const pagination = meta && meta.pagination

  return { result: data, pagination, status }
}

export default request;
