import { CALL_API } from "../../middleware/api"

export const GETENTITIESLISTACTIONS = {
  request: 'GETENTITIESLIST_REQUEST',
  success: 'GETENTITIESLIST_SUCCESS',
  failure: 'GETENTITIESLIST_FAILURE',
  clear: 'GETENTITIESLIST_CLEAR',
  failureMessage: 'Failed to fetch entities',
}

export function getEntitiesList(entity, page) {
  return {
    [CALL_API]: {
      endpoint: `${entity}?page[number]=${page}`,
      types: [
        GETENTITIESLISTACTIONS.request,
        GETENTITIESLISTACTIONS.success,
        GETENTITIESLISTACTIONS.failure,
        GETENTITIESLISTACTIONS.failureMessage
      ],
    },
  }
}
export function cleanGetEntitiesList() {
  return { type: GETENTITIESLISTACTIONS.clear }
}

export const GETENTITYACTIONS = {
  request: 'GETENTITY_REQUEST',
  success: 'GETENTITY_SUCCESS',
  failure: 'GETENTITY_FAILURE',
  clear: 'GETENTITY_CLEAR',
  failureMessage: 'Failed to fetch entities',
}

export function getEntity(entity, id) {
  return {
    [CALL_API]: {
      endpoint: `${entity}/${id}`,
      types: [
        GETENTITYACTIONS.request,
        GETENTITYACTIONS.success,
        GETENTITYACTIONS.failure,
        GETENTITYACTIONS.failureMessage
      ],
    },
  }
}
export function cleanGetEntity() {
  return { type: GETENTITYACTIONS.clear }
}

export function deleteBulkEntities(entities) {
  alert('Not implemented')
}
