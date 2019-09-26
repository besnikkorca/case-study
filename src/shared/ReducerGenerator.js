const defaultClearArrayState = {
  isFetching: false,
  result: [],
  success: false,
}

const defaultClearObjState = {
  isFetching: false,
  result: {},
  success: false,
}

const ListReducerGenerator = (actionType, state, action) => {
  switch (action.type) {
    case actionType.request:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case actionType.success:
      const { result, pagination } = action.response
      return Object.assign({}, state, {
        isFetching: false,
        result,
        pagination,
        success: true,
      })
    case actionType.failure:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
      })
    case actionType.clear:
      return defaultClearArrayState
    default:
      return Object.assign({}, state)
  }
}

const ObjReducerGenerator = (actionType, state, action) => {
  switch (action.type) {
    case actionType.request:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case actionType.success:
      const {
        result,
      } = action.response
      return Object.assign({}, state, {
        isFetching: false,
        result,
        success: true,
      })
    case actionType.failure:
      return Object.assign({}, state, {
        isFetching: false,
        success: false,
      })
    case actionType.clear:
      return defaultClearObjState
    default:
      return Object.assign({}, state)
  }
}


export {
  ListReducerGenerator,
  ObjReducerGenerator,
  defaultClearArrayState,
  defaultClearObjState,
}
