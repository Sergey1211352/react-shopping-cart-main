const StarButton = () => (
  <div className="star-button-container">
    <p>
      <small>Put an asterisk on Github if you like the project :)</small>
    </p>
    <a
      className="github-button"
      href="https://github.com/Sergey1211352/react-shopping-cart-main"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star Sergey1211352/react-shopping-cart-main on GitHub"
      tabIndex={-1}
    >
      Star
    </a>
  </div>
);

export default StarButton;
