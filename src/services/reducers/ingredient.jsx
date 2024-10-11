import {
  INCREASE_INGRED,
  DECREASE_INGRED,
  DELETE_INGRED,
  TAB_SWITCH,
} from '../actions/ingredient';

//  import список продуктов\ингредиентов для корзины
import { items }  from '../../utils/test_data';

const initialState = {
  items,
  currentTab: 'items',
};

export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case TAB_SWITCH: {
      return {
        ...state,
        currentTab: state.currentTab === 'items' ? 'postponed' : 'items'
      };
    }
    case INCREASE_INGRED: {
      return {
        ...state,
        items: [...state.items].map(item =>
          item.id === action.id ? { ...item, qty: ++item.qty } : item )
      };
    }
    case DECREASE_INGRED: {
      return {
        ...state,
        items: [...state.items].map(item =>
          item.id === action.id ? { ...item, qty: --item.qty } : item )
      };
    }
    case DELETE_INGRED: {
      return {
        ...state, items: [...state.items].filter(item => item.id !== action.id)
      };
    }
    default: {
      return state;
    }
  }
};
