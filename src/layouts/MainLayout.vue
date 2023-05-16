<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          Shop
        </q-toolbar-title>
        <q-input class="q-mr-xl" v-model="searchGoods" label="Search goods" />
        <q-select class="q-mr-xl" standout="bg-teal text-white" v-model="model" :options="options" label="Custom standout" />
        <q-button>
          <q-icon name="shopping_cart" class="shop_icon" />
        </q-button>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Shop</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'


export default defineComponent({
  name: 'MainLayout',
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      searchGoods: '',
      model: ref(null),
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

    }
  }
})
</script>
