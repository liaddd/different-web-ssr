import axios from "axios";

export const config = {
  baseURL: "https://api.ballabaapis.com/",
  headers: {
    "Content-Type": "application/json",
    device_id: 123123123
  }
};

export const cardCheckerConfig = {
  baseURL: "https://www.myofficeguy.com/",
  headers: {
    "Content-Type": "application/json"
  }
};

export default axios.create(config);
