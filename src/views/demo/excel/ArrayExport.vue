<template>
  <PageWrapper title="Export example" content="Export from data in array format">
    <BasicTable title="Basic form" :columns="columns" :dataSource="data">
      <template #toolbar>
        <a-button @click="aoaToExcel"> Export </a-button>
      </template>
    </BasicTable>
  </PageWrapper>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable } from '/@/components/Table';
  import { aoaToSheetXlsx } from '/@/components/Excel';
  import { arrHeader, arrData, columns, data } from './data';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    components: { BasicTable, PageWrapper },
    setup() {
      function aoaToExcel() {
        // Ensure that the data order is consistent with the header
        aoaToSheetXlsx({
          data: arrData,
          header: arrHeader,
          filename: 'data.xlsx',
        });
      }

      return {
        aoaToExcel,
        columns,
        data,
      };
    },
  });
</script>
