import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CreateExam from '@/components/CreateExam'
import QueryExam from '@/components/QueryExam'
import CreateItem from '@/components/CreateItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/queryexam',
      name: 'QueryExam',
      component:QueryExam 
    },


   {
      path: '/createexam',
      name: 'CreateExam',
      component: CreateExam 
   },
   {
      path: '/createitem',
      name: 'CreateItem',
      component:CreateItem
    },



  ]
})
