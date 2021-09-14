<template>
  <form v-on:submit.prevent="$emit('createTodo')">
    <label for="new-todo">Задача: </label>
    <!-- v-model="newTodoText" -->
    <input
      :value="newTodoText"
      @input="$emit('newTodoText:update', $event.target.value)"
      id="new-todo"
      placeholder="Введите Вашу новую задачу"
      class="newTask-input"
    />
    <button>Добавить</button>
  </form>
</template>

<script>
export default {
  props: { newTodoText: String },
}
</script>

<style scoped>
label {
  font-size: x-large;
}
input {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: large;
}
.newTask-input {
  width: 25%;
  padding: 0.4em;
}
button {
  padding: 0.4em 1.6em;
  font-size: large;
}
</style>
