import axios from "axios";
import { toast } from "react-toastify"

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1febad23f92541aba9f52c7ba742ac35",
    // key: process.env.RAWG_API_KEY
  },
});

apiClient.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

    if (!expectedError) {
        toast.error("An unexpected error occurred", {
            position: toast.POSITION.TOP_RIGHT
          })
    }
    return Promise.reject(error)
});

export default {
    get: apiClient.get,
    post: apiClient.post,
    put: apiClient.put,
    delete: apiClient.delete
}

