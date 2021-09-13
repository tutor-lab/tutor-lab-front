import Image from "next/image";
import styles from "../styles/newclass01.module.scss";
import BottomTab from "./bottomtab";

const NewClass01 = ({ form, nextStep, prevStep, handleChange, preview }) => {
  return (
    <>
      <section className={styles.whitesection}>
        <span className={styles.prev} onClick={prevStep}>
          <Image
            src="/images/prev.png"
            alt="메인 화면으로"
            width="10px"
            height="14px"
          ></Image>
        </span>
        <h1 className={styles.title}>강의 등록</h1>
        <span className={styles.category}>
          <h2 className={styles.selected}>1단계</h2>
          <h2 className={styles.unselected}>2단계</h2>
          <h2 className={styles.unselected}>3단계</h2>
        </span>
      </section>

      <section className={styles.graysection}>
        <div>
          <h3 className={styles.question}>
            1. 강의 소개 메인 이미지를 등록해주세요.
          </h3>
          <label htmlFor="classImg">
            {
              preview.selectedFile ? (
                <div className={styles.add}>
                  <div className={styles.pluspic}>
                    <Image
                      src="/images/plus.png"
                      width="16px"
                      height="16px"
                      alt="강의 대표 이미지를 추가하세요"
                    />
                  </div>
                  <p className={styles.placeholdertext}>
                    가로:00px 세로:00px(00바이트 이내)
                  </p>
                </div>
              ) : form.update.image ? (
                <div className={styles.add2}>
                  <Image
                    width="141px"
                    height="141px"
                    src={`data:image/png;base64,${preview}`}
                    alt="강의 대표 이미지"
                  />
                </div>
              ) : (
                <div className={styles.add}>
                  <div className={styles.pluspic}>
                    <Image
                      src="/images/plus.png"
                      width="16px"
                      height="16px"
                      alt="강의 대표 이미지를 추가하세요"
                    />
                  </div>
                  <p className={styles.placeholdertext}>
                    가로:00px 세로:00px(00바이트 이내)
                  </p>
                </div>
              )
              //이렇게 나누지 않고 preview.selectedFile&&!form.update.image?를 사용하면 업로드하는 시간 때문에 net:ERR_INVALID_URL 발생...
              //수정 필요
              //미리보기 이미지 사이즈+스타일 조정 필요...
            }
            <input
              type="file"
              id="classImg"
              onChange={handleChange("image")}
            ></input>
          </label>
        </div>

        <div>
          <h3 className={styles.question}>2. 강의 타이틀을 입력해주세요.</h3>
          <textarea
            placeholder="최대 40자"
            className={styles.inputBox}
            onChange={handleChange("maintitle")}
            value={form.update.maintitle} /*뒤로 가도 데이터 유지되도록*/
          />
          <p className={styles.example}>
            ex) 금융권 취업을 위한 데이터 분석 및 모델링
          </p>
        </div>

        <div>
          <h3 className={styles.question}>3. 강의 소제목을 입력해주세요.</h3>
          <textarea
            placeholder="최대 40자"
            className={styles.inputBox}
            onChange={handleChange("subheading")}
            value={form.update.subheading}
          ></textarea>
          <p className={styles.example}>
            ex) 빅데이터 플랫폼 구축,실무 경험 그대로
          </p>
        </div>

        <div>
          <h3 className={styles.question}>4. 간략하게 나를 설명해주세요.</h3>
          <textarea
            placeholder="최대 40자"
            className={styles.inputBox}
            onChange={handleChange("introduction")}
            value={form.update.introduction}
          ></textarea>
          <p className={styles.example}>
            ex) 삼성전자 10년 근무,sw 개발 및 품질 경력
          </p>
        </div>
      </section>

      <section className={styles.bottom}>
        <button type="button" className={styles.next} onClick={nextStep}>
          다음
        </button>
        <div className={styles.fixedTab}>
          <BottomTab />
        </div>
      </section>
    </>
  );
};
export default NewClass01;
