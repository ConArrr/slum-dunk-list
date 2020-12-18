// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

import { Character } from 'data/characters'
import CharactersList from 'components/organisms/CharacterList'

type Props = {
  characters: Character[]
  isLoading?: boolean
}

const AllCharacters: FC<Props> = ({ characters, isLoading = false }) => (
  <>
    <Helmet>
      <title>登場人物一覧</title>
    </Helmet>
    <CharactersList characters={characters} isLoading={isLoading} />
  </>
)

export default AllCharacters
