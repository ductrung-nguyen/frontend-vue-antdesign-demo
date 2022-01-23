<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: 'Delete',
              icon: 'ic:outline-delete-outline',
              onClick: handleDelete.bind(null, record),
            },
          ]"
          :dropDownActions="[
            {
              label: 'Enable',
              popConfirm: {
                title: 'Do you want to enable?',
                confirm: handleOpen.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table';

  import { demoListApi } from '/@/api/demo/table';
  const columns: BasicColumn[] = [
    {
      title: 'ID',
      dataIndex: 'id',
      fixed: 'left',
      width: 280,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      width: 260,
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Number',
      dataIndex: 'no',
      width: 300,
    },
    {
      title: 'Starting time',
      width: 200,
      dataIndex: 'beginTime',
    },
    {
      title: 'End Time',
      dataIndex: 'endTime',
      width: 200,
    },
  ];
  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const [registerTable] = useTable({
        title: 'TableAction component and fixed column example',
        api: demoListApi,
        columns: columns,
        rowSelection: { type: 'radio' },
        bordered: true,
        actionColumn: {
          width: 160,
          title: 'Action',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });
      function handleDelete(record: Recordable) {
        console.log('Clicked "Delete"', record);
      }
      function handleOpen(record: Recordable) {
        console.log('Clicked "Open"', record);
      }
      return {
        registerTable,
        handleDelete,
        handleOpen,
      };
    },
  });
</script>
