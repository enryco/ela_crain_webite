import React, { Component } from 'react';
import Header from '../../components/coaching/Header';
import Footer from '../../components/Footer';
import WorkshopList from '../../components/coaching/WorkshopList';
import Testimonials from '../../components/coaching/Testimonials';
import PreviousEvents from '../../components/coaching/PreviousEvents';
import NewsletterForm from '../../components/NewsletterForm';
import _ from 'lodash';

import '../../styles/coaching/Coaching.css';

class CoachingRoute extends Component {
  render() {
    return (
      <div className="coaching-page">
        <Header showLayoutIcons={false} />
        <div className="container">
          {/* HERO */}
          <div className="coaching-hero-container">
            <div
              className="coaching-hero"
              dangerouslySetInnerHTML={{
                __html: _.get(this, 'props.coachingHome.content')
              }}
            />
          </div>

          {/* TESTIMONIALS */}
          <Testimonials reviews={this.props.reviews} />

          {/* EVENTS */}
          {this.props.events &&
            this.props.events.length > 0 && (
              <WorkshopList events={this.props.events} />
            )}

          {/* PREVIOUS EVENTS */}
          <PreviousEvents images={this.props.previousEvents} />

          {/* ABOUT */}
          <section className="about-section">
            <div className="left">
              <img
                src={_.get(this, 'props.about.fields.image')}
                alt="Ela Crain"
                className="portrait"
                width="100%"
              />
            </div>
            <div
              className="right"
              dangerouslySetInnerHTML={{
                __html: this.props.about.content
              }}
            />
          </section>

          {/* NEWSLETTER FORM */}
          <div className="form-wrapper">
            <NewsletterForm type="coaching" />
          </div>
        </div>
        <Footer type="coaching" />
      </div>
    );
  }
}

export default CoachingRoute;
