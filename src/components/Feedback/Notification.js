import React from 'react';
import PropTypes from 'prop-types';

export function Notification({ message }) {
  return <span> {message} </span>;
}

Notification.PropTypes = {
  message: PropTypes.string.isRequired,
};
