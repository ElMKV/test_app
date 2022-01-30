import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { employersReducer } from './reducers/employers-reducer';
import { tasksReducer } from './reducers/tasks-reducer';


const rootReducer = combineReducers({
    employers: employersReducer,
    tasks: tasksReducer
    
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
