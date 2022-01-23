<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              label: 'Edit',
              onClick: handleEdit.bind(null, record),
              auth: 'other', // Whether to display according to permission control: no permission, no display
            },
            {
              label: 'Delete',
              icon: 'ic:outline-delete-outline',
              onClick: handleDelete.bind(null, record),
              auth: 'super', // Whether to display according to permission control: with permission, it will be displayed
            },
          ]"
          :dropDownActions="[
            {
              label: 'Enable',
              popConfirm: {
                title: 'Whether to enable?',
                confirm: handleOpen.bind(null, record),
              },
              ifShow: (_action) => {
                return record.status !== 'enable';
                // Whether it is displayed according to the business control:
                // the enable button is not displayed in the non-enable state
              },
            },
            {
              label: 'Disabled',
              popConfirm: {
                title: 'Disable?',
                confirm: handleOpen.bind(null, record),
              },
              ifShow: () => {
                return record.status === 'enable'; // Whether to display according to business control: display disable button in enable state
              },
            },
            {
              label: 'Simultaneous control',
              popConfirm: {
                title: 'Is it displayed dynamically?',
                confirm: handleOpen.bind(null, record),
              },
              auth: 'super', // At the same time, whether to display according to permissions and business control
              ifShow: () => {
                return true;
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
      title: 'Numbering',
      dataIndex: 'no',
      width: 100,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      auth: 'test', // Whether to display according to permission control: no permission, no display
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      auth: 'super', // At the same time, whether to display according to permissions and business control
      ifShow: (_column) => {
        return true;
      },
    },
    {
      title: 'Starting time',
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
        bordered: true,
        actionColumn: {
          width: 250,
          title: 'Action',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });
      function handleEdit(record: Recordable) {
        console.log('Clicked "Edit"', record);
      }
      function handleDelete(record: Recordable) {
        console.log('Clicked "Delete"', record);
      }
      function handleOpen(record: Recordable) {
        console.log('Click to enable', record);
      }
      return {
        registerTable,
        handleEdit,
        handleDelete,
        handleOpen,
      };
    },
  });
</script>
