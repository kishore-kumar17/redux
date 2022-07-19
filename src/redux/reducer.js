const startingstate = [
  {
    id:1,
    firstname: "kishore",
    lastname: "kumar",
    email: "kk@gmail.com",
    metaname: "kishore-cruze"
  },
];

const reducer = (state = startingstate, action) => {
  switch (action.type) {
    case "addmeta":
      state = [...state, action.payload];//destructring data
  }
 

  return state;



  
};

export default reducer;
