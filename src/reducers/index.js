import { combineReducers } from 'redux'
import modalState from './ButtonClick'
import openPortfolioItem from './PortfolioHandlers'

export default combineReducers({
  modalState,
  openPortfolioItem
})