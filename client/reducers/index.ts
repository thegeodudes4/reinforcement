/**
 * ************************************
 *
 * @module  index.ts
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

 import { combineReducers } from 'redux';

 // import all reducers here
 import taskReducer from './taskReducer';
 
 
 // combine reducers
 const reducers = combineReducers({
   // if we had other reducers, they would go here
   markets: taskReducer,
 });
 
 // make the combined reducers available for import
 export default reducers;