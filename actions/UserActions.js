import axios from "axios";
import { Alert } from "react-native";

export const startRegister = (registerValues, token) => {
  return async (dispatch) => {
    dispatch(isLoading());
    await axios
      .post("https://hidden-journey-49991.herokuapp.com/api/auth/createUser", {
        registerValues,
        token,
      })
      .then((res) => {
        if (res.data.ok) {
          dispatch(register(res.data.user));
        } else {
          Alert.alert(res.data.msg, "", [{ text: "OK" }]);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    dispatch(isNotLoading());
  };
};

const register = (user) => ({
  type: "USER_REGISTER",
  payload: user,
});

export const startLogin = (loginValues, token) => {
  return async (dispatch) => {
    dispatch(isLoading());
    await axios
      .post("https://hidden-journey-49991.herokuapp.com/api/auth/loginUser", {
        loginValues,
        token,
      })
      .then((res) => {
        if (res.data.ok) {
          dispatch(login(res.data.user));
        } else {
          Alert.alert("Usuario y contraseña no coinciden", "", [
            { text: "OK" },
          ]);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    dispatch(isNotLoading());
  };
};

const login = (user) => ({
  type: "USER_LOGIN",
  payload: user,
});

export const startSetSchedule = (
  uid,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
) => {
  return async (dispatch) => {
    dispatch(isLoading());
    await axios
      .post("https://hidden-journey-49991.herokuapp.com/api/auth/setSchedule", {
        uid,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday,
      })
      .then((res) => {
        if (res.data.ok) {
          dispatch(setSchedule(res.data.user));
          Alert.alert("Guardado correctamente", "", [{ text: "OK" }]);
        }
      })
      .catch((e) => {
        Alert.alert(e, "", [{ text: "OK" }]);
      });
    dispatch(isNotLoading());
  };
};

export const startPostSettings = (uid, settingsValues) => {
  return async (dispatch) => {
    dispatch(isLoading());
    await axios
      .post(
        "https://hidden-journey-49991.herokuapp.com/api/auth/postSettings",
        {
          uid,
          settingsValues,
        }
      )
      .then((res) => {
        if (res.data.ok) {
          dispatch(postSettings(res.data.user));
        } else {
          Alert.alert("Algo fué mal, inténtelo mas tarde", "", [
            { text: "OK" },
          ]);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
    dispatch(isNotLoading());
  };
};

export const startSwitchLogin = () => {
  return async (dispatch) => {
    dispatch(isNotLoading());
  };
};

export const startGetUser = (uid) => {
  return async (dispatch) => {
    dispatch(isLoading());
    await axios
      .post("https://hidden-journey-49991.herokuapp.com/api/auth/getUser", {
        uid,
      })
      .then((res) => {
        if (res.data.ok) {
          dispatch(getUser(res.data.user));
        } else {
          console.log('ok');
        }
        dispatch(isNotLoading());
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

const getUser = (user) => ({
  type: "USER_GET",
  payload: user,
});

const postSettings = (user) => ({
  type: "USER_POST_SETTINGS",
  payload: user,
});

const setSchedule = (user) => ({
  type: "USER_SET_SCHEDULE",
  payload: user,
});

const isLoading = () => ({
  type: "FETCHING",
  payload: true,
});

const isNotLoading = () => ({
  type: "NOT_FETCHING",
  payload: false,
});
