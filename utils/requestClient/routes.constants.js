// base route structure
// 1. REACT_APP_BASE_HOST is integrated by initialization
// 2. REACT_APP_BASE_STAGE can be Dev or v1
// 3. ROUTE NAME

// Login with phone (getting SMS with code)
export const ROUTE_LOGIN = "/login";
// Login with code
export const ROUTE_AUTH = "/authenticate";
// Login with token
export const AUTH_TOKEN = "/loginbytoken";
// stepper step 1
export const STEP1 = "/user/me";
// stepper step 2
export const STEP2 = "/properties";
// stepper step 3
export const STEP3 = "/contracts/exist";
// stepper step 4
export const STEP4 = "/properties";
// card checker
export const CARD_CHECKER = "api/creditguy/vault/tokenizesingleusejson";
// card checker
export const GUARANTEE_AGREEMENT = "/products/guarantee-agreement/exist";

export const CONTACT = "/contact";
export const CUSTOMIZED_CONTRACT = "/contact/customized-contract ";
export const CONTRACTS = "/user/me/properties/landlord";
