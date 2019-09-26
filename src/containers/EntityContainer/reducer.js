import { GETENTITIESLISTACTIONS, GETENTITYACTIONS } from "./actions";
import {
  ListReducerGenerator,
  ObjReducerGenerator,
  defaultClearArrayState,
  defaultClearObjState
} from "../../shared/ReducerGenerator";

function getEntitiesListState (state = defaultClearArrayState, action) {
  return ListReducerGenerator(GETENTITIESLISTACTIONS, state, action)
};

function getEntityState (state = defaultClearObjState, action) {
  return ObjReducerGenerator(GETENTITYACTIONS, state, action)
};

export default {
  getEntitiesListState,
  getEntityState,
};
