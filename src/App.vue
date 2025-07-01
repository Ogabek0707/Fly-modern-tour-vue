<template>
  <div class="w-full h-full">
    <header class="w-full px-[10%] h-[120px] flex justify-around items-center">
      <div id="header" class="w-[200px]">
        <img src="./assets//images/Screenshot 2025-06-21 at 21.35.40.png" alt="">
      </div>
      <nav class="mr-[-60px]">
        <ul class="text-[17px] font-bold">
         <div id="nav" class="flex justify-around">
          <div id="navbar" class="w-[500px] flex gap-[20px] items-center">
            <li class="transition-all duration-500 text-[#121212] hover:text-[#e1ac0c] cursor-pointer">{{ t('header.home')
            }}</li>
            <a href="#Featured-places"
              class="transition-all duration-500 text-[#121212] hover:text-[#e1ac0c] cursor-pointer">{{
                t('header.about') }}</a>
            <a href="#Services" class="transition-all duration-500 text-[#121212] hover:text-[#e1ac0c] cursor-pointer">{{
              t('header.tours') }}</a>
            <a href="#Bron" class="transition-all duration-500 text-[#121212] hover:text-[#e1ac0c] cursor-pointer">{{
              t('header.contact') }}</a>
          </div>
          <div class="w-[87px]" ref="dropdownRef">
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
         </div>
        </ul>
      </nav>
    </header>

    <section id="Banner" class="w-full h-[712px] bg-cover bg-center bg-no-repeat relative img flex justify-center">
      <div class="flex justify-center pt-[180px] form3">
        <div id="form" class="text-start max-w-[945px] text-white">
          <div class="h-[246px]">
            <div class="w-[80px] h-[5px] bg-[#e1ac0c] "></div>
            <h1 class="mt-5 text-[42px]">{{ t('banner.title') }}</h1>
            <p class="mt-5 mb-[35px] text-[22px] max-w-[90%]">{{ t('banner.subtitle') }}</p>
            <a href="#Accordion"
              class=" bg-[#e1ac0c] text-white px-6 py-3 font-semibold rounded hover:bg-[#c8960a] transition-all cursor-pointer">
              {{ t('banner.button') }}
            </a>
          </div>

          <!-- Forma qismi -->
          <div class="mt-[199px] form4">
            <div
              class="w-full bg-white text-gray-500 flex gap-2 px-4 py-4 items-center border-b-[5px] border-[#e1ac0c] form2">
              <input type="text" :placeholder="t('banner.form.name')"
                class="flex-1 p-3 border rounded outline-none placeholder-gray-500" />
              <input type="text" :placeholder="t('banner.form.address')"
                class="flex-1 p-3 border rounded outline-none placeholder-gray-500" />
              <input type="date" placeholder="22/07/2025"
                class="p-3 border rounded outline-none placeholder-gray-500 b-date" />
              <button
                class="bg-[#e1ac0c] text-white px-5 py-3 rounded hover:bg-[#c8960a] transition-all cursor-pointer b-date">
                {{ t('banner.form.button') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="Popular-places" class="h-[440px] pt-[80px]">
      <div class="text-center h-[123px] p-p-title">
        <h1 class="text-[#e1ac0c] text-[17px]">{{ t('popular-places.title') }}</h1>
        <p class="text-[#232323] mt-[14px] text-[23px] font-medium">{{ t('popular-places.subtitle') }}</p>
      </div>
      <div class="w-full swiper px-[15px]">
        <Swiper v-bind="swiperOptions"  class="hmySwiper">
          <SwiperSlide class="relative mr-0">
            <img src="./assets/images/istanbul.png" class=" h-[171.59px] object-cover rounded" />
            <div class="absolute bottom-[20px] left-[18px] text-white text-lg">
              <h1 class="text-[19px] font-medium">{{ t('popular-places.istanbul.title') }}</h1>
              <p class="text-[13px] font-light">{{ t('popular-places.istanbul.text') }}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide class="relative mr-0">
            <img src="./assets/images/sharm.png" class=" h-[171.59px] object-cover rounded" />
            <div class="absolute bottom-[20px] left-[18px] text-white text-lg">
              <h1 class="text-[19px] font-medium">{{ t('popular-places.sharm.title') }}</h1>
              <p class="text-[13px] font-light">{{ t('popular-places.sharm.text') }}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide class="relative mr-0">
            <img src="./assets/images/Tailand.png" class=" h-[171.59px] object-cover rounded" />
            <div class="absolute bottom-[20px] left-[18px] text-white text-lg">
              <h1 class="text-[19px] font-medium">{{ t('popular-places.tailand.title') }}</h1>
              <p class="text-[13px] font-light">{{ t('popular-places.tailand.text') }}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide class="relative mr-0">
            <img src="./assets/images/Argentina.png" class="h-[171.59px] object-cover rounded" />
            <div class="absolute bottom-[20px] left-[18px] text-white text-lg">
              <h1 class="text-[19px] font-medium">{{ t('popular-places.argentina.title') }}</h1>
              <p class="text-[13px] font-light">{{ t('popular-places.argentina.text') }}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide class="relative mr-0">
            <img src="./assets/images/dubai2.png" class=" h-[171.59px] object-cover rounded" />
            <div class="absolute bottom-[20px] left-[18px] text-white text-lg">
              <h1 class="text-[19px] font-medium">{{ t('popular-places.dubai.title') }}</h1>
              <p class="text-[13px] font-light">{{ t('popular-places.dubai.text') }}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide class="relative mr-0">
            <img src="./assets/images/saudi.png" class=" h-[171.59px] object-cover rounded" />
            <div class="absolute bottom-[20px] left-[18px] text-white text-lg">
              <h1 class="text-[19px] font-medium">{{ t('popular-places.saudi.title') }}</h1>
              <p class="text-[13px] font-light">{{ t('popular-places.saudi.text') }}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <section id="Visit-country" class="pt-[30px] mb-[30px]">
      <div id="all" class="w-full px-[10%]">
        <div class="w-full pt-[20px] v-c-title">
          <h1 class="text-[30px]">{{ t('visit-country.title') }}</h1>
        </div>
        <div class="mt-[20px] ml-[15px] flex gap-[35px] v-c-card">
          <img src="./assets/images/train.png" class="max-w-[294px] rounded-[20px]" alt="">
          <div>
            <h1 class="text-[30px] mt-[10px]">{{ t('visit-country.train.title') }}</h1>
            <h2 class="text-[14px] text-[#2c343b]">{{ t('visit-country.train.title2') }}</h2>
            <p class="text-[13px] text-[#7a7a7a] leading-[24px]  mt-[7px]">{{ t('visit-country.train.text')
            }}</p>
          </div>
        </div>
        <div class="mt-[30px] ml-[15px] flex gap-[35px] v-c-card">
          <img src="./assets/images/plane.png" class="max-w-[294px] rounded-[20px]" alt="">
          <div>
            <h1 class="text-[30px] leading-[1.1]">{{ t('visit-country.plane.title') }}</h1>
            <h2 class="text-[14px] mt-[7px] text-[#2c343b]">{{ t('visit-country.plane.title2') }}</h2>
            <p class="text-[13px] text-[#7a7a7a]  leading-[24px] mt-[7px]">{{ t('visit-country.plane.text')
            }}</p>
          </div>
        </div>
        <div class="mt-[30px] ml-[15px] flex gap-[35px] v-c-card">
          <img src="./assets/images/dubai2.png" class="max-w-[294px] rounded-[20px]" alt="">
          <div>
            <h1 class="text-[30px] ml-[15px] leading-[1.1]">{{ t('visit-country.dubai.title') }}</h1>
            <h2 class="text-[14px] text-[#2c343b] mt-[7px]">{{ t('visit-country.dubai.title2') }}</h2>
            <p class="text-[13px] text-[#7a7a7a] leading-[24px] mt-[7px]">{{ t('visit-country.dubai.text')
            }}</p>
          </div>
        </div>
        <div class="mt-[30px] ml-[15px] flex gap-[35px] v-c-card">
          <img src="./assets/images/antalya.png" class="max-w-[294px] rounded-[20px]" alt="">
          <div>
            <h1 class="text-[30px] mt-[18px]">{{ t('visit-country.antalya.title') }}</h1>
            <h2 class="text-[14px] text-[#2c343b]">{{ t('visit-country.antalya.title2') }}</h2>
            <p class="text-[13px] text-[#7a7a7a] leading-[24px] max-w-[640px] mt-[7px]">{{
              t('visit-country.antalya.text') }}</p>
          </div>
        </div>
        <div class="mt-[30px] ml-[15px] flex gap-[35px] v-c-card">
          <img src="./assets/images/sharm.png" class="max-w-[294px] rounded-[20px]" alt="">
          <div>
            <h1 class="text-[30px] mt-[18px]">{{ t('visit-country.sharm.title') }}</h1>
            <h2 class="text-[14px] text-[#2c343b]">{{ t('visit-country.sharm.title2') }}</h2>
            <p class="text-[13px] text-[#7a7a7a] leading-[24px] max-w-[640px] mt-[7px]">{{ t('visit-country.sharm.text')
            }}</p>
          </div>
        </div>
        <div class="mt-[30px] ml-[15px] flex gap-[35px] v-c-card">
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
      <div id="all" class="w-full h-full bg-[#f4f4f4] pt-[80px] pb-[80px] px-[10%]">
        <div class="max-w-[1170px] text-center">
          <h1 class="text-[17px] text-[#e1ac0c] block ">{{ t('featured-places.title') }}</h1>
          <h2 class="text-[23px] text-[#232323] mt-[12px]">{{ t('featured-places.title2') }}</h2>
        </div>
        <div id="card-wrap" class="mt-[60px] flex justify-center gap-[33.3px] f-card3">
          <div class="w-[360px] bg-white h-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] rounded-[5px]">
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
          <div class="w-[360px] bg-white h-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] rounded-[5px]">
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
          <div class="w-[360px] bg-white h-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] rounded-[5px]">
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

    <section id="Services" class="w-full pt-[80px] box-border">
      <div id="all" class="w-full px-[10%]">
        <div class="text-center">
          <h1 class="text-[17px] text-[#e1ac0c]">{{ t('services.title') }}</h1>
          <h2 class="text-[23px] mt-[14px] tracking-[0.5px]">{{ t('services.title2') }}</h2>
        </div>
      <div id="card-wrap" class="mt-[60px] flex gap-[33.3px] f-card3">
        <div class="max-w-[31%] s-card border border-[#ddd] py-[50px] px-[30px] rounded-[10px]">
          <div class="text-center">
            <div class="flex justify-center items-center">
              <img src="./assets/images/service_icon.png" alt="">
            </div>
            <h1 class="text-[19px] mt-[30px] mb-[15px]">{{ t('services.travel.title') }}</h1>
            <p class="text-[13px] text-[#7a7a7a] leading-[24px]">{{ t('services.travel.text') }}</p>
          </div>
        </div>
        <div class="max-w-[31%] s-card border border-[#ddd] py-[50px] px-[30px] rounded-[10px]">
          <div class="text-center">
            <div class="flex justify-center items-center">
              <img src="./assets/images/service_icon_2.png" alt="">
            </div>
            <h1 class="text-[19px] mt-[30px] mb-[15px]">{{ t('services.route.title') }}</h1>
            <p class="text-[13px] text-[#7a7a7a] leading-[24px]">{{ t('services.route.text') }}</p>
          </div>
        </div>
        <div class="max-w-[31%] s-card border border-[#ddd] py-[50px] px-[30px] rounded-[10px]">
          <div id="Accordion" class="text-center">
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
      <div class="flex justify-center gap-[30px] s-accordion">
        <div class="w-[43%] s-card2">
          <h1 class="text-[19px] font-medium mb-[25px]">{{ t('services.planid.title') }}</h1>
          <p class="text-[13px] text-[#7a7a7a] leading-[24px]">{{ t('services.planid.text') }}</p>
          <div class="mt-[35px] cursor-pointer"><a href="tel:+998 93 893 67 07"
              class="bg-[#e1ac0c] text-white text-[15px] border-[2px] border-[#e1ac0c] px-[16px] py-[14px] hover:bg-white hover:text-[#e1ac0c]">{{
                t('services.planid.button') }}</a></div>
        </div>
        <div class="w-[43%] s-card2">
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
      </div>
    </section>

    <!-- <section id="video" class="mt-[-500px] mb-[-500px]">
      <div class="video-overlay"></div>
      <div class="video">
        <div>
          <a href="http://youtube.com" target="_blank"><i class="fa fa-play"></i></a>
        </div>
      </div>
      <video autoplay="" loop="" muted="" class="w-full rotate-270">
        <source src="./assets/Flying_Over_Tashkent_at_Night_4K_Drone_Tour_of_Uzbekistan_s.mp4" type="video/mp4">
      </video>
    </section> -->

    <section id="Parcing-tables" class="box-border mt-[100px]">
      <div id="all" class="w-full px-[10%]">
        <div class="text-center">
          <h1 class="text-[17px] text-[#e1ac0c]">{{ t('parcing.title') }}</h1>
          <h2 class="mt-[14px] text-[23px] tracking-[0.5px]">{{ t('parcing.title2') }}</h2>
        </div>
        <div class="flex gap-[30px] mt-[40px] f-card3">
          <div class="w-[43%] p-t-card">
            <div class="w-full rounded-tl-[10px] rounded-tr-[10px] bg-[#e1ac0c] py-[30px] px-[35px] text-white text-center">
              <h1 class="text-[19px] tracking-[0.5px]">{{ t('parcing.standart.title') }}</h1>
              <h1 class="text-[32px] leading-[1.1] font-bold tracking-[0.5px] mt-[17px] mb-[10px]">{{ t('parcing.standart.title2') }}</h1>
              <h1 class="text-[14px] tracking-[0.5px]">{{ t('parcing.standart.title3') }}</h1>
            </div>
            <div class="w-full bg-[#EEE] rounded-bl-[10px] rounded-br-[10px] py-[40px] text-center">
              <div class="">
                <h1 class="mb-[20px]"><a href="#" class="text-[14px] font-semibold transition-all hover:text-[#e1ac0c]">{{ t('parcing.standart.title4') }}</a></h1>
                <h1 class="mb-[20px]"><a href="#" class="text-[14px] font-semibold transition-all hover:text-[#e1ac0c]">{{ t('parcing.standart.title5') }}</a></h1>
                <h1 class="mb-[20px]"><a href="#" class="text-[14px] font-semibold transition-all hover:text-[#e1ac0c]">{{ t('parcing.standart.title6') }}</a></h1>
                <h1 class="mb-[20px]"><a href="#" class="text-[14px] font-semibold transition-all hover:text-[#e1ac0c]">{{ t('parcing.standart.title7') }}</a></h1>
                <h1 class="mb-[20px]"><a href="#" class="text-[14px] font-semibold transition-all hover:text-[#e1ac0c]">{{ t('parcing.standart.title8') }}</a></h1>
              </div>
              <div class="mt-[35px] cursor-pointer"><a href="tel:+998 93 893 67 07"
                class="bg-[#e1ac0c] text-white text-[15px] border-[2px] border-[#e1ac0c] px-[16px] py-[14px] hover:bg-transparent hover:text-[#e1ac0c]">{{
                t('services.planid.button') }}</a></div>
            </div>
          </div>
          <div class="w-[43%] p-t-card">
            <div class="w-full rounded-tl-[10px] rounded-tr-[10px] bg-[#e1ac0c] py-[30px] px-[35px] text-white text-center">
              <h1 class="text-[19px] tracking-[0.5px]">{{ t('parcing.premuim.title') }}</h1>
              <h1 class="text-[32px] leading-[1.1] font-bold tracking-[0.5px] mt-[17px] mb-[10px]">{{ t('parcing.premuim.title2') }}</h1>
              <h1 class="text-[14px] tracking-[0.5px]">{{ t('parcing.premuim.title3') }}</h1>
            </div>
            <div class="w-full bg-[#EEE] rounded-bl-[10px] rounded-br-[10px] py-[40px] text-center">
              <div class="">
                <h1 class="mb-[20px]"><a href="#" class="text-[14px] font-semibold transition-all hover:text-[#e1ac0c]">{{ t('parcing.premuim.title4') }}</a></h1>
                <h1 class="mb-[20px]"><a href="#" class="text-[14px] font-semibold transition-all hover:text-[#e1ac0c]">{{ t('parcing.premuim.title5') }}</a></h1>
                <h1 class="mb-[20px]"><a href="#" class="text-[14px] font-semibold transition-all hover:text-[#e1ac0c]">{{ t('parcing.premuim.title6') }}</a></h1>
                <h1 class="mb-[20px]"><a href="#" class="text-[14px] font-semibold transition-all hover:text-[#e1ac0c]">{{ t('parcing.premuim.title7') }}</a></h1>
                <h1 class="mb-[20px]"><a href="#" class="text-[14px] font-semibold transition-all hover:text-[#e1ac0c]">{{ t('parcing.premuim.title8') }}</a></h1>
              </div>
              <div class="mt-[35px] cursor-pointer"><a href="tel:+998 93 893 67 07"
                class="bg-[#e1ac0c] text-white text-[15px] border-[2px] border-[#e1ac0c] px-[16px] py-[14px] hover:bg-transparent hover:text-[#e1ac0c]">{{
                t('services.planid.button') }}</a></div>
            </div>
          </div>
          <div class="w-[43%] p-t-card">
            <div class="w-full rounded-tl-[10px] rounded-tr-[10px] bg-[#e1ac0c] py-[30px] px-[35px] text-white text-center">
              <h1 class="text-[19px] tracking-[0.5px]">{{ t('parcing.vip.title') }}</h1>
              <h1 class="text-[32px] leading-[1.1] font-bold tracking-[0.5px] mt-[17px] mb-[10px]">{{ t('parcing.vip.title2') }}</h1>
              <h1 class="text-[14px] tracking-[0.5px]">{{ t('parcing.vip.title3') }}</h1>
            </div>
            <div class="w-full bg-[#EEE] rounded-bl-[10px] rounded-br-[10px] py-[40px] text-center">
              <div class="">
                <h1 class="mb-[20px]"><a href="#" class="text-[14px] font-semibold transition-all hover:text-[#e1ac0c]">{{ t('parcing.vip.title4') }}</a></h1>
                <h1 class="mb-[20px]"><a href="#" class="text-[14px] font-semibold transition-all hover:text-[#e1ac0c]">{{ t('parcing.vip.title5') }}</a></h1>
                <h1 class="mb-[20px]"><a href="#" class="text-[14px] font-semibold transition-all hover:text-[#e1ac0c]">{{ t('parcing.vip.title6') }}</a></h1>
                <h1 class="mb-[20px]"><a href="#" class="text-[14px] font-semibold transition-all hover:text-[#e1ac0c]">{{ t('parcing.vip.title7') }}</a></h1>
                <h1 class="mb-[20px]"><a href="#" class="text-[14px] font-semibold transition-all hover:text-[#e1ac0c]">{{ t('parcing.vip.title8') }}</a></h1>
              </div>
              <div class="mt-[35px] cursor-pointer"><a href="tel:+998 93 893 67 07"
                class="bg-[#e1ac0c] text-white text-[15px] border-[2px] border-[#e1ac0c] px-[16px] py-[14px] hover:bg-transparent hover:text-[#e1ac0c]">{{
                t('services.planid.button') }}</a></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    <section id="map">
      <!-- <GMapMap
        :center="{ lat: 41.2995, lng: 69.2401 }"
        :zoom="12"
        style="width: 100%; height: 400px"
      >
        <GMapMarker :position="{ lat: 41.2995, lng: 69.2401 }" />
      </GMapMap> -->
      <!-- <GoogleMap
        api-key="YOUR_GOOGLE_MAPS_API_KEY"
        style="width: 100%; height: 500px"
        :center="center"
        :zoom="15"
        >
          <Marker :options="{ position: center }" />
        </GoogleMap> -->
        <div class="w-full my-[80px]">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47927.13767881944!2d69.18605544863277!3d41.34265639999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d0a3eff6793%3A0x374f8cd599c1c8fa!2sYagona%20Darcha%20Shaykhontokhur%20tumani!5e0!3m2!1sen!2s!4v1723608225085!5m2!1sen!2s" width="100%" height="500px" frameborder="0" style="border: 0" allowfullscreen=""></iframe>
        </div>
    </section>

    <section id="Bron" class="mt-[60px]">
      <div class="w-full px-[10%] text-center">
        <h1 class="text-[17px] text-[#e1ac0c]">{{ t('bron.title') }}</h1>
        <h1 class="text-[23px] tracking-[0.5px] mt-[14px]">{{ t('bron.title2') }}</h1>
        <h1 class="text-[18px] mt-[20px] mb-[10px]">{{ t('bron.direktor') }}</h1>
        <a href="tel: +998938936707" class="text-[#e1ac0c] text-[23px] font-semibold tracking-[0.5px]">{{ t('bron.number') }}</a><br>
        <div class="mt-[25px] cursor-pointer">
          <button class="bg-[#e1ac0c] text-white text-[15px] border-[2px] border-[#e1ac0c] px-[16px] py-[14px] hover:bg-transparent hover:text-[#e1ac0c]" @click="OpenModal">{{t('bron.button') }}</button>
        </div>
      </div>
    </section>

    <AppModal ref="openModal"/>
    <hr class="my-[70px] border-t-[1px] border-[#ddd]">
    <footer>
      <div id="all" class="w-full px-[10%] pb-[80px] flex f-card">
        <div class="max-w-[48%]">
          <div class="flex justify-center">
            <img src="./assets/images/Screenshot 2025-06-21 at 21.35.40.png" class="w-[200px]" alt="">
          </div>
          <p class="text-[13px] text-[#7a7a7a] leading-[24px] mt-[25px] mb-[20px]">{{ t('footer.title') }}</p>
          <a href="https://instagram.com/ogabek_ibragimov7"><svg-icon type="mdi" :path="mdiInstagram" class="w-[40px] h-[40px] rounded-[50%] text-white bg-[#cdcdcd] p-[5px]"></svg-icon></a>
        </div>
        <div id="f-card" class="w-[390px] mr-[20px]">
          <h1 class="text-[21px] mt-[10px] mb-[40px] tracking-[0.5px]">{{ t('footer.card.title') }}</h1>
          <a href="#" class="flex text-[15px] text-[#7a7a7a] hover:text-[#e1ac0c] mb-[12px]"><svg-icon type="mdi" :path="mdiSquareMedium" class="text-[#e1ac0c]"></svg-icon> {{ t('footer.card.title1') }}</a>
          <a href="#" class="flex text-[15px] text-[#7a7a7a] hover:text-[#e1ac0c] mb-[12px]"><svg-icon type="mdi" :path="mdiSquareMedium" class="text-[#e1ac0c]"></svg-icon> {{ t('footer.card.title2') }}</a>
          <a href="#" class="flex text-[15px] text-[#7a7a7a] hover:text-[#e1ac0c] mb-[12px]"><svg-icon type="mdi" :path="mdiSquareMedium" class="text-[#e1ac0c]"></svg-icon> {{ t('footer.card.title3') }}</a>
          <a href="#" class="flex text-[15px] text-[#7a7a7a] hover:text-[#e1ac0c] mb-[12px]"><svg-icon type="mdi" :path="mdiSquareMedium" class="text-[#e1ac0c]"></svg-icon> {{ t('footer.card.title4') }}</a>
        </div>
        <div class="w-[30%] f-card2">
         <div>
          <h1 class="text-[21px] mt-[10px] mb-[40px] tracking-[0.5px]">{{ t('footer.card2.title') }}</h1>
          <p href="#" class="flex text-[13px] leading-[24px] text-[#7a7a7a]"> {{ t('footer.card2.text') }}</p>
         </div>
          <div>
            <a href="tel: +998938936707" class="flex mt-[25px] text-[15px] text-[#7a7a7a]"> {{ t('footer.card2.tel-number') }} <span class="ml-[30px] text-[#e1ac0c] foot">+998938936707</span></a>
            <a href="mailto:ogabekibragimov20@gmail.com" class="flex my-[10px] text-[15px] text-[#7a7a7a]"> {{ t('footer.card2.email') }} <span class="ml-[44px] text-[#e1ac0c] foot2">ogabekibragimov20@gmail.com</span></a>
            <a href="#" class="flex my-[10px] text-[15px] text-[#7a7a7a]"> {{ t('footer.card2.address') }} <span class="ml-[36px] text-[#e1ac0c] foot3">{{ t('footer.card2.address2') }}</span></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref, watch, computed, onMounted, onBeforeUnmount } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiStar, mdiInstagram, mdiSquareMedium } from '@mdi/js'
import AppModal from './views/AppModal.vue';

// import { GoogleMap, Marker } from 'vue3-google-map'

// const center = { lat: 40.689247, lng: -74.044502 }

import 'swiper/css'
import 'swiper/css/pagination'

const { t, locale } = useI18n()
const lang = ref(locale.value)
const show = ref(false)
const dropdownRef = ref(null)
// const dialog = ref(false)
const openModal = ref('')

const OpenModal = () => {
  openModal.value.openModal()
}

import uzFlag from './assets/images/uz.png'
import enFlag from './assets/images/en.png'
import ruFlag from './assets/images/ru.png'

const flags = {
  uz: uzFlag,
  en: enFlag,
  ru: ruFlag
}
// console.log(t('services.planid.guides.title'));

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
  breakpoints: {
    1280: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    }
  }
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
@media (max-width: 1200px) {
    #form {
        width: 780px;
    }
}
@media (max-width: 1100px) {
    #all {
      padding: 40px;
    }
    header {
      padding: 40px;
    }
}
@media (max-width: 1000px) {
    #navbar {
      display: none;
    }
    #nav {
      display: block;
      margin-left: 50%;
    }
    #f-card {
      width: 200px;
    }
}
@media (max-width: 965px) {
    .f-card {
      justify-content: center;
      gap: 40px;
      flex-wrap: wrap;
    }
    .f-card2 {
      display: flex;
      justify-content: center;
      width: 100%;
      gap: 40px;
      p {
        width: 90%;
      }
    }
}
@media (max-width: 900px) {
    .f-card3 {
      flex-wrap: wrap;
      justify-content: center;
    }
    .s-card {
      max-width: 40%;
    }
}
@media (max-width: 850px) {
  #all {
      padding: 40px;
    }
  #form {
    max-width: 600px;
  }
  .form2 {
    max-width: 600px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .form3 {
    padding-top: 122px;
  }
}
@media (max-width: 650px) {
  #all {
      padding: 20px;
    }
  .form3 {
    padding-top: 64px;
  }
  #form {
    max-width: 400px;
  }
  .swiper {
    padding: 20px 80px 0px 80px;
  }
  #header {
    width: 150px;
  }
  header {
    justify-content: center;
    padding: 0px 1%;
  }
  .v-c-card {
    flex-wrap: wrap;
    gap: 15px;
    img{
      max-width: 400px;
      margin: 0px;
    }
  }
  .f-card3 {
    gap: 15px;
  }
  .s-card {
    max-width: 80%;
  }
  .s-accordion {
    flex-wrap: wrap;
  }
  .s-card2 {
    width: 80%;
  }
  .p-t-card {
    width: 80%;
  }
}
@media (max-width: 450px) {
  #all {
      padding: 20px;
    }
  .form4 {
    margin-top: 81px;
  }
  .form3 {
    /* justify-content: start; */
  }
  #header {
    width: 120px;
  }
  header {
    justify-content: start;
    padding: 0px 0px 0px 20%;
    height: 100px;
  }
  #Banner {
    justify-content: center;
    height: 650px;
  }
  #form {
    max-width: 290px;
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 20px;
    }
    .b-date {
      width: 100%;
    }
  }
  #Popular-places {
    height: 310px;
    padding-top: 40px;
    .p-p-title {
      p {
        font-size: 17px;
      }
    }
    SwiperSlide {
      margin-right: -20px;
    }
    .swiper {
      padding: 0px 0px 0px 40px;
      margin-right: 0px;
    }
  }
  #Visit-country {
    .v-c-title {
      h1 {
        font-size: 25px;
        text-align: center;
      }
    }
    .v-c-card {
      flex-wrap: wrap;
      gap: 0px;
      text-align: center;
      img{
        max-width: 350px;
        margin: 0px;
      }
      h1 {
        margin-top: 12px;
        font-size: 23px;
      }
    }
  }
  #Featured-places {
    margin-top: 20px;
    padding-top: 20px;
  }
  #Services {
    padding-top: 20px;
    .s-card {
      max-width: 90%;
    }
  }
  #Parcing-tables {
    margin-top: 20px;
  }
  .f-card3 {
    gap: 15px;
  }
  .s-accordion {
    flex-wrap: wrap;
  }
  .s-card2 {
    width: 80%;
  }
  .p-t-card {
    width: 80%;
  }
  .f-card2 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    gap: 10px;
    p {
      width: 90%;
    }
  }
  .f-card {
    gap: 10px;
  }
  hr {
    margin: 20px 0px;
  }
}
@media (max-width: 386px) {
  /* #all {
      padding: 20px;
    } */
  /* .form4 {
    margin-top: 81px;
  } */
  /* #header {
    width: 120px;
  } */
  /* header {
    justify-content: start;
    padding: 0px 0px 0px 20%;
    height: 100px;
  } */
  /* #Banner {
    justify-content: center;
    height: 650px;
  } */
  /* #form {
    max-width: 290px;
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 20px;
    }
    .b-date {
      width: 100%;
    }
  } */
  #Popular-places {
    /* height: 310px;
    padding-top: 40px; */
    /* .p-p-title {
      p {
        font-size: 17px;
      }
    } */
    SwiperSlide {
      margin-right: -20px;
    }
    .swiper {
      padding: 0px 0px 0px 20px;
      margin-right: 0px;
    }
  }
  #Visit-country {
    /* .v-c-title {
      h1 {
        font-size: 25px;
        text-align: center;
      }
    } */
    .v-c-card {
      /* flex-wrap: wrap;
      gap: 0px;
      text-align: center; */
      img{
        max-width: 300px;
        margin: 0px;
      }
      h1 {
        /* margin-top: 12px;
        font-size: 23px; */
      }
    }
  }
  /* #Featured-places {
    margin-top: 20px;
    padding-top: 20px;
  } */
  /* #Services {
    padding-top: 20px;
    .s-card {
      max-width: 90%;
    }
  } */
  /* #Parcing-tables {
    margin-top: 20px;
  } */
  /* .f-card3 {
    gap: 15px;
  } */
  /* .s-accordion {
    flex-wrap: wrap;
  } */
  /* .s-card2 {
    width: 80%;
  } */
  /* .p-t-card {
    width: 80%;
  } */
  /* .f-card2 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    gap: 10px;
    p {
      width: 90%;
    }
  } */
  /* .f-card {
    gap: 10px;
  } */
  /* hr {
    margin: 20px 0px;
  } */
}
@media (max-width: 337px) {
  /* #all {
      padding: 20px;
    } */
  /* .form4 {
    margin-top: 81px;
  } */
  /* #header {
    width: 120px;
  } */
  header {
    justify-content: start;
    padding: 0px 0px 0px 10%;
    height: 100px;
  }
  /* #Banner {
    justify-content: center;
    height: 650px;
  } */
  /* #form {
    max-width: 290px;
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 20px;
    }
    .b-date {
      width: 100%;
    }
  } */
  #Popular-places {
    /* height: 310px;
    padding-top: 40px; */
    /* .p-p-title {
      p {
        font-size: 17px;
      }
    } */
    SwiperSlide {
      margin-right: -20px;
    }
    .swiper {
      padding: 0px 0px 0px 10px;
      margin-right: 0px;
    }
  }
  #Visit-country {
    /* .v-c-title {
      h1 {
        font-size: 25px;
        text-align: center;
      }
    } */
    .v-c-card {
      /* flex-wrap: wrap;
      gap: 0px;
      text-align: center; */
      img{
        max-width: 250px;
        margin: 0px;
      }
      h1 {
        /* margin-top: 12px;
        font-size: 23px; */
      }
    }
  }
  /* #Featured-places {
    margin-top: 20px;
    padding-top: 20px;
  } */
  /* #Services {
    padding-top: 20px;
    .s-card {
      max-width: 90%;
    }
  } */
  /* #Parcing-tables {
    margin-top: 20px;
  } */
  /* .f-card3 {
    gap: 15px;
  } */
  /* .s-accordion {
    flex-wrap: wrap;
  } */
  /* .s-card2 {
    width: 80%;
  } */
  /* .p-t-card {
    width: 80%;
  } */
  /* .f-card2 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    gap: 10px;
    p {
      width: 90%;
    }
  } */
  /* .f-card {
    gap: 10px;
  } */
  hr {
    margin: 10px 0px;
  }
}
@media (max-width: 310px) {
  .foot {
    margin-left: 10px;
  }
  .foot2 {
    margin-left: 10px;
  }
  .foot3 {
    margin-left: 10px;
  }
  /* #all {
      padding: 20px;
    } */
  /* .form4 {
    margin-top: 81px;
  } */
  /* #header {
    width: 120px;
  } */
  header {
    justify-content: start;
    padding: 0px 0px 0px 6%;
    height: 100px;
  }
  /* #Banner {
    justify-content: center;
    height: 650px;
  } */
  #form {
    max-width: 250px;
    h1 {
      font-size: 22px;
    }
    p {
      font-size: 16px;
    }
    .b-date {
      width: 100%;
    }
  }
  #Popular-places {
    /* height: 310px;
    padding-top: 40px; */
    /* .p-p-title {
      p {
        font-size: 17px;
      }
    } */
    SwiperSlide {
      margin-right: -20px;
    }
    .swiper {
      padding: 0px 0px 0px 10px;
      margin-right: 0px;
    }
  }
  #Visit-country {
    .v-c-title {
      h1 {
        margin-top: 0;
        font-size: 20px;
        text-align: center;
      }
    }
    .v-c-card {
      /* flex-wrap: wrap;
      gap: 0px;
      text-align: center; */
      img{
        max-width: 220px;
        margin: 0px;
      }
      h1 {
        margin-top: 12px;
        font-size: 20px;
      }
    }
  }
  /* #Featured-places {
    margin-top: 20px;
    padding-top: 20px;
  } */
  /* #Services {
    padding-top: 20px;
    .s-card {
      max-width: 90%;
    }
  } */
  /* #Parcing-tables {
    margin-top: 20px;
  } */
  /* .f-card3 {
    gap: 15px;
  } */
  /* .s-accordion {
    flex-wrap: wrap;
  } */
  .s-card2 {
    width: 90%;
  }
  .p-t-card {
    width: 90%;
  }
  /* .f-card2 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 90%;
    gap: 10px;
    p {
      width: 90%;
    }
  } */
  /* .f-card {
    gap: 10px;
  } */
  /* hr {
    margin: 20px 0px;
  } */
}
.swiper {
  padding-bottom: 70px;
}
::v-deep(.swiper-pagination-bullet) {
  background-color: #cdcdcd;
  width: 15px;
  height: 15px;
  opacity: 1;
}
::v-deep(.swiper-pagination-bullet-active) {
  background-color: #e1ac0c;
  width: 15px;
  height: 15px;
}
</style>