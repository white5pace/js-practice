import {createRouter, createWebHistory} from "vue-router";
import TeamsList from "@/pages/TeamsList";
import TeamsFooter from "@/pages/TeamsFooter";
import TeamMembers from "@/components/teams/TeamMembers";
import UsersList from "@/pages/UsersList";
import UserFooter from "@/pages/UsersFooter";
import NotFound from "@/pages/NotFound";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/teams'},
    {
      name: 'teams',
      path: '/teams',
      meta: {needsAuth: true},
      components: {default: TeamsList, footer: TeamsFooter},
      children: [
        {name: 'team-members', path: ':teamId', component: TeamMembers, props: true},
      ]
    }, // alias: '/'
    {
      path: '/users',
      components: {default: UsersList, footer: UserFooter},
      beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next()
      }
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ],
  linkActiveClass: 'active',
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from, savedPosition)
    if (savedPosition) {
      return savedPosition;
    }
    return {left: 0, top: 0}
  }
})

// beforeEach navigation
router.beforeEach(function (to, from, next) {
  console.log('Global before each')
  console.log(to, from);

  if (to.meta.needsAuth) {
    console.log('Needs auth!')
    // next();
  } else {
    // next();
  }

  next(true);
  // false, '/',
  // if(to.name === 'team-members'){ next() } else { next({name: 'team-members', params: {teamId: 't2'}})}
});

router.afterEach(function (to, from) {
  // sending analytics data
  console.log('Global after each');
  console.log(to, from);
});

export default router;