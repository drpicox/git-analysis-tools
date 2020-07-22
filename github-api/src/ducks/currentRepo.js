export const SET_CURRENT_REPO = "SET_CURRENT_REPO";
export const setCurrentRepo = repo => ({ type: SET_CURRENT_REPO, repo });

export const getCurrentRepo = state => state.currentRepo;

export default (state = "", action) => {
  switch (action.type) {
    case SET_CURRENT_REPO:
      return action.repo;
    default:
      return state;
  }
};
