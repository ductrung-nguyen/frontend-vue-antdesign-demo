<template>
  <PageWrapper title="Export example" content="Export data in JSON format">
    <BasicTable title="Basic form" :columns="columns" :dataSource="data">
      <template #toolbar>
        <a-button @click="defaultHeader"> Export: default header </a-button>
        <a-button @click="customHeader"> Export: custom header </a-button>
      </template>
    </BasicTable>
  </PageWrapper>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable } from '/@/components/Table';
  import { jsonToSheetXlsx } from '/@/components/Excel';
  import { columns, data } from './data';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    components: { BasicTable, PageWrapper },
    setup() {
      function defaultHeader() {
        // Default Object.keys(data[0]) as header
        jsonToSheetXlsx({
          data,
          filename: 'use-key-as-default-header.xlsx',
        });
      }

      function customHeader() {
        jsonToSheetXlsx({
          data,
          header: {
            id: 'ID',
            name: 'Name',
            age: 'Age',
            no: 'Number',
            address: 'Address',
            beginTime: 'Starting time',
            endTime: 'End Time',
          },
          filename: 'data.xlsx',
          json2sheetOpts: {
            // Specified order
            header: ['name', 'id'],
          },
        });
      }

      return {
        defaultHeader,
        customHeader,
        columns,
        data,
      };
    },
  });
</script>
