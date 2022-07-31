import {
    FETCH_PRODUCTS_FAILURE,
    FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_SUCCESS,
    GO_SEARCH_CATALOG,
    VISIBLE_SEARCH_CATALOG,
    СATALOG_RENDER,
    FETCH_LOADMORE_REQUEST,
    FETCH_LOADMORE_FAILURE,
    FETCH_LOADMORE_SUCCESS
  } from './actions'
  
const initialState = {
    items: [], //список товаров
    loading: false, //успешность или неуспешность загрузки списка товаров
    error: null, // ошибка при загрузке списка товаров
    headerSearch: false, //(видимость инпута поиска в шапке сайта) разрешение на переход в поиск каталога из поиска шапки
    catalogSearch: 'none', //видимость инпута поиска в каталоге
    valueSearch: '', // значение инпута поиска передаваемое из шапки в каталог
    catalogRender: false, //отрисована страница каталога 
    itemsMore: [], // список товаров по нажатию кнопки Загрузить еще
    loadingMore: false, // успешность или неуспешность загрузки товаров по нажатию кнопки Загрузить еще
    loadingMoreVisible: '', // видимость кнопки Загрузить еще
  };
  
export default function productsReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
          };
        case FETCH_PRODUCTS_FAILURE:
          const {error} = action.payload;
          return {
            ...state,
            loading: false,
            error,
          };
        case FETCH_PRODUCTS_SUCCESS:
          const {items} = action.payload;
          return {
            ...state,
            items,
            loading: false,
            error: null,
          }; 
        case GO_SEARCH_CATALOG:
          const {headerSearch} = action.payload;
          return{
            ...state,
            headerSearch
          }
        case VISIBLE_SEARCH_CATALOG:
          const {visible, valueSearch} = action.payload;
          return {
            ...state,
            catalogSearch: visible,
            valueSearch
          } 
        case СATALOG_RENDER:
          const {catalogRender}= action.payload;
         return{
            ...state,
            catalogRender
         }   
         case FETCH_LOADMORE_REQUEST:
          return {
            ...state,
            loadingMore: true,
            errorMore: null,
            };
          case FETCH_LOADMORE_FAILURE:
            const {errorMore} = action.payload;
            return {
              ...state,
              loadingMore: false,
              errorMore,
            };
          case FETCH_LOADMORE_SUCCESS:
            const {itemsMore} = action.payload;
            itemsMore.map(item=>(
               state.items.push(item)
            ))
            if(itemsMore.length < 6) {
              console.log('none');
              return {
                ...state,
                loadingMore: false,
                errorMore: null,
                loadingMoreVisible: 'none',
              }    
            }else return {
              ...state,
              loadingMore: false,
              errorMore: null,
            }    
      default:
        return state;
    }
  }