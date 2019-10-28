import React, {Component, Fragment} from 'react';

import './Modal.scss';

class ModalPersonalInfoStep1 extends Component {
    render() {
        return (
            <Fragment>
                <div className="modal-header">
                    <div className="modal-user modal-user-icon-shield-x"></div>
                    <span className="modal-close modal-close-icon"></span>
                </div>
                <div className="modal-inner-content">
                    <p className="modal-text">
                        <strong>
                            בדיקתנו הסתיימה,<br/>
                            DiffeRent לא תוכל להבטיח את תשלומי הדייר שלך
                        </strong>
                    </p>
                    <div className="modal-btn-block">
                        <button className="btn btn-blue btn-small">
                            לבדיקת דייר נוסף
                        </button>
                    </div>
                    <p className="modal-text">
                        <strong>
                            ניתן לבדוק עד 5 דיירים
                        </strong>
                    </p>
                </div>
            </Fragment>
        );
    }
}
export default ModalPersonalInfoStep1;