<template>
  <PageWrapper title="Text copy example">
    <CollapseContainer class="w-full h-32 bg-white rounded-md" title="Copy Example">
      <div class="flex justify-center">
        <a-input placeholder="Please enter" v-model:value="value" />
        <a-button type="primary" @click="handleCopy"> Copy </a-button>
      </div>
    </CollapseContainer>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, unref, ref } from 'vue';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useCopyToClipboard } from '/@/hooks/web/useCopyToClipboard';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    name: 'Copy',
    components: { CollapseContainer, PageWrapper },
    setup() {
      const valueRef = ref('');
      const { createMessage } = useMessage();
      const { clipboardRef, copiedRef } = useCopyToClipboard();

      function handleCopy() {
        const value = unref(valueRef);
        if (!value) {
          createMessage.warning('Please enter the content to be copied!');
          return;
        }
        clipboardRef.value = value;
        if (unref(copiedRef)) {
          createMessage.warning('Copy success!');
        }
      }
      return { handleCopy, value: valueRef };
    },
  });
</script>
