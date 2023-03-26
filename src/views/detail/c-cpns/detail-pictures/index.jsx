import PictureShow from "@/base-ui/picture-show";
import React, { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DetailPicturesWrapper } from "./style";

const DetailPictures = memo(() => {
  const { pictures } = useSelector((state) => ({
    pictures: state.detail.detailInfo.picture_urls,
  }));
  const [showPic, setShowPic] = useState(false);
  useEffect(()=>{
    if(showPic){
      document.body.style.overflow="hidden"
    }else{
      document.body.style.overflow="auto"
    }
  },[showPic])

 
  return (
    <>
      <DetailPicturesWrapper>
       <div className='show-btn' onClick={e=>setShowPic(true)}>查看照片</div>
        <div className="pictures-list">
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
        </div>
        {showPic && <PictureShow pictures={pictures} handleClick={e=>setShowPic(false)} />}
      </DetailPicturesWrapper>
      {/* {pictures.map((item)=><img key={item} src={item}/>)} */}
    
    </>
  );
});

export default DetailPictures;
