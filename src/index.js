import {rootReduce} from "./redux/rootRedux";
import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import './styles.css'
import {async_increment, decrement, increment} from "./redux/actions";

const counter = document.querySelector('#counter')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const asyncBtn = document.querySelector('#async')
const themeBtn = document.querySelector('#theme')

const store = createStore(
    rootReduce,
    0,
    applyMiddleware(thunk)
)

addBtn.addEventListener('click', () => {
    store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
    store.dispatch(decrement())

})

asyncBtn.addEventListener('click', () => {
    store.dispatch(async_increment())
})

themeBtn.addEventListener('click', () => {

})

store.subscribe(() => {
    const state = store.getState()
    counter.textContent = state
})

store.dispatch({type: '__INIT__'})