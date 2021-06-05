export default (state, action) => {
  switch (action.type) {
    case 'SET_PROFILES_DATA':
      return {
        ...state,
        profiles: action.payload.students,
        filteredProfiles: action.payload.students,
      };
    case 'FILTER_BY_NAME':
      return {
        ...state,
        filteredProfiles: state.profiles.filter(
          (data) => action.payload.regex.test(data.firstName)
            || action.payload.regex.test(data.lastName),
        ),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
