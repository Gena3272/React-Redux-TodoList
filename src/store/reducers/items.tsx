import { ItemsState, ItemsTypes, TodoListActionTypes } from '../../types/types';

const initialState: ItemsState = {
  data: [],
};

const items = (state = initialState, {type, payload, data}: TodoListActionTypes): ItemsState => {
  switch (type) {
    case ItemsTypes.ADD_ITEM:
      return {
        data: [
          ...state.data,
          {
            id: Math.random(),
            text: payload.text,
            editing: false,
            complete: false,
          },
        ],
      };

    case ItemsTypes.TOGGLE_ITEM:
      return {
        data: state.data.map((item) => ((item.id === payload.id)
          ? { ...item, complete: !item.complete }
          : item)),
      };

    case ItemsTypes.TOGGLE_EDIT_ITEM:
      return {
        data: state.data.map((item) => ((item.id === payload.id)
          ? { ...item, editing: !item.editing }
          : item)),
      };

    case ItemsTypes.UPDATE_ITEM:
      return {
        data: state.data.map((item) => ((item.id === payload.id)
          ? { ...item, text: payload.text }
          : item)),
      };

    case ItemsTypes.REMOVE_ITEM:
      return {
        data: state.data.filter((item) => item.id !== payload.id),
      };

    case ItemsTypes.LOAD_REQUEST:
      return { ...state };

    case ItemsTypes.LOAD_SUCCESS:
      return {
        data: data,
      };

    case ItemsTypes.LOAD_FAILURE:
      return {
        data: [],
      };

    default:
      return state;
  }
};

export default items;
