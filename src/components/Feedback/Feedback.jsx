import css from "./Feedback.module.css";
export default function Feedback({
  good,
  bad,
  neutral,
  totalFeedback,
  positiveFeedback,
  isActiveGood,
  isActiveBad,
  isActiveNeutral,
}) {
  return (
    <div className={css.feedbackSection}>
      <p className={isActiveGood ? css.feedback : css.feedbackChange}>
        Good: {good}
      </p>
      <p className={isActiveBad ? css.feedback : css.feedbackChange}>
        Bad: {bad}
      </p>
      <p className={isActiveNeutral ? css.feedback : css.feedbackChange}>
        Neutral: {neutral}
      </p>
      <p className={css.feedback}>Total: {totalFeedback}</p>
      <p className={css.feedback}>Positive: {positiveFeedback}%</p>
    </div>
  );
}
