import {combineReducers, legacy_createStore} from "redux";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";
import topSalesReducer from "./topSalesReducer";

function configureStore(state) {
    return legacy_createStore(
        combineReducers({
           topSales: topSalesReducer,
           categories: categoriesReducer,
           products: productsReducer,
         // ....
         // ....   
        })
        );
}

export default configureStore;