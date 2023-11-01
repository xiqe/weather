import { makeAutoObservable } from 'mobx'

export class TodoListStore {
  list = [
    { key: 1, title: '葡萄' },
    { key: 2, title: '西瓜' },
    { key: 3, title: '水蜜桃' }
  ]

  constructor() {
    makeAutoObservable(this)
  }

  insertTodoList(item: any) {
    this.list.push(item)
  }
}

const todoListStore = new TodoListStore()
export default todoListStore
