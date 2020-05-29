import dynamic from "dva/dynamic" //异步加载组件

const app = window.app

const Home = dynamic({
  app,
  component: () => import('../pages/home'),
})
const Login = dynamic({
  app,
  component: () => import('../pages/login'),
})

export {
  Home,
  Login
}