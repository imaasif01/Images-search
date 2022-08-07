import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID O4ENDFkbXiX6cD1oNF0gwjP767yifvg4PUqjZHJRAdY",
  },
});
