export const REQUEST_HOME = 'REQUEST_HOME'
export const REQUEST_HOME_ERROR = 'REQUEST_HOME_ERROR'
export const INVALIDATE_HOME = 'INVALIDATE_HOME'
export const RECEIVE_HOME = 'RECEIVE_HOME'

export const requestHomePage = () => ({
    type:REQUEST_HOME
})

export const erquestHomePageError = () => ({
    type:REQUEST_HOME_ERROR
})

export const invalidateHome = () => ({
    type:INVALIDATE_HOME
})

export const receiveHome = (json) => ({
    type:RECEIVE_HOME,
    posts: json.data.children.map(child => child.data)
})

export const fetchPosts = () => dispatch => {
    dispatch(requestHomePage())
    return fetch(`/static/mock/homepage.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveHome(json)))
      .catch(err => console.error(err))
}
