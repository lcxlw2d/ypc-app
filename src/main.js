import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './redux/reducers/index'
import { fetchPosts } from './redux/actions/index'

const loggerMiddleware = createLogger()

const store = createStore(reducer,applyMiddleware(
    thunkMiddleware, // 允许我们 dispatch() 函数
    loggerMiddleware // 一个很便捷的 middleware，用来打印 action 日志
))

store.dispatch(fetchPosts())

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./containers/App.jsx', () => render(App))
}
