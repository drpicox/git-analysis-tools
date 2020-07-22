export function issuesReducer(state = {}, action) {
  switch (action.type) {
    case "ADD_ISSUES": {
      const copy = { ...state };
      action.issues.forEach(i => {
        copy[`${i.repository.name}#${i.number}`] = i;
      });
      return copy;
    }
    case "REMOVE_ISSUES": {
      const { repo } = action;
      if (!repo) return {};

      const copy = { ...state };
      Object.keys(state)
        .filter(k => k.startsWith(repo + "#"))
        .forEach(k => delete copy[k]);
      return copy;
    }
    default: {
      return state;
    }
  }
}
