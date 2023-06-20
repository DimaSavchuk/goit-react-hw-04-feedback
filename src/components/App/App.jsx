import React, { useState } from 'react';

import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';

const App = () => {
  const [good, setGood] = useState(0);

  const [neutral, setNeutral] = useState(0);

  const [bad, setBad] = useState(0);

  const onFeedbackClick = button => {
    if (button === 'good') {
      setGood(prevGood => prevGood + 1);
    } else if (button === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (button === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (totalFeedback > 0) {
      return Math.round((good / totalFeedback) * 100);
    }
    return 0;
  };

  const buttons = ['good', 'neutral', 'bad'];

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions buttons={buttons} onFeedbackClick={onFeedbackClick} />
      </Section>

      <Section>
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positive={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default App;
