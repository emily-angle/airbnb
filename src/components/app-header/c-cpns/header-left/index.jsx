import React, { memo } from "react";
import IconLogo from "@/assets/svg/icon-logo";
import { HeaderLeftWrapper } from "./style";
import { useNavigate } from "react-router-dom";

const HeaderLeft = memo(() => {
  const navigate = useNavigate();
  const logoHandleClick = () => {
    navigate("/home");
  };
  return (
    <HeaderLeftWrapper>
      <div className="logo" onClick={logoHandleClick}>
        <IconLogo />
      </div>
    </HeaderLeftWrapper>
  );
});

export default HeaderLeft;
