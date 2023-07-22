import React, { Component } from 'react';
import { Statistics } from './FeedbackForm/Statistics';
import { Section } from './FeedbackForm/Section';
import { FeedbackOptions } from './FeedbackForm/FeedbackOptions';
import { Notification } from './FeedbackForm/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const option = e.currentTarget.name;

    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const feedbackValues = Object.values(this.state);

    const totalFeedbackNumber = feedbackValues.reduce((prevValue, number) => {
      return prevValue + number;
    }, 0);

    return totalFeedbackNumber;
  };

  countPositiveFeedbackPercentage = (totalNumber, goodNumber) => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    } else {
      return Math.round((goodNumber * 100) / totalNumber);
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      state,
      onLeaveFeedback,
      countPositiveFeedbackPercentage,
      countTotalFeedback,
    } = this;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage(
                countTotalFeedback(),
                good
              )}
            />
          </Section>
        )}
      </>
    );
  }
}

export default App;
