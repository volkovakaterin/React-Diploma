import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  GO_SEARCH_CATALOG,
  VISIBLE_SEARCH_CATALOG,
  СATALOG_RENDER,
  FETCH_LOADMORE_REQUEST,
  FETCH_LOADMORE_FAILURE,
  FETCH_LOADMORE_SUCCESS,
  SHOW_BTN_MORE,
  SEARCHING_CATALOG_SUCCESS,
  SEARCHING_CATALOG_REQUEST,
  SEARCHING_CATALOG_FAILURE,
  CHANGE_SEARCH_CATALOG,
  CHANGE_NEED_REQUEST,
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
  needRequest: true,
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
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case FETCH_PRODUCTS_SUCCESS:
      console.log('FETCH_PRODUCTS_SUCCESS');
      const { items } = action.payload;
      return {
        ...state,
        items,
        loading: false,
        error: null,
      };
    case GO_SEARCH_CATALOG:
      const { headerSearch } = action.payload;
      return {
        ...state,
        headerSearch
      }
    case VISIBLE_SEARCH_CATALOG:
      const { visible } = action.payload;
      return {
        ...state,
        catalogSearch: visible,

      }
    case CHANGE_SEARCH_CATALOG:
      const { valueSearch } = action.payload;
      return {
        ...state,
        valueSearch
      }
    case СATALOG_RENDER:
      console.log('СATALOG_RENDER');
      const { catalogRender } = action.payload;
      return {
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
      const { errorMore } = action.payload;
      return {
        ...state,
        loadingMore: false,
        errorMore,
      };
    case FETCH_LOADMORE_SUCCESS:
      console.log('FETCH_LOADMORE_SUCCESS');
      const { itemsMore } = action.payload;
      itemsMore.map(item => (
        state.items.push(item)
      ))
      if (itemsMore.length < 6) {
        console.log('none');
        return {
          ...state,
          loadingMore: false,
          errorMore: null,
          loadingMoreVisible: 'none',
        }
      } else return {
        ...state,
        loadingMore: false,
        errorMore: null,
      }
    case SHOW_BTN_MORE:
      console.log('SHOW_BTN_MORE');
      const { showBtn } = action.payload;
      return {
        ...state,
        loadingMoreVisible: showBtn,
      }
    case SEARCHING_CATALOG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCHING_CATALOG_FAILURE:
      const { errorSearch } = action.payload;
      return {
        ...state,
        loading: false,
        errorSearch
      };
    case SEARCHING_CATALOG_SUCCESS:
      console.log('SEARCHING_CATALOG_SUCCESS');
      const { itemsSearch, searchForm } = action.payload;
      return {
        ...state,
        items: itemsSearch,
        valueSearch: searchForm,
        loading: false,
        error: null,
      }
    case CHANGE_NEED_REQUEST:
      console.log('CHANGE_NEED_REQUEST'); 
      const { needRequest } = action.payload;
      return {
        ...state,
        needRequest
      }
    default:
      return state;
  }
}