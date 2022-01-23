<template>
  <PageWrapper title="Image preview example">
    <ImagePreview :imageList="imgList" />
    <a-button @click="openImg" type="primary">No preview</a-button>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { createImgPreview, ImagePreview } from '/@/components/Preview/index';
  import { PageWrapper } from '/@/components/Page';
  // import { PreviewActions } from '/@/components/Preview/src/typing';

  const imgList: string[] = [
    'https://picsum.photos/id/66/346/216',
    'https://picsum.photos/id/67/346/216',
    'https://picsum.photos/id/68/346/216',
  ];
  export default defineComponent({
    components: { PageWrapper, ImagePreview },
    setup() {
      function openImg() {
        const onImgLoad = ({ index, url, dom }) => {
          console.log(`Image ${index + 1} has been loaded, URL is: ${url}`, dom);
        };
        // You can use the PreviewActions returned by createImgPreview to control the preview logic
        // to implement tricky operations like slideshows and automatic rotation
        createImgPreview({ imageList: imgList, defaultWidth: 700, rememberState: true, onImgLoad });
      }
      return { imgList, openImg };
    },
  });
</script>
