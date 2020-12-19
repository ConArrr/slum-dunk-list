// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

import { Character } from 'datas/characters'
import CharactersList from 'components/organisms/CharactersList'

type Props = {
  characters: Character[]
}

const AllCharacters: FC<Props> = ({ characters }) => (
  <>
    <Helmet>
      <title>登場人物一覧</title>
    </Helmet>
    <CharactersList characters={characters} />
  </>
)

export default AllCharacters
