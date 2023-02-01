import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export function Section({ title }) {
  return (
    <Title>
      <h1>{title}</h1>
    </Title>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
