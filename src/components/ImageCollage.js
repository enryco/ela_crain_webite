import React, { Component } from 'react';
// import ImageTop from '../images/bom-top.png'; // Tell Webpack this JS file uses this image
// import ImageMiddle from '../images/bom-middle.png'; // Tell Webpack this JS file uses this image
// import ImageBottom from '../images/bom-bottom.png'; // Tell Webpack this JS file uses this image
import ImageTop from '../images/ru-top.png'; // Tell Webpack this JS file uses this image
import ImageMiddle from '../images/ru-middle.png'; // Tell Webpack this JS file uses this image
import ImageBottom from '../images/ru-bottom.png'; // Tell Webpack this JS file uses this image
import '../styles/ImageCollage.css';

const CONSTS = {
  IMAGE_TOP: {
    INITIAL: {
      left: '44.5px',
      top: '25.5px'
    },
    FINAL: {
      left: '64.5px',
      top: '45.5px'
    }
  },
  IMAGE_MIDDLE: {
    INITIAL: {
      left: '332.5px',
      top: '127px'
    },
    FINAL: {
      left: '312.5px',
      top: '147px'
    }
  },
  IMAGE_BOTTOM: {
    INITIAL: {
      left: '115px',
      top: '264px'
    },
    FINAL: {
      left: '135px',
      top: '244px'
    }
  }
};

class ImageCollage extends Component {
  topImage = null;

  state = {
    // switch to initial for animation
    imageTopStyles: CONSTS.IMAGE_TOP.FINAL,
    imageMiddleStyles: CONSTS.IMAGE_MIDDLE.FINAL,
    imageBottomStyles: CONSTS.IMAGE_BOTTOM.FINAL
  };

  // componentDidMount() {
  //   console.log(`Top image ${this.topImage.style.top}`);
  //   window.setInterval(() => {
  //     if (this.state.imageTopStyles === CONSTS.IMAGE_TOP.INITIAL) {
  //       this.startAnimation();
  //     } else {
  //      // this.resetAnimation();
  //     }
  //   }, 500);
  // }

  startAnimation() {
    this.setState({
      imageTopStyles: CONSTS.IMAGE_TOP.FINAL,
      middleImageClasses: ['image-middle', 'final'],
      bottomImageClasses: ['image-bottom', 'final']
    });
  }

  resetAnimation() {
    this.setState({
      imageTopStyles: CONSTS.IMAGE_TOP.INITIAL,
      middleImageClasses: ['image-middle'],
      bottomImageClasses: ['image-bottom']
    });
  }

  render() {
    let { title } = this.props;

    return (
      <div className="collage-wrapper">
        <div className="background-title">
          {title}
        </div>

        <div className="image-collage">
          <div className="image-wrapper">
            <img
              ref={image => {
                this.topImage = image;
              }}
              src={ImageTop}
              alt={`${title}-top`}
              className="image-top"
              style={this.state.imageTopStyles}
            />
            <img
              src={ImageMiddle}
              alt={`${title}-middle`}
              className="image-middle"
              style={this.state.imageMiddleStyles}
            />
            <img
              src={ImageBottom}
              alt={`${title}-bottom`}
              className="image-bottom"
              style={this.state.imageBottomStyles}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCollage;