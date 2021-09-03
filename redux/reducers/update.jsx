import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import createRequestSaga from "./createRequestSaga";
import { createRequestActionTypes } from "./createRequestSaga";
import * as API from "../axios";
import { takeLatest } from "@redux-saga/core/effects";

const INITIALIZE = "newclass/INITIALIZE";
const CHANGE_FIELD = "newclass/CHANGE_FIELD";
const ADD_CLASS = "newclass/ADD_CLASS";
const DELETE_CLASS = "newclass/DELETE_CLASS";
const INPUT_CLASS = "newclass/INPUT_CLASS";
const NEXT_STEP = "newclass/NEXT_STEP";
const PREV_STEP = "newclass/PREV_STEP";
const MOVE_STEP = "newclass/MOVE_STEP";
const [CLASSUPDATE, CLASSUPDATE_SUCCESS, CLASSUPDATE_FAILURE] =
  createRequestActionTypes("newclass/UPDATE");

export const Initialize = createAction(INITIALIZE);
export const ChangeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({ form, key, value })
);
export const AddClass = createAction(ADD_CLASS, ({ form, key }) => ({
  form,
  key,
}));

export const DeleteClass = createAction(
  DELETE_CLASS,
  ({ form, key, index }) => ({
    form,
    key,
    index,
  })
);
export const InputClass = createAction(
  INPUT_CLASS,
  ({ form, key, index, value }) => ({ form, key, index, value })
);

export const NextStep = createAction(NEXT_STEP, (form) => form);
export const PrevStep = createAction(PREV_STEP, (form) => form);
export const MoveStep = createAction(MOVE_STEP, (form) => form);
export const ClassUpdate = createAction(CLASSUPDATE, (form) => form);

const UpdateSaga = createRequestSaga(CLASSUPDATE, API.ClassReg);
export function* Saga() {
  yield takeLatest(CLASSUPDATE, UpdateSaga);
}
const initialState = {
  update: {
    step: 1,
    image: "",
    maintitle: "",
    subheading: "",
    introduction: "",
    classtype: "개발",
    language: ["Java"],
    level: "입문",
    PpricePerHour: 0,
    PtimePerClass: 0,
    PnumOfTimes: 0,
    GpricePerHour: 0,
    GtimePerClass: 0,
    GnumOfTimes: 0,
    online: "off",
    offline: "off",
    discuss: "off",
    personal: "off",
    group: "off",
    groupMax: 0,
    content: "",
  },
  updateSuccess: false,
  updateError: false,
};

const Update = handleActions(
  {
    [INITIALIZE]: (state) => ({ ...state, ...initialState }),
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [ADD_CLASS]: (state, { payload: { form, key } }) =>
      produce(state, (draft) => {
        draft[form][key].push("Java");
      }),
    [DELETE_CLASS]: (state, { payload: { form, key, index } }) =>
      produce(state, (draft) => {
        draft[form][key].splice(index, 1);
      }),
    [INPUT_CLASS]: (state, { payload: { form, key, index, value } }) =>
      produce(state, (draft) => {
        draft[form][key][index] = value;
      }),
    [NEXT_STEP]: (state) =>
      produce(state, (draft) => {
        draft["update"]["step"] += 1;
      }),
    [PREV_STEP]: (state) =>
      produce(state, (draft) => {
        draft["update"]["step"] -= 1;
      }),
    [MOVE_STEP]: (state, { payload }) =>
      produce(state, (draft) => {
        draft["update"]["step"] = payload;
      }),
    [CLASSUPDATE_SUCCESS]: (state) => ({
      ...state,
      updateSuccess: true,
      updateError: false,
    }),
    [CLASSUPDATE_FAILURE]: (state, { payload }) => ({
      ...state,
      updateSuccess: false,
      updateError: true,
    }),
  },
  initialState
);

export default Update;
