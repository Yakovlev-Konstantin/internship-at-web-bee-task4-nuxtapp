<template>
  <div id="todo-list-example">
    <NewTodoForm
      @createTodo="addNewTodo()"
      :newTodoText="newTodoText"
      @newTodoText:update="newTodoText = $event"
    />
    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <TodoItem
          :title="todo.title"
          @remove="remove(todo.id)"
          @savechange="saveChange(todo, $event)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem'
import NewTodoForm from '../components/NewTodoForm'

export default {
  name: 'TodoListExample',
  components: {
    TodoItem,
    NewTodoForm,
  },

  data() {
    return {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'Помыть посуду',
        },
        {
          id: 2,
          title: 'Вынести мусор',
        },
        {
          id: 3,
          title: 'Подстричь газон',
        },
        {
          id: 4,
          title: 'Купить машину',
        },
        {
          id: 5,
          title: 'Почитать книгу',
        },
      ],
    }
  },

  computed: {
    filteredTodos() {
      if (!this.newTodoText) return this.todos

      return this.todos.filter((todo) => {
        return todo.title.includes(this.newTodoText)
      })
    },
    nextTodoId() {
      if (!this.todos || this.todos.length === 0) return 1
      return this.todos[this.todos.length - 1].id + 1
    },
  },

  mounted() {
    // this.updateCurrLink('/activity')

    if (
      !localStorage.getItem('listOfTodos') ||
      localStorage.getItem('listOfTodos') === '[]'
    ) {
      localStorage.setItem('listOfTodos', JSON.stringify(this.todos))
      return
    }
    this.todos = JSON.parse(localStorage.getItem('listOfTodos'))
  },

  methods: {
    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId,
        title: this.newTodoText,
      })
      this.saveItems()
      this.newTodoText = ''
    },
    remove(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id
      })
      this.saveItems()
    },
    saveChange(todo, event) {
      todo.title = event
      this.saveItems()
    },
    saveItems() {
      localStorage.setItem('listOfTodos', JSON.stringify(this.todos))
    },
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: large;
  margin: 2vw;
}

input {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: large;
}
::placeholder {
  font-size: larger;
}
#todo-list-example {
  /* color: blue; */
}

button {
  padding: 0.4em 1.6em;

  /* margin-right: 1em; */
  font-size: large;
}
label {
  font-size: x-large;
}
form {
  margin-bottom: 32px;
}
li {
  margin: 12px 0 12px 6px;
}
</style>
