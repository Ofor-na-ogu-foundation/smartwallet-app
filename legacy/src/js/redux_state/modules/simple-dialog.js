import { Map } from 'immutable'
import { makeActions } from './'
import pickBy from 'lodash/pickBy'

export const actions = makeActions('simple-dialog', {
  configMsg: {
    expectedParams: [
      'title',
      'message',
      'primaryActionText',
      'style',
      'scrollContent'
    ]
  },
  toggleDialog: { expectedParams: [] },
  showDialog: { expectedParams: [] },
  hideDialog: { expectedParams: [] }
})

const initialState = new Map({
  visible: false,
  scrollContent: false,
  title: '',
  message: '',
  primaryActionText: 'OK',
  style: {}
})

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.showDialog.id:
      return state.set('visible', true)
    case actions.hideDialog.id:
      return state.set('visible', false)
    case actions.toggleDialog.id:
      return state.set('visible', !state.getIn['visible'])
    case actions.configMsg.id:
      // TODO make more elegant.
      const actionArgs = pickBy(action, (value, key) => key !== 'type')
      return state.merge(actionArgs)
    default:
      return state
  }
}