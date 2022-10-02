import {createStore , combineReducers , applyMiddleware } from 'redux'
import {BreakingNewsReducer, SponsoredNewsReducer, TodaysTopHighlights, SiderLinksReducer, PopularNewsReducer, MainNewsReducer } from '../reducers'
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";


const rootReducer = combineReducers({
    breakingNews: BreakingNewsReducer,
    sponsoredNews: SponsoredNewsReducer,
    todaysTopHighlights: TodaysTopHighlights,
    siderLinks: SiderLinksReducer,
    popularNews: PopularNewsReducer,
    mainNews: MainNewsReducer
})


export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)