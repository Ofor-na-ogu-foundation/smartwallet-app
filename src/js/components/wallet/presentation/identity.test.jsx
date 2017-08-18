import React from 'react'
import { shallow } from 'enzyme'
import WalletIdentity from './identity'

describe('(Component) Wallet Identity', function() {
  it('should render properly the first time', function() {
    shallow(
      (<WalletIdentity
        changePinValue={() => {}}
        expandField={() => {}}
        enterVerificationCode={() => {}}
        goTo={() => {}}
        identity={{
          expandedFields: {
            contact: true,
            idCards: true,
            passports: true
          },
          username: {
            verified: true,
            value: 'AnnikaHamman'
          },
          contact: {
            phones: [{
              number: '+49 176 12345678',
              type: 'mobile',
              verified: true
            }],
            emails: [{
              address: 'info@jolocom.com',
              type: 'mobile',
              verified: true
            }]
          },
          idCards: [],
          passports: []
        }}
        requestVerificationCode={() => {}}
        resendVerificationCode={() => {}}
        requestIdCardVerification={() => {}}
        setFocusedPin={() => {}}
        showUserInfo={() => {}}
      />),
      { context: { muiTheme: { } } }
    )
  })
})
