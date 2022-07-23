import "./button-link.styles.scss";

const ButtonLink = ({ styleClassName, href, buttonText, ...otherProps }) => {
  return (
    <>
      <a className={styleClassName} href={href} {...otherProps}>
        {buttonText}
      </a>
    </>
  );
};

export default ButtonLink;
