<template>
  <div class="container mx-auto max-w-2xl mt-16 md:p-0 p-4">
    <button
        class="text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 border rounded-md p-2 inline-block mb-16"
        v-on:click="toggleDarkMode">{{ message }}
    </button>

    <section id="about-me" class="">
      <div class="md:flex items-center">
        <img src="/assets/images/avatar-ashkan-fekri.png" alt="ashkan_fekri-avatar"
             class="w-44 h-44 rounded-xl mx-auto">
        <div class="flex-auto md:mr-4 mt-4 md:mt-0">
          <div class="content">
            <p class="text-xl font-black text-gray-800 dark:text-gray-100">سلام<span class="">👋</span>اشکان هستم، به
              برنامه نویسی و توسعه نرم افزار علاقه مندم.</p>
            <p class="text-lg font-medium text-gray-600 dark:text-gray-500">اینجاهم راجب روزمرگیم و اتفاقاتی که برام پیش
              میاد مینویسم که کمی شخصی هستش و هم فنی.</p>
            <div class="flex items-center flex-wrap gap-4 mt-2">
              <a href="https://github.com/ashkanfekridev"
                 class="text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 border rounded-md p-2 inline-block">گیت
                هاب</a>
              <a href="https://instagram.com/ashkanfekridev"
                 class="text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 border rounded-md p-2 inline-block">اینستاگرام</a>
              <a href="https://x.com/ashkanfekridev"
                 class="text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 border rounded-md p-2 inline-block">ایکس(توبیتر)</a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>

</template>

<style scoped>

</style>
<script setup>
const message = useState('message', () => 'فعال سازی حالت شب🌙')
const theme = useState('theme')




onBeforeMount(()=>{

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