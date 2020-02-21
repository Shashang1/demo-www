import { put } from 'redux-saga/effects'
import { GET_AUTH, AUTH_REMOVED, NO_AUTH } from '../constants';
import axios from 'axios'


function* query(endpoint, item){
  const json = yield axios.post(endpoint,item)
  .then(response=>response);
  if(json.data.status==="ok"){
    yield put({type:GET_AUTH, data:json.data, isLogin:true})
  }
  else {
    yield put({type:NO_AUTH})
  }
}
function* queryGet(endpoint, token){
  yield axios.get(endpoint, {headers:{'Authorization':'Bearer '+token}}).then(res=>res)
  yield put({type:AUTH_REMOVED, isLogin:false})
}

export {query, queryGet};

