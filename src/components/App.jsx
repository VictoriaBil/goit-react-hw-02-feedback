import { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Feedback/Statistics';
import { Section } from './Feedback/Section';
import { Notification } from './Feedback/Notification';
import { Container } from './App.styled';

class App extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  // handleFeedback = event => {
  //   if (event === 'good') {
  //     this.setState(prevState => ({
  //       good: prevState.good + 1,
  //     }));
  //   } else if (event === 'neutral') {
  //     this.setState(prevState => ({
  //       neutral: prevState.neutral + 1,
  //     }));
  //   } else if (event === 'bad') {
  //     this.setState(prevState => ({
  //       bad: prevState.bad + 1,
  //     }));
  //   }
  // };

  onLeaveFeedback = evt => {
    const name = evt.target.getAttribute('name');
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { Good, Neutral, Bad } = this.state;
    let total = 0;
    total = Good + Neutral + Bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let positiveFeedback = 0;
    if (this.state.Good === 0) {
      positiveFeedback = 0;
    } else
      positiveFeedback = Math.round(
        (this.state.Good / this.countTotalFeedback()) * 100
      );
    return positiveFeedback;
  };

  render() {
    return (
      <Container>
        {/* <p>Please, leave feedback</p>
        <div>
          <button type="button" onClick={this.handleFeedback}>
            Good
          </button>
          <button type="button" onClick={this.handleFeedback}>
            Neutral
          </button>
          <button type="button" onClick={this.handleFeedback}>
            Bad
          </button>
        </div> */}
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            className="isVisible"
            good={this.state.Good}
            neutral={this.state.Neutral}
            bad={this.state.Bad}
            total={this.countTotalFeedback()}
            positiveFeedback={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Container>
    );
  }
}

export default App;
