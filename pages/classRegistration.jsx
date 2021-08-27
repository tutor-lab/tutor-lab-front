import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ChangeField,
  Initialize,
  NextStep,
  PrevStep,
  MoveStep,
  ClassUpdate,
  AddClass,
  DeleteClass,
  InputClass,
} from "../redux/reducers/update";
import MyClass from "./myclass";
import Step01 from "../components/classRegistration/step/step01";
import Step02 from "../components/classRegistration/step/step02";
import Step03 from "../components/classRegistration/step/step03";
import axios from "axios";

const ClassRegistration = () => {
  const [preview, setPreview] = useState("");
  const [currentI, setCurrentI] = useState(0);
  const dispatch = useDispatch();
  const { form } = useSelector(({ update }) => ({
    form: update.update,
  }));
  const step = form.step;

  const onChange = (name) => async (e) => {
    let value = e.target.value;
    switch (name) {
      case "maintitle":
        TextLimit(e, 40);
        value = e.target.value;
        break;
      case "subheading":
      case "introduction":
        TextLimit(e, 25);
        value = e.target.value;
        break;
      case "language":
        const selected = radiobox(1);
        value = selected;
        break;
      case "languageInput":
        if (e.code == "Enter") {
          name = "language";
          hideModal();
        }
        break;
      case "level":
        const level = radiobox(2);
        value = level;
        break;
      case "online":
        value = form.online == "on" ? "off" : "on";
        break;
      case "offline":
        value = form.offline == "on" ? "off" : "on";
        break;
      case "discuss":
        value = form.discuss == "on" ? "off" : "on";
        break;
      case "personal":
        value = form.personal == "on" ? "off" : "on";
        break;
      case "group":
        value = form.group == "on" ? "off" : "on";
        break;
      default:
        break;
    }
    if (name == "language") {
      dispatch(
        InputClass({
          form: "update",
          key: name,
          index: currentI,
          value: value,
        })
      );
    } else {
      dispatch(
        ChangeField({
          form: "update",
          key: name,
          value,
        })
      );
    }
  };

  const AddingClass = () => {
    dispatch(
      AddClass({
        form: "update",
        key: "language",
      })
    );
  };

  const DeletingClass = (i) => {
    dispatch(
      DeleteClass({
        form: "update",
        key: "language",
        index: i,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(ClassUpdate(form));
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

  const RandomMove = (step) => {
    //1,2,3단계 버튼 눌렀을 때 페이지 이동하도록
    dispatch(MoveStep(step));
  };

  const TextLimit = (e, limit) => {
    //글자 수 제한
    if (e.target.value.length > limit) {
      alert(`최대 ${limit}자까지 작성하실 수 있습니다.`);
      e.target.value = e.target.value.substring(0, limit);
    }
  };
  const Close = () => {
    //focus 빗나갔을 때 modal 닫히도록
    const background = document.getElementById("LanBackground");
    window.addEventListener("click", (e) => {
      e.target === background ? hideModal() : false;
    });
  };

  const showModal = (i) => {
    //modal 보이게
    const menu = document.getElementById("menu");
    menu ? (menu.style.display = "block") : "";
    const back = document.getElementById("LanBackground");
    back ? (back.style.display = "block") : "";
    const modal = document.getElementById("languageModal");
    modal ? (modal.style.display = "block") : "";
    setCurrentI(i);
  };

  const hideModal = () => {
    //modal 숨기기
    const menu = document.getElementById("menu");
    menu ? (menu.style.display = "none") : "";
    const back = document.getElementById("LanBackground");
    back ? (back.style.display = "none") : "";
    const modal = document.getElementById("languageModal");
    modal ? (modal.style.display = "none") : "";
  };

  const showLevel = () => {
    const level = document.getElementById("level");
    level ? (level.style.display = "block") : "";
    const back = document.getElementById("LevBackground");
    back ? (back.style.display = "block") : "";
    const modal = document.getElementById("levelModal");
    modal ? (modal.style.display = "block") : "";
  };

  const hideLevel = () => {
    const level = document.getElementById("level");
    level ? (level.style.display = "none") : "";
    const back = document.getElementById("LevBackground");
    back ? (back.style.display = "none") : "";
    const modal = document.getElementById("levelModal");
    modal ? (modal.style.display = "none") : "";
  };

  const showGray = () => {
    const menu = document.getElementById("modal");
    menu ? (menu.style.display = "block") : "";
    const back = document.getElementById("goBackModal");
    back ? (back.style.display = "block") : "";
    const gray = document.getElementById("grayOne");
    gray ? (gray.style.display = "block") : "";
  };

  const hideGray = () => {
    const menu = document.getElementById("modal");
    menu ? (menu.style.display = "none") : "";
    const back = document.getElementById("goBackModal");
    back ? (back.style.display = "none") : "";
    const gray = document.getElementById("grayOne");
    gray ? (gray.style.display = "none") : "";
  };

  const radiobox = (num) => {
    //체크한 라디오박스 구별
    const check =
      num == 1
        ? document.querySelector('input[name="modalElement"]:checked')
        : document.querySelector('input[name="levelElement"]:checked');
    const selected = check ? check.id.valueOf() : "";
    num == 1 ? hideModal() : hideLevel();
    return selected;
  };

  useEffect(() => {
    //페이지 initialize
    dispatch(Initialize("update"));
  }, [dispatch]);

  switch (step) {
    case 0:
      return (
        <Step03
          type="update"
          form={form}
          prevStep={Prev}
          handleChange={onChange}
          handleSubmit={onSubmit}
          MoveStep={RandomMove}
        />
      );
    case 1:
      return (
        <Step01
          type="update"
          form={form}
          nextStep={Next}
          handleChange={onChange}
          showGray={showGray}
          hideGray={hideGray}
          MoveStep={RandomMove}
        />
      );
    case 2:
      return (
        <Step02
          type="update"
          form={form}
          nextStep={Next}
          prevStep={Prev}
          handleChange={onChange}
          showModal={showModal}
          showLevel={showLevel}
          MoveStep={RandomMove}
          Close={Close}
          AddingClass={AddingClass}
          DeletingClass={DeletingClass}
        />
      );
    case 3:
      return (
        <Step03
          type="update"
          form={form}
          prevStep={Prev}
          handleChange={onChange}
          handleSubmit={onSubmit}
          MoveStep={RandomMove}
        />
      );

    default:
      return <MyClass />;
  }
};

export default ClassRegistration;
