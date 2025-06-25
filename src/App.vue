<template>
  <div class="w-full h-full">
    <header class="w-full h-[120px] flex justify-around items-center">
      <div class="w-[200px]">
        <img src="./assets//images/Screenshot 2025-06-21 at 21.35.40.png" alt="">
      </div>
      <nav class="mr-[-60px]">
        <ul class="w-[691px] flex justify-between items-center text-[17px] font-bold">
          <li class="transition-all duration-500 text-[#121212] hover:text-[#e1ac0c] cursor-pointer">{{ t('header.home')
          }}</li>
          <a href="#Featured-places"
            class="transition-all duration-500 text-[#121212] hover:text-[#e1ac0c] cursor-pointer">{{
              t('header.about') }}</a>
          <li class="transition-all duration-500 text-[#121212] hover:text-[#e1ac0c] cursor-pointer">{{
            t('header.tours') }}</li>
          <li class="transition-all duration-500 text-[#121212] hover:text-[#e1ac0c] cursor-pointer">{{
            t('header.contact') }}</li>
          <div class="" ref="dropdownRef">
            <!-- Hozirgi til -->
            <button @click="toggleDropdown"
              class="flex items-center gap-2 px-4 py-2 border-[1.5px] border-[#e1ac0c] rounded cursor-pointer">
              <img :src="flags[lang]" alt="flag" class="w-6 h-4 rounded" />
              <span class="capitalize">{{ lang }}</span>
            </button>

            <!-- Dropdown -->
            <div v-show="show"
              class="absolute z-30 mt-2 w-[87.51px] bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)] border border-gray-200">
              <ul>
                <li v-for="(flag, code) in otherLanguages" :key="code"
                  class="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  @click="changeLanguage(code)">
                  <img :src="flag" alt="flag" class="w-6 h-4 rounded" />
                  <span class="capitalize">{{ code }}</span>
                </li>
              </ul>
            </div>
          </div>
        </ul>
      </nav>
    </header>

    <section id="Banner" class="w-full h-[712px] bg-cover bg-center bg-no-repeat relative img flex justify-center">
      <div class="w-[81%] flex justify-center pt-[180px]">
        <div class="lg:w-10/13 text-start text-white">
          <div class="h-[246px]">
            <div class="w-[80px] h-[5px] bg-[#e1ac0c] "></div>
            <h1 class="mt-5 text-[42px]">{{ t('banner.title') }}</h1>
            <p class="mt-5 text-[22px] w-[90%]">{{ t('banner.subtitle') }}</p>
            <button
              class="mt-6 bg-[#e1ac0c] text-white px-6 py-3 font-semibold rounded hover:bg-[#c8960a] transition-all cursor-pointer">
              {{ t('banner.button') }}
            </button>
          </div>

          <!-- Forma qismi -->
          <div class="w-full mt-[199px]">
            <div
              class="w-full bg-white text-gray-500 flex gap-2 px-4 py-4 items-center border-b-[5px] border-[#e1ac0c]">
              <input type="text" :placeholder="t('banner.form.name')"
                class="flex-1 p-3 border rounded outline-none placeholder-gray-500" />
              <input type="text" :placeholder="t('banner.form.address')"
                class="flex-1 p-3 border rounded outline-none placeholder-gray-500" />
              <input type="date" placeholder="22/07/2025"
                class="p-3 border rounded outline-none placeholder-gray-500" />
              <button
                class="bg-[#e1ac0c] text-white px-5 py-3 rounded hover:bg-[#c8960a] transition-all cursor-pointer">
                {{ t('banner.form.button') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="Popular-places" class="h-[440px] pt-[80px]">
      <div class="text-center h-[123px]">
        <h1 class="text-[#e1ac0c] text-[17px]">{{ t('popular-places.title') }}</h1>
        <p class="text-[#232323] mt-[14px] text-[23px] font-medium">{{ t('popular-places.subtitle') }}</p>
      </div>
      <div class="w-full px-[15px]">
        <Swiper v-bind="swiperOptions" class="hmySwiper">
          <SwiperSlide class="relative">
            <img src="./assets/images/istanbul.png" class="w-[264px] h-[171.59px] object-cover rounded" />
            <div class="absolute bottom-[20px] left-[18px] text-white text-lg">
              <h1 class="text-[19px] font-medium">{{ t('popular-places.istanbul.title') }}</h1>
              <p class="text-[13px] font-light">{{ t('popular-places.istanbul.text') }}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide class="relative">
            <img src="./assets/images/sharm.png" class="w-[264px] h-[171.59px] object-cover rounded" />
            <div class="absolute bottom-[20px] left-[18px] text-white text-lg">
              <h1 class="text-[19px] font-medium">{{ t('popular-places.sharm.title') }}</h1>
              <p class="text-[13px] font-light">{{ t('popular-places.sharm.text') }}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide class="relative">
            <img src="./assets/images/Tailand.png" class="w-[264px] h-[171.59px] object-cover rounded" />
            <div class="absolute bottom-[20px] left-[18px] text-white text-lg">
              <h1 class="text-[19px] font-medium">{{ t('popular-places.tailand.title') }}</h1>
              <p class="text-[13px] font-light">{{ t('popular-places.tailand.text') }}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide class="relative">
            <img src="./assets/images/Argentina.png" class="w-[264px] h-[171.59px] object-cover rounded" />
            <div class="absolute bottom-[20px] left-[18px] text-white text-lg">
              <h1 class="text-[19px] font-medium">{{ t('popular-places.argentina.title') }}</h1>
              <p class="text-[13px] font-light">{{ t('popular-places.argentina.text') }}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide class="relative">
            <img src="./assets/images/dubai2.png" class="w-[264px] h-[171.59px] object-cover rounded" />
            <div class="absolute bottom-[20px] left-[18px] text-white text-lg">
              <h1 class="text-[19px] font-medium">{{ t('popular-places.dubai.title') }}</h1>
              <p class="text-[13px] font-light">{{ t('popular-places.dubai.text') }}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide class="relative">
            <img src="./assets/images/saudi.png" class="w-[264px] h-[171.59px] object-cover rounded" />
            <div class="absolute bottom-[20px] left-[18px] text-white text-lg">
              <h1 class="text-[19px] font-medium">{{ t('popular-places.saudi.title') }}</h1>
              <p class="text-[13px] font-light">{{ t('popular-places.saudi.text') }}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <section id="Visit-country" class="pt-[30px] mb-[30px]">
      <div class="w-[1170px] ml-[10%]">
        <div class="w-full pt-[20px]">
          <h1 class="text-[30px]">{{ t('visit-country.title') }}</h1>
        </div>
        <div class="mt-[20px] ml-[15px] flex gap-[35px]">
          <img src="./assets/images/train.png" class="max-w-[294px] rounded-[20px]" alt="">
          <div>
            <h1 class="text-[30px] mt-[10px]">{{ t('visit-country.train.title') }}</h1>
            <h2 class="text-[14px] text-[#2c343b]">{{ t('visit-country.train.title2') }}</h2>
            <p class="text-[13px] text-[#7a7a7a] leading-[24px] max-w-[640px] mt-[7px]">{{ t('visit-country.train.text')
            }}</p>
          </div>
        </div>
        <div class="mt-[30px] ml-[15px] flex gap-[35px]">
          <img src="./assets/images/plane.png" class="max-w-[294px] rounded-[20px]" alt="">
          <div>
            <h1 class="text-[30px] max-w-[600px] leading-[1.1]">{{ t('visit-country.plane.title') }}</h1>
            <h2 class="text-[14px] mt-[7px] text-[#2c343b]">{{ t('visit-country.plane.title2') }}</h2>
            <p class="text-[13px] text-[#7a7a7a] leading-[24px] max-w-[630px] mt-[7px]">{{ t('visit-country.plane.text')
            }}</p>
          </div>
        </div>
        <div class="mt-[30px] ml-[15px] flex gap-[35px]">
          <img src="./assets/images/dubai2.png" class="max-w-[294px] rounded-[20px]" alt="">
          <div>
            <h1 class="text-[30px] ml-[15px] leading-[1.1]">{{ t('visit-country.dubai.title') }}</h1>
            <h2 class="text-[14px] text-[#2c343b] mt-[7px]">{{ t('visit-country.dubai.title2') }}</h2>
            <p class="text-[13px] text-[#7a7a7a] leading-[24px] max-w-[630px] mt-[7px]">{{ t('visit-country.dubai.text')
            }}</p>
          </div>
        </div>
        <div class="mt-[30px] ml-[15px] flex gap-[35px]">
          <img src="./assets/images/antalya.png" class="max-w-[294px] rounded-[20px]" alt="">
          <div>
            <h1 class="text-[30px] mt-[18px]">{{ t('visit-country.antalya.title') }}</h1>
            <h2 class="text-[14px] text-[#2c343b]">{{ t('visit-country.antalya.title2') }}</h2>
            <p class="text-[13px] text-[#7a7a7a] leading-[24px] max-w-[640px] mt-[7px]">{{
              t('visit-country.antalya.text') }}</p>
          </div>
        </div>
        <div class="mt-[30px] ml-[15px] flex gap-[35px]">
          <img src="./assets/images/sharm.png" class="max-w-[294px] rounded-[20px]" alt="">
          <div>
            <h1 class="text-[30px] mt-[18px]">{{ t('visit-country.sharm.title') }}</h1>
            <h2 class="text-[14px] text-[#2c343b]">{{ t('visit-country.sharm.title2') }}</h2>
            <p class="text-[13px] text-[#7a7a7a] leading-[24px] max-w-[640px] mt-[7px]">{{ t('visit-country.sharm.text')
            }}</p>
          </div>
        </div>
        <div class="mt-[30px] ml-[15px] flex gap-[35px]">
          <img src="./assets/images/istanbul2.png" class="max-w-[294px] rounded-[20px]" alt="">
          <div>
            <h1 class="text-[30px] mt-[18px]">{{ t('visit-country.istanbul.title') }}</h1>
            <h2 class="text-[14px] text-[#2c343b]">{{ t('visit-country.istanbul.title2') }}</h2>
            <p class="text-[13px] text-[#7a7a7a] leading-[24px] max-w-[640px] mt-[7px]">{{
              t('visit-country.istanbul.text') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="Featured-places" class="pt-[80px]">
      <div class="w-full h-full bg-[#f4f4f4] pt-[80px] pb-[80px] px-[10%]">
        <div class="max-w-[1170px] text-center">
          <h1 class="text-[17px] text-[#e1ac0c] block ">{{ t('featured-places.title') }}</h1>
          <h2 class="text-[23px] text-[#232323] mt-[12px]">{{ t('featured-places.title2') }}</h2>
        </div>
        <div class="mt-[60px] flex gap-[33.3px]">
          <div class="w-[33.3%] bg-white h-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] rounded-[5px]">
            <div class="relative">
              <img src="./assets/images/dubai.png" class="rounded-tl-[5px] rounded-tr-[5px]" alt="">
              <div class="absolute left-[30px] top-[30px] flex gap-[3px]">
                <svg-icon type="mdi" :path="mdiStar" class="text-white w-[18px]"></svg-icon>
                <svg-icon type="mdi" :path="mdiStar" class="text-white w-[18px]"></svg-icon>
                <svg-icon type="mdi" :path="mdiStar" class="text-white w-[18px]"></svg-icon>
                <svg-icon type="mdi" :path="mdiStar" class="text-white w-[18px]"></svg-icon>
                <svg-icon type="mdi" :path="mdiStar" class="text-white w-[18px]"></svg-icon>
              </div>
            </div>
            <div class="w-full pt-[20px] pr-[20px] pl-[20px]">
              <h1 class="text-[19px]">{{ t('featured-places.dubai.title') }}</h1>
              <h2 class="mb-[15px] mt-[2px] text-[13px] text-[#e1ac0c]">{{ t('featured-places.dubai.title2') }}</h2>
              <p class="text-[13px] text-[#7a7a7a] leading-[24px] ">{{ t('featured-places.dubai.text') }}</p>
            </div>
            <div class="w-full mt-[20px] border-t-[1px] border-[#7a7a7a]"></div>
            <div class="w-full flex">
              <a href="tel:+998 93 893 67 07"
                class="text-[#7a7a7a] w-[50%] p-[15px] pt-[15px] text-[12px] h-full tracking-[0.5px] text-center border-r-[1px] border-[#7a7a7a] hover:text-[#e1ac0c] cursor-pointer">{{
                  t('featured-places.button') }}</a>
              <a href=""
                class="text-[#7a7a7a] w-[50%] p-[15px] pt-[15px] text-[12px] h-full tracking-[0.5px] text-center hover:text-[#e1ac0c] cursor-pointer">{{
                  t('featured-places.button2') }}</a>
            </div>
          </div>
          <div class="w-[33.3%] bg-white h-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] rounded-[5px]">
            <div class="relative">
              <img src="./assets/images/istanbul.png" class="rounded-tl-[5px] rounded-tr-[5px]" alt="">
              <div class="absolute left-[30px] top-[30px] flex gap-[3px]">
                <svg-icon type="mdi" :path="mdiStar" class="text-white w-[18px]"></svg-icon>
                <svg-icon type="mdi" :path="mdiStar" class="text-white w-[18px]"></svg-icon>
                <svg-icon type="mdi" :path="mdiStar" class="text-white w-[18px]"></svg-icon>
                <svg-icon type="mdi" :path="mdiStar" class="text-white w-[18px]"></svg-icon>
                <svg-icon type="mdi" :path="mdiStar" class="text-white w-[18px]"></svg-icon>
              </div>
            </div>
            <div class="w-full pt-[20px] pr-[20px] pl-[20px]">
              <h1 class="text-[19px]">{{ t('featured-places.turkey.title') }}</h1>
              <h2 class="mb-[15px] mt-[2px] text-[13px] text-[#e1ac0c]">{{ t('featured-places.turkey.title2') }}</h2>
              <p class="text-[13px] text-[#7a7a7a] leading-[24px] ">{{ t('featured-places.turkey.text') }}</p>
            </div>
            <div class="w-full mt-[20px] border-t-[1px] border-[#7a7a7a]"></div>
            <div class="w-full flex">
              <a href="tel:+998 93 893 67 07"
                class="text-[#7a7a7a] w-[50%] p-[15px] pt-[15px] text-[12px] h-full tracking-[0.5px] text-center border-r-[1px] border-[#7a7a7a] hover:text-[#e1ac0c] cursor-pointer">{{
                  t('featured-places.button') }}</a>
              <a href=""
                class="text-[#7a7a7a] w-[50%] p-[15px] pt-[15px] text-[12px] h-full tracking-[0.5px] text-center hover:text-[#e1ac0c] cursor-pointer">{{
                  t('featured-places.button2') }}</a>
            </div>
          </div>
          <div class="w-[33.3%] bg-white h-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] rounded-[5px]">
            <div class="relative">
              <img src="./assets/images/sharm2.png" class="rounded-tl-[5px] rounded-tr-[5px]" alt="">
              <div class="absolute left-[30px] top-[30px] flex gap-[3px]">
                <svg-icon type="mdi" :path="mdiStar" class="text-white w-[18px]"></svg-icon>
                <svg-icon type="mdi" :path="mdiStar" class="text-white w-[18px]"></svg-icon>
                <svg-icon type="mdi" :path="mdiStar" class="text-white w-[18px]"></svg-icon>
                <svg-icon type="mdi" :path="mdiStar" class="text-white w-[18px]"></svg-icon>
                <svg-icon type="mdi" :path="mdiStar" class="text-white w-[18px]"></svg-icon>
              </div>
            </div>
            <div class="w-full pt-[20px] pr-[20px] pl-[20px]">
              <h1 class="text-[19px]">{{ t('featured-places.sharm.title') }}</h1>
              <h2 class="mb-[15px] mt-[2px] text-[13px] text-[#e1ac0c]">{{ t('featured-places.sharm.title2') }}</h2>
              <p class="text-[13px] text-[#7a7a7a] leading-[24px] ">{{ t('featured-places.sharm.text') }}</p>
            </div>
            <div class="w-full mt-[20px] border-t-[1px] border-[#7a7a7a]"></div>
            <div class="w-full flex">
              <a href="tel:+998 93 893 67 07"
                class="text-[#7a7a7a] w-[50%] p-[15px] pt-[15px] text-[12px] h-full tracking-[0.5px] text-center border-r-[1px] border-[#7a7a7a] hover:text-[#e1ac0c] cursor-pointer">{{
                  t('featured-places.button') }}</a>
              <a href=""
                class="text-[#7a7a7a] w-[50%] p-[15px] pt-[15px] text-[12px] h-full tracking-[0.5px] text-center hover:text-[#e1ac0c] cursor-pointer">{{
                  t('featured-places.button2') }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="Services" class="w-full px-[10%] pt-[80px] box-border">
      <div class="text-center">
        <h1 class="text-[17px] text-[#e1ac0c]">{{ t('services.title') }}</h1>
        <h2 class="text-[23px] mt-[14px] tracking-[0.5px]">{{ t('services.title2') }}</h2>
      </div>
      <div class="mt-[60px] flex gap-[33.3px]">
        <div class="max-w-[31%] border border-[#ddd] py-[50px] px-[30px] rounded-[10px]">
          <div class="text-center">
            <div class="flex justify-center items-center">
              <img src="./assets/images/service_icon.png" alt="">
            </div>
            <h1 class="text-[19px] mt-[30px] mb-[15px]">{{ t('services.travel.title') }}</h1>
            <p class="text-[13px] text-[#7a7a7a] leading-[24px]">{{ t('services.travel.text') }}</p>
          </div>
        </div>
        <div class="max-w-[31%] border border-[#ddd] py-[50px] px-[30px] rounded-[10px]">
          <div class="text-center">
            <div class="flex justify-center items-center">
              <img src="./assets/images/service_icon_2.png" alt="">
            </div>
            <h1 class="text-[19px] mt-[30px] mb-[15px]">{{ t('services.route.title') }}</h1>
            <p class="text-[13px] text-[#7a7a7a] leading-[24px]">{{ t('services.route.text') }}</p>
          </div>
        </div>
        <div class="max-w-[31%] border border-[#ddd] py-[50px] px-[30px] rounded-[10px]">
          <div class="text-center">
            <div class="flex justify-center items-center">
              <img src="./assets/images/service_icon_3.png" alt="">
            </div>
            <h1 class="text-[19px] mt-[30px] mb-[15px]">{{ t('services.direction.title') }}</h1>
            <p class="text-[13px] text-[#7a7a7a] leading-[24px]">{{ t('services.direction.text') }}</p>
          </div>
        </div>
      </div>
      <div class="w-[99.2%]">
        <div class="my-[60px] border-t-[1px] border-[#ddd]"></div>
      </div>
      <div class="flex justify-center gap-[30px]">
        <div class="w-[43%]">
          <h1 class="text-[19px] font-medium mb-[25px]">{{ t('services.planid.title') }}</h1>
          <p class="text-[13px] text-[#7a7a7a] leading-[24px]">{{ t('services.planid.text') }}</p>
          <div class="mt-[35px] cursor-pointer"><a href="tel:+998 93 893 67 07"
              class="bg-[#e1ac0c] text-white text-[15px] border-[2px] border-[#e1ac0c] px-[16px] py-[14px] hover:bg-white hover:text-[#e1ac0c]">{{
                t('services.planid.button') }}</a></div>
        </div>
        <div class="w-[43%]">
          <div class="w-full max-w-xl mx-auto mt-8">
            <div v-for="(item, index) in items" :key="index" class="border border-gray-300 rounded">
              <!-- Accordion Header -->
              <button class="w-full px-4 py-3 text-left font-semibold flex justify-between items-center"
                @click="toggle(index)">
                {{ item.title }}
                <span :class="{ 'rotate-180': openIndex === index }" class="transition-transform">▼</span>
              </button>

              <!-- Accordion Content -->
              <div v-show="openIndex === index" class="px-4 py-3 text-gray-700 bg-white border-t border-gray-200">
                {{ item.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section id="video" class="mt-[-500px] mb-[-600px]">
      <!-- <div class="video-overlay"></div> -->
      <div class="video">
        <div>
          <!-- <h1 style="color: white;">Our one of the best destinations</h1> -->
          <!-- <h2>Sed et risus ac sapien congue mattis.</h2> -->
          <a href="http://youtube.com" target="_blank"><i class="fa fa-play"></i></a>
        </div>
      </div>
      <video autoplay="" loop="" muted="" class="w-full rotate-270">
        <source src="./assets/Flying_Over_Tashkent_at_Night_4K_Drone_Tour_of_Uzbekistan_s.mp4" type="video/mp4">
      </video>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref, watch, computed, onMounted, onBeforeUnmount } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiStar } from '@mdi/js'

import 'swiper/css'
import 'swiper/css/pagination'

const { t, locale } = useI18n()
const lang = ref(locale.value)
const show = ref(false)
const dropdownRef = ref(null)


import uzFlag from './assets/images/uz.png'
import enFlag from './assets/images/en.png'
import ruFlag from './assets/images/ru.png'

const flags = {
  uz: uzFlag,
  en: enFlag,
  ru: ruFlag
}
console.log(t('services.planid.guides.title'));
const items = computed(() => [
{
    title: t('services.planid.guides.title'),
    text: t('services.planid.guides.text'),
  },
  {
    title: t('services.planid.flexible-services.title'),
    text: t('services.planid.flexible-services.text'),
  },
  {
    title: t('services.planid.support.title'),
    text: t('services.planid.support.text'),
  },
])
const openIndex = ref(null)

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}

const modules = [Pagination]

const swiperOptions = {
  slidesPerView: 5,
  spaceBetween: 20,
  modules,
  direction: 'horizontal',
  pagination: {
    clickable: true,
  },
}

const toggleDropdown = () => {
  show.value = !show.value
}
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
const handleClickOutside = (e) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    show.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', handleClickOutside)
})

watch(lang, (val) => {
  locale.value = val
  localStorage.setItem('locale', val)
});
</script>

<style lang="scss" scoped>
.img {
  background-image: url('./assets/images/dubai2.png');
}

/* .swiper-pagination {
  position: static !important;
  margin-top: 20px;
  text-align: center;
  color: #e1ac0c;
} */
.swiper {
  padding-bottom: 70px;
  /* Paginatsiya uchun pastda joy ajratamiz */
}

::v-deep(.swiper-pagination-bullet) {
  background-color: #cdcdcd;
  /* oddiy nuqta rangi */
  width: 15px;
  height: 15px;
  opacity: 1;
  /* defaultda 0.2 bo'lishi mumkin */
}

/* Aktiv (bosilgan) nuqta uchun */
::v-deep(.swiper-pagination-bullet-active) {
  background-color: #e1ac0c;
  width: 15px;
  height: 15px;
}
</style>