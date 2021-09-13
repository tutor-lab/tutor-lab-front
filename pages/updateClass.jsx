import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ChangeField,
  Initialize,
  NextStep,
  PrevStep,
} from "../redux/reducers/update";
import NewClass01 from "./newclass01";
import NewClass02 from "./newclass02";
import NewClass03 from "./newclass03";
import MyClass from "./myclass";

const NewClassForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ update }) => ({
    form: update,
  }));

  const step = form.update.step;
  const onChange = (name) => (e) => {
    //update values
    var value = name == "ckEditor" ? "" : e.target.value;
    switch (name) {
      case "maintitle":
      case "subheading":
      case "introduction":
        TextLimit(e);
        break;
      case "image":
        ImagePreview(e);
        break;
      case "language":
        const selected = radiobox();
        value = selected;
        break;
      case "languageInput":
        if (e.code == "Enter") {
          name = "language";
          hideModal();
        }
        break;
      case "online":
        value = form.update.online == "on" ? "off" : "on";
        break;
      case "offline":
        value = form.update.offline == "on" ? "off" : "on";
        break;
      case "personal":
        value = form.update.personal == "on" ? "off" : "on";
        break;
      case "group":
        value = form.update.group == "on" ? "off" : "on";
        break;
      case "ckEditor":
        //값을 어떻게 받아와야 할지.....???
        break;
      default:
        break;
    }

    dispatch(
      ChangeField({
        form: "update",
        key: name,
        value,
      })
    );
  };

  const Next = (e) => {
    //이전 페이지
    e.preventDefault();
    dispatch(NextStep());
  };

  const Prev = (e) => {
    //다음 페이지
    e.preventDefault();
    dispatch(PrevStep());
  };

  const [preview, setPreview] = useState({ selectedFile: [] });
  const ImagePreview = (e) => {
    //이미지 프리뷰
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64) {
        setPreview(base64.toString().split(",")[1]);
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const TextLimit = (e) => {
    //글자 수 제한
    if (e.target.value.length > 40) {
      e.target.value = e.target.value.slice(0, 40);
      alert("최대 40자까지 작성하실 수 있습니다.");
    }
  };

  const showModal = () => {
    //modal 보이게
    const menu = document.getElementById("menu");
    menu ? (menu.style.display = "block") : "";
  };

  const hideModal = () => {
    //modal 숨기기
    const menu = document.getElementById("menu");
    menu ? (menu.style.display = "none") : "";
  };

  const radiobox = () => {
    //체크한 라디오박스 구별
    const check = document.querySelector('input[name="modalElement"]:checked');
    const selected = check ? check.id.valueOf() : "";
    hideModal();
    return selected;
  };

  useEffect(() => {
    //페이지 initialize
    dispatch(Initialize("update"));
  }, [dispatch]);

  switch (step) {
    case 1:
      return (
        <NewClass01
          type="update"
          form={form}
          nextStep={Next}
          prevStep={Prev}
          handleChange={onChange}
          preview={preview}
        />
      );
    case 2:
      return (
        <NewClass02
          type="update"
          form={form}
          nextStep={Next}
          prevStep={Prev}
          handleChange={onChange}
          showModal={showModal}
        />
      );
    case 3:
      return (
        <NewClass03
          type="update"
          form={form}
          nextStep={Next}
          prevStep={Prev}
          handleChange={onChange}
        />
      );
    default:
      return <MyClass />;
  }
};

export default NewClassForm;
