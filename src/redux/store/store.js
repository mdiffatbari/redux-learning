import cartReducers from "../reducers/cartReducers";
import { legacy_createStore as createStore } from "redux";

export const store = createStore(cartReducers);
