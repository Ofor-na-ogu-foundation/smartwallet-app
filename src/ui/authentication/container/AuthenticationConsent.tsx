import React from 'react'
import { connect } from 'react-redux'
import { AuthenticationConsentComponent } from '../components/AuthenticationConsent'
import { RootState } from 'src/reducers'
import { cancelSSO } from 'src/actions/sso'
import { sendAuthenticationResponse } from 'src/actions/sso/authenticationRequest'
import {ThunkDispatch} from '../../../store'
import {withErrorHandling} from '../../../actions/modifiers'
import {showErrorScreen} from '../../../actions/generic'

interface Props extends ReturnType<typeof mapDispatchToProps>, ReturnType<typeof mapStateToProps> {}

interface State {}

export class AuthenticationConsentContainer extends React.Component<
  Props,
  State
> {
  render() {
    return (
      <AuthenticationConsentComponent
        activeAuthenticationRequest={this.props.activeAuthenticationRequest}
        confirmAuthenticationRequest={this.props.confirmAuthenticationRequest}
        cancelAuthenticationRequest={this.props.cancelAuthenticationRequest}
      />
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  activeAuthenticationRequest: state.sso.activeAuthenticationRequest,
})

const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
  confirmAuthenticationRequest: () => dispatch(withErrorHandling(showErrorScreen)(sendAuthenticationResponse)),
  cancelAuthenticationRequest: () => dispatch(cancelSSO),
})

export const AuthenticationConsent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthenticationConsentContainer)