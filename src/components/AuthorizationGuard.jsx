import { compose } from 'recompose'
import { useEffect } from 'react'
import { withRouter } from 'react-router'

const enhance = compose(withRouter)

export const AuthorizationGuard = enhance(({ history, children }) => {
  useEffect(() => {
    const hash = window.location.hash.substring(1)
    if (hash.slice(0, 19) === 'confirmation_token=') {
      const token = hash.slice(19)
      history.replace(`/confirm/${token}`)
    }
    if (hash.slice(0, 13) === 'invite_token=') {
      const token = hash.slice(13)
      history.replace(`/invite/${token}`)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return children
})
