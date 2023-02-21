import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getGoodPrice,
  getHighScore,
  getDiscount,
  getHotrecommend,
  getPlus,
} from "@/services/modules/home";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchHome",
  (payload, { dispatch }) => {
    getGoodPrice().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });
    getHighScore().then((res) => {
      dispatch(changeHighscoreInfoAction(res));
    });
    getDiscount().then((res) => {
      dispatch(changeDiscountInfoAction(res));
    });
    getHotrecommend().then((res) => {
      dispatch(changeHotRecommendInfoAction(res));
    });
    getPlus().then((res) => {
      dispatch(changePlusInfoAction(res))
    });
  }
);
const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: [],
    highscoreInfo: [],
    discountInfo: {},
    hotRecommendInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction: (state, { payload }) => {
      state.goodPriceInfo = payload;
    },
    changeHighscoreInfoAction: (state, { payload }) => {
      state.highscoreInfo = payload;
    },
    changeDiscountInfoAction: (state, { payload }) => {
      state.discountInfo = payload;
    },
    changeHotRecommendInfoAction: (state, { payload }) => {
      state.hotRecommendInfo = payload;
    },
    changePlusInfoAction: (state, { payload }) => {
      state.plusInfo = payload;
    },
  },
});

export const {
  changeGoodPriceInfoAction,
  changeHighscoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendInfoAction,
  changePlusInfoAction
} = homeSlice.actions;
export default homeSlice.reducer;
