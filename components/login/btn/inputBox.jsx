import styles from "./inputBox.module.scss";
const InputBox = ({ type, placeholder, onChange, value }) => {
  return (
    <input
      type={type}
      className={styles.inputBox}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
export default InputBox;
