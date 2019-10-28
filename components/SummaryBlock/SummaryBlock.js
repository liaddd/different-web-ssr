import React, { Component, Fragment } from 'react';

import './SummaryBlock.scss';
import { stepper_toggle } from '../../actions/forms/forms.actions';
import { connect } from 'react-redux';
class SummaryBlock extends Component {
  getDate = date => {
    let d = new Date(date);
    return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
  };
  render() {
    const { first_name, last_name, phone, id_number, birth_date, city, street, street_number, apartment_number, selected_tenant_user, price, entry_date, exit_date } = this.props.user;
    const startDate = entry_date && this.getDate(entry_date);
    const endDate = exit_date && this.getDate(exit_date);
    const fee = (price * 0.025).toFixed(0);
    if (this.props.SummaryHeaderTitle === void 0) throw new Error('SummaryHeaderTitle is required');
    if (this.props.SummaryHeaderSubTitle === void 0) throw new Error('SummaryHeaderSubTitle is required');
    return (
      <Fragment>
        <section className="summary-block">
          <header className="summary-header">
            <div className="summary-header-img" />
            {this.props.SummaryHeaderTitle ? <h2 className="summary-header-title">{this.props.SummaryHeaderTitle}</h2> : null}
            {this.props.SummaryHeaderSubTitle ? <div className="summary-header-subtitle">{this.props.SummaryHeaderSubTitle}</div> : null}
          </header>
          <div className="summary-inner-content">
            <div className="summary">
              <h2 className="summary-title">פרטים אישיים של בעל הדירה</h2>
              <p className="summary-content">
                <span className="summary-text-name">בטחון בשכירות ל</span>
                <span className="summary-text">
                  <strong>
                    {first_name} {last_name}
                  </strong>
                </span>
              </p>
              {/*<p className="summary-content">*/}
                {/*<span className="summary-text-name">תאריך לידה</span>&nbsp;*/}
                {/*<span className="summary-text">*/}
                  {/*<strong>{birth_date}</strong>*/}
                {/*</span>*/}
              {/*</p>*/}
              <p className="summary-content">
                <span className="summary-text-name">מספר טלפון</span>&nbsp;
                <span className="summary-text">
                  <strong dir="ltr">{phone}</strong>
                </span>
              </p>
              <p className="summary-content">
                <span className="summary-text-name">מספר ת.ז</span>&nbsp;
                <span className="summary-text">
                  <strong>{id_number}</strong>
                </span>
              </p>
            </div>
            <div className="summary">
              <h2 className="summary-title">פרטי הנכס להשכרה</h2>
              <p className="summary-content">
                <span className="summary-text-name">לכתובת:</span>&nbsp;
                <span className="summary-text">
                  <strong>
                    {city}, {street} {street_number} / {apartment_number}
                  </strong>
                </span>
              </p>
            </div>
            <div className="summary">
              <h2 className="summary-title">פרטי השוכר של המשכיר</h2>
              <div>
                {selected_tenant_user &&
                      <div key={selected_tenant_user.id_number}>
                        <p className="summary-content">
                          <span className="summary-text-name">שם השוכר</span>&nbsp;
                          <span className="summary-text">
                            <strong>
                              {selected_tenant_user.first_name} {selected_tenant_user.last_name}
                            </strong>
                          </span>
                        </p>
                        <p className="summary-content">
                          <span className="summary-text-name">מספר ת.ז.</span>&nbsp;
                          <span className="summary-text">
                            <strong>{selected_tenant_user.id_number}</strong>
                          </span>
                        </p>
                        <p className="summary-content">
                          <span className="summary-text-name">מספר טלפון</span>&nbsp;
                          <span className="summary-text">
                            <strong dir="ltr">{selected_tenant_user.phone}</strong>
                          </span>
                        </p>
                      </div>
                    }
              </div>
            </div>
            <div className="summary">
              <h2 className="summary-title">פרטי הסכם שכירות</h2>
              <p className="summary-content">
                <span className="summary-text-name">שכר הדירה המבוקש</span>&nbsp;
                <span className="summary-text">
                  <strong>{price}</strong>
                </span>
              </p>
              <p className="summary-content">
                <span className="summary-text-name">הסכם ההבטחה יכנס לתוקף מתאריך</span>&nbsp;
                <span className="summary-text">
                  <strong>{startDate}</strong>
                </span>
                &nbsp;
                <span className="summary-text-name">עד</span>&nbsp;
                <span className="summary-text">
                  <strong>{endDate}</strong>
                </span>
              </p>
            </div>
          </div>
          <footer className="summary-footer">
            <p className="monthly-rent">
              <span className="monthly-rent-value">2.5%</span> משכר הדירה החודשי
            </p>
            <p className="total-monthly">
              <span className="total-monthly-cardment">
                <strong>סה״כ תשלום חודשי:</strong>
              </span>
            </p>
            <p className="total-monthly">
              <span className="total-monthly-sum">
                <strong>{fee}</strong>
              </span>
              &nbsp;
              <span className="total-monthly-currency">
                <strong>ש״ח</strong>
              </span>
            </p>
          </footer>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    stepper: state.forms.stepper
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetStepper: action => {
      dispatch(stepper_toggle(action));
    }
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(SummaryBlock);

export default withConnect;
