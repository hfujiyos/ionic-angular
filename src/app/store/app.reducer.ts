import { Action, createReducer, on } from '@ngrx/store';

export interface AppState {
  count: number;
}

export const initialState: AppState = {
  count: 0
};

const _appReducer = createReducer(
  initialState,
  // アクションハンドラーを追加
);

export function appReducer(state: AppState | undefined, action: Action) {
  return _appReducer(state, action);
}
