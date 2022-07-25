const startingstate = [
  {
    id: 1,
    firstname: "kishore",
    lastname: "kumar",
    email: "kk@gmail.com",
    metaname: "kishore-cruze",
  },
];

const reducer = (state = startingstate, action) => {
  switch (action.type) {
    case "addmeta":
      state = [...state, action.payload]; //destructring data

    case "deletemeta" :
      const deletedata = state.filter(
        (mapid) => mapid.id !== action.payload && mapid
      );
      state = deletedata;
      return state;

    case "updatemeta":
      const editmeta = state.map((data) =>
        data.id === action.payload.id ? action.payload : data
      );
      state = editmeta;
      return state;
    default:
      return state;
  }

  return state;
};

export default reducer;
