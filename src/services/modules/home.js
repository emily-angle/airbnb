import request from "..";

export const getGoodPrice = () => {
  return request.get({url:"/home/goodprice"});
};
export const getHighScore= () => {
  return request.get({url:"/home/highscore"});
};
export const getDiscount= () => {
  return request.get({url:"/home/discount"});
};
export const getHotrecommend=()=>{
  return request.get({url:"/home/hotrecommenddest"})
}
export const getPlus=()=>{
  return request.get({url:"/home/plus"})
}
