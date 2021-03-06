<template>
  <PageWrapper v-loading="loadingRef" loading-tip="Loading..." title="Loading component example">
    <div ref="wrapEl">
      <a-alert message="Component method" />
      <a-button class="my-4 mr-4" type="primary" @click="openCompFullLoading">
        Full Screen Loading
      </a-button>
      <a-button class="my-4" type="primary" @click="openCompAbsolute">
        Loading in the container
      </a-button>
      <Loading
        :loading="loading"
        :absolute="absolute"
        :theme="theme"
        :background="background"
        :tip="tip"
      />

      <a-alert message="Functional way" />

      <a-button class="my-4 mr-4" type="primary" @click="openFnFullLoading">
        Full Screen Loading
      </a-button>
      <a-button class="my-4" type="primary" @click="openFnWrapLoading">
        Loading in the container
      </a-button>

      <a-alert message="Instruction method" />
      <a-button class="my-4 mr-4" type="primary" @click="openDirectiveLoading">
        Open instruction Loading
      </a-button>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive, toRefs, ref } from 'vue';
  import { Loading, useLoading } from '/@/components/Loading';
  import { PageWrapper } from '/@/components/Page';
  import { Alert } from 'ant-design-vue';

  export default defineComponent({
    components: { Loading, PageWrapper, [Alert.name]: Alert },
    setup() {
      const wrapEl = ref<ElRef>(null);

      const loadingRef = ref(false);
      const compState = reactive({
        absolute: false,
        loading: false,
        theme: 'dark',
        background: 'rgba(111,111,111,.7)',
        tip: 'Loading...',
      });
      const [openFullLoading, closeFullLoading] = useLoading({
        tip: 'Loading...',
      });

      const [openWrapLoading, closeWrapLoading] = useLoading({
        target: wrapEl,
        props: {
          tip: 'Loading...',
          absolute: true,
        },
      });

      function openLoading(absolute: boolean) {
        compState.absolute = absolute;
        compState.loading = true;
        setTimeout(() => {
          compState.loading = false;
        }, 2000);
      }

      function openCompFullLoading() {
        openLoading(false);
      }

      function openCompAbsolute() {
        openLoading(true);
      }

      function openFnFullLoading() {
        openFullLoading();

        setTimeout(() => {
          closeFullLoading();
        }, 2000);
      }

      function openFnWrapLoading() {
        openWrapLoading();

        setTimeout(() => {
          closeWrapLoading();
        }, 2000);
      }

      function openDirectiveLoading() {
        loadingRef.value = true;
        setTimeout(() => {
          loadingRef.value = false;
        }, 2000);
      }

      return {
        openCompFullLoading,
        openFnFullLoading,
        openFnWrapLoading,
        openCompAbsolute,
        wrapEl,
        loadingRef,
        openDirectiveLoading,
        ...toRefs(compState),
      };
    },
  });
</script>
