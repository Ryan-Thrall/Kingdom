import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /** @type {import('./models/Group.js').Group} */

  kingHand: [
    {
      id: 1,
      faction: 'Kingdom',
      type: 'Influence',
      value: 1,
    }
  ],

  rebelHand: [

  ],

  cities: [
    {
      id: 1,
      name: 'PeasentVille',
      wealth: 1,
      pop: 10,
      rebelInfluence: 3,
      kingInfluence: 0,
      stability: 20,
    },
    {
      id: 1,
      name: 'MerchantVille',
      wealth: 5,
      pop: 5,
      rebelInfluence: 0,
      kingInfluence: 0,
      stability: 20,
    },
    {
      id: 1,
      name: 'ClergyVille',
      wealth: 8,
      pop: 2,
      rebelInfluence: 0,
      kingInfluence: 3,
      stability: 20,
    }
  ],

  treasury: 10,

  rebelMoney: 5,

  turn: "Kingdom",
})
