import axios from "axios";
//테스트서버 주소
// axios.defaults.baseURL = "http://localhost:8081";
axios.defaults.baseURL = "http://3.35.255.192:8081";
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});
export const ClassReg = async (form) => {
  let level = "입문";
  switch (form.level) {
    case "입문":
      level = "BASIC";
      break;
    case "초급":
      level = "BEGINNER";
      break;
    case "중급":
      level = "INTERMEDIATE";
      break;
    case "고급":
      level = "ADVANCED";
      break;
    default:
      level = "BASIC";
  }

  let languageArray = [];
  form.language.map((e, i) => {
    var languageObject = new Object();
    languageObject.krSubject = form.language[i];
    languageObject.parent = 1;
    languageArray.push(languageObject);
  });

  let systemArray = [];
  if (form.online == "on") {
    systemArray.push("ONLINE");
  }
  if (form.offline == "on") {
    systemArray.push("OFFLINE");
  }

  const data = {
    content: form.content,
    difficulty: level,
    introduce: form.introduction,
    lecturePrices: [
      form.personal == "on"
        ? {
            //personal일 때
            groupNumber: 0, //그룹 수용가능 인원
            isGroup: false,
            pertimeCost: form.PpricePerHour, //시간당 비용
            pertimeLecture: form.PtimePerClass, //1회당 강의 시간
            totalCost:
              form.PpricePerHour * form.PnumOfTimes * form.PtimePerClass, //총 비용
            totalTime: form.PnumOfTimes * form.PtimePerClass, //총 강의 시간
          }
        : {
            //group일 때
            groupNumber: form.groupMax, //그룹 수용가능 인원
            isGroup: true,
            pertimeCost: form.GpricePerHour, //시간당 비용
            pertimeLecture: form.GtimePerClass, //1회당 강의 시간
            totalCost:
              form.GpricePerHour * form.GnumOfTimes * form.GtimePerClass, //총 비용
            totalTime: form.GnumOfTimes * form.GtimePerClass, //총 강의 시간
          },
    ],
    subTitle: form.subheading,
    subjects: languageArray,
    systems: systemArray,
    thumbnailUrl: form.image,
    title: form.maintitle,
  };
  await axios({
    method: "POST",
    url: "/lectures",
    data: data,
  })
    .then((response) => {
      const back = document.getElementById("uploadBack");
      const modal = document.getElementById("uploadModal");
      modal ? (modal.style.display = "block") : "";
      back ? (back.style.display = "block") : "";
      console.log(response);
      return response;
    })
    .catch((error) => {
      errormsg = error.response;
      return Promise.reject(errormsg);
    });
};
