import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';

export const columns: BasicColumn[] = [
  {
    title: 'Department name',
    dataIndex: 'deptName',
    width: 160,
    align: 'left',
  },
  {
    title: 'Sort',
    dataIndex: 'orderNo',
    width: 50,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: 80,
    customRender: ({ record }) => {
      const status = record.status;
      const enable = ~~status === 0;
      const color = enable ? 'green' : 'red';
      const text = enable ? 'enable' : 'disable';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: 'create time',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: 'Notes',
    dataIndex: 'remark',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'deptName',
    label: 'Department name',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: 'Status',
    component: 'Select',
    componentProps: {
      options: [
        { label: 'enable', value: '0' },
        { label: 'disable', value: '1' },
      ],
    },
    colProps: { span: 8 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'deptName',
    label: 'Department name',
    component: 'Input',
    required: true,
  },
  {
    field: 'parentDept',
    label: 'Superior department',
    component: 'TreeSelect',

    componentProps: {
      fieldNames: {
        label: 'deptName',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
    required: true,
  },
  {
    field: 'orderNo',
    label: 'sort',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'status',
    label: 'Status',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: 'enable', value: '0' },
        { label: 'disable', value: '1' },
      ],
    },
    required: true,
  },
  {
    label: 'Notes',
    field: 'remark',
    component: 'InputTextArea',
  },
];
