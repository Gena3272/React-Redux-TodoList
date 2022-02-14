import { all, takeLatest } from 'redux-saga/effects';
import { ItemsTypes } from '../../types/types';
import { deleteRequest, load } from './sagas';

export default function* rootSaga() {
    yield all([
    takeLatest(ItemsTypes.LOAD_REQUEST, load),
    takeLatest(ItemsTypes.REMOVE_ITEM, deleteRequest),
  ]);
}
