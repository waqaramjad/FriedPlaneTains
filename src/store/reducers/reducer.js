const initial = {
  name: "ali",
  currentUser: "",
  News: ""
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.Payload };

    case "ALL_USER":
      return { ...state, allUsers: action.payload };

    case "CURRENT_USER":
      return { ...state, currentUser: action.payload };

    case "ALL_MSG":
      return { ...state, AllMessages: action.payload };
    case "MOVIES":
      return { ...state, MOVIES: action.payload };
    case "ACTORS":
      return { ...state, ACTORS: action.payload };
    case "CINEMA":
      return { ...state, CINEMA: action.payload };
  
    case "GET_NEWS":
      return { ...state, News: action.payload };
      case "SIGNOUT_USER":
      return { ...state,currentUser: action.payload };
      case "PROFILESAVELIST":
      return { ...state,PROFILESAVELIST: action.payload };
    default:
      return state;
  }
};

export default reducer;
