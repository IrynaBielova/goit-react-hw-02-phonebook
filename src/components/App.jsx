import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions'
import { Statistics } from './Statistics';
import { Notification } from './Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedback = () => {
    const { good } = this.state;
    return Math.floor((good / this.countTotalFeedback()) * 100);
  };

  onLeaveFeedback = name => {
    this.setState(state => ({
      [name]: state[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positiveFeedback = this.countPositiveFeedback();
    
    return(
      <div
      style={{
        width: "320px",
        margin: "7px",
        marginRight: "auto",
        marginLeft: "auto",
        textAlign: "center",
        paddingTop: "6px",
        paddingBottom: "6px",
        cursor: "pointer",
        border: "none",
        borderRadius: "4px",
        boxShadow: "0px 0px 5px 2px rgba(174,183,227,1)",
    }}>     
        <h2
        style={{color: "rgba(174,183,227,1)",
      }}>Please leave feedback</h2>

        <FeedbackOptions 
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />

        <h2
        style={{color: "rgba(174,183,227,1)",
      }}>Statistics</h2>

            {!total 
            ? (<Notification message={`There is no feedback`} />)
            : (<>
                <Statistics text={`Good:`} value={good} />
                <Statistics text={`Neutral:`} value={neutral} />
                <Statistics text={`Bad:`} value={bad} />
                <Statistics text={`Total:`} value={total} />
                <Statistics text={`Positive feedback, % :`} value={positiveFeedback}/>
              </>)}
      </div>
    )
  }
}  