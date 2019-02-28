import { applyMiddleware, compose, createStore, Middleware} from 'redux'
import reducer from "./reducers"

const enhancers = []
const middleware : Middleware[]= [
]

interface IMyWindow extends Window {
	process: any;
	__REDUX_DEVTOOLS_EXTENSION__(): any;
}

declare var window: IMyWindow;

// if (window.process.env.NODE_ENV === 'development') {
const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

if (typeof devToolsExtension === 'function') {
	console.log(devToolsExtension)
	enhancers.push(devToolsExtension())
}
// }

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers
)

const store = createStore(
	reducer,
	composedEnhancers
)

export default store