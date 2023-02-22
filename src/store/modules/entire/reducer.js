import * as actionTypes from "./constants";
const initState = {
  currentPage: 0,
  roomlist: [],
  totalCount: 0,
  isLoadding: false,
};

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENTPAGE:
      return { ...state, currentPage: action.currentPage };
    case actionTypes.CHANGE_ROOMLIST:
      return { ...state, roomlist: action.roomlist };
    case actionTypes.CHANGE_TOTALCOUNT:
      return { ...state, totalCount: action.totalCount };
    case actionTypes.CHANGE_ISLOADDING:
      return { ...state, isLoadding: action.isLoadding };
    default:
      return state;
  }
}
export default reducer;
