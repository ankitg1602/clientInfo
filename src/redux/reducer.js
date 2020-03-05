const mainReducer = (store, action) => {
  let newStore = Object.assign({}, store);

  switch (action.type) {
    case "GET_POST": {
      if (action.payload) {
        newStore.state.getPost = action.payload;
      }
      break;
    }
    
    case "CREATE_POST" : {
      if (action.payload) {
        newStore.state.createPost = action.payload;
      }
      break
    }
    case "UPDATE_POST": {
      if (action.payload) {
        newStore.state.updatePost = action.payload;
      }
      break;
    }
    default: {
      break;
    }
  }
  return newStore;
};

export default mainReducer;
