export interface IReducers<Reducer> {
  [x: string]: (state: Reducer, action: any) => Reducer;
}
export interface IAction {
  type: string;
  payload: any;
}
