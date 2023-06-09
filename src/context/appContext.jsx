import { useReducer, useContext, createContext } from 'react';
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_BEGIN,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from './actions';
import reducer from './reducers';
import axios from 'axios';

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
const userLocation = localStorage.getItem('location');

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || '',
  jobLocation: userLocation || '',
};

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //axios
  const authFetch = axios.create({
    baseURL: 'http://localhost:4000/',
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  });

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
      });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    localStorage.setItem('location', location);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('location');
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post(
        'http://localhost:4000/auth/register',
        currentUser
      );

      const { user, token, location } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location },
      });
      //local storage
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      console.error(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const { data } = await axios.post(
        'http://localhost:4000/auth/login',
        currentUser
      );
      const { user, token, location } = data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token, location },
      });
      //local storage
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch('/auth/updateUser', currentUser);
      const { user, location, token } = data;

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, location, token },
      });

      addUserToLocalStorage({ user, location, token });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  return (
    <AppContext.Provider
      value={{ ...state, displayAlert, registerUser, loginUser, updateUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
