import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGoodPrice, getHighScore,getDiscount ,getHotrecommend} from "@/services/modules/home";

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
      dispatch(changeDiscountInfoAction(res))
    });
    getHotrecommend().then(res=>{
      dispatch(changeHotRecommendInfoAction(res))
    })
  }
);
const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: [],
    highscoreInfo: [],
    discountInfo: {},
    hotRecommendInfo:{},
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
    changeHotRecommendInfoAction:(state, { payload }) => {
      state.hotRecommendInfo = payload;
    },
  },
});

export const { changeGoodPriceInfoAction, changeHighscoreInfoAction ,changeDiscountInfoAction,changeHotRecommendInfoAction} =
  homeSlice.actions;
export default homeSlice.reducer;
