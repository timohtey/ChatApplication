<template>
  <div>
    <form action="">
      <p>Please enter name to proceed</p>
      <input id="userName" class="formInput" type="text" autocomplete="off">
      <button class="turquoiseBackground">Enter</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
    msg: String,
  },
};
</script>
