import { useEffect } from "react";
import styles from "./selectBox.module.scss";
const year = [];
for (let i = 2002; i >= 1921; i--) {
  year.push(i);
}

const Selection = ({ title, opt, setValue }) => {
  return (
    <section className={styles.selectBox}>
      <span className={styles.title}>{title}</span>
      <select
        className={styles.sel}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        {opt == 1 ? (
          <>
            <option value="M" className={styles.option}>
              남자
            </option>
            <option value="F" className={styles.option}>
              여자
            </option>
          </>
        ) : (
          <>
            {year.map((data, i) => {
              return (
                <option value={data} className={styles.option} key={i}>
                  {data}
                </option>
              );
            })}
          </>
        )}
      </select>
    </section>
  );
};

const SelectionWithoutTitle = ({ opt, name, onChange, onChange2, form }) => {
  return (
    <section className={styles.selectBox2}>
      <select className={styles.sel} name={name} id={name} onChange={onChange}>
        {opt == 1 ? (
          <>
            <option
              value="M"
              className={styles.option}
              selected={form.gender == "M" ? true : false}
            >
              남자
            </option>
            <option
              value="F"
              className={styles.option}
              selected={form.gender == "F" ? true : false}
            >
              여자
            </option>
          </>
        ) : (
          <>
            {year.map((data, i) => {
              return (
                <option
                  value={data}
                  className={styles.option}
                  key={i}
                  selected={form.birthYear == data ? true : false}
                >
                  {data}
                </option>
              );
            })}
          </>
        )}
      </select>
      {opt == 1 ? (
        <div className={styles.checkSec}>
          <input
            type="checkbox"
            id="genderCheck"
            name="genderCheck"
            onChange={onChange2}
            checked={form.genderCheck}
          />
          <label htmlFor="genderCheck" className={styles.check}>
            <span>성별 선택 안 함</span>
          </label>
        </div>
      ) : (
        <div className={styles.checkSec}>
          <input
            type="checkbox"
            id="birthCheck"
            name="birthCheck"
            onChange={onChange2}
            checked={form.birthCheck}
          />
          <label htmlFor="birthCheck" className={styles.check}>
            <span>출생년도 선택 안 함</span>
          </label>
        </div>
      )}
    </section>
  );
};
export { Selection, SelectionWithoutTitle };
