export default (state, action) => {
  switch (action.type) {
    case 'SAVE_PROFILES_DATA':
      return {
        ...state,
        profiles: action.payload.students,
        filteredProfiles: action.payload.students,
      };
    case 'FILTER_BY_NAME':
      return {
        ...state,
        filteredProfiles: state.profiles.filter(
          (data) => action.payload.regex.test(data.firstName.toLowerCase())
            || action.payload.regex.test(data.lastName.toLowerCase()),
        ),
      };
    case 'FILTER_BY_TAG':
      return {
        ...state,
        filteredProfiles: action.payload.taggedProfiles,
      };
    case 'ADD_TAG':
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };
    default:
      return state;
  }
};
