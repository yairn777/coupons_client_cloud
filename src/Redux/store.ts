

//import { catsReducer } from "./CatsState";

import { combineReducers, createStore } from "redux";
import { adminReducer } from "./AdminAppState";
import { userReducer } from "./AutoRedux";
import { companyReducer } from "./CompanyAppState";
import { customerReducer } from "./CustomerAppState";
import { generalReducer } from "./general";

// Single Reducer
//const store = createStore(catsReducer);

// For getting data
//const xys = store.getState().cats;

//Multiple catsReducer
const reducers = combineReducers({adminReducer:adminReducer,companyReducer:companyReducer,userReduser:userReducer,customerReducer:customerReducer,generalReducer:generalReducer});
const store = createStore(reducers)

// For getting data
//const xyz = store.getState().catState.cats;

export default store;