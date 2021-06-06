import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import ProfileReducer from './ProfileReducer';
import useFetch from '../utils/useFetch';

const initialState = {
  profiles: [],
  filteredProfiles: [],
  tags: [],
};

export const ProfileContext = createContext(initialState);

export const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProfileReducer, initialState);

  const { data, loading, error } = useFetch(
    'https://api.hatchways.io/assessment/students',
  );

  function saveProfilesData() {
    dispatch({
      type: 'SAVE_PROFILES_DATA',
      payload: data,
    });
  }

  useEffect(() => {
    if (data) {
      saveProfilesData();
    }
  }, [data]);

  function filterByName(val) {
    const value = val.toLowerCase().replace(/\s/g, '');
    const regex = new RegExp(value, 'i');

    dispatch({
      type: 'FILTER_BY_NAME',
      payload: {
        regex,
      },
    });
  }

  function filterByTag(val) {
    const value = val.toLowerCase().replace(/\s/g, '');
    const regex = new RegExp(value, 'i');

    dispatch({
      type: 'FILTER_BY_TAG',
      payload: {
        regex,
        value,
      },
    });
  }

  function filterAll(val) {
    const value = val.toLowerCase().replace(/\s/g, '');
    const regex = new RegExp(value, 'i');

    dispatch({
      type: 'FILTER_ALL',
      payload: {
        regex,
        value,
      },
    });
  }

  function addToTags(tag) {
    dispatch({
      type: 'ADD_TAG',
      payload: tag,
    });
  }

  return (
    <ProfileContext.Provider
      value={{
        profiles: state.profiles,
        filteredProfiles: state.filteredProfiles,
        loading,
        error,
        filterByName,
        filterByTag,
        filterAll,
        addToTags,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

ProfileProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
