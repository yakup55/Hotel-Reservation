import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import aboutReducer from "./aboutReducer";
import commentReducer from "./commentReducer";
import hotelReducer from "./hotelReducer";
import hotelDetailReducer from "./hotelDetailReducer";
import quentionsReducer from "./quentionsReducer";
import reservationReducer from "./reservationReducer";
import degreReducer from "./degreReducer";
import roomDetailReducer from "./roomDetailReducer";
import roomReducer from "./roomReducer";
import { appReducer } from "./appReducer";
const rootReducer = combineReducers({
  category: categoryReducer,
  about: aboutReducer,
  comment: commentReducer,
  hotel: hotelReducer,
  hotelDetail: hotelDetailReducer,
  quention: quentionsReducer,
  reservation: reservationReducer,
  room: roomReducer,
  degre: degreReducer,
  app: appReducer,
  // roomDetail:roomDetailReducer,
});
export default rootReducer;
