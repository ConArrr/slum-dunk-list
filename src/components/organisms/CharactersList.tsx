// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'

import { Character } from 'datas/characters'
import { Icon, Item } from 'semantic-ui-react'

type Props = {
  characters: Character[]
}

const CharactersList: FC<Props> = ({ characters = [] }) => (
  <>
    <Item.Group>
      {characters.map((character) => (
        <Item key={character.id}>
          <Icon name="user circle" size="huge" />
          <Item.Content>
            <Item.Header>{character.name}</Item.Header>
            <Item.Meta>{character.grade}年生</Item.Meta>
            <Item.Meta>
              {character.height ?? '???'}
              cm
            </Item.Meta>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </>
)

export default CharactersList
