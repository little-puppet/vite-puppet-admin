import {MockMethod} from 'vite-plugin-mock';
import role from './modules/role'
import user from './modules/user'
import menu from './modules/menu'
import {createProdMockServer} from "vite-plugin-mock/es/createProdMockServer";


const method = [
  ...role,
  ...user,
  ...menu
]


if (process.env.NODE_ENV == 'development') {
  require('./env')
}


if (process.env.VITE_APP_BASE_URL !== undefined && process.env.VITE_APP_BASE_URL !== '') {
  method.forEach((item) => {
    item.url = process.env.VITE_APP_BASE_URL + item.url
  })
}

export function setupProdMockServer() {
  createProdMockServer([...method]);
}

export default [
  ...method
] as MockMethod[];
