<template>
    <div class="flex flex-col">
          <label :for="name" class="text-black font-[500] text-[20px] block">{{ label }}</label>
          <vee-field v-if="mask" v-model="phone" :type="type" masked="true" v-mask="mask" :name="name" :placeholder="placeholder" class="py-[16px] px-[12px] text-[13px] outline-none border-gray-400 border-[1px] rounded-[5px] mt-1.5 hover:border-black focus:border-blue-500"/>
          <vee-field v-else v-model="phone" :type="type" :name="name" :placeholder="placeholder" class="py-[16px] px-[12px] text-[13px] outline-none border-gray-400 border-[1px] rounded-[5px] mt-1.5 hover:border-black focus:border-blue-500"/>
          <ErrorMessage :name="name" class="text-red-600 mt-2 ml-4 mb-[-5px] text-[17px] font-medium text-start"/>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    type:{
          type: String,
    },
    name:{
          type: String
    },
    label:{
          type: String
    },
    placeholder:{
          type: String
    },
    mask:{
          type: String
    }
})
const phone = ref('');
watch(phone, (newVal, oldVal) => {
  phone.value = newVal ? `+998 ${newVal}` : '';
});
</script>

<style lang="scss" scoped>

</style>