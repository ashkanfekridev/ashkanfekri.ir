<template>
  <div class="container mx-auto max-w-2xl mt-2 md:p-0 p-4">

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


    <main class="my-8 border-t ">
      <p class="font-black text-2xl my-4 dark:text-white">جدید ترین نوشته</p>
      <div v-for="post in formattedData" class="relative border rounded px-4 py-2 mb-4">
        <h3 class="font-medium text-xl dark:text-white">{{post.title}}</h3>
        <p v-if="post.description" class="dark:text-blue-100">{{post.description}}</p>
        <nuxt-link :to="post.path"><span  class="absolute inset-0"></span></nuxt-link>
      </div>
    </main>

  </div>

</template>

<style>
.shiki.shiki-themes.github-light{
  overflow-x: scroll;
  padding: 8px;
  border-radius: 4px;
  border:1px solid #ccc
}
</style>

<script setup>
const { data } = await useAsyncData('home', () => queryContent().sort({ _id: -1 }).find())


const formattedData = computed(() => {
  return data.value?.map((articles) => {
    return {
      path: articles._path,
      title: articles.title || 'no-title available',
      description: articles.description || '',
      image: articles.image || '/not-found.jpg',
      alt: articles.alt || 'no alter data available',
      ogImage: articles.ogImage || '/not-found.jpg',
      date: articles.date || 'not-date-available',
      tags: articles.tags || [],
      published: articles.published || false,
    }
  }) || []
})




</script>