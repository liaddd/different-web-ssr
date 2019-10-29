import React, { Component, Fragment } from "react";
import PageHeaderHome from "./../PageHeaderHome/PageHeaderHome";
import LinkBlock from "./../LinkBlock/LinkBlock";
import WeDoBlock from "./../WeDoBlock/WeDoBlock";
import WhyBlock from "./../WhyBlock/WhyBlock";
import PriceBlock from "./../PriceBlock/PriceBlock";
import ModalHome from "./../Modal/ModalHome";
import ModalSubscribe from "./../Modal/ModalSubscribe";
import StarModal from "./../Modal/StarModal";
import ModalVideo from "./../Modal/ModalVideo";
class MainPage extends Component {
  state = {
    showModalHome: false,
    showModalSubscribe: false,
    showStarModal: false,
    showVideoModal: false
  };

  onShowPopup = showModalHome => {
    this.setState({ showModalHome });
  };
  onSowSubscibe = showModalSubscribe => {
    this.setState({ showModalSubscribe });
  };
  onShowStar = showStarModal => {
    this.setState({ showStarModal });
  };
  onShowVideo = showVideoModal => {
    this.setState({ showVideoModal });
  };

  render() {
    return (
      <Fragment>
        <PageHeaderHome
          onShowPopup={this.onShowPopup}
          onSowSubscibe={this.onSowSubscibe}
          onShowVideo={this.onShowVideo}
        />
        <ModalVideo
          show={this.state.showVideoModal}
          onShowVideo={this.onShowVideo}
        />
        <LinkBlock />
        <WeDoBlock />
        <PriceBlock />
        <WhyBlock />
        <ModalHome
          show={this.state.showModalHome}
          onShowPopup={this.onShowPopup}
        />
        <ModalSubscribe
          show={this.state.showModalSubscribe}
          onShowPopup={this.onSowSubscibe}
        />
        <StarModal
          show={this.state.showStarModal}
          onShowPopup={this.onShowStar}
        />
      </Fragment>
    );
  }
}

export default MainPage;
