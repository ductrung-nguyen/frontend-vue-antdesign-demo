<template>
  <PageWrapper title="QR code component usage example">
    <div class="flex flex-wrap">
      <CollapseContainer
        title="Basic example"
        :canExpan="true"
        class="text-center mb-6 qrcode-demo-item"
      >
        <QrCode :value="qrCodeUrl" />
      </CollapseContainer>

      <CollapseContainer
        title="Render to img tag example"
        class="text-center mb-6 qrcode-demo-item"
      >
        <QrCode :value="qrCodeUrl" tag="img" />
      </CollapseContainer>

      <CollapseContainer
        title="Configuration style example"
        class="text-center mb-6 qrcode-demo-item"
      >
        <QrCode
          :value="qrCodeUrl"
          :options="{
            color: { dark: '#55D187' },
          }"
        />
      </CollapseContainer>

      <CollapseContainer title="Local logo example" class="text-center mb-6 qrcode-demo-item">
        <QrCode :value="qrCodeUrl" :logo="LogoImg" />
      </CollapseContainer>

      <CollapseContainer title="Online Logo Example" class="text-center mb-6 qrcode-demo-item">
        <QrCode
          :value="qrCodeUrl"
          logo="https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png"
          :options="{
            color: { dark: '#55D187' },
          }"
        />
      </CollapseContainer>

      <CollapseContainer
        title="Logo configuration example"
        class="text-center mb-6 qrcode-demo-item"
      >
        <QrCode
          :value="qrCodeUrl"
          :logo="{
            src: 'https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png',
            logoSize: 0.2,
            borderSize: 0.05,
            borderRadius: 50,
            bgColor: 'blue',
          }"
        />
      </CollapseContainer>

      <CollapseContainer title="Download example" class="text-center qrcode-demo-item">
        <QrCode :value="qrCodeUrl" ref="qrRef" :logo="LogoImg" />
        <a-button class="mb-2" type="primary" @click="download"> Download </a-button>
        <div class="msg"
          >(Online logo will cause the image to cross domain, and you need to download the image and
          you need to solve the cross domain problem by yourself)</div
        >
      </CollapseContainer>

      <CollapseContainer title="Configuration size example" class="text-center qrcode-demo-item">
        <QrCode :value="qrCodeUrl" :width="300" />
      </CollapseContainer>

      <CollapseContainer title="Extended drawing example" class="text-center qrcode-demo-item">
        <QrCode
          :value="qrCodeUrl"
          :width="200"
          :options="{ margin: 5 }"
          ref="qrDiyRef"
          :logo="LogoImg"
          @done="onQrcodeDone"
        />
        <a-button class="mb-2" type="primary" @click="downloadDiy"> Download </a-button>
        <div class="msg">For extended drawing, tag cannot be set to img</div>
      </CollapseContainer>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { QrCode, QrCodeActionType } from '/@/components/Qrcode/index';
  import LogoImg from '/@/assets/images/logo.png';
  import { CollapseContainer } from '/@/components/Container/index';
  import { PageWrapper } from '/@/components/Page';

  const qrCodeUrl = 'https://www.vvbin.cn';
  export default defineComponent({
    components: { CollapseContainer, QrCode, PageWrapper },
    setup() {
      const qrRef = ref<Nullable<QrCodeActionType>>(null);
      const qrDiyRef = ref<Nullable<QrCodeActionType>>(null);
      function download() {
        const qrEl = unref(qrRef);
        if (!qrEl) return;
        qrEl.download('file name');
      }
      function downloadDiy() {
        const qrEl = unref(qrDiyRef);
        if (!qrEl) return;
        qrEl.download('Qrcode');
      }

      function onQrcodeDone({ ctx }: any) {
        if (ctx instanceof CanvasRenderingContext2D) {
          // extra draw
          ctx.fillStyle = 'black';
          ctx.font = '16px "Microsoft Yahei"';
          ctx.textBaseline = 'bottom';
          ctx.textAlign = 'center';
          ctx.fillText('You are handsome, you should scan first', 100, 195, 200);
        }
      }
      return {
        onQrcodeDone,
        qrCodeUrl,
        LogoImg,
        download,
        downloadDiy,
        qrRef,
        qrDiyRef,
      };
    },
  });
</script>
<style scoped>
  .qrcode-demo-item {
    width: 30%;
    margin-right: 1%;
  }
</style>
