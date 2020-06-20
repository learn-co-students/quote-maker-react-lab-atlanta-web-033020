export default (state = [], action) => {
  let quote;
  let index;
  
  switch (action.type) {
    case "ADD_QUOTE":
      return {
        ...state,
        quotes: [...state.quotes, action.quote], 
        ...state,
        votes: 0
      }

    case "REMOVE_QUOTE":
      let index = state.quotes.findIndex(q => q.id === action.id)
      return {
        ...state,
        quotes: [...state.quotes.slice(0, index, ...state.quotes.slice(index +1))]
      }

    case "UPVOTE_QUOTE":
      return {
        ...state,
        quotes: state.quotes.map(quote => {
        if (quote.id === action.id) {
            quote.votes = quote.votes + 1
        }
        return quote})
      }

      case "DOWNVOTE_QUOTE":
        return {
          ...state,
          quotes: state.quotes.map(quote => {
          if (quote.id === action.id) {
              quote.votes = quote.votes - 1
          }
          return quote})
        }
    default:
      return state;
  }
}
