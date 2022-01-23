import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
import { Icon } from '/@/components/Icon';

export const columns: BasicColumn[] = [
  {
    title: 'Menu name',
    dataIndex: 'menuName',
    width: 200,
    align: 'left',
  },
  {
    title: 'icon',
    dataIndex: 'icon',
    width: 50,
    customRender: ({ record }) => {
      return h(Icon, { icon: record.icon });
    },
  },
  {
    title: 'Permission ID',
    dataIndex: 'permission',
    width: 180,
  },
  {
    title: 'Component',
    dataIndex: 'component',
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
];

const isDir = (type: string) => type === '0';
const isMenu = (type: string) => type === '1';
const isButton = (type: string) => type === '2';

export const searchFormSchema: FormSchema[] = [
  {
    field: 'menuName',
    label: 'Menu name',
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
    field: 'type',
    label: 'menu type',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: 'directory', value: '0' },
        { label: 'menu', value: '1' },
        { label: 'button', value: '2' },
      ],
    },
    colProps: { lg: 24, md: 24 },
  },
  {
    field: 'menuName',
    label: 'Menu name',
    component: 'Input',
    required: true,
  },

  {
    field: 'parentMenu',
    label: 'Superior menu',
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'menuName',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
  },

  {
    field: 'orderNo',
    label: 'sort',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'icon',
    label: 'icon',
    component: 'IconPicker',
    required: true,
    ifShow: ({ values }) => !isButton(values.type),
  },

  {
    field: 'routePath',
    label: 'routing address',
    component: 'Input',
    required: true,
    ifShow: ({ values }) => !isButton(values.type),
  },
  {
    field: 'component',
    label: 'Component path',
    component: 'Input',
    ifShow: ({ values }) => isMenu(values.type),
  },
  {
    field: 'permission',
    label: 'Permission ID',
    component: 'Input',
    ifShow: ({ values }) => !isDir(values.type),
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
  },
  {
    field: 'isExt',
    label: 'whether external link',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: 'no', value: '0' },
        { label: 'yes', value: '1' },
      ],
    },
    ifShow: ({ values }) => !isButton(values.type),
  },

  {
    field: 'keepalive',
    label: 'whether to cache',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: 'no', value: '0' },
        { label: 'yes', value: '1' },
      ],
    },
    ifShow: ({ values }) => isMenu(values.type),
  },

  {
    field: 'show',
    label: 'whether to display',
    component: 'RadioButtonGroup',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: 'yes', value: '0' },
        { label: 'no', value: '1' },
      ],
    },
    ifShow: ({ values }) => !isButton(values.type),
  },
];
