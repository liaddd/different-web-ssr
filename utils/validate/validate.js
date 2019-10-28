// validate
// @param string regexp - regular expresson text
// @param string data - text for validation
// @param string error - error text
export const validate = (regexp, data, error) => {

    const boolValidate = !!data && regexp.test(data);
    let response = {
        valid: boolValidate
    };

    if (!boolValidate) response.error = error;

    return response;
};

export default {
    validate
}