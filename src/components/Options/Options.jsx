import css from "./Options.module.css";
export default function Options({
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) {
  return (
    <div>
      <ul className={css.optionsFeedbackList}>
        <li>
          <button
            className={css.btnFeedback}
            type="button"
            value="good"
            onClick={() => updateFeedback("good")}
          >
            GOOD
          </button>
        </li>
        <li>
          <button
            className={css.btnFeedback}
            type="button"
            value="neutral"
            onClick={() => updateFeedback("neutral")}
          >
            NEUTRAL
          </button>
        </li>
        <li>
          <button
            className={css.btnFeedback}
            type="button"
            value="bad"
            onClick={() => updateFeedback("bad")}
          >
            BAD
          </button>
        </li>
        <li>
          <button
            className={totalFeedback > 0 ? css.btnFeedback : css.hidden}
            type="button"
            value="reset"
            onClick={resetFeedback}
          >
            RESET
          </button>
        </li>
      </ul>
    </div>
  );
}
