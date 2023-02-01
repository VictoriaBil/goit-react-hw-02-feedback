import React from 'react';
import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  const keys = Object.keys(options);
  return (
    <div>
      {keys.map(key => (
        <button type="button" key={key} name={key} onClick={onLeaveFeedback}>
          {key}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.PropTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
