<script lang="ts" setup>
import { Person } from "~/plugins/customClass";

const myFamily = defineProps<{
  myFamily: Person;
}>();
/** propsを使った処理 **/

</script>

<template>
  <div>
    test
    {{ myFamily }}
    {{typeof myFamily}}
  </div>
</template>

<style scoped></style>
