<template>
  <div id="pleaseEnterNameForm" class="turquoiseBackground">
    <h2>Chat Room Application</h2>
    <login-form/>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'home',
  components: {
    LoginForm,
  },
};
</script>
