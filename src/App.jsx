import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import Feedback from "./components/Feedback/Feedback";

//* FEEDBACK DEFAULT
const feedbackDefault = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  //* CLICK ON THE FEEDBACK BUTTON
  const [isActive, setActive] = useState({
    good: false,
    bad: false,
    neutral: false,
  });

  const [feedback, setFeedback] = useState(() => {
    //* LOCAL STORAGE
    const feedbackLs = localStorage.getItem("feedback");
    if (!feedbackLs) {
      return feedbackDefault;
    }
    const parseFeedback = JSON.parse(feedbackLs);
    return parseFeedback;
  });

  //* TOTAL FEEDBACK
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  //* PSITIVE FEEDBACK
  const positiveFeedback = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  //* UPDATE FEEDBACK
  const updateFeedback = (feedbackType) => {
    setActive((prevState) => ({
      ...prevState,
      [feedbackType]: !prevState[feedbackType],
    }));
    setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  //* RESET
  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className="container">
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          bad={feedback.bad}
          neutral={feedback.neutral}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
          isActiveGood={isActive.good}
          isActiveBad={isActive.bad}
          isActiveNeutral={isActive.neutral}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
