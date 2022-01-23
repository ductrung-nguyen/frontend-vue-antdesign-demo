<template>
  <PageWrapper
    :title="`User` + userId + `Profile`"
    content="This is the user profile details page. This page is only used to demonstrate that the same route opens multiple pages in the tab and displays different data"
    contentBackground
    @back="goBack"
  >
    <template #extra>
      <a-button type="primary" danger> disable account </a-button>
      <a-button type="primary"> Change password </a-button>
    </template>
    <template #footer>
      <a-tabs default-active-key="detail" v-model:activeKey="currentKey">
        <a-tab-pane key="detail" tab="User Profile" />
        <a-tab-pane key="logs" tab="Operation log" />
      </a-tabs>
    </template>
    <div class="pt-4 m-4 desc-wrap">
      <template v-if="currentKey == 'detail'">
        <div v-for="i in 10" :key="i">This is the user {{ userId }} profile Tab</div>
      </template>
      <template v-if="currentKey == 'logs'">
        <div v-for="i in 10" :key="i">This is the user {{ userId }} operation log Tab</div>
      </template>
    </div>
  </PageWrapper>
</template>

<script>
  import { defineComponent, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { PageWrapper } from '/@/components/Page';
  import { useNavigator } from '/@/hooks/web/usePage';
  import { useTabs } from '/@/hooks/web/useTabs';
  import { Tabs } from 'ant-design-vue';
  export default defineComponent({
    name: 'AccountDetail',
    components: { PageWrapper, ATabs: Tabs, ATabPane: Tabs.TabPane },
    setup() {
      const route = useRoute();
      const go = useNavigator();
      // Here you can get the user ID
      const userId = ref(route.params?.id);
      const currentKey = ref('detail');
      const { setTitle } = useTabs();
      // TODO
      // The code on this page is for demonstration only, and the relevant information of the user should be obtained
      // from the interface through userId

      // Set the title of the Tab (will not affect the title of the page)
      setTitle('Details: User' + userId.value);

      // The operation when the back link is clicked on the left side of the page
      function goBack() {
        // In the effect of this example, click Return to always jump to the account list page, and can return
        // to the previous page in actual application
        go('/system/account');
      }
      return { userId, currentKey, goBack };
    },
  });
</script>

<style></style>
