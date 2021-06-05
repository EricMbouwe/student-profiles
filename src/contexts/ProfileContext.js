import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import ProfileReducer from './ProfileReducer';
import useFetch from '../utils/useFetch';

const initialState = {
  profiles: [],
  filteredProfiles: [],
};

export const ProfileContext = createContext(initialState);

// Provider component
export const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProfileReducer, initialState);

  const { data, loading, error } = useFetch(
    'https://api.hatchways.io/assessment/students',
  );

  function saveProfilesData() {
    dispatch({
      type: 'SET_PROFILES_DATA',
      payload: data,
    });
  }

  useEffect(() => {
    if (data) {
      saveProfilesData();
    }
  }, [data]);

  // Actions
  function filterByName(val) {
    const value = val.toLowerCase();
    const regex = new RegExp(value, 'i');

    dispatch({
      type: 'FILTER_BY_NAME',
      payload: {
        regex,
      },
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
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
        addTransaction,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

ProfileProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
