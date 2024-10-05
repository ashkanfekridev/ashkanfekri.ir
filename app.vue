<template>
  <header id="header">
    <div class="container mx-auto max-w-2xl mt-8 md:p-0 p-4">
      <div class="flex items-center mb-8">
        <a href="/" class="font-black text-2xl">اشکان فکری</a>
        <button
            class="mr-auto text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 border rounded-md p-2 inline-block"
            v-on:click="toggleDarkMode">{{ message }}
        </button>
      </div>

    </div>
  </header>
  <NuxtPage/>
</template>
<script setup>

const message = useState('message', () => 'فعال سازی حالت شب🌙')
const theme = useState('theme')

onBeforeMount(() => {
  /**
   * RTL
   */
  document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");

  if (localStorage.theme && localStorage.theme === "dark") {
    document.documentElement.classList.add('dark')
    message.value = 'فعال سازی حالت روز☀️'
  } else {
    message.value = 'فعال سازی حالت شب🌙'
  }
})

const toggleDarkMode = () => {
  if (document.documentElement.classList.item('dark') === null) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    console.log('dark')
    message.value = 'فعال سازی حالت روز☀️'
  } else if (localStorage.theme === 'dark') {
    document.documentElement.classList.remove('dark')
    localStorage.removeItem('theme')
    console.log('light')
    message.value = 'فعال سازی حالت شب🌙'
  }
}

</script>
