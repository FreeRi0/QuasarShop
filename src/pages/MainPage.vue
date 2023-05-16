<template>
<slider></slider>
<h3 class="text-center">Our Goods</h3>
  <q-page class="flex flex-center">
    <div
      class="q-pa-md row items-start q-gutter-md"
      v-for="item of shop_goods"
      :key="item.id"
    >
    <q-card class="my-card" flat bordered>
         <router-link :to="{ path: '/Info' }">
          <q-img :src="require('../assets/img/' + item.images)" />
         </router-link>
        <q-card-section>
          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              {{ item.title }}
            </div>
          </div>

          <q-rating v-model="item.rating" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">{{ item.price }} $</div>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn flat color="primary"> Add to cart </q-btn>
        </q-card-actions>
      </q-card>
    </div>


  </q-page>
</template>

<script>
import slider from "src/components/slider.vue";
import { computed, defineComponent, ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { data } from "src/queries/queries";
export default {
  components: {
    slider,
  },
  setup() {
    const { result, loading, error } = useQuery(data);

    const shop_goods = computed(() => result.value?.shop_goods ?? []);
    return {
      result,
      shop_goods,
      loading,
      error,
    };
  },
};
</script>
