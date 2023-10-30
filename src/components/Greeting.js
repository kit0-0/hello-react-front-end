import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRandomGreeting } from '../redux/actions';

const Greeting = ({ greeting, fetchRandomGreeting }) => {
  useEffect(() => {
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    greeting: state.greeting,
  };
};

export default connect(mapStateToProps, { fetchRandomGreeting })(Greeting);
