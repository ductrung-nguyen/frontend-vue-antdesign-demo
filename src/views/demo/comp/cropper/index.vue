<template>
  <PageWrapper
    title="Image cropping example"
    content="The test API service needs to be enabled to perform the upload test!"
  >
    <CollapseContainer title="Avatar cropping">
      <CropperAvatar :uploadApi="uploadApi" :value="avatar" />
    </CollapseContainer>

    <CollapseContainer title="Rectangle crop" class="my-4">
      <div class="container p-4">
        <div class="cropper-container mr-10">
          <CropperImage ref="refCropper" :src="img" @cropend="handleCropend" style="width: 40vw" />
        </div>
        <img :src="cropperImg" class="croppered" v-if="cropperImg" alt="" />
      </div>
      <p v-if="cropperImg">Cropped image information:{{ info }}</p>
    </CollapseContainer>

    <CollapseContainer title="Round cut">
      <div class="container p-4">
        <div class="cropper-container mr-10">
          <CropperImage
            ref="refCropper"
            :src="img"
            @cropend="handleCircleCropend"
            style="width: 40vw"
            circled
          />
        </div>
        <img :src="circleImg" class="croppered" v-if="circleImg" />
      </div>
      <p v-if="circleImg">Cropped image information:{{ circleInfo }}</p>
    </CollapseContainer>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { CollapseContainer } from '/@/components/Container';
  import { CropperImage, CropperAvatar } from '/@/components/Cropper';
  import { uploadApi } from '/@/api/sys/upload';
  import img from '/@/assets/images/header.jpg';
  import { useUserStore } from '/@/store/modules/user';

  export default defineComponent({
    components: {
      PageWrapper,
      CropperImage,
      CollapseContainer,
      CropperAvatar,
    },
    setup() {
      const info = ref('');
      const cropperImg = ref('');
      const circleInfo = ref('');
      const circleImg = ref('');
      const userStore = useUserStore();
      const avatar = ref(userStore.getUserInfo?.avatar || '');
      function handleCropend({ imgBase64, imgInfo }) {
        info.value = imgInfo;
        cropperImg.value = imgBase64;
      }

      function handleCircleCropend({ imgBase64, imgInfo }) {
        circleInfo.value = imgInfo;
        circleImg.value = imgBase64;
      }

      return {
        img,
        info,
        circleInfo,
        cropperImg,
        circleImg,
        handleCropend,
        handleCircleCropend,
        avatar,
        uploadApi: uploadApi as any,
      };
    },
  });
</script>

<style scoped>
  .container {
    display: flex;
    width: 100vw;
    align-items: center;
  }

  .cropper-container {
    width: 40vw;
  }

  .croppered {
    height: 360px;
  }

  p {
    margin: 10px;
  }
</style>
