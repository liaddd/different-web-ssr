import axios from "axios";

export const config = {
  baseURL: `${process.env.REACT_APP_BASE_HOST}`,
  headers: {
    "Content-Type": "application/json",
    device_id: `${process.env.REACT_APP_DEVICE_MOCK_ID}`
  }
};

export const cardCheckerConfig = {
  baseURL: `${process.env.REACT_APP_CARD_CHECKER_URL}`,
  headers: {
    "Content-Type": "application/json"
  }
};

export default axios.create(config);
