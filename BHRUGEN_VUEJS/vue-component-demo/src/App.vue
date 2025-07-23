<template>
  <div class="bg text pt-3" :style="{ height: '100vh' }">
    <h1 class="text-center text-success">ContactOpedia</h1>
    <div class="container">
      <div class="row text-dark p-2 mb-2">
        <div class="col-6">
          Owner Name:
          <input class="border rounded" v-model="ownerName" readonly />
        </div>
        <div class="col-6 text-end">
          Max Lucky Number:
          <input class="border rounded" v-model.number="maxNumber" />
        </div>
      </div>

      <br />
      <AddContact @add-contact="onAddContact"></AddContact>
      <div class="row">
        <div class="col-12" v-for="contact in contacts" :key="contact.name">
          <Contact
            :name="contact.name"
            :phone="contact.phone"
            :ownername="contact.ownerName"
            :email="contact.email"
            :isFavorite="contact.isFavorite"
            :maxLuckyNumber="maxNumber"
            @update-favorite="
              contact.isFavorite = onUpdateFavorite($event, contact.phone)
            "
          ></Contact>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import Contact from "./components/Contact.vue";
import AddContact from "./components/AddContact.vue";
const ownerName = ref("Mr Yomi");
const maxNumber = ref(100);
const contacts = reactive([
  {
    name: "Opeyemi",
    phone: 123456789,
    ownerName: ownerName,
    email: "Opeyemi@example.com",
    isFavorite: true,
  },
  {
    name: "Ben",
    phone: 5551234567,
    ownerName: ownerName,
    email: "ben@example.com",
    isFavorite: false,
  },
  {
    name: "Mike",
    phone: 6661234567,
    ownerName: ownerName,
    email: "mike@example.com",
    isFavorite: true,
  },
]);

function onAddContact(contact) {
  contact.ownerName = ownerName.value;
  contact.isFavorite = false;
  contacts.push(contact);
}
function onUpdateFavorite(oldValuesFromChildComponent, phoneNumberFromParent) {
  console.log(phoneNumberFromParent);
  console.log(oldValuesFromChildComponent);
  // return !oldValuesFromChildComponent[0];
  return !oldValuesFromChildComponent.isFavorite;
}
</script>

<style></style>
