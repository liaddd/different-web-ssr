import React, {Fragment} from 'react';

import './MyProfile.scss';
import MyProfileBlockOrder from './MyProfileOrder';

const MyProfileWithOrders = (props) => {
  return (
    <Fragment>
      <div className="myprofile-block">
        <div className="myprofile-block-orders">
          {props.contracts.map(contract => <MyProfileBlockOrder key={contract.id} contract={contract} lName={props.lName}
                                                                fName={props.fName}/>
          )}
        </div>
      </div>
    </Fragment>
  );

}

export default MyProfileWithOrders;