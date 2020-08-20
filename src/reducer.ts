import { Reducer } from 'redux'
import produce from 'immer'
import { CardID, ColumnID } from './api'

export type State = {
  filterValue: string
  columns?: {
    id: ColumnID
    title?: string
    text?: string
    cards?: {
      id: CardID
      text?: string
    }[]
  }[]
  cardsOrder: Record<string, CardID | ColumnID | null>
}

const initialState: State = {
  filterValue: '',
  cardsOrder: {},
}

export type Action = {
  type: 'Filter.SetFilter',
  payload: {
    value,
  },
} | {
  type: 'App.SetColumns'
  payload: {
    columns: {
      id: ColumnID
      title?: string
      text?: string
    }[]
  }
} | {
  type: 'App.SetCards'
  payload: {
    cards: {
      id: CardID
      text?: string
    }[]
    cardsOrder: Record<string, CardID | ColumnID | null>
  }
}

export const reducer: Reducer<
  State,
  Action
> = produce((draft: State, action: Action) => {
  switch (action.type) {
    case 'Filter.SetFilter': {
      const { value } = action.payload
      draft.filterValue = value
      return
    }

    case 'App.SetColumns': {
      return
    }

    case 'App.SetCards': {
      return
    }

    default: {
      const _: never = action
    }
  }
}, initialState)