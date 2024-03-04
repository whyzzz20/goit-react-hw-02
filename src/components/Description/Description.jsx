import css from "./Description.module.css";
export default function Description() {
  return (
    <div className={css.descriptionSection}>
      <h1 className={css.coffeeShopTitle}>Sip Happens Café</h1>
      <p className={css.coffeeShopDescription}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
