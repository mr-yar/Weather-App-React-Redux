import {call, put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
import {tablePutAction} from '../reducers/tableReducer';
import {API_ADRESS, API_KEY} from '../../services/api';
import {IWorkerAction} from '../../common/types';

function loadTable(value: string) {
  return axios
    .get(`${API_ADRESS}/forecast?q=${value}&appid=${API_KEY}&units=metric`)
    .then(
      (response) => response.data,
      (error) => ({cod: '404', error})
    );
}


function* workerTable(action: IWorkerAction) {
  const data = yield call(loadTable, action.payload);
  yield put(tablePutAction(data));
}

export function* watchTable(): Generator {
  yield takeEvery('Table/tableLoadAction', workerTable);
}
