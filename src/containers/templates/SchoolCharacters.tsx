// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'

import SchoolCharacters from 'components/templates/SchoolCharacters'
import { charactersData } from 'datas/characters'
import { Redirect, useParams } from 'react-router-dom'

const EnhancedSchoolCharacters: FC = () => {
  const { schoolCode } = useParams<{ schoolCode: string }>()
  const schoolCodeList = Object.keys(charactersData)

  if (schoolCodeList.includes(schoolCode)) {
    const { school, players } = charactersData[schoolCode]

    return <SchoolCharacters school={school} characters={players} />
  }

  return <Redirect to="/" />
}

export default EnhancedSchoolCharacters
