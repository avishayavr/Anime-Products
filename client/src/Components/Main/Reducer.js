let dataState = []

// get data function
const getData =  ()=>{
    fetch('http://localhost:8000/api/products')
    .then((response) => response.json())
    .then((data)=> dataState.push(data))
}

getData();

// app reducer function
function appReducer(state = {products : dataState} , action) {

  switch (action.type) {
    default:
      return state;
  }

}

export default appReducer;
