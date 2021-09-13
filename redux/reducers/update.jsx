import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const INITIALIZE = "newclass/INITIALIZE";
const CHANGE_FIELD = "newclass/CHANGE_FIELD";
const NEXT_STEP = "newclass/NEXT_STEP";
const PREV_STEP = "newclass/PREV_STEP";

export const Initialize = createAction(INITIALIZE);
export const ChangeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value })
);
export const NextStep = createAction(NEXT_STEP, (form) => form);
export const PrevStep = createAction(PREV_STEP, (form) => form);

const initialState = {
  update: {
    step: 1,
    image: "",
    maintitle: "",
    subheading: "",
    introduction: "",
    classtype: "개발",
    language: "Java",
    ckEditor: "",
    pricePerHour: 0,
    timePerClass: 0,
    numOfTimes: 0,
    online: "off",
    offline: "off",
    personal: "off",
    group: "off",
  },
};

const Update = handleActions(
  {
    [INITIALIZE]: (state) => ({ ...state, ...initialState }),
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [NEXT_STEP]: (state) =>
      produce(state, (draft) => {
        draft["update"]["step"] += 1;
      }),
    [PREV_STEP]: (state) =>
      produce(state, (draft) => {
        draft["update"]["step"] -= 1;
      }),
  },
  initialState
);
export default Update;
