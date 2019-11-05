import React, { Component, Fragment } from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { get } from "lodash";
import "./../PriceForm/PriceForm.scss";
import UserActions from "../../actions/users/users.actions";
import { stepper } from "../../actions/forms/forms.actions";
import Link from "next/link";

class ModalButtonsBlock extends Component {
  state = {
    step4: false
  };

  // componentWillUpdate(nextProps, nextState) {
  //     const creditPrev= get(this.props,'user.credit',false)
  //   const credisNext =get(nextProps,'user.credit',false)
  //   if(creditPrev!==credisNext){
  //     this.setState({step4:credisNext})
  //   }
  // }

  userRender = (user, i) => {
    return (
      <button
        type="button"
        key={i}
        disabled={!user.exist_tenant_id}
        className={cn("buttons-block-button", {
          "buttons-block-button-active": this.state.idUser === user.id_number
        })}
        onClick={e => {
          this.setState({
            step4: true,
            idUser: user.id_number,
            selectedTentant: user
          });
        }}
      >
        {user.last_name} {user.first_name}
      </button>
    );
  };

  render() {
    return (
      <Fragment>
        <div className="buttons-block">
          <div className="modal-title buttons-block-title buttons-block-lines">
            או
          </div>
          <p className="modal-text">
            <strong>בחר את הדייר איתו תרצה לחתום על הסכם שכירות</strong>
          </p>
          <nav className="buttons-block-nav">
            {this.props.users &&
              this.props.users.map((user, i) => this.userRender(user, i))}
          </nav>
          <div className="btn-block">
            <Link href={"/personal-info/step4"}>
              <button
                disabled={!this.state.step4}
                className={cn("btn btn-small", {
                  "btn-blue": this.state.step4,
                  "btn-grey": !this.state.step4
                })}
                onClick={() => {
                  if (this.state.step4) {
                    if (this.state.selectedTentant) {
                      this.props.onSetUserData({
                        selected_tenant_user: this.state.selectedTentant
                      });
                    }
                    this.props.onSetStepper({
                      activeStep: 4,
                      step3: {
                        edit: true
                      }
                    });
                  }
                }}
              >
                המשך לסיום התהליך
              </button>
            </Link>
          </div>
        </div>
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
      dispatch(stepper(action));
    },
    onSetUserData: action => {
      dispatch(UserActions.setUserData(action));
    }
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalButtonsBlock);

export default withConnect;
