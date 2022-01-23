<template>
  <PageWrapper
    title="Flow chart"
    content="Simple flowchart example, specific functions need to be improved by themselves"
    contentFullHeight
    fixedHeight
  >
    <FlowChart :data="demoData" />
  </PageWrapper>
</template>

<script lang="ts">
  import { FlowChart } from '/@/components/FlowChart';
  import { PageWrapper } from '/@/components/Page';

  import demoData from './dataTurbo.json';
  export default {
    components: { FlowChart, PageWrapper },
    setup() {
      return { demoData };
    },
  };
</script>
