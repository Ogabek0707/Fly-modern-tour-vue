<template>
    <AppModal v-model="dialog">
        <div class="w-full flex gap-[20px]">
            <div class="w-[66.6%] m-[30px]">
                <h1 class="text-[17px] text-[#e1ac0c]">{{ t('modal.tittle') }}</h1>
                <h1 class="text-[23px]">{{ t('modal.title2') }}</h1>
                <vee-form :validation-schema="schema" :initial-values="forms" @submit="send" class="w-full text-center m-auto">
                    <div class=" w-full flex gap-[25px]">
                        <VInput type="text" color="color" label="" name="Name" :placeholder="t('modal.name')" class="mt-[20px] w-[47.47%]"></VInput>
                        <VInput type="email" color="color" label="" name="Email" :placeholder="t('modal.email')" class="mt-[20px] w-[47.47%]"></VInput>
                    </div>
                    <VTell type="text" color="color" label="" name="Tell" mask="+998 (##) ### ## ##" :placeholder="t('modal.tel-number')" class="mt-[20px] w-[47.47%]"></VTell>
                    <textarea name="Textarea" rows="5" :placeholder="t('modal.textarea')" class="w-full mt-[20px] py-[17px] px-[25px] text-[13px] outline-none border-gray-400 border-[1px] rounded-[5px] hover:border-black focus:border-blue-500"></textarea>
                    <VButton type="submit" class="bg-[#e1ac0c] text-[15px] w-[47.7%] text-center mt-[25px] mb-[20px] py-[15px]"  @click="send">{{ t('bron.button') }}</VButton>
                </vee-form>
            </div>
            <div class="bg-[#e1ac0c] text-white w-[30%] px-[30px] pt-[30px] pb-[65px]">
                <h1 class=" text-[17px]">{{ t('modal.title3') }}</h1>
                <h2 class=" text-[23px] font-semibold tracking-[0.5px] leading-[1.1] mt-[10px]">{{ t('modal.title4') }}</h2>
                <p class="text-[13px] leading-[24px] my-[40px]">{{ t('modal.text') }}</p>
                <div class="flex">
                    <h1 class="text-[13px] font-bold max-w-[80px]">{{ t('modal.tel-number2') }}</h1>
                    <a href="tel: +998938936707" class="text-[13px] mt-[18px]">+998938936707</a>
                </div>
                <h1 class=" text-[13px] font-bold my-[10px] ">{{ t('modal.email2') }} <br> <a href="#" class="font-medium">ogabekibragimov20@gmail.com</a></h1>
                <h1 class=" text-[13px] font-bold">{{ t('modal.address') }}</h1>
                <a href="#" class=" text-[13px]">{{ t('modal.address2') }}</a>
            </div>
        </div>
    </AppModal>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import AppModal from '@/components/ui/app-modal.vue';
import { ref, computed, watch } from 'vue';
import VInput from '@/components/form/VInput.vue';
import VButton from '@/components/form/VButton.vue';
import VTell from '@/components/form/VTell.vue';

const dialog = ref(false)

const schema = computed(()=>{
  return {
    Name: 'required|min:0|max:25',
    Email: 'required|min:0|max:40',
    Tell: 'required|min:0|max:20',
    // Textarea: 'required|min:0|max:150',
  }
})

const send = (value) => {
    console.log(value);
    if(value.Name) {
        if(value.Email){
            if(value.Tell) {
                alert("Biz tez orada siz bilan bog'lanamiz, rahmat!")
                dialog.value = false
            }
        }
    }
}

const { t, locale } = useI18n()
const lang = ref(locale.value)

const otherLanguages = computed(() => {
  const copy = { ...flags }
  delete copy[lang.value]
  return copy
})
const changeLanguage = (code) => {
  lang.value = code
  locale.value = code
  localStorage.setItem('locale', code)
  show.value = false
}

watch(lang, (val) => {
  locale.value = val
  localStorage.setItem('locale', val)
});

const openModal = () => {
    dialog.value = true
}
defineExpose({openModal});
</script>

<style lang="scss" scoped>

</style>