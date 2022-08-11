import {combineReducers, legacy_createStore} from "redux";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";
import topSalesReducer from "./topSalesReducer";
import productCardReducer from './productCardReducer';

function configureStore(state) {
    return legacy_createStore(
        combineReducers({
           topSales: topSalesReducer,
           categories: categoriesReducer,
           products: productsReducer,
           card: productCardReducer
         // ....
         // ....   
        })
        );
}

export default configureStore;