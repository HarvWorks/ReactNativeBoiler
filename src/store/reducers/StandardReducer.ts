import {standardActionList} from '../actions';

import {IAction, IReducers} from '../../types/common';

const {STANDARD_ACTION} = standardActionList;

export interface IStandardReducer {
  standardValue: Number;
}

export const initialState = {
  standardValue: 0,
} as IStandardReducer;

function standardAction(state: IStandardReducer, action: IAction) {
  const {standardValue} = state;
  const {addValue} = action.payload;

  const nextState: IStandardReducer = {
    ...state,
    standardValue: standardValue + addValue,
  };
  return nextState;
}

function getReducer(
  type: string,
): (state: IStandardReducer, action: IAction) => any {
  const reducers: IReducers<IStandardReducer> = {
    [STANDARD_ACTION]: standardAction,
  };
  return reducers[type];
}

const UserReducer = (
  state: IStandardReducer = initialState,
  action: {type: string; payload: any},
) => {
  const reducer = getReducer(action.type);

  return reducer ? reducer(state, action) : state;
};

export default UserReducer;
