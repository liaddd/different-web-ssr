import React, {Component, Fragment} from 'react';
import ClassName from "classnames";

import './Modal.scss';
// import ModalPersonalInfoStep1 from './ModalPersonalInfoStep1';
import ModalPersonalInfoStep2 from './ModalPersonalInfoStep2';

class ModalPersonalInfo extends Component {
  render() {
    return (
      <Fragment>
        <div className={ClassName("modal-block modal-effect-slide", {"modal-show":this.props.show})}> {/*  add class  modal-show */}
          {/*<div className={ClassName("modal-block modal-effect-slide", {"modal-show": showModal === ModalHome})}>  add class modal-show */}
          <div className="modal-overlay"></div>
          <div className="modal-content modal-with-buttons">
            {/*<ModalPersonalInfoStep1/>*/}
            <ModalPersonalInfoStep2 users={this.props.users} sendData={this.props.sendData} showError ={this.props.showError}/>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default ModalPersonalInfo;