import React, { Component } from 'react';
import Header from '../../components/coaching/Header';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import _ from 'lodash';

class AboutRoute extends Component {
  render() {
    return (
      <div className="ec-about ec-about--coaching">
        <Header showLayoutIcons={false} />
        <div className="ec-about__container">
          <div className="ec-about__image-section">
            <div
              className="ec-about__image-wrapper"
              style={{
                backgroundImage: `url("${_.get(
                  this,
                  'props.podcast.fields.image'
                )}")`
              }}
            />
          </div>
          <div className="ec-about__text-section">
            {/* ABOUT SECTION  */}
            <div
              className="ec-about__right"
              dangerouslySetInnerHTML={{
                __html: _.get(this, 'props.podcast.content')
              }}
            />
          </div>
        </div>
        <Footer type="coaching" />
      </div>
    );
  }
}

export default AboutRoute;
