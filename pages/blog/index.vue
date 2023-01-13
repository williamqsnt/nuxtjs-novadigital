<template>
    <div>
        <div v-for="p in products">
            <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>
        </div>
    </div>
  </template>
  
  <script>





  </script>
  
  <style lang="scss" scoped></style>