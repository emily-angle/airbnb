import React, { memo, useEffect, useState } from "react";
import IconGlobal from "@/assets/svg/icon-global";
import IconMenu from "@/assets/svg/icon-profile-menu";
import { HeaderRightWrapper } from "./style";
import IconAvatar from "@/assets/svg/icon-profile-avatar";
const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);

  useEffect(()=>{
    function windowHandleClick(){
      setShowPanel(false)
    }

    document.addEventListener("click",windowHandleClick,true)
    return ()=>{
      document.removeEventListener("click",windowHandleClick,true)
    }
  },[])

  const handleClick = () => {
    setShowPanel(!showPanel)
  };
  return (
    <HeaderRightWrapper>
      <div className="btns">
        <span>登录</span>
        <span>注册</span>
        <span>
          <IconGlobal />
        </span>
      </div>
      <div className="profile" onClick={handleClick}>
        <IconMenu />
        <span className="avatar">
          <IconAvatar />
        </span>
        {showPanel && (
          <div className="panel">
            <div className="item">登录</div>
            <div className="item">注册</div>
            <div className="line"></div>
            <div className="item">来爱彼迎发布房源</div>
            <div className="item">开展体验</div>
            <div className="item">帮助</div>
          </div>
        )}
      </div>
    </HeaderRightWrapper>
  );
});

export default HeaderRight;
