<template>
  <header class="sticky top-0 z-10">
    <div class="bg-gray-600 text-gray-100 py-3 px-6 shadow md:flex justify-between items-center">
      <div class="flex items-center cursor-pointer">
        <span class="text-green-500 text-xl mr-1"></span>
        <!-- Logos -->
        <RouterLink :to="{name: APP_ROUTE_NAMES.HOME}">
          <svg class="w-16 h-16 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>
        </RouterLink>
      </div>
      <!--navigation -->
      <ul class="md:flex md:items-center">
        <li class="px-2 py-2 text-sm font-medium m-2">
          <RouterLink :to="{name: APP_ROUTE_NAMES.HOME}" class="text-xl hover:text-violet-500">Home</RouterLink>
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
                    <RouterLink :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900','group flex w-full items-center rounded-md px-2 py-2 text-sm',]" :to="{name: APP_ROUTE_NAMES.ADD_EMPLOYEE}">Create Employee</RouterLink>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <RouterLink :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900','group flex w-full items-center rounded-md px-2 py-2 text-sm',]" :to="{name: APP_ROUTE_NAMES.LIST_EMPLOYEE}">View Employee</RouterLink>
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
                    <RouterLink :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900','group flex w-full items-center rounded-md px-2 py-2 text-sm',]" to="#">View PayGroup</RouterLink>
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
  </header>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { APP_ROUTE_NAMES } from '../../constants/routeNames';
</script>

<style scoped>
</style>
