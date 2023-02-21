import React, { memo, useEffect } from "react";

import HomeBanner from "./c-cpns/home-banner";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import { HomeWrapper } from "./style";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionV3 from "./c-cpns/home-section-V3";
const Home = memo(() => {
  const dispatch = useDispatch();

  const { goodPriceInfo, highscoreInfo, discountInfo, hotRecommendInfo,plusInfo } =
    useSelector(
      (state) => ({
        goodPriceInfo: state.home.goodPriceInfo,
        highscoreInfo: state.home.highscoreInfo,
        discountInfo: state.home.discountInfo,
        hotRecommendInfo: state.home.hotRecommendInfo,
        plusInfo:state.home.plusInfo
      }),
      shallowEqual
    );
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {Object.keys(hotRecommendInfo).length && (
          <HomeSectionV2 infoData={hotRecommendInfo} />
        )}
        {Object.keys(discountInfo).length && (
          <HomeSectionV2 infoData={discountInfo} />
        )}
        <HomeSectionV1 infoData={goodPriceInfo} />
        <HomeSectionV1 infoData={highscoreInfo} />
        {/* plus房源 */}
        <HomeSectionV3 infoData={plusInfo}/>

      </div>
    </HomeWrapper>
  );
});

export default Home;
