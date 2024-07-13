import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "774f54e9848a41949dfa362951aa6707",
  },
});
