<template>
  <div class="p-1" @click="changeModal(true)">
    <Tooltip :title="t('common.searchText')">
      <SearchOutlined />
    </Tooltip>
    <AppSearchModal @close="changeModal(false)" :visible="unref(showModal)" />
  </div>
</template>

<script lang="ts" setup>
  import { ref, unref } from 'vue';
  import { Tooltip } from 'ant-design-vue';
  import { SearchOutlined } from '@ant-design/icons-vue';
  import AppSearchModal from './AppSearchModal.vue';
  import { useI18n } from '/@/hooks/web/useI18n';
  const showModal = ref(false);
  const { t } = useI18n();

  function changeModal(show: boolean) {
    showModal.value = show;
  }
</script>
