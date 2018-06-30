import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Posts from './Posts';
import Post from './Post';
import Event from './Event';
import About from './About';
import Podcast from './Podcast';
import Coaching from './Coaching';

import '../../styles/Coaching.css';

class CoachingRoute extends Component {
  render() {
    return (
      <div className="coaching">
        <Route
          exact
          path="/coaching/events/:id"
          onUpdate={() => window.scrollTo(0, 0)}
          render={({ match }) => {
            return <Event events={this.props.events} match={match} />;
          }}
        />
        <Route
          exact
          path="/coaching/posts"
          render={() => <Posts posts={this.props.posts} />}
        />
        <Route
          exact
          path="/coaching/posts/:slug"
          render={({ match }) => {
            return <Post posts={this.props.posts} match={match} />;
          }}
        />
        <Route
          exact
          path="/coaching"
          render={() => (
            <Coaching
              events={this.props.events}
              previousEvents={this.props.previousEvents}
              about={this.props.about}
              coachingHome={this.props.coachingHome}
              reviews={this.props.reviews}
            />
          )}
        />
        <Route
          path="/coaching/about"
          render={() => (
            <About about={this.props.about} reviews={this.props.reviews} />
          )}
        />

        <Route
          path="/coaching/podcast"
          render={() => <Podcast podcast={this.props.podcast} />}
        />
      </div>
    );
  }
}

export default CoachingRoute;
