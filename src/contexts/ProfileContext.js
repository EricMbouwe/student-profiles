import { createContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import ProfileReducer from './ProfileReducer';
import useFetch from '../utils/useFetch';

const initialState = {
  profiles: [],
};

export const ProfileContext = createContext(initialState);

// Provider component
export const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProfileReducer, initialState);

  const { data, loading, error } = useFetch(
    'https://api.hatchways.io/assessment/students',
  );

  function fetchProfiles() {
    dispatch({
      type: 'GET_PROFILES',
      payload: data,
    });
  }

  useEffect(() => {
    fetchProfiles();
  }, []);

  console.log(data);

  // Actions

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
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
        loading,
        error,
        fetchProfiles,
        deleteTransaction,
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
