import {
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILED,
  GET_ITEMS_REQUEST,
  POST_ORDER_SUCCESS,
  POST_ORDER_FAILED,
  POST_ORDER_REQUEST,
  INGREDIENTS_PICK,
  MODAL,
  SCROLL_CHANGE,
  UPDATE_TYPE,
  DELETE_INGREDIENTS,
  SORT_INGREDIENTS,
} from '../action/cart';

export const store = {
  items: [],
  itemsRequest: false,
  itemsFailed: false,

  mainModal: false,
  modalOrder: false,
  modalIngredient: false,
  image: "",
  name: "",

  bunScroll: true,
  souseScroll: false,
  mainScroll: false,

  ingredients: [],
  count: 0,
  bun: '',
  burgerInsides: [],

  currentingredient: null,
  ingredientsId: [],

  order: [],
  orderRequest: false,
  orderFailed: false,

  draggable: []
}

export const reducer = (state = store, action) => {
  switch (action.type) {
    case GET_ITEMS_REQUEST: {
      return {
        ...state,
        itemsRequest: true
      };
    }
    case GET_ITEMS_SUCCESS: {
      return { ...state, itemsFailed: false, items: action.data, itemsRequest: false };
    }
    case GET_ITEMS_FAILED: {
      return { ...state, itemsFailed: true, itemsRequest: false };
    }
    case POST_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true
      };
    }
    case POST_ORDER_SUCCESS: {
      return { ...state, orderFailed: false, order: action.order, orderRequest: false, ingredients:[] };
    }
    case POST_ORDER_FAILED: {
      return { ...state, orderFailed: true, orderRequest: false };
    }
    case INGREDIENTS_PICK: {
      return {
        ...state, bun: action.bun, burgerInsides: action.burgerInsides
      }
    }
    case MODAL: {
      return {
        ...state, mainModal: action.mainModal, modalOrder: action.modalOrder,
        image: action.image, name: action.name, post: action.post,
        modalIngredient: action.modalIngredient
      }
    }
    case SCROLL_CHANGE: {
      return {
        ...state, bunScroll: action.bunScroll,
        souseScroll: action.souseScroll,
        mainScroll: action.mainScroll,
      }
    }
    case UPDATE_TYPE: {
      return {
        ...state,
        ingredients: state.items.find(el => el._id === action.id).type === 'bun' ?
          state.ingredients.filter((el) => el.type !== 'bun').concat(state.items.filter(el => el._id === action.id)) :
          state.ingredients.concat(state.items.filter(el => { return el._id === action.id && (el.constructorKey = action.constructorKey)}))
      };
    }
    case SORT_INGREDIENTS: {
      return {
        ...state,
        burgerInsides: action.burgerInsides
      };
    }
    case DELETE_INGREDIENTS: {
      return {
        ...state, ingredients: action.ingredients
      };
    }
    default: {
      return state;
    }
  }
}

