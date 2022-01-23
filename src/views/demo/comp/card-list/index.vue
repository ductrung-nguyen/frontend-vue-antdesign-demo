<template>
  <PageWrapper title="Card List Example" content="Base package">
    <CardList :params="params" :api="demoListApi" @get-method="getMethod" @delete="handleDel">
      <template #header>
        <Button type="primary" color="error"> button 1 </Button>
        <Button type="primary" color="success"> button 2 </Button>
      </template>
    </CardList>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { CardList } from '/@/components/CardList';
  import { Button } from '/@/components/Button';
  import { PageWrapper } from '/@/components/Page';
  import { demoListApi } from '/@/api/demo/table';
  import { useMessage } from '/@/hooks/web/useMessage';
  const { notification } = useMessage();
  // When requesting api with parameters
  const params = {};

  let reload = () => {};
  // Get internal fetch method;
  function getMethod(m: any) {
    reload = m;
  }
  // handle event delete
  function handleDel(id) {
    console.log(id);
    notification.success({ message: `Successfully deleted${id}` });
    reload();
  }
</script>
