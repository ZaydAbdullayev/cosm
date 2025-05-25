import "./index.scss";

export const Button = ({ text, onClick, className = "", ...props }) => {
  return (
    <button className={`button cp ${className}`} onClick={onClick} {...props}>
      {text}
      <div id="clip">
        <div id="leftTop" class="corner"></div>
        <div id="rightBottom" class="corner"></div>
        <div id="rightTop" class="corner"></div>
        <div id="leftBottom" class="corner"></div>
      </div>
      <span id="rightArrow" class="arrow"></span>
      <span id="leftArrow" class="arrow"></span>
    </button>
  );
};
