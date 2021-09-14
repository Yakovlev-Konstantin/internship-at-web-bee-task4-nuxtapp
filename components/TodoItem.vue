<template>
  <div class="item">
    <template v-if="!isBeingChanged">
      <span>{{ title }}</span>
      <button @click="onChange">Изменить</button>
    </template>
    <template v-else>
      <input
        v-model="changedTodoText"
        placeholder="Например, покормить кота"
        class="changingTask-input"
      />
      <button @click="onSave">Сохранить</button>
      <button @click="onCancel">Отменить изменения</button>
    </template>
    <button @click="$emit('remove')">Удалить задачу</button>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    title: String,
  },
  data() {
    return {
      changedTodoText: '',
      isBeingChanged: false,
    }
  },
  methods: {
    stateBeingChangedSwitch() {
      this.isBeingChanged = !this.isBeingChanged
    },
    onSave() {
      this.$emit('savechange', this.changedTodoText)
      this.stateBeingChangedSwitch()
    },
    onCancel() {
      this.changedTodoText = ''
      this.stateBeingChangedSwitch()
    },
    onChange() {
      this.changedTodoText = this.title
      this.stateBeingChangedSwitch()
    },
  },
}
</script>

<style scoped>
.item {
  margin: 1vw;
}
input {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: large;
}
::placeholder {
  font-size: larger;
}
.changingTask-input {
  width: 15%;
  padding: 0.4em;
}
button {
  padding: 0.4em 1.6em;
  font-size: large;
}
span {
  margin-right: 40px;
}
</style>
