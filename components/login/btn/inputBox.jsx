import styles from "./inputBox.module.scss";
const InputBox = ({ type, placeholder }) => {
  return (
    <input type={type} className={styles.inputBox} placeholder={placeholder} />
  );
};
export default InputBox;
