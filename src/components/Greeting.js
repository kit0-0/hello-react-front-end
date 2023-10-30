import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRandomGreeting from '../redux/actions';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting, loading, error } = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error fetching greeting:
        {' '}
        {error.message}
      </div>
    );
  }

  let greetingContent;

  if (typeof greeting === 'string') {
    greetingContent = greeting;
  } else if (typeof greeting === 'object' && greeting !== null && 'greeting' in greeting) {
    greetingContent = greeting.greeting;
  } else {
    greetingContent = 'Invalid greeting format.';
  }

  return (
    <div>
      <h1>{greetingContent}</h1>
    </div>
  );
};

export default Greeting;
