import { VisibilityFilters, FilterActionTypes } from '../../types/types';

const filter = (state = VisibilityFilters.SHOW_ALL, { type, payload }: FilterActionTypes) => {
  switch (type) {
    case VisibilityFilters.UPDATE_FILTER:
      return payload.filter;
    default:
      return state;
  }
};

export default filter;
