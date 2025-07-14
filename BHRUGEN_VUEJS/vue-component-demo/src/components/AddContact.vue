<template>
  <div class="container border rounded p-2">
    <div class="text-center text-white"> Add New Contact</div>
    <form @submit.prevent="addContact">
      <div class="row">
        <div class="col-4">
          <input type="text" class="form-control" v-model="contact.name" placeholder="Name">
        </div>
        <div class="col-4">
          <input type="text" class="form-control" v-model="contact.email" placeholder="Email">
        </div>
        <div class="col-4">
          <input type="text" class="form-control" v-model.number="contact.phone" placeholder="Phone">
        </div>
        <div class="col-6 offset-3 p-2">
          <button type="submit" class="btn btn-secondary w-100">Add Contact</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
  import {reactive} from 'vue';
  const emit = defineEmits(["add-contact"]);
  const contact = reactive({
    name:"",
    phone:"",
    email:"",
  });

  function addContact(){
    if(!contact.name || !contact.email || !contact.phone ){
      return alert("Missing required fields");
    }
    emit("add-contact", {
      name: contact.name,
      phone: contact.phone,
      email: contact.email
    });
    console.log(contact);
    contact.email="";
    contact.name=="";
    contact.phone="";
  };
</script>