<template>
      <div class="flex flex-col">
            <label :for="name" class="text-black text-start font-[500] text-[18px] block">{{ label }}</label>
            <vee-field v-if="size" :type="type" :name="name" :rules="sizeRule" :placeholder="placeholder" class="py-[6px] px-[12px] text-[13px] outline-none border-gray-400 border-[1px] rounded-[5px] mt-1.5 hover:border-black focus:border-blue-500"/>
            <vee-field v-if="color" :type="type" :name="name" :placeholder="placeholder" class="bg-[#fafafa00] py-[16px] px-[12px]  text-[13px] outline-none border-gray-400 border-[1px] rounded-[5px] mt-1.5 hover:border-black focus:border-blue-500"/>
            <vee-field v-else :type="type" :name="name" :placeholder="placeholder" class="py-[16px] px-[12px] text-[13px] outline-none border-gray-400 border-[1px] rounded-[5px] mt-1.5 hover:border-black focus:border-blue-500"/>
            <ErrorMessage :name="name" class="text-red-600 mt-2 mb-[-5px] ml-4 text-[17px] font-medium text-start"/>
      </div>
</template>

<script setup>
const props = defineProps({
      type:{
            type: String,
      },
      type2:{
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
      color:{
            type: String
      }
})
const sizeRule = props.name === 'size' ? 'required|validSize' : 'required';
</script>

<style lang="scss" scoped>

</style>