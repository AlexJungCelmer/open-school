import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../layouts/DefaultLayout.vue'),
    children: [
      {
        path: 'minha-escola',
        name: 'school',
        component: () => import('../views/school/SchoolIndex.vue')
      },
      {
        path: 'about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      }
    ]
  },
  {
    path: '/escolas/cadastro',
    name: 'schools.new',
    component: () => import('../views/schoolRegister/RegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
