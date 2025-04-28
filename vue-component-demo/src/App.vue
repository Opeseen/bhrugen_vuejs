<template>
  <div>Hello World!</div>
  <div>{{ message }}</div>
</template>

<script>
  export default{
    setup(){
      const message = "Hello Vue!js 3!"
      return { message };
    }
  }
</script>

<style></style>