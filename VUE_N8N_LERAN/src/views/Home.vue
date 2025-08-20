<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="">
    <div class="mt-10">
      <div class="flex text-2xl justify-center items-center">
        <h1 class="border rounded-lg px-2 py-2 bg-gray-500 text-white font-medium">
          Testing n8n Webhook
        </h1>
      </div>
      <div class="flex min-h-[300px] justify-center items-center">
        <div class="border border-blue-200 max-w-4xl mx-auto p-4 shadow rounded-lg">
          <form>
            <div class="grid grid-cols-3 gap-4">
              <div class="">
                <span class="block text-sm/6 font-medium text-gray-900 text-center"
                  >First name</span
                >
                <div class="mt-2">
                  <input
                    type="text"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div class="">
                <span class="block text-sm/6 font-medium text-gray-900 text-center">Last name</span>
                <div class="mt-2">
                  <input
                    type="text"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div class="">
                <span class="block text-sm/6 font-medium text-gray-900 text-center">Email</span>
                <div class="mt-2">
                  <input
                    type="text"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div class="">
                <span class="block text-sm/6 font-medium text-gray-900 text-center"
                  >Nationality</span
                >
                <div class="mt-2">
                  <input
                    type="text"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div class="">
                <span class="block text-sm/6 font-medium text-gray-900 text-center">City</span>
                <div class="mt-2">
                  <input
                    type="text"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div class="">
                <span class="block text-sm/6 font-medium text-gray-900 text-center">Other</span>
                <div class="mt-2">
                  <input
                    type="text"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            <div class="mt-10">
              <button type="button" class="bg-blue-500 px-2 py-2 text-white font-medium rounded-lg">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>
