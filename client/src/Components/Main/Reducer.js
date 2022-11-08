import axios from 'axios'
// import {json} from 'json/package.json'

let dataState = [];

// get data function
const getData = async ()=> {
   const response = await axios.get('http://localhost:8000/api/products')
    // .then((response) => response.json())
    // .then((data)=> dataState.push(data.json()))
    const data = response.data
    dataState.push(data);
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
