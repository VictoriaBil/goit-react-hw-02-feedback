import React from 'react';
import PropTypes from 'prop-types';

export function Statistics({ good, neutral, bad, total, positiveFeedback }) {
  return (
    <ul>
      Statistics:
      <li> Good: {good}</li>
      <li> Neutral: {neutral}</li>
      <li> Bad: {bad}</li>
      <li> Total: {total} </li>
      <li> Positive Feedback: {positiveFeedback}% </li>
    </ul>
  );
}

Statistics.PropTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
