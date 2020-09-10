import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-gobikannan-learning.cloudfunctions.net/api",
});

export default instance;
