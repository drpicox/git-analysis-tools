export const SET_VIEW = "SET_VIEW";
export const setView = view => ({ type: SET_VIEW, view });

export const getView = state => state.view;

export default (state = { main: "" }, action) => {
  switch (action.type) {
    case SET_VIEW:
      return { ...state, ...action.view };
    default:
      return state;
  }
};
