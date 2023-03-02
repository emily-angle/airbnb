import React, { memo } from "react";
import { useSelector } from "react-redux";
import { DetailPicturesWrapper } from "./style";

const DetailPictures = memo(() => {
  const { pictures } = useSelector((state) => ({
    pictures: state.detail.detailInfo.picture_urls,
  }));
  return (
    <DetailPicturesWrapper>
      <div className="left">
        <img alt="" src={pictures[0]} />
        <div className="cover"></div>
      </div>
      <div className="right">
        {pictures.slice(1, 5).map((item) => {
          return (
            <div key={item} className="item">
              <img src={item} alt="" />
              <div className="cover"></div>
            </div>
          );
        })}
      </div>
      {/* {pictures.map((item)=><img key={item} src={item}/>)} */}
    </DetailPicturesWrapper>
  );
});

export default DetailPictures;
