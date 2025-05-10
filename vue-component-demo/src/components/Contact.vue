<template>
  <div class="bg-info rounded p-1 pb-4 m-1">
    <div class="row">
      <div class="col-6">
        <h3>Name : {{ name }}</h3>
        <p>Email : {{ email }}</p>
        <p>Phone : {{ phone }}</p>
      </div>
      <!-- <div @click="toggleFavorite" class="col-3">
        <button :class="[isFavorite ? 'btn btn-warning' : 'btn btn-success']">
          {{ isFavorite ? "Remove from" : "Add to" }} Favorite
        </button>
      </div> -->
      <div @click="emit('update-favorite', {isFavorite:props.isFavorite, name:props.name})" class="col-3">
        <button :class="[isFavorite ? 'btn btn-warning' : 'btn btn-success']">
          {{ isFavorite ? "Remove from" : "Add to" }} Favorite
        </button>
      </div>
    </div>
    <span class="float-end small" v-if="ownername != ''">
      this contact is owned by {{ name }}
    </span>
  </div>
</template>

<script setup>
 // defineProps and ref might not be imported but will still work 
  const props = defineProps({
    name: {type: String, required: true},
    phone: Number, 
    ownername: String,
    email: {type: String, required: false, default:"hello@examplevue.com"},
    isFavorite: Boolean,
  });

  const emit = defineEmits(["update-favorite"]);

  function toggleFavorite() {
    // emit("update-favorite", [props.isFavorite, props.name]);
    // emit("update-favorite", {isFavorite:props.isFavorite, name:props.name});
  };
</script>