<template>
  <section>
    <div>
      <label>Name</label>
      <input
          type="text"
          @input="$emit('change-name', $event.target.value)"
      >
    </div>
    <div>
      <label>Age</label>
      <input
          type="text"
          @input="$emit('change-age', $event.target.value)"
      >
    </div>
  </section>
</template>

<script>
export default {
  emits: ['change-name', 'change-age']
}
</script>