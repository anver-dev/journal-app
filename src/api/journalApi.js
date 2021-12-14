import axios from "axios";

const journalApi = axios.create({
  baseURL: "https://vue-demo-35a5a-default-rtdb.firebaseio.com",
});

export default journalApi;
