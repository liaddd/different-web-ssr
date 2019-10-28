// IsraelPhoneNumberRegex is simple mobile phone regexp
const IsraelPhoneNumberRegex = /(^\+?[1-9]\d{8,14}$|^0[0-9]\d{8,11})/;
// InputCheckerRegex is simple mobile phone regexp
const InputCheckerRegex = /true$/;
//
const InputStringRegex = /[\S]+/;
//
const InputNumberRegex = /[\d]+/;
const IdNumberRegex = /^[\d]{9}$/;
//
const CreditCardRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/
//
const EmailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

// PhoneErrorText
const PhoneErrorText = "קוד שגוי";
const PhoneErrorValidation = "מספר טלפון לא תקין";
// CheckboxErrorText
const CheckboxErrorText = "נא לאשר את התקנון";

export default {
    IsraelPhoneNumberRegex,
    InputCheckerRegex,
    InputStringRegex,
    InputNumberRegex,
    IdNumberRegex,
    CreditCardRegex,
    EmailRegex,
    PhoneErrorText,
    CheckboxErrorText,
  PhoneErrorValidation
}

