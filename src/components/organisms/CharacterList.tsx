// eslint-disable-next-line no-use-before-define
import React, { FC } from 'react'
import { Character } from 'data/characters'
import { Icon, Item } from 'semantic-ui-react'
import Spinner from 'components/molecules/Spinner'

type Props = {
  characters: Character[]
  isLoading?: boolean
}

const CharactersList: FC<Props> = ({ characters = [], isLoading = false }) => (
  <>
    {isLoading ? (
      <Spinner />
    ) : (
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
    )}
  </>
)

export default CharactersList
