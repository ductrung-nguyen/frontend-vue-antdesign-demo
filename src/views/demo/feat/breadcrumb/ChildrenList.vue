<template>
  <PageWrapper
    title="Hierarchical breadcrumb example"
    content="Child page breadcrumbs will be added after the current level"
  >
    <router-link to="/feat/breadcrumb/children/childrenDetail">
      Enter the child details page
    </router-link>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    components: { PageWrapper },
  });
</script>
