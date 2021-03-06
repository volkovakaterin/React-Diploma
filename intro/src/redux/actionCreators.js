import {FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS, FETCH_CATEGORIES_FAILURE, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_REQUEST, FETCH_SALES_FAILURE, FETCH_SALES_SUCCESS, FETCH_SALES_REQUEST, GO_SEARCH_CATALOG, VISIBLE_SEARCH_CATALOG, СATALOG_RENDER, FETCH_LOADMORE_REQUEST, FETCH_LOADMORE_FAILURE, FETCH_LOADMORE_SUCCESS, SEARCHING_CATALOG_REQUEST, SEARCHING_CATALOG_FAILURE, SEARCHING_CATALOG_SUCCESS} from "./actions";

export const fetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST,
  });
  
export const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: {
      error,
    },
  });
  
export const fetchProductsSuccess = items => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: {
      items,
    },
  });

export const fetchProducts = async (dispatch, id) => {
  console.log(id);
    dispatch(fetchProductsRequest());
    try {
      let response;
      if(id !== '11'){
        response = await fetch(`http://localhost:7070/api/items?categoryId=${id}`)
    } else response = await fetch('http://localhost:7070/api/items')
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      dispatch(fetchProductsSuccess(data));
    } catch (e) {
      dispatch(fetchProductsFailure(e.message));
    }
  }

  export const fetchCategoriesRequest = () => ({
    type: FETCH_CATEGORIES_REQUEST,
  });
  
export const fetchCategoriesFailure = error => ({

    type: FETCH_CATEGORIES_FAILURE,
    payload: {
      error,
    },
  });
  
export const fetchCategoriesSuccess = items => ({
    type: FETCH_CATEGORIES_SUCCESS,
    payload: {
      items,
    },
  });

export const fetchCategories = async dispatch => {
    dispatch(fetchCategoriesRequest());
    try {
      const response = await fetch('http://localhost:7070/api/categories')
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      dispatch(fetchCategoriesSuccess(data));
    } catch (e) {
      dispatch(fetchCategoriesFailure(e.message));
    }
  } 
 
  export const fetchSalesRequest = () => ({
    type: FETCH_SALES_REQUEST,
  });
  
export const fetchSalesFailure = error => ({
    type: FETCH_SALES_FAILURE,
    payload: {
      error,
    },
  });
  
export const fetchSalesSuccess = items => ({
    type: FETCH_SALES_SUCCESS,
    payload: {
      items,
    },
  });

export const fetchSales = async dispatch => {
    dispatch(fetchSalesRequest());
    try {
      const response = await fetch('http://localhost:7070/api/top-sales')
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      dispatch(fetchSalesSuccess(data));
    } catch (e) {
      dispatch(fetchSalesFailure(e.message));
    }
  }  
  
export const goSearchCatalog = (headerSearch) => ({
    type: GO_SEARCH_CATALOG,
    payload: {
      headerSearch
    },
})

export const visibleSearchCatalog = (visible, valueSearch) => ({
  type: VISIBLE_SEARCH_CATALOG,
  payload: {
    visible,
    valueSearch
  },
})

export const catalogRender= (catalogRender) => ({
  type:   СATALOG_RENDER,
  payload: {
    catalogRender
  },
})

export const fetchLoadMoreRequest = () => ({
  type: FETCH_LOADMORE_REQUEST,
});

export const fetchLoadMoreFailure = error => ({
  type: FETCH_LOADMORE_FAILURE,
  payload: {
    error,
  },
});

export const fetchLoadMoreSuccess = itemsMore => ({
  type: FETCH_LOADMORE_SUCCESS,
  payload: {
    itemsMore,
  },
});

export const fetchLoadMore = async (dispatch, e, length, id) => {
  console.log(length);
  dispatch(fetchLoadMoreRequest());
  try {
    let response;
      if(id !== '11') {
        console.log(`http://localhost:7070/api/items?categoryId=${id}&offset=${length}`);
        response = await fetch(`http://localhost:7070/api/items?categoryId=${id}&offset=${length}`)
      } else response = await fetch(` http://localhost:7070/api/items?offset=${length}`)
    
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    dispatch(fetchLoadMoreSuccess(data));
  } catch (e) {
    dispatch(fetchLoadMoreFailure(e.message));
  }
}

export const searchingInCatalogRequest = () => ({
  type: SEARCHING_CATALOG_REQUEST,
});

export const searchingInCatalogFailure = error => ({
  type: SEARCHING_CATALOG_FAILURE,
  payload: {
    error,
  },
});

export const searchingInCatalogSuccess = itemsMore => ({
  type: SEARCHING_CATALOG_SUCCESS,
  payload: {
    itemsMore,
  },
});

export const searchingInCatalog = async (dispatch, searchForm, select) => {
  dispatch(searchingInCatalogRequest());
  try {
    let response;
      if(select !== '11') {
        response = await fetch(`http://localhost:7070/api/items?q=${searchForm}&categoryId=${select}&offset=0`)
      } else response = await fetch(`http://localhost:7070/api/items?q=${searchForm}`)
    
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    console.log(data);
    dispatch(searchingInCatalogSuccess(data));
  } catch (e) {
    dispatch(searchingInCatalogFailure(e.message));
  }
}
