const initialModalState = false;

const openPortfolioItem = (state = initialModalState, action) => {
  switch (action.type) {
    case 'OPEN_PORTFOLIO':
      return { opened: true, data: action.data }
    case 'CLOSE_PORTFOLIO':
      return { opened: false, data: null }
    default:
      return state
  }
}

export default openPortfolioItem;