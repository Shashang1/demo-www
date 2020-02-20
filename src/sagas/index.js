import {takeLatest, all, call, takeEvery} from "redux-saga/effects"
import { SET_AUTH, REMOVE_AUTH, BKURL } from "../constants"
import {query, queryGet} from "./query"

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
export default function* rootSaga(){
  yield all(
    [watchRequestAuth(),
    watchRequestRemoveAuth()
    ]);
}