// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'

import CharactersList from 'components/organisms/CharactersList'
import { Character } from 'datas/characters'
import { Helmet } from 'react-helmet'
import { Header } from 'semantic-ui-react'
import HomeButton from 'containers/molecules/HomeButton'

type Props = {
  school: string
  characters: Character[]
}

const SchoolCharacters: FC<Props> = ({ school, characters }) => (
  <>
    <Helmet>
      <title>登場人物一覧 | {school}</title>
    </Helmet>
    <Header as="h2">{school}</Header>
    <CharactersList characters={characters} />
    <HomeButton />
  </>
)

export default SchoolCharacters
