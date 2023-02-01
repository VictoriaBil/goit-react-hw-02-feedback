import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  StatTitle,
  StatItem,
  StatTotal,
  StatPositiv,
} from './Statistics.styled';

export function Statistics({ good, neutral, bad, total, positiveFeedback }) {
  return (
    <List>
      <StatTitle>Statistics:</StatTitle>
      <StatItem> Good: {good}</StatItem>
      <StatItem> Neutral: {neutral}</StatItem>
      <StatItem> Bad: {bad}</StatItem>
      <StatTotal> Total: {total} </StatTotal>
      <StatPositiv> Positive Feedback: {positiveFeedback}% </StatPositiv>
    </List>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
