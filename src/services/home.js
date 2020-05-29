import { get , post } from '../utils/request';
import api from "./api"



export const findUser = () => get(api.findUser)
export const homeDelete = ( id ) => post(api.homeDelete, id )
export const homeAdd = ( data ) => post(api.homeAdd, data)
export const homeUpdata = ( data ) => post(api.homeUpdata, data)
