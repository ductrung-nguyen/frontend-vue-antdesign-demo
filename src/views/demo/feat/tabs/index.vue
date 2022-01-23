<template>
  <PageWrapper title="Tab page operation example">
    <CollapseContainer
      title="Enter text in the input box below, and the content will be saved after switching back"
    >
      <a-alert
        banner
        message="This operation does not affect the page title, only the tab title is modified"
      />
      <div class="mt-2 flex flex-grow-0">
        <a-button class="mr-2" @click="setTabTitle" type="primary"> Set Tab Title </a-button>
        <a-input placeholder="Please enter" v-model:value="title" class="mr-4 w-12" />
      </div>
    </CollapseContainer>

    <CollapseContainer class="mt-4" title="Tab Actions">
      <a-button class="mr-2" @click="closeAll"> Close all </a-button>
      <a-button class="mr-2" @click="closeLeft"> Close left </a-button>
      <a-button class="mr-2" @click="closeRight"> Close right </a-button>
      <a-button class="mr-2" @click="closeOther"> Close other </a-button>
      <a-button class="mr-2" @click="closeCurrent"> Close current </a-button>
      <a-button class="mr-2" @click="refreshPage"> Refresh current </a-button>
    </CollapseContainer>

    <CollapseContainer
      class="mt-4"
      title="Tab page reuse exceeds the limit and automatically closes (use scenario: dynamic routing)"
    >
      <a-button v-for="index in 6" :key="index" class="mr-2" @click="toDetail(index)">
        Open {{ index }} details page
      </a-button>
    </CollapseContainer>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { CollapseContainer } from '/@/components/Container';
  import { useTabs } from '/@/hooks/web/useTabs';
  import { PageWrapper } from '/@/components/Page';
  import { Input, Alert } from 'ant-design-vue';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useNavigator } from '/@/hooks/web/usePage';

  export default defineComponent({
    name: 'TabsDemo',
    components: { CollapseContainer, PageWrapper, [Input.name]: Input, [Alert.name]: Alert },
    setup() {
      const go = useNavigator();
      const title = ref<string>('');
      const { closeAll, closeLeft, closeRight, closeOther, closeCurrent, refreshPage, setTitle } =
        useTabs();
      const { createMessage } = useMessage();
      function setTabTitle() {
        if (title.value) {
          setTitle(title.value);
        } else {
          createMessage.error('Please enter the tab title you want to set!');
        }
      }

      function toDetail(index: number) {
        go(`/feat/tabs/detail/${index}`);
      }
      return {
        closeAll,
        closeLeft,
        closeRight,
        closeOther,
        closeCurrent,
        toDetail,
        refreshPage,
        setTabTitle,
        title,
      };
    },
  });
</script>
