import React from 'react';
import PropTypes from 'prop-types';

export function Section({ title }) {
  return (
    <section>
      <h1>{title}</h1>
    </section>
  );
}

Section.PropTypes = {
  title: PropTypes.string.isRequired,
};
