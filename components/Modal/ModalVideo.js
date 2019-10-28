import React, { Component, Fragment } from 'react';
import './Modal.scss';
import ClassName from "classnames";
import YouTubePlayer from 'react-player/lib/players/YouTube'

class ModalVideo extends Component {

  render() {
    
    return (
      <Fragment>
        <div className={ClassName("modal-block modal-effect-slide" ,{"modal-show": this.props.show})}>
            <div className="modal-overlay"></div>
                <div className="modal-video-content">
                        <div className="modal-header">
                            <div
                                className="modal-close modal-close-icon"
                                onClick={() => {
                                    this.props.onShowVideo(false);
                                }}
                            ></div>
                        </div>
                        <div className="modal-video-inner-content">    
                              <YouTubePlayer
                                url='https://www.youtube.com/watch?v=zQboCTOgW_4&t=8s'
                                controls
                                width='100%'
                                height='450px'
                                playing={this.props.show}
                                // Other ReactPlayer props will work here
                              />
                    </div>
              </div>    
        </div>
      </Fragment>
    );
  }
}
export default ModalVideo;
