const initialState = function () {
  return
}

const pageReducer = (state, action) => {
  if (!state) return initialState();

  switch (action.type) {
    case EnumPageActions.GET_LIST:
      return update(state, {list: {$set:action.list}})
    default:
      return state;
  }
}

export default pageReducer;