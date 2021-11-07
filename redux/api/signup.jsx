import axios from "axios";
export const SignUp = async (form) => {
  let gender = "";
  if (form.gender == "남") {
    gender = "MALE";
  } else if (form.gender == "여") {
    gender = "FEMALE";
  }
  const data = {
    bio: form.bio,
    email: form.email,
    gender: gender,
    name: form.name,
    nickname: form.name,
    password: form.password,
    passwordConfirm: form.passwordConfirm,
    phoneNumber: form.phoneNumber,
    username: form.email,
    zone: `${form.stateL} ${form.stateM} ${form.stateS}`,
  };

  // const data = {
  //   bio: "안녕하세요",
  //   email: form.email,
  //   gender: "여",
  //   name: "김지수",
  //   nickname: "김지수",
  //   password: 123456,
  //   passwordConfirm: 123456,
  //   phoneNumber: "010-2222-2222",
  //   username: form.email,
  //   zone: "경기도 남양주시 다산동",
  // };

  await axios({
    method: "POST",
    url: "/sign-up",
    data: data,
  })
    .then((response) => {
      if (response.data.code == 201) {
      }
      console.log("response: " + JSON.stringify(response));
      return response;
    })
    .catch((error) => {
      console.log("에러" + error.response.data.message);

      return Promise.reject(error.response.data.message);
    });
};
