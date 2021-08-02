const initialValue = {
  data: {},
  error: null,
  message:null,
  status:null,
  isAuth:false
};

const userReducers = (state = initialValue, action) => {
  switch (action.type) {
    case "POST_LOGIN":
      return {
        ...state,
        data: action.payload.data,
        error: action.payload.error,
        message: action.payload.message,
        status: action.payload.status,
        isAuth: true,
      };
    case "POST_REGISTER":
      return {
        ...state,
        data: action.payload.data,
        error: action.payload.error,
        message: action.payload.message,
        status: action.payload.status,
      };
    default:
      return state;
  }
};

export default userReducers;
