import axiosInstance, {
  cardCheckerConfig,
  config
} from "./requestClient.axios";
import axios from "axios";
import { omit } from "lodash";
import {
  CARD_CHECKER,
  GUARANTEE_AGREEMENT,
  ROUTE_AUTH,
  ROUTE_LOGIN,
  STEP1,
  STEP2,
  STEP3,
  STEP4,
  CONTACT,
  CONTRACTS,
  CUSTOMIZED_CONTRACT,
  AUTH_TOKEN
} from "./routes.constants";

// Api is axios wrapper class
export default class Api {
  // login is first step for authorization
  // @param string data - object
  // @param string phone ,
  // @param string device_type,
  // @param string device_name ,
  // @param string os_version ,
  // @param string is_agent ,
  static login(data) {
    return axiosInstance.post(
      `${process.env.REACT_APP_BASE_STAGE}/${ROUTE_LOGIN}`,
      data
    );
  }

  // auth is second step for authorization
  // @param string data - object
  // @param string phone ,
  // @param string device_type,
  // @param string device_name ,
  // @param string os_version ,
  // @param string is_agent ,
  // https://api.ballaba-it.com/{STAGE}/authenticate
  static auth(data) {
    return axiosInstance.post(
      `${process.env.REACT_APP_BASE_STAGE}${ROUTE_AUTH}`,
      data
    );
  }
  static contactEmail(data) {
    return axios.post(
      `${process.env.REACT_APP_BASE_HOST +
        process.env.REACT_APP_BASE_STAGE}${CONTACT}`,
      data
    );
  }

  static customizedContract(data) {
    return axios.post(
      `${process.env.REACT_APP_BASE_HOST +
        process.env.REACT_APP_BASE_STAGE}${CUSTOMIZED_CONTRACT}`,
      data
    );
  }
  static authByToken(token) {
    config.headers.global_token = token;

    return axios.post(
      `${process.env.REACT_APP_BASE_STAGE}${AUTH_TOKEN}`,
      {},
      config
    );
  }
  // step1 is firts step for stepper
  // @param string data - object
  // @param string phone ,
  // @param string device_type,
  // @param string device_name ,
  // @param string os_version ,
  // @param string is_agent ,
  static step1(data, session_token) {
    config.headers.session_token = session_token;
    config.headers = omit(config.headers, ["global_token"]);
    return axios.put(
      `${process.env.REACT_APP_BASE_STAGE}${STEP1}`,
      data,
      config
    );
  }

  // step2 is second step for stepper
  // @param string data - object
  // @param string phone ,
  // @param string device_type,
  // @param string device_name ,
  // @param string os_version ,
  // @param string is_agent ,
  static step2(data, session_token) {
    config.headers.session_token = session_token;
    config.headers = omit(config.headers, ["global_token"]);
    return axios.post(
      `${process.env.REACT_APP_BASE_STAGE}${STEP2}`,
      data,
      config
    );
  }

  // step3 is third step for stepper
  // @param string data - object
  // @param string phone ,
  // @param string device_type,
  // @param string device_name ,
  // @param string os_version ,
  // @param string is_agent ,
  static step3(data, session_token) {
    config.headers.session_token = session_token;
    config.headers = omit(config.headers, ["global_token"]);
    return axios.post(
      `${process.env.REACT_APP_BASE_STAGE}${STEP3}`,
      data,
      config
    );
  }
  static getContracts(token) {
    config.headers.session_token = token;
    config.headers = omit(config.headers, ["global_token"]);
    return axios.get(
      `${process.env.REACT_APP_BASE_HOST}${process.env.REACT_APP_BASE_STAGE}${CONTRACTS}`,
      config
    );
  }
  // step4 is fourth step for stepper
  // @param string data - object
  // @param string phone ,
  // @param string device_type,
  // @param string device_name ,
  // @param string os_version ,
  // @param string is_agent ,2% משכר הדירה החודשי
  // https://api.ballaba-it.com/{STAGE}/properties
  static step4(data, session_token) {
    config.headers.session_token = session_token;
    config.headers = omit(config.headers, ["global_token"]);
    return axios.post(
      `${process.env.REACT_APP_BASE_STAGE}${STEP4}`,
      data,
      config
    );
  }

  // cardChecker
  static cardChecker(data) {
    return axios.post(`${CARD_CHECKER}`, data, cardCheckerConfig);
  }

  // guaranteeAgreement
  static guaranteeAgreement(data, session_token) {
    config.headers.session_token = session_token;
    config.headers = omit(config.headers, ["global_token"]);
    return axios.post(
      `${process.env.REACT_APP_BASE_STAGE}${GUARANTEE_AGREEMENT}`,
      data,
      config
    );
  }
}
