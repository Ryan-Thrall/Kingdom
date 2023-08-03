import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /** @type {import('./models/Group.js').Group} */
  // groups: [
  //   {
  //     id: 1,
  //     name: 'Peasentry',
  //     wealth: 1,
  //     pop: 10,
  //     alliance: -5
  //   },
  //   {
  //     id: 2,
  //     name: 'Merchants',
  //     wealth: 5,
  //     pop: 7,
  //     alliance: 0
  //   },
  //   // {
  //   //   id: 1,
  //   //   name: 'Bankers',
  //   //   wealth: 9,
  //   //   pop: 4,
  //   //   alliance: 1
  //   // },
  //   // {
  //   //   id: 1,
  //   //   name: 'Knights',
  //   //   wealth: 7,
  //   //   pop: 5,
  //   //   alliance: 2
  //   // },
  //   {
  //     id: 3,
  //     name: 'Clergy',
  //     wealth: 9,
  //     pop: 3,
  //     alliance: 4
  //   }
  // ],

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
