import   React from 'react'
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'


const messagesInFrench = {
  myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
}

const Blog = () =>{
  return(
    <div>
      <h1 className="text-center my-48 font-bold text-2xl">Blog Is Under Construction</h1>
    </div>
  )
}

export default Blog;
