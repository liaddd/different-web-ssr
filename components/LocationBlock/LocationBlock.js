import React, {Component, Fragment} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

import './LocationBlock.scss';

class LocationBlock extends Component {
    render() {
        return (
            <Fragment>
                <section className="section section-location">
                    <div className="container-full">
                        <h2 className="section-small-heading section-heading-line">
                            אנחנו על המפה
                        </h2>
                        <div className="location-block">
                            <Map google={this.props.google}
                                 style={{width: '100%', height: '100%', position: 'relative'}}
                                 className={'map'}
                                 initialCenter={{
                                   lat:32.084000, lng: 34.788347
                                 }}
                                 zoom={16}>
                                <Marker
                                    title={'DiffeRent'}
                                    name={'DiffeRent'}
                                    position={{lat:32.084431, lng: 34.786971}}
                                />
                            </Map>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(LocationBlock);
// export default LocationBlock