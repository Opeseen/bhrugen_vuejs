<template>
  <div class="bg-gray-600 text-gray-100 py-3 px-6 shadow md:flex justify-between items-center">
    <div class="flex items-center cursor-pointer">
      <span class="text-green-500 text-xl mr-1"></span>
      <h3 class="px-2 py-2 m-2 text-xl">Icon</h3>
    </div>
    <ul class="md:flex md:items-center">
      <li class="px-2 py-2 text-sm font-medium m-2">
        <router-link to="/" class="text-xl hover:text-violet-500">Home</router-link>
      </li>
      <li class="px-2 py-2 text-sm font-medium m-2">
        <a href="#" class="text-xl hover:text-violet-500">About</a>
      </li>
      <li class="px-2 py-2 text-sm font-medium m-2">
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton class="inline-flex w-full justify-center rounded-md bg-black/20 px-2 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">Employee
              <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100" aria-hidden="true"/>
            </MenuButton>
          </div>
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <router-link :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900','group flex w-full items-center rounded-md px-2 py-2 text-sm',]" to="/employee">View Employee</router-link>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <router-link :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900','group flex w-full items-center rounded-md px-2 py-2 text-sm',]" :to="{ name: 'addEmployee' }">Create Employee</router-link>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </li>
      <li class="px-2 py-2 text-sm font-medium m-2">
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton class="inline-flex w-full justify-center rounded-md bg-black/20 px-2 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">PayGroup
              <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100" aria-hidden="true"/>
            </MenuButton>
          </div>
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }">
                  <router-link :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900','group flex w-full items-center rounded-md px-2 py-2 text-sm',]" to="#">View PayGroup</router-link>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900','group flex w-full items-center rounded-md px-2 py-2 text-sm',]">Create PayGroup</button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </li>
      <li type="button" class="px-4 py-2 text-sm font-medium m-2 max-w-30 bg-blue-400 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
        Login
      </li>
      <li type="button" class="px-4 py-2 text-sm font-medium m-2 max-w-30 bg-blue-400 text-white rounded-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
        Signup
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { ChevronDownIcon } from '@heroicons/vue/20/solid'
</script>

<style scoped>
</style>
