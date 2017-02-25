import ActionTypes from './action_types'
import database from './database'

export function getQuotation() {
  return dispatch => {
    dispatch(getQuotationRequestedAction)
    return database.ref('/').once('value', snap => {
      const quotations = snap.val()
      dispatch(getQuotationFulfilledAction(quotations))
      console.log(quotations.length())
    })
    .catch((error) => {
      console.log(error)
      dispatch(getQuotationRejectedAction())
    })
  }
}

function getQuotationRequestedAction() {
  return {
    type: ActionTypes.GetQuotationRequested
  }
}

function getQuotationFulfilledAction(quotation) {
  return {
    type: ActionTypes.getQuotationFulfilledAction,
    quotation
  }
}

function getQuotationRejectedAction() {
  return {
    type: ActionTypes.GetQuotationRejected
  }
}
