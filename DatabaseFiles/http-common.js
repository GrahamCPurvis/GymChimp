import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3306/api",
  headers: {
    "Content-type": "application/json"
  }
});