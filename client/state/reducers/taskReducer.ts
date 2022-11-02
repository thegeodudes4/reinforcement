const reducer = (state = [], action) => {
  switch (action.type) {
    case 'addTask':
      return state.push(action.payload);
    case 'deleteTask':
      return state.splice(action.payload);
  }
}