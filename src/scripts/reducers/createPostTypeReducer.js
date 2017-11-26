import { api } from 'WPReact'

const merge = (obj1, obj2) => Object.assign({}, obj1, obj2)

const createPostTypeReducer = ({type, actions}) => {
  const initialState = {
    [type]: [],
    [type.slice(0, -1)]: null,
    isFetching: false,
    hasError: false,
    errorMsg: null
  }

  const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
      case actions.REQUEST:
        return merge(state, {
          isFetching: true
        })
      case actions.SUCCESS:
        return merge(state, {
          isFetching: false,
          hasError: false,
          [type]: action.data
        })
      case actions.FAILURE:
        return merge(state, {
          isFetching: false,
          hasError: true,
          errorMsg: action.error
        })
      case actions.single.REQUEST:
        return merge(state, {
          isFetching: true
        })
      case actions.single.SUCCESS:
        return merge(state, {
          isFetching: false,
          hasError: false,
          [type.slice(0, -1)]: action.data
        })
      case actions.single.FAILURE:
        return merge(state, {
          isFetching: false,
          hasError: true,
          errorMsg: action.error
        })
      default:
        return state
    }
  }

  const typeRequest = () => ({
    type: actions.REQUEST
  })

  const typeRequestSuccess = data => ({
    type: actions.SUCCESS,
    data
  })

  const typeRequestFailure = error => ({
    type: actions.FAILURE,
    error
  })

  const typeSingleRequest = () => ({
    type: actions.single.REQUEST
  })

  const typeSingleSuccess = data => ({
    type: actions.single.SUCCESS,
    data
  })

  const typeSingleFailure = error => ({
    type: actions.single.FAILURE,
    error
  })

  const fetchType = (page, perPage, callback) => dispatch => {
    dispatch(typeRequest())

    api({endpoint: type, page, perPage})
      .then(({data}) => {
        if (callback) callback(data)
        dispatch(typeRequestSuccess(data))
      }).catch(err => {
        dispatch(typeRequestFailure(`Error fetching ${type}.`))
      })
  }

  const fetchSingleById = (list = [], id, callback) => dispatch => {
    const findById = list.find(item => item.id === id)

    dispatch(typeSingleRequest())

    // check if single already exists in state before calling API
    if (findById) {
      dispatch(typeSingleSuccess(findById))
    } else {
      api({endpoint: type, id})
        .then(({data}) => {
          if (callback) callback(data)
          dispatch(typeSingleSuccess(data))
        }).catch(err => {
          dispatch(typeSingleFailure(`Error fetching ${type} single.`))
        })
    }
  }

  return {
    reducer,
    fetchType,
    fetchSingleById,
    typeRequest,
    typeRequestSuccess,
    typeRequestFailure
  }
}

export default createPostTypeReducer