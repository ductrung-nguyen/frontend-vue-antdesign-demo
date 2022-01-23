<template>
  <div class="p-4">
    <div class="mb-4">
      <a-button class="mr-2" @click="reloadTable"> Reduction </a-button>
      <a-button class="mr-2" @click="changeLoading"> Enable loading </a-button>
      <a-button class="mr-2" @click="changeColumns"> Change Columns </a-button>
      <a-button class="mr-2" @click="getColumn"> Get Columns </a-button>
      <a-button class="mr-2" @click="getTableData"> Get table data </a-button>
      <a-button class="mr-2" @click="getTableRawData"> Get table raw data </a-button>
      <a-button class="mr-2" @click="setPaginationInfo"> Jump to page 2 </a-button>
    </div>
    <div class="mb-4">
      <a-button class="mr-2" @click="getSelectRowList"> Get selected row </a-button>
      <a-button class="mr-2" @click="getSelectRowKeyList"> Get the selected row Key </a-button>
      <a-button class="mr-2" @click="setSelectedRowKeyList"> Set selected row </a-button>
      <a-button class="mr-2" @click="clearSelect"> Clear selected row </a-button>
      <a-button class="mr-2" @click="getPagination"> Get pagination information </a-button>
    </div>
    <BasicTable
      :canResize="false"
      title="RefTable example"
      titleHelpMessage="Use Ref to call method in table"
      ref="tableRef"
      :api="api"
      :columns="columns"
      rowKey="id"
      :rowSelection="{ type: 'checkbox' }"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref } from 'vue';
  import { BasicTable, TableActionType } from '/@/components/Table';
  import { getBasicColumns, getBasicShortColumns } from './tableData';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { demoListApi } from '/@/api/demo/table';
  export default defineComponent({
    components: { BasicTable },
    setup() {
      const tableRef = ref<Nullable<TableActionType>>(null);
      const { createMessage } = useMessage();

      function getTableAction() {
        const tableAction = unref(tableRef);
        if (!tableAction) {
          throw new Error('tableAction is null');
        }
        return tableAction;
      }
      function changeLoading() {
        getTableAction().setLoading(true);
        setTimeout(() => {
          getTableAction().setLoading(false);
        }, 1000);
      }
      function changeColumns() {
        getTableAction().setColumns(getBasicShortColumns());
      }
      function reloadTable() {
        getTableAction().setColumns(getBasicColumns());

        getTableAction().reload({
          page: 1,
        });
      }
      function getColumn() {
        createMessage.info('Check it out in the console!');
        console.log(getTableAction().getColumns());
      }

      function getTableData() {
        createMessage.info('Check it out in the console!');
        console.log(getTableAction().getDataSource());
      }
      function getTableRawData() {
        createMessage.info('Check it out in the console!');
        console.log(getTableAction().getRawDataSource());
      }

      function getPagination() {
        createMessage.info('Check it out in the console!');
        console.log(getTableAction().getPaginationRef());
      }

      function setPaginationInfo() {
        getTableAction().setPagination({
          current: 2,
        });
        getTableAction().reload();
      }
      function getSelectRowList() {
        createMessage.info('Check it out in the console!');
        console.log(getTableAction().getSelectRows());
      }
      function getSelectRowKeyList() {
        createMessage.info('Check it out in the console!');
        console.log(getTableAction().getSelectRowKeys());
      }
      function setSelectedRowKeyList() {
        getTableAction().setSelectedRowKeys(['0', '1', '2']);
      }
      function clearSelect() {
        getTableAction().clearSelectedRowKeys();
      }

      return {
        tableRef,
        api: demoListApi,
        columns: getBasicColumns(),
        changeLoading,
        changeColumns,
        reloadTable,
        getColumn,
        getTableData,
        getTableRawData,
        getPagination,
        setPaginationInfo,
        getSelectRowList,
        getSelectRowKeyList,
        setSelectedRowKeyList,
        clearSelect,
      };
    },
  });
</script>
