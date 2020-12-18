// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'
import { useLocation } from 'react-router'
import { parse } from 'querystring'

import { charactersData } from 'data/characters'
import AllCharacters from 'components/templates/AllCharacters'

const EnhauncedAllCharacters: FC = () => {
  const { search } = useLocation()
  const isLoading = !!parse(search)?.loading
  const characters = Object.values(charactersData)
    .map((v) => v.players)
    .flat()
    .sort((p, q) => ((p.height ?? 160) < (q.height ?? 160) ? -1 : 1))

  return <AllCharacters characters={characters} isLoading={isLoading} />
}

export default EnhauncedAllCharacters
