import { 
  findUser ,
  homeDelete , 
  homeAdd , 
  homeUpdata
} from "../services/home"


const  { pathToRegexp } = require('path-to-regexp')
export default {
  namespace:'home',
  //状态
  state: {
    data:[],
    datas:[]
  },
  //修改
  reducers: {
    //获取data数据
    updataData (state , action) {
      return {...state, data:action.payload}
    },
    del (state , action) {
      return {...state, data:action.payload}
    },
    add (state , action) {
      return {...state, data:action.payload}
    },
    updates (state , action) {
      return {...state, data:action.payload}
    },
    change ( state , action ) {
      return {...state, datas:action.payload}
    }
  },

  subscriptions: {
    fun ({ history , dispatch }) {
      history.listen(({ pathname }) => {
        const regexp = pathToRegexp('/').exec(pathname)
        if(regexp) {
          dispatch({type:'getSelectData'})
        }
      })
    }
  },

  //触发异步
  effects: {
    *upData ({ payload } , { call , put , select }) {
      const data = yield call( homeUpdata ,payload)
      const list = yield call(findUser)
        yield put({
          type:"updates",
          payload: list.users  
        })
    },
    //添加
    *addData ({ payload } , { call , put , select }) {
      const isAdd = yield call( homeAdd ,payload)
      const list = yield call(() => findUser())
        yield put({
          type:"add",
          payload: list.users
        })
 
    },
    //删除
    *delData ({ payload } , { call ,put , select }) {
      const data = yield call(() => homeDelete({ id:payload })) 
      const list = yield call(() => findUser())
      if ( data ) {
        yield put({
          type: 'del',
          payload: list.users
        })
      }
    },
    *getSelectData ({ payload } , { call , put , select }) {
      //select 拿上一次的数据
      //select(state =>{})
      const data = yield call(() => findUser()) 
      const old = yield select( state => state.home.data)
      yield put({
        type:"updataData",
        payload:[...old,...data.users]
      })
    }
  }

}