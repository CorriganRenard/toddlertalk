
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function addQuote(text) {

  return { type: 'ADD_QUOTE', text};
}

export function likeQuote(index) {

  return { type: 'LIKE_QUOTE', index};
}
export function setVisibilityFilter(filter) {

  return { type: 'SET_VISIBILITY_FILTER', filter};
}


