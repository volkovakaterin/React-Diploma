import {
    
  } from './actions'
  
const initialState = {
    
  };
  
export default function productCardReducer (state = initialState, action) {
    switch (action.type) {
      case FETCH_CARD_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
        case FETCH_CARD_FAILURE:
          const {error} = action.payload;
          return {
            ...state,
            loading: false,
            error,
          };
        case FETCH_CARD_SUCCESS:
          const {items} = action.payload;
          return {
            ...state,
            items,
            loading: false,
            error: null,
          };
          case CHANGE_ID_CARD:
            const {id} = action.payload;
            return {
              ...state,
              id
            };    
      default:
        return state;
    }
  }