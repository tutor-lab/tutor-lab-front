import axios from "axios";
axios.defaults.baseURL = "http://3.35.255.192:8081";
//헤더 추가(토큰)
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

  await axios({
    method: "POST",
    url: "/lectures",
    data: {
      content: "string", //form.content
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
          : {},
        form.group == "on"
          ? {
              //group일 때
              groupNumber: form.groupMax, //그룹 수용가능 인원
              isGroup: true,
              pertimeCost: form.GpricePerHour, //시간당 비용
              pertimeLecture: form.GtimePerClass, //1회당 강의 시간
              totalCost:
                form.GpricePerHour * form.GnumOfTimes * form.GtimePerClass, //총 비용
              totalTime: form.GnumOfTimes * form.GtimePerClass, //총 강의 시간
            }
          : {},
      ],
      subTitle: form.subheading,
      subjects: [
        {
          enSubject: form.language, //???
          krSubject: form.language, //???
          parent: "1",
        },
      ],
      systems: [
        form.online == "on" ? "ONLINE" : "",
        form.offline == "on" ? "OFFLINE" : "",
      ],
      thumbnailUrl: form.image,
      title: form.maintitle,
    },
  })
    .then((response) => {
      console.log(data);
      console.log(response);
      return response;
    })
    .catch((error) => {
      errormsg = error.response;
      return Promise.reject(errormsg);
    });
};
