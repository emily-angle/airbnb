
import React, { memo } from "react";
import { EntirePaginationWrapper } from "./style";
import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { fetchRoomListAction } from "@/store/modules/entire/createActions";
const EntirePagination = memo((props) => {
  const { totalCount, currentPage } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
  }));
  const dispatch = useDispatch();
  const startCount = useMemo(() => {
    return currentPage * 20 + 1;
  }, [currentPage]);

  const endCount = (currentPage + 1) * 20;
  const totalPage = Math.ceil(totalCount / 20);
  const changePage = (e, val) => {
    window.scrollTo(0,0)
    dispatch(fetchRoomListAction(val-1));
  };
  return (
    <EntirePaginationWrapper>
      {!!totalCount && (
        <div className="info">
          <Pagination count={totalPage} color="primary" onChange={changePage} />
          <div className="desc">
            第 {startCount}- {endCount}个房源，共超过{totalCount}个
          </div>
        </div>
      )}
    </EntirePaginationWrapper>
  );
});



export default EntirePagination;
