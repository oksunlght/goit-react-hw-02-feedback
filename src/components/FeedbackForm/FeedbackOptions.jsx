import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FeedbackForm.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(item => (
      <Button key={item} type="button" name={item} onClick={onLeaveFeedback}>
        {item}
      </Button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.elementType.isRequired,
};
