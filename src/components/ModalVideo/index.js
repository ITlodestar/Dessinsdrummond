import React from "react";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/css/modal-video.css";

class VideoModal extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={this.props.videoId}
          onClose={() => this.setState({ isOpen: false })}
        />
        <button
          className="video video-popup mfp-iframe"
          onClick={this.openModal}
        >
          <i className="fas fa-play"></i>
        </button>
      </div>
    );
  }
}

export default VideoModal;
