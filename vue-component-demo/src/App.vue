<template>
  <div class="container">
    <div>{{ message }}</div>
    <div class="row">
      <div class="col-12" v-for="contact in contacts" :key="contact.name">
        <Contact
          :name="contact.name"
          :phone="contact.phone"
          :ownername="contact.ownerName"
          :email="contact.email"
          :isFavorite="contact.isFavorite"
          @update-favorite="contact.isFavorite = onUpdateFavorite($event, contact.phone)"
        ></Contact>
      </div>
    </div>
  </div>

</template>

<script setup>
  import {ref, reactive } from 'vue';
  import Contact from './components/Contact.vue';
  const message = "Hello Vue"
  const ownerName = ref("Jembe")
  const contacts = reactive([
    {
      name: "Opeyemi",
      phone:123456789,
      ownerName: ownerName,
      email:"Opeyemi@example.com",
      isFavorite: true
    },
    {
      name:"Ben",
      phone:5551234567,
      ownerName: ownerName,
      email:"ben@example.com",
      isFavorite: false
    },
    {
      name:"Mike",
      phone:6661234567,
      ownerName: ownerName,
      email:"mike@example.com",
      isFavorite: true
    }
  ]);
  function onUpdateFavorite(oldValuesFromChildComponent, phoneNumberFromParent){
    console.log(phoneNumberFromParent)
    console.log(oldValuesFromChildComponent)
    // return !oldValuesFromChildComponent[0];
    return !oldValuesFromChildComponent.isFavorite;
  };
</script>

<style></style>