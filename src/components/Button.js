function Button({ buttonClass, buttonText, clickFunction }) {
  return (
    <button className={buttonClass ? buttonClass : ""} onClick={clickFunction ? clickFunction : null}>
      {buttonText}
    </button>
  );
}

export default Button;
