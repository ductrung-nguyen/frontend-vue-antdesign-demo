<template>
  <PageWrapper title="Menu with parameters (routing)" content="Support multi-level parameters">
    Current parameters: {{ params }}
    <br />
    Enter parameters to switch routes:
    <Input
      v-model:value="value"
      placeholder="It is recommended to be a standard url character, click to switch after input"
    />
    <a-button type="primary" @click="handleClickGo">Switch routing</a-button>
    <br />
    After switching routes
    <ul>
      <li>You can refresh the page to test whether the routing parameters are normal. </li>
      <li
        >You can expand the submenu in the left menu and click to test whether the parameters are
        carried normally.
      </li>
    </ul>
  </PageWrapper>
</template>
<script lang="ts">
  import { Input } from 'ant-design-vue';
  import { computed, defineComponent, ref, unref } from 'vue';
  import { useRouter } from 'vue-router';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    name: 'TestMenu',
    components: { PageWrapper, Input },
    setup() {
      const { currentRoute, replace } = useRouter();
      const value = ref<string>('');

      const handleClickGo = () => {
        const { name } = unref(currentRoute);
        replace({ name: name!, params: { id: unref(value) } });
      };
      return {
        value,
        handleClickGo,
        params: computed(() => {
          return unref(currentRoute).params;
        }),
      };
    },
  });
</script>
