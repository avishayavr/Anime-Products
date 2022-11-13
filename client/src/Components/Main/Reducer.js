import axios from 'axios'
// import {json} from 'json/package.json'

let dataState = [];

// get data function
const getData = async ()=> {
  const {data} = await axios.get('http://localhost:8000/api/products')
  dataState.push(...data);
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
