import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFound from './pages/notFound/NotFound'
import Home from './pages/home/Home'
import Author from './pages/author/Author'
import AuthorDetail from './pages/author/AuthorDetail'
import Book from './pages/book/Book'
import * as serviceWorker from './serviceWorker'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import { Provider } from 'react-redux'
import authorReducer from './pages/author/authorReducer'
import bookReducer from './pages/book/bookReducer'
import userReducer from './utils/userReducer'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const reducers = combineReducers({
    authors: authorReducer,
    author: authorReducer,
    books: bookReducer,
    user: userReducer,
})

const store = applyMiddleware(promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/authors" exact={true} component={Author} />
                <Route path="/authors/:id" component={AuthorDetail} />
                <Route path="/books" component={Book} />
                <Route path="" component={NotFound} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
