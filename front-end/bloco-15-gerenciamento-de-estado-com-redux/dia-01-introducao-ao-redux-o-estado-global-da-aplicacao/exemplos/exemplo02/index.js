const Redux = require('redux');

const compra = (item) => ({ // 3 - Definindo uma Action
  type: "CHECKED",
  item,
});

const ESTADO_INICIAL = {
  checked: false,
  item: "",
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "CHECKED":
      return {
        ...state,
        checked: !state.checked,
        item: action.item,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer); // 1 - Criando um Redux store

store.dispatch(compra("videogame"));

console.log(store.getState()); // 2 - Buscando o estado dentro de um Redux store