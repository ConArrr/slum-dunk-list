// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'

import SchoolList from 'components/organisms/SchoolList'
import { charactersData } from 'datas/characters'

const EnhancedSchoolList: FC = () => {
  const schools = Object.keys(charactersData).map((code) => ({
    code,
    name: charactersData[code].school,
  }))

  return <SchoolList schools={schools} />
}

export default EnhancedSchoolList
