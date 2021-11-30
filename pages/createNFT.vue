<template>
  <div class="shop-background pb-16 ">
    <div class="container bg-white mx-auto rounded-2xl container-shadow px-2 md:px-0">
      <h5 class="text-center text-2xl lg:text-4xl font-medium title--shop p-7">
        The Philippine Eagle
      </h5>
      <div class="flex items-center gap-10 pl-5 pt-10">
        <h4 class="text-center font-bold text-2xl title--shop">Upload token</h4>
        <div class="h-px bg-gray-300 flex-1"></div>
      </div>

      <div class="lg:mx-10">
        <div class="flex items-center justify-between mt-5 lg:mt-10 flex-col md:flex-row gap-5 md:gap-0">
          <div class="mt-5">
            <div class="flex items-center mb-3">
              <img src="~/assets/img/media/items/list.svg" alt="">
              <span class="item-text ml-2">File size up to 100 MB</span>
            </div>
            <div class="flex items-center mb-3">
              <img src="~/assets/img/media/items/list.svg" alt="">
              <span class="item-text ml-2"> photo, video, audio or 3D model</span>
            </div>
            <div class="flex items-center">
              <img src="~/assets/img/media/items/list.svg" alt="">
              <span class="item-text ml-2">Acceptable formats JPG, PNG, MP</span>
            </div>
          </div>
          <div>
            <form action="" class="relative form__upload px-14 py-8 rounded-xl overflow-hidden">
              <input type="file" multiple accept="image/*"
                     class="absolute w-full h-full opacity-0 top-0 left-0 cursor-pointer">
              <div class="flex flex-col">
                <img src="~/assets/img/media/items/arrowUpload.svg" alt="">
                <p class="font-bold">Upload</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-10 pl-5 pt-10">
        <h4 class="text-center font-bold text-2xl title--shop">Upload Currency password preview </h4>
        <div class="h-px bg-gray-300 flex-1"></div>
      </div>

      <div class="lg:mx-10">
        <div class="flex items-center justify-between mt-5 lg:mt-10 flex-col md:flex-row gap-5 md:gap-0">
          <div class="mt-5">
            <p class="item-text md:max-w-md">To display your currency password, you need a photo to preview. Upload your
              desired file</p>
          </div>
          <div>
            <form action="" class="relative form__upload px-14 py-8 rounded-xl overflow-hidden">
              <input type="file" multiple accept="image/*"
                     class="absolute w-full h-full opacity-0 top-0 left-0 cursor-pointer">
              <div class="flex flex-col">
                <img src="~/assets/img/media/items/arrowUpload.svg" alt="">
                <p class="font-bold">Upload</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="flex flex-col ml-3">
        <div class="flex items-center gap-10 pl-5 pt-10">
          <h4 class="text-center font-bold text-2xl title--shop">Further information</h4>
          <div class="h-px bg-gray-300 flex-1"></div>
        </div>
        <div class="flex w-8/12 mt-12">
          <span class="bg-gray-300 px-8 rounded-l-xl text-input ">Token Name</span>
          <input type="text" class="border -ml-2 flex-1 outline-none rounded-xl input-insert"
                 placeholder="Enter the name of the token">
        </div>
        <div class="flex w-8/12 margin__middle">
          <span class="bg-gray-300 px-8 rounded-l-xl text-input ">Website Link</span>
          <input type="text" class="border -ml-2 flex-1 outline-none rounded-xl input-insert"
                 placeholder="To view your products you need a website address. Enter the address">
        </div>
        <div class="flex w-8/12">
          <span class="bg-gray-300 px-8 rounded-l-xl text-input ">Email Address</span>
          <input type="email" class="border -ml-2 flex-1 outline-none rounded-xl input-insert "
                 placeholder="Email Your way of communicating with us, enter your email">
        </div>
        <div class="flex w-8/12 textarea-parent">
          <span class="bg-gray-300 px-8 rounded-l-xl text-input textarea-text ">Description</span>
          <textarea type="text" class="border -ml-2 flex-1 outline-none rounded-xl input-insert text-description"
                    placeholder="This description will be displayed when your currency password is released">
        </textarea>
        </div>
      </div>
      <div class="flex flex-row ml-3">
        <div class="flex w-8/12 mt-12">
          <div class="add-plus">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.6875 0C8.81543 0 0 8.81543 0 19.6875C0 30.5596 8.81543 39.375 19.6875 39.375C30.5596 39.375 39.375 30.5596 39.375 19.6875C39.375 8.81543 30.5596 0 19.6875 0ZM28.125 20.7422C28.125 20.9355 27.9668 21.0938 27.7734 21.0938H21.0938V27.7734C21.0938 27.9668 20.9355 28.125 20.7422 28.125H18.6328C18.4395 28.125 18.2812 27.9668 18.2812 27.7734V21.0938H11.6016C11.4082 21.0938 11.25 20.9355 11.25 20.7422V18.6328C11.25 18.4395 11.4082 18.2812 11.6016 18.2812H18.2812V11.6016C18.2812 11.4082 18.4395 11.25 18.6328 11.25H20.7422C20.9355 11.25 21.0938 11.4082 21.0938 11.6016V18.2812H27.7734C27.9668 18.2812 28.125 18.4395 28.125 18.6328V20.7422Z"
                fill="#C91EFA"/>
            </svg>

          </div>
          <span class="bg-gray-300 px-8 rounded-l-xl text-input">Manufacturer Group</span>
          <input type="email" class="border -ml-2 flex-1 outline-none rounded-xl input-insert"
                 placeholder="Email Your way of communicating with us, enter your email">
        </div>
        <div>
          <div class="flex right-manufactorer">
            <span class="bg-gray-300 px-8 rounded-l-xl text-input">Responsibility</span>
            <input type="text" class="border -ml-2 flex-1 outline-none rounded-xl input-insert" placeholder="">
          </div>
        </div>
      </div>
      <div class="flex flex-row w-full">
          <div class="social w-full">
            <div class="flex flex-row flex justify-evenly w-full">
              <div class="flex ">
          <span class="bg-gray-300 px-8 rounded-l-xl text-input Linkedin">
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
  d="M14.1548 0C11.4289 0 8.7641 0.846305 6.49754 2.43189C4.23098 4.01748 2.46441 6.27114 1.42123 8.90788C0.378042 11.5446 0.105098 14.446 0.636908 17.2452C1.16872 20.0443 2.4814 22.6155 4.40895 24.6336C6.3365 26.6516 8.79235 28.026 11.4659 28.5827C14.1395 29.1395 16.9108 28.8538 19.4293 27.7616C21.9477 26.6694 24.1003 24.8199 25.6148 22.4469C27.1292 20.0739 27.9376 17.284 27.9376 14.43C27.9376 10.6029 26.4855 6.9326 23.9007 4.22645C21.3159 1.5203 17.8102 0 14.1548 0V0ZM14.1548 27.5499C11.6763 27.5499 9.25353 26.7804 7.19275 25.3388C5.13197 23.8972 3.52579 21.8481 2.57731 19.4508C1.62884 17.0534 1.38068 14.4155 1.8642 11.8704C2.34773 9.32543 3.54123 6.98769 5.29378 5.15284C7.04633 3.31798 9.27921 2.06843 11.7101 1.5622C14.1409 1.05597 16.6606 1.31578 18.9504 2.3088C21.2402 3.30181 23.1973 4.98342 24.5743 7.14098C25.9513 9.29854 26.6862 11.8351 26.6862 14.43C26.6862 16.1529 26.3621 17.859 25.7323 19.4508C25.1026 21.0426 24.1795 22.4889 23.0159 23.7072C21.8522 24.9255 20.4708 25.8919 18.9504 26.5512C17.43 27.2106 15.8005 27.5499 14.1548 27.5499Z"
  fill="url(#paint0_linear_1016_338)"/>
<path
  d="M7.8561 11.1217H10.6619V20.5627H7.8561V11.1217ZM9.26048 6.42798C9.58229 6.42798 9.89686 6.52793 10.1644 6.71518C10.4319 6.90243 10.6404 7.16856 10.7634 7.47989C10.8864 7.79122 10.9184 8.13376 10.8554 8.46417C10.7924 8.79457 10.6372 9.09798 10.4095 9.33599C10.1817 9.57401 9.89163 9.73594 9.57594 9.80129C9.26024 9.86664 8.93312 9.83247 8.63598 9.7031C8.33884 9.57374 8.08504 9.355 7.90668 9.07455C7.72833 8.79411 7.63344 8.46458 7.63404 8.12766C7.63404 7.90419 7.67613 7.68292 7.7579 7.4765C7.83967 7.27008 7.95952 7.08257 8.11059 6.92469C8.26166 6.76682 8.44098 6.64169 8.63829 6.55646C8.8356 6.47123 9.04703 6.42757 9.26048 6.42798ZM12.4203 20.5658H15.2201V15.8909C15.2201 14.6593 15.4422 13.4686 16.9006 13.4686C18.359 13.4686 18.359 14.8761 18.359 15.982V20.5627H21.1587V15.3945C21.1587 12.8497 20.6336 10.8955 17.7978 10.8955C17.2654 10.8751 16.7377 11.0059 16.2706 11.2742C15.8036 11.5425 15.4146 11.9382 15.1451 12.4193H15.1061V11.1217H12.4053L12.4203 20.5658Z"
  fill="url(#paint1_linear_1016_338)"/>
<defs>
<linearGradient id="paint0_linear_1016_338" x1="2.21758" y1="7.21343" x2="26.6274" y2="20.676"
                gradientUnits="userSpaceOnUse">
<stop offset="0.56" stop-color="#7595C9"/>
<stop offset="1" stop-color="#3665A7"/>
</linearGradient>
<linearGradient id="paint1_linear_1016_338" x1="334.931" y1="613.648" x2="944.489" y2="613.648"
                gradientUnits="userSpaceOnUse">
<stop offset="0.56" stop-color="#7595C9"/>
<stop offset="1" stop-color="#3665A7"/>
</linearGradient>
</defs>
</svg>
</span>
                <input type="text" class="border -ml-2 flex-1 outline-none rounded-xl input-insert social-address"
                       placeholder="LinkdeIn" readonly>
              </div>
              <div class="flex ">
          <span class="bg-gray-300 px-8 rounded-l-xl text-input whtasapp">
         <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1016_346)">
<path d="M12.5 0C10.0277 0 7.61099 0.733112 5.55538 2.10663C3.49976 3.48015 1.89761 5.43238 0.951511 7.71646C0.00541607 10.0005 -0.242126 12.5139 0.24019 14.9386C0.722505 17.3634 1.91301 19.5907 3.66117 21.3388C5.40933 23.087 7.63661 24.2775 10.0614 24.7598C12.4861 25.2421 14.9995 24.9946 17.2835 24.0485C19.5676 23.1024 21.5199 21.5002 22.8934 19.4446C24.2669 17.389 25 14.9723 25 12.5C25 9.18479 23.683 6.00537 21.3388 3.66116C18.9946 1.31696 15.8152 0 12.5 0V0ZM12.5 23.8651C10.2522 23.8651 8.05487 23.1986 6.18588 21.9498C4.3169 20.7009 2.8602 18.9259 2 16.8492C1.1398 14.7725 0.914737 12.4874 1.35326 10.2828C1.79179 8.07816 2.87421 6.05309 4.46365 4.46365C6.05309 2.8742 8.07816 1.79178 10.2828 1.35326C12.4874 0.914731 14.7725 1.1398 16.8492 2C18.926 2.8602 20.7009 4.31689 21.9498 6.18588C23.1986 8.05486 23.8651 10.2522 23.8651 12.5C23.8651 13.9925 23.5712 15.4704 23 16.8492C22.4289 18.2281 21.5917 19.481 20.5364 20.5364C19.481 21.5917 18.2281 22.4289 16.8492 23C15.4704 23.5712 13.9925 23.8651 12.5 23.8651Z" fill="url(#paint0_linear_1016_346)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5267 7.48962C16.3946 6.357 14.8895 5.67442 13.2916 5.56901C11.6937 5.46361 10.1119 5.94255 8.84083 6.91665C7.56977 7.89075 6.69607 9.29361 6.38242 10.864C6.06877 12.4344 6.33656 14.0652 7.13591 15.4528L6.19971 18.8738L9.6996 17.9621C10.6662 18.4938 11.7507 18.7745 12.8539 18.7785C14.1637 18.7829 15.4453 18.3976 16.5356 17.6716C17.6259 16.9456 18.4755 15.9116 18.9765 14.7013C19.4775 13.491 19.6072 12.1591 19.349 10.8749C19.0908 9.59067 18.4565 8.41229 17.5267 7.48962ZM12.8566 17.6437C11.8755 17.6409 10.9131 17.3749 10.0697 16.8735L9.86833 16.7537L7.7918 17.298L8.33611 15.2732L8.20548 15.0664C7.55865 14.0362 7.27252 12.8202 7.39206 11.6097C7.5116 10.3992 8.03003 9.26269 8.86586 8.37891C9.70169 7.49513 10.8075 6.91417 12.0095 6.72736C13.2115 6.54055 14.4415 6.75849 15.5061 7.3469C16.5708 7.93532 17.4097 8.86085 17.891 9.978C18.3723 11.0952 18.4687 12.3406 18.165 13.5185C17.8614 14.6964 17.1749 15.74 16.2135 16.4853C15.2521 17.2305 14.0703 17.6351 12.8539 17.6355L12.8566 17.6437ZM15.8666 13.5369C16.0326 13.6185 16.1387 13.6593 16.1823 13.7301C16.2269 13.9951 16.1938 14.2673 16.087 14.5139C15.9482 14.8976 15.2896 15.2405 14.9685 15.2977C14.6239 15.3578 14.2702 15.3383 13.9343 15.2405C13.6144 15.1415 13.3 15.0252 12.9927 14.8922C11.338 14.171 10.2575 12.519 10.1759 12.3938C10.0942 12.2686 9.50093 11.5012 9.50093 10.6874C9.49568 10.4315 9.54351 10.1772 9.6414 9.94067C9.7393 9.70413 9.88514 9.49043 10.0697 9.31305C10.1251 9.25012 10.1928 9.19928 10.2686 9.16369C10.3445 9.12811 10.4269 9.10854 10.5106 9.10621C10.6195 9.10621 10.7311 9.10621 10.8263 9.10621C10.9216 9.10621 11.0631 9.06811 11.1992 9.37837C11.3352 9.68862 11.6727 10.5377 11.7026 10.6139C11.7297 10.6566 11.7455 10.7056 11.7483 10.7561C11.7512 10.8066 11.7411 10.8569 11.719 10.9024C11.6763 11.0003 11.6204 11.0918 11.553 11.1746C11.4713 11.2726 11.3788 11.3896 11.3053 11.4658C11.2318 11.542 11.1366 11.6372 11.2318 11.8005C11.4804 12.2248 11.7904 12.61 12.1517 12.9436C12.5434 13.2897 12.9917 13.5659 13.4771 13.76C13.6431 13.8417 13.7492 13.8281 13.8336 13.7192C13.918 13.6103 14.2473 13.2375 14.3561 13.0715C14.465 12.9055 14.5766 12.9354 14.729 12.9898C14.8814 13.0443 15.6897 13.4416 15.8557 13.5341" fill="url(#paint1_linear_1016_346)"/>
</g>
<defs>
<linearGradient id="paint0_linear_1016_346" x1="1.67375" y1="6.24864" x2="23.3263" y2="18.7514" gradientUnits="userSpaceOnUse">
<stop offset="0.25" stop-color="#A3C492"/>
<stop offset="1" stop-color="#3F813C"/>
</linearGradient>
<linearGradient id="paint1_linear_1016_346" x1="308.691" y1="603.316" x2="955.633" y2="603.316" gradientUnits="userSpaceOnUse">
<stop offset="0.25" stop-color="#A3C492"/>
<stop offset="1" stop-color="#3F813C"/>
</linearGradient>
<clipPath id="clip0_1016_346">
<rect width="25" height="25" fill="white"/>
</clipPath>
</defs>
</svg>

</span>
                <input type="text" class="border -ml-2 flex-1 outline-none rounded-xl input-insert social-address"
                       placeholder="Whatsapp" readonly>
              </div>
              <div class="flex ">
          <span class="bg-gray-300 px-8 rounded-l-xl text-input Twitter">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1016_341)">
<path d="M12.5 0C10.0277 0 7.61099 0.733112 5.55538 2.10663C3.49976 3.48015 1.89761 5.43238 0.951511 7.71646C0.00541607 10.0005 -0.242126 12.5139 0.24019 14.9386C0.722505 17.3634 1.91301 19.5907 3.66117 21.3388C5.40933 23.087 7.63661 24.2775 10.0614 24.7598C12.4861 25.2421 14.9995 24.9946 17.2835 24.0485C19.5676 23.1024 21.5199 21.5002 22.8934 19.4446C24.2669 17.389 25 14.9723 25 12.5C25 9.18479 23.683 6.00537 21.3388 3.66116C18.9946 1.31696 15.8152 0 12.5 0V0ZM12.5 23.8651C10.2522 23.8651 8.05487 23.1986 6.18588 21.9498C4.3169 20.7009 2.8602 18.9259 2 16.8492C1.1398 14.7725 0.914737 12.4874 1.35326 10.2828C1.79179 8.07816 2.87421 6.05309 4.46365 4.46365C6.05309 2.8742 8.07816 1.79178 10.2828 1.35326C12.4874 0.914731 14.7725 1.1398 16.8492 2C18.926 2.8602 20.7009 4.31689 21.9498 6.18588C23.1986 8.05486 23.8651 10.2522 23.8651 12.5C23.8651 13.9925 23.5712 15.4704 23 16.8492C22.4289 18.2281 21.5917 19.481 20.5364 20.5364C19.481 21.5917 18.2281 22.4289 16.8492 23C15.4704 23.5712 13.9925 23.8651 12.5 23.8651Z" fill="url(#paint0_linear_1016_341)"/>
<path d="M10.4971 18.5554C15.4612 18.5554 18.1746 14.4432 18.1746 10.878C18.1746 10.761 18.1746 10.6439 18.1746 10.5296C18.7074 10.1487 19.1682 9.67592 19.5353 9.13348C19.0351 9.35265 18.5049 9.49575 17.9623 9.55803C18.5261 9.22064 18.9479 8.68954 19.1489 8.06391C18.6197 8.37608 18.0406 8.5943 17.437 8.70892C17.0302 8.27926 16.4936 7.995 15.9097 7.89975C15.3257 7.8045 14.7266 7.90354 14.2043 8.18166C13.6821 8.45979 13.2655 8.90162 13.0187 9.43934C12.7718 9.97706 12.7082 10.5809 12.8376 11.1583C11.7666 11.1075 10.7181 10.8322 9.7603 10.3502C8.80247 9.86826 7.9566 9.19039 7.27754 8.36056C6.92936 8.95585 6.82194 9.66173 6.97727 10.3336C7.1326 11.0056 7.53893 11.5927 8.11305 11.9748C7.68465 11.9613 7.26568 11.8456 6.89108 11.6373V11.6699C6.89134 12.2948 7.10859 12.9002 7.5057 13.3827C7.9028 13.8652 8.45513 14.1948 9.0683 14.3153C8.8369 14.3789 8.59797 14.4109 8.35798 14.4105C8.18715 14.4108 8.0167 14.3944 7.84906 14.3615C8.02101 14.8979 8.35643 15.3671 8.80834 15.7034C9.26025 16.0396 9.80601 16.2261 10.3692 16.2367C9.41385 16.9868 8.23366 17.3933 7.01899 17.3906C6.8043 17.3917 6.58976 17.379 6.37671 17.3525C7.60926 18.1464 9.04464 18.5678 10.5107 18.5663" fill="url(#paint1_linear_1016_341)"/>
</g>
<defs>
<linearGradient id="paint0_linear_1016_341" x1="1.67375" y1="6.24864" x2="23.3263" y2="18.7514" gradientUnits="userSpaceOnUse">
<stop offset="0.25" stop-color="#9ABCE2"/>
<stop offset="1" stop-color="#368AC8"/>
</linearGradient>
<linearGradient id="paint1_linear_1016_341" x1="314.025" y1="527.33" x2="949.849" y2="527.33" gradientUnits="userSpaceOnUse">
<stop offset="0.25" stop-color="#9ABCE2"/>
<stop offset="1" stop-color="#368AC8"/>
</linearGradient>
<clipPath id="clip0_1016_341">
<rect width="25" height="25" fill="white"/>
</clipPath>
</defs>
</svg>

</span>
                <input type="text" class="border -ml-2 flex-1 outline-none rounded-xl input-insert social-address"
                       placeholder="Twitter " readonly>
              </div>
              <div class="flex ">
          <span class="bg-gray-300 px-8 rounded-l-xl text-input insta">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="25" height="25" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_1016_376" transform="scale(0.0107527)"/>
</pattern>
<image id="image0_1016_376" width="93" height="93" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>

</span>
                <input type="text" class="border -ml-2 flex-1 outline-none rounded-xl input-insert social-address"
                       placeholder="Instagram" readonly>
              </div>
            </div>

        </div>
      </div>
      <div class="flex flex-col ml-3">
        <div class="flex w-8/12 mt-5">
          <span class="bg-gray-300 px-8 rounded-l-xl text-input ">Direct access link</span>
          <input type="text" class="border -ml-2 flex-1 outline-none rounded-xl input-insert"
                 placeholder="Enter a direct link for admin access to review the product">
        </div>
        <div class="flex w-8/12 mt-8">
          <span class="bg-gray-300 px-8 rounded-l-xl text-input ">Initial price</span>
          <input type="text" class="border -ml-2 flex-1 outline-none rounded-xl input-insert"
                 placeholder="Enter an initial price to provide your currency code">
        </div>
        <div class="flex w-8/12 mt-8">
          <span class="bg-gray-300 px-8 rounded-l-xl text-input ">Supply number</span>
          <input type="text" class="border -ml-2 flex-1 outline-none rounded-xl input-insert"
                 placeholder="Specify a specific number to supply (this number cannot be changed)">
        </div>
      </div>

      <div class="create-nft">
<button class="text-white font-medium rounded-2xl py-2.5 px-12 btn-nft">Create Token</button>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  layout: "shop",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.shop-background {
  background-color: #e6e3e3;
}

.container-shadow {
  box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.25);
}

.item-text {
  color: #999999;
}

.form__upload {
  border: 1px solid #C91EFA;

  div {
    p {
      color: #C91EFA52;
    }
  }
}


.text-input {
  display: flex;
  align-items: center;
  padding: 12px 3rem;
  margin-left: 1rem;
  margin-right: -1rem;
    color: #1D1355;
}

.margin__middle {
  margin: 3rem 0;
}

.input-insert {
  text-indent: 14px;
  border-top-left-radius: 36px;
  border-bottom-left-radius: 36px;
}

.text-description {
  padding-bottom: 10rem;
  padding-top: 1rem;
}

input, textarea {
  border: 1px solid #C91EFA;
  resize: none;

}

.textarea-text {
  padding: 12px 4rem;
}

.textarea-parent {
  margin-top: 3rem;
}

.right-manufactorer {
  margin-top: 3rem;
}

.add-plus {
  margin-left: 17px;
  margin-top: 2px;
}

.social-address {
  cursor: pointer;
  text-align: -webkit-center;
}
.social{
  margin: 4rem 0;
}
.create-nft{
  text-align: center;
  margin: 9rem 0;
  padding-bottom: 8rem;
  button{
  padding: 1rem 5rem;
}
}
.btn-nft{
  background: #C91EFA !important;
  transition: all .3s ease-in-out;
&:hover{
  transform: translateY(0);
  box-shadow: 0px 0px 15px #C91EFA !important;
}
}

</style>
