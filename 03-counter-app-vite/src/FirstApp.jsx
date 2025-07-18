import PropTypes from "prop-types";

export default function FirstApp({ title, subtitle }) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>This is a paragraph</p>
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number,
};

FirstApp.defaultProps = {
  subtitle: 123,
};
