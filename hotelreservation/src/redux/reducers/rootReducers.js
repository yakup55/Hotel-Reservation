import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import aboutReducer from "./aboutReducer";
import commentReducer from "./commentReducer";
import hotelReducer from "./hotelReducer";
import hotelDetailReducer from "./hotelDetailReducer";
import quentionsReducer from "./quentionsReducer";
import reservationReducer from "./reservationReducer";
import roomDetailReducer from "./roomDetailReducer";
import roomReducer from "./roomReducer";
const rootReducer = combineReducers({
  category: categoryReducer,
  about: aboutReducer,
  comment: commentReducer,
  hotel: hotelReducer,
  hotelDetail: hotelDetailReducer,
  quention: quentionsReducer,
  reservation: reservationReducer,
  room: roomReducer,
  // roomDetail:roomDetailReducer,
});
export default rootReducer;
