import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  groups: [
    {
      id: 1,
      name: 'Peasentry',
      wealth: 1,
      pop: 10,
      alliance: -5
    },
    {
      id: 1,
      name: 'Merchants',
      wealth: 5,
      pop: 7,
      alliance: 0
    },
    {
      id: 1,
      name: 'Bankers',
      wealth: 9,
      pop: 4,
      alliance: 1
    },
    {
      id: 1,
      name: 'Knights',
      wealth: 7,
      pop: 5,
      alliance: 2
    },
    {
      id: 1,
      name: 'Clergy',
      wealth: 9,
      pop: 3,
      alliance: 4
    }
  ],

  treasury: 10,

  rebelMoney: 5,
})
