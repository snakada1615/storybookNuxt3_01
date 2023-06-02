<template>
  <div>
    test
    {{ myFamily }}
  </div>
</template>

<script lang="ts" setup>
import { Person } from "~/plugins/customClass";

type Props = {
  myFamily: Person;
  title: string;
};

const { myFamily, title} = defineProps<Props>();
/** propsを使った処理 **/

</script>

<style scoped></style>
