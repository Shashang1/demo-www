import {takeLatest, all, call, takeEvery} from "redux-saga/effects"
import { SET_AUTH, REMOVE_AUTH, BKURL, SEND_LOG } from "../constants"
import {query, queryGet} from "./query"
import axios from 'axios'

function* watchRequestAuth(){
  yield takeLatest(SET_AUTH, function* ({payload}){
    yield call(query.bind(null,BKURL+"login", payload))
  })
}

function* watchRequestRemoveAuth(){
  yield takeEvery(REMOVE_AUTH, function* ({token}){
    yield call(queryGet.bind(null, BKURL+"logout", token))

  })
}
// eslint-disable-next-line
// function* watchRequestSendLog(){
//   // eslint-disable-next-line
//   takeEvery((SEND_LOG, function* ({Log}){
//     axios.post(BKURL+"/addLog",{Log:Log})
//   }))
// }
export default function* rootSaga(){
  yield all(
    [watchRequestAuth(),
    watchRequestRemoveAuth(),
    // watchRequestSendLog()
    ]);
}