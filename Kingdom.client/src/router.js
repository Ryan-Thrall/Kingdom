import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/findGame',
    name: 'FindGame',
    component: loadPage('FindGamePage'),
  },
  {
    path: '/myGames',
    name: 'MyGames',
    component: loadPage('MyGamesPage'),
    beforeEnter: authGuard
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: loadPage('LeaderboardPage'),
  },
  {
    path: '/howToPlay',
    name: 'HowToPlay',
    component: loadPage('HowToPlayPage'),
  },
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
