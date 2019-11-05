import cookie from "js-cookie";
import { get } from "lodash";
export const setCookie = (key, value) => {
  cookie.set(key, value, {
    expires: 1,
    path: "/"
  });
};

export const removeCookie = key => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1
    });
  }
};

export const getCookie = (key, req) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};

const getCookieFromBrowser = key => {
  return cookie.get(key);
};

const getCookieFromServer = (key, req) => {
  if (!get(req, "headers.cookie", undefined)) {
    return undefined;
  }
  const rawCookie = req.headers.cookie;

  if (!rawCookie) {
    return undefined;
  }
  return rawCookie;
};
