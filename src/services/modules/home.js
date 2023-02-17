import request from "..";

export const getGoodPrice = () => {
  return request.get("/home/goodprice");
};
export const getHighScore= () => {
  return request.get("/home/highscore");
};
export const getDiscount= () => {
  return request.get("/home/discount");
};
export const getHotrecommend=()=>{
  return request.get("/home/hotrecommenddest")
}
