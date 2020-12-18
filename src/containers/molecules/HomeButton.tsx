// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'
import { useHistory } from 'react-router'

import HomeButton from 'components/molecules/HomeButton'

const EnhauncedHomeButton: FC = () => {
  const history = useHistory()

  return <HomeButton redirectToHome={() => history.push('/')} />
}

export default EnhauncedHomeButton
