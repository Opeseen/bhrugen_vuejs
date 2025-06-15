<template>
  <li type="button" class="px-6 py-2 m-2 max-w-30 bg-blue-400 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-110">
    <slot></slot>
  </li>
  <!-- Display the sign up button in green hover -->
  <slot name="signUpButton"></slot>
</template>