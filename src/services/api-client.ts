import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7169ce84c5a64512b550334ca72c669b",
  },
});
