<template>
  <PageWrapper title="Export example" content="Optional export format">
    <BasicTable title="basic form" :columns="columns" :dataSource="data">
      <template #toolbar>
        <a-button @click="openModal"> Export </a-button>
      </template>
    </BasicTable>
    <ExpExcelModal @register="register" @success="defaultHeader" />
  </PageWrapper>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable } from '/@/components/Table';
  import { jsonToSheetXlsx, ExpExcelModal, ExportModalResult } from '/@/components/Excel';
  import { columns, data } from './data';
  import { useModal } from '/@/components/Modal';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    components: { BasicTable, ExpExcelModal, PageWrapper },
    setup() {
      function defaultHeader({ filename, bookType }: ExportModalResult) {
        // Default Object.keys(data[0]) as header
        jsonToSheetXlsx({
          data,
          filename,
          write2excelOpts: {
            bookType,
          },
        });
      }
      const [register, { openModal }] = useModal();

      return {
        defaultHeader,
        columns,
        data,
        register,
        openModal,
      };
    },
  });
</script>
