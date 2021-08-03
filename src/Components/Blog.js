import * as React from 'react'
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'


const messagesInFrench = {
  myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
}

export default function Blog() {
  return (
    <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
      <p>
        <FormattedMessage
          id="myMessage"
          defaultMessage="Today is {ts, date, ::yyyyMMdd}"
          values={{ts: Date.now()}}
        />
        <br />
        <FormattedNumber value={19} style="currency" currency="EUR" />
      </p>
    </IntlProvider>
  )
}