import * as actionTypes from "./constants";
import { getEntireRoomList } from "@/services/modules/entire";
const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENTPAGE,
  currentPage,
});
const changeRoomListAction = (roomlist) => ({
  type: actionTypes.CHANGE_ROOMLIST,
  roomlist,
});
const changetotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTALCOUNT,
  totalCount,
});
const changeLoaddingAction = (isLoadding) => ({
  type: actionTypes.CHANGE_ISLOADDING,
  isLoadding,
});
export const fetchRoomListAction = (currentPage = 0) => {
  return async (dispatch) => {
    dispatch(changeLoaddingAction(true));
    const res = await getEntireRoomList(currentPage * 20);
    dispatch(changeLoaddingAction(false));

    dispatch(changeCurrentPageAction(currentPage));
    dispatch(changeRoomListAction(res.list));
    dispatch(changetotalCountAction(res.totalCount));
  };
};
