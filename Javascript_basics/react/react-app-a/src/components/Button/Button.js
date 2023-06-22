import styles from "./Button.module.css";

const Button = ({
  color,
  name,
  bg,
  borderRadius,
  fontSize,
  icon,
  submitHandler,
}) => {
  return (
    <div>
      <button
        onClick={(e) => submitHandler(e)}
        style={{
          color: color ? color : "blue",
          backgroundColor: bg ? bg : "black",
          borderRadius: borderRadius ? borderRadius : "none",
          fontSize: fontSize ? fontSize : "14px",
        }}
        className={styles.button}
      >
        {name} {icon}
      </button>
    </div>
  );
};

export default Button;
