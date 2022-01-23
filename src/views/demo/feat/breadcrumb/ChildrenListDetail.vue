<template>
  <PageWrapper title="Child detail page">
    <div>The content of the child details page is here</div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  export default defineComponent({ components: { PageWrapper } });
</script>
