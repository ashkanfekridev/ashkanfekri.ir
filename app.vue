<template>
  <NuxtPage/>
</template>
<script>

export default {
  mounted() {
    /**
     * RTL
     */
    document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
  }
}
</script>
