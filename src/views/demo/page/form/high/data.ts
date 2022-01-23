import { FormSchema } from '/@/components/Form';

const basicOptions: LabelValueOptions = [
  {
    label: 'Fu Xiaoxiao',
    value: '1',
  },
  {
    label: 'Zhou Mao Mao',
    value: '2',
  },
];

const storeTypeOptions: LabelValueOptions = [
  {
    label: 'private',
    value: '1',
  },
  {
    label: 'public',
    value: '2',
  },
];

export const schemas: FormSchema[] = [
  {
    field: 'f1',
    component: 'Input',
    label: 'warehouse name',
    required: true,
  },
  {
    field: 'f2',
    component: 'Input',
    label: 'Warehouse domain name',
    required: true,
    componentProps: {
      addonBefore: 'http://',
      addonAfter: 'com',
    },
    colProps: {
      offset: 2,
    },
  },
  {
    field: 'f3',
    component: 'Select',
    label: 'Warehouse manager',
    componentProps: {
      options: basicOptions,
    },
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 'f4',
    component: 'Select',
    label: 'Approvers',
    componentProps: {
      options: basicOptions,
    },
    required: true,
  },
  {
    field: 'f5',
    component: 'RangePicker',
    label: 'effective date',
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 'f6',
    component: 'Select',
    label: 'Warehouse type',
    componentProps: {
      options: storeTypeOptions,
    },
    required: true,
    colProps: {
      offset: 2,
    },
  },
];

export const taskSchemas: FormSchema[] = [
  {
    field: 't1',
    component: 'Input',
    label: 'task name',
    required: true,
  },
  {
    field: 't2',
    component: 'Input',
    label: 'Task description',
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 't3',
    component: 'Select',
    label: 'executor',
    componentProps: {
      options: basicOptions,
    },
    required: true,
    colProps: {
      offset: 2,
    },
  },
  {
    field: 't4',
    component: 'Select',
    label: 'responsible person',
    componentProps: {
      options: basicOptions,
    },
    required: true,
  },
  {
    field: 't5',
    component: 'TimePicker',
    label: 'effective date',
    required: true,
    componentProps: {
      style: { width: '100%' },
    },
    colProps: {
      offset: 2,
    },
  },
  {
    field: 't6',
    component: 'Select',
    label: 'task type',
    componentProps: {
      options: storeTypeOptions,
    },
    required: true,
    colProps: {
      offset: 2,
    },
  },
];
