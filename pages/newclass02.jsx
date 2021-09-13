import {useState} from 'react'
import styles from "../styles/newclass02.module.scss";
import BottomTab from "./bottomtab";
import Image from "next/image";
import { CKEditor } from "ckeditor4-react"; //Ckeditor4 사용
import EditorComponent from "../components/quillEditor/EditorComponent";

// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// class CKEDITOR -> getData (문제: CKEDITOR가 유효하지 않음...)
const NewClass02 = ({ form, nextStep, prevStep, handleChange, showModal }) => {

  const [picture, setPicture] = useState('');
  function onEditorChange(value) {
    setPicture(value)
  }
  
  return (
    <>
      <section className={styles.whitesection}>
        <span className={styles.prev} onClick={prevStep}>
          <Image
            src="/images/prev.png"
            alt="강의 등록 1단계로"
            width="10px"
            height="14px"
          ></Image>
        </span>
        <h1 className={styles.title}>강의 등록</h1>
        <span className={styles.category}>
          <h2 className={styles.unselected}>1단계</h2>
          <h2 className={styles.selected}>2단계</h2>
          <h2 className={styles.unselected}>3단계</h2>
        </span>
      </section>

      <section className={styles.graysection}>
        <div>
          <h3 className={styles.question}>1. 강의 종류를 선택해주세요.</h3>
          <div className={styles.selects}>
            <span
              className={styles.selectBtn}
              onClick={handleChange("classtype")}
            >
              <span className={styles.selector}>강의 종류</span>
              <span className={styles.elements}>개발</span>
            </span>
            {/* 아직 카테고리가 개발밖에 없어서 button이 아닌 span으로 처리! */}
            <button className={styles.selectBtn} id="btn" onClick={showModal}>
              <span className={styles.selector}>언어</span>
              <span className={styles.elements} id="result">
                {form.update.language} {/*뒤로가기해도 데이터 유지되도록*/}
              </span>
            </button>
          </div>

          <div className={styles.modal} id="menu">
            <label htmlFor="Java">
              <div
                className={styles.modalElement}
                onClick={handleChange("language")}
              >
                <input type="radio" name="modalElement" id="Java"></input>
                Java
              </div>
            </label>

            <label htmlFor="JavaScript">
              <div
                className={styles.modalElement}
                onClick={handleChange("language")}
              >
                <input type="radio" name="modalElement" id="JavaScript"></input>
                JavaScript
              </div>
            </label>

            <label htmlFor="Python">
              <div
                className={styles.modalElement}
                onClick={handleChange("language")}
              >
                <input type="radio" name="modalElement" id="Python"></input>
                Python
              </div>
            </label>

            <label htmlFor="R">
              <div
                className={styles.modalElement}
                onClick={handleChange("language")}
              >
                <input type="radio" name="modalElement" id="R"></input>R
              </div>
            </label>

            <label htmlFor="SQL">
              <div
                className={styles.modalElement}
                onClick={handleChange("language")}
              >
                <input type="radio" name="modalElement" id="SQL"></input>
                SQL
              </div>
            </label>

            <input
              type="text"
              placeholder="직접 입력하기"
              className={styles.modalInput}
              onKeyPress={handleChange("languageInput")}
              id="modalInput"
            ></input>
          </div>
        </div>

        <div>
          <h3 className={styles.question}>
            2. 강의 상세 내용 및 이미지를 등록해주세요.
          </h3>
          <ul className={styles.example}>
            <li>튜터 간략 소개</li>
            <li>커리큘럼</li>
            <li>강의 예시화면 - gif 등록 가능(00mb 이하)</li>
          </ul>
        </div>

        <div className={styles.quillEditorScroll}>
          {/*ckeditor4 사용 시*/}
          {/* <CKEditor
            type="classic"
            config={{
              filebrowserUploadUrl: "/upload.do?type=Files",
              filebrowserImageUploadUrl: "/upload.do?type=Images",
              filebrowserUploadMethod: "form",
            }}
            onChange={handleChange("ckEditor")}
          /> */}
          <EditorComponent value={picture} onChange={onEditorChange}/>
        </div>
        {/* //<resources location="/WEB-INF/views/ckeditor/" mapping="/ckeditor/**"></resources>을 servlet-context.xml에 추가
             -> 이미지를 서버로 전송 시 404 에러 발생... 위 코드로 해결 가능?
         */}
        {/* <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log(data);
          }}
        /> 
        -> ckeditor5 사용 시*/}
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
export default NewClass02;
