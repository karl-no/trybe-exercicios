const MEU_OUTRO_ESTADO = {
  checked: false,
  item: "",
};

const meuOutroReducer = (state = MEU_OUTRO_ESTADO, action) => {
  switch (action.type) {
    case "CHECKED":
      return {
        ...state,
        checked: !state.checked,
        item: action.item,
      }
    default:
      return state;
  }
}

export default meuOutroReducer;