import * as actions from "../actions";

const quotesDefaultState = {
  loading: false,
  id: null,
  quote: null,
  length: null,
  value: 0,
  votes: null,
  swansons: [],
  smallSwansons: [],
  mediumSwansons: [],
  largeSwansons: [],
};

const startLoading = (state, action) => {
  return { ...state, loading: true };
};

const updateQuotesRecieved = (state, action) => {
  return {
    ...state,
    swansons: action.data,
    smallSwansons: action.data.small,
    mediumSwansons: action.data.medium,
    largeSwansons: action.data.large,
  };
};

const quotesRecieved = (state, action) => {
  const data = action.data;
  if (data === "Server communication Error") return state;
  const random = Math.floor(Math.random() * (data.quotes.length + 1));
  const pickedQuote = data.quotes[random];
  const id = pickedQuote.id;
  const quote = pickedQuote.swanson;
  const length = pickedQuote.length;
  const votes = pickedQuote.votes;
  const value = pickedQuote.value;

  return {
    ...state,
    loading: false,
    id,
    quote,
    length,
    value,
    votes,
    swansons: action.data,
    smallSwansons: action.data.small,
    mediumSwansons: action.data.medium,
    largeSwansons: action.data.large,
    user: action.data.user

  };
};

const swansonQuote = (state, action) => {
  const random = Math.floor(Math.random() * state.swansons.quotes.length);
  const singleQuote = state.swansons.quotes[random];
  const id = singleQuote.id;
  const quote = singleQuote.swanson;
  const length = singleQuote.length;
  const value = singleQuote.value;
  const votes = singleQuote.votes;
  return {
    ...state,
    loading: false,
    id,
    quote,
    length,
    value,
    votes,
  };
};

const smallQuote = (state, action) => {
  const random = Math.floor(Math.random() * state.smallSwansons.length);
  const singleSmallQuote = state.smallSwansons[random];
  const id = singleSmallQuote.id;
  const quote = singleSmallQuote.swanson;
  const length = singleSmallQuote.length;
  const value = singleSmallQuote.value;
  const votes = singleSmallQuote.votes;
  return {
    ...state,
    loading: false,
    id,
    quote,
    length,
    value,
    votes,
  };
};

const mediumQuote = (state, action) => {
  const random = Math.floor(Math.random() * state.mediumSwansons.length);
  const singlemediumQuote = state.mediumSwansons[random];
  const id = singlemediumQuote.id;
  const quote = singlemediumQuote.swanson;
  const length = singlemediumQuote.lenght;
  const value = singlemediumQuote.value;
  const votes = singlemediumQuote.votes;
  return {
    ...state,
    loading: false,
    id,
    quote,
    length,
    value,
    votes,
  };
};

const largeQuote = (state, action) => {
  const random = Math.floor(Math.random() * state.largeSwansons.length + 1);
  const singlelargeQuote = state.largeSwansons[random];
  const id = singlelargeQuote.id;
  const quote = singlelargeQuote.swanson;
  const length = singlelargeQuote.lenght;
  const value = singlelargeQuote.value;
  const votes = singlelargeQuote.votes;
  return {
    ...state,
    loading: false,
    id,
    quote,
    length,
    value,
    votes,
  };
};

const upVote = (state, action) => {
  return { ...state, votes: state.votes + 1, value: state.value + action.value };
};

  const handlers = {
    [actions.FETCH_QUOTES]: startLoading,
    [actions.QUOTES_DATA_RECIEVED]: quotesRecieved,
    [actions.UPDATE_QUOTES_RECIEVED]: updateQuotesRecieved,
    [actions.VOTE_RECIEVED]: upVote,
    [actions.SMALL_SWANSON_QUOTE]: smallQuote,
    [actions.MEDIUM_SWANSON_QUOTE]: mediumQuote,
    [actions.LARGE_SWANSON_QUOTE]: largeQuote,
    [actions.SWANSON_QUOTE]: swansonQuote
  };

  export default (state = quotesDefaultState, action) => {
    const handler = handlers[action.type];
    if (typeof handler === "undefined") return state;
    return handler(state, action);
  };
