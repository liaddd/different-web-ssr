import React, {Component, Fragment} from 'react';
import cn from 'classnames'

import './Modal.scss';

class ModalLoader extends Component {
    render() {
        return (
            <Fragment>
                <div className={cn("modal-block modal-effect-slide", {"modal-show": this.props.show})}> {/*  add class modal-show */}
                    <div className="modal-overlay"></div>
                    <div className="modal-content-loader">
                        <div className="modal-header">
                            <div className="modal-user modal-user-icon-loader"></div>
                            <div className="modal-user-text">בבדיקה…</div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default ModalLoader;
