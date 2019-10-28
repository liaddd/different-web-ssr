import React, { Component, Fragment } from "react";
import PageHeader from "./../../components/PageHeader/PageHeader";
import ModalContact from "./../../components/Modal/ModalContact";
import ContactBlock from "./../../components/ContactBlock/ContactBlock";
import ContactForm from "../../components/ContactForm/ContactForm";
import LocationBlock from "./../../components/LocationBlock/LocationBlock";
import SubscribeBlock from "./../../components/SubscribeBlock/SubscribeBlock";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <PageHeader PageHeaderTitle={`יצירת קשר`} />
        <ContactBlock />
        <ContactForm />
        <LocationBlock />
        <SubscribeBlock />
        <ModalContact />
      </Fragment>
    );
  }
}

export default Contact;
