const MEU_ESTADO = {
  login: false,
  email: "",
};

const meuReducer = (state = MEU_ESTADO, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      }
    default:
      return state;
  }
}

export default meuReducer;