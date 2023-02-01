import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer, Button } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  const keys = Object.keys(options);
  return (
    <ButtonContainer>
      {keys.map(key => (
        <Button type="button" key={key} name={key} onClick={onLeaveFeedback}>
          {key}
        </Button>
      ))}
    </ButtonContainer>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
