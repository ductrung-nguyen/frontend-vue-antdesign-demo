import { FormSchema } from '/@/components/Form';

export const schemas: FormSchema[] = [
  {
    field: 'title',
    component: 'Input',
    label: 'title',
    componentProps: {
      placeholder: 'Give the target a name',
    },
    required: true,
  },
  {
    field: 'time',
    component: 'RangePicker',
    label: 'start and end date',
    required: true,
  },
  {
    field: 'target',
    component: 'InputTextArea',
    label: 'target description',
    componentProps: {
      placeholder: 'Please enter your phased work goals',
      rows: 4,
    },
    required: true,
  },
  {
    field: 'metrics',
    component: 'InputTextArea',
    label: 'Metric',
    componentProps: {
      placeholder: 'Please enter a measure',
      rows: 4,
    },
    required: true,
  },
  {
    field: 'client',
    component: 'Input',
    label: 'customer',
    helpMessage: 'target service object',
    subLabel: '(optional)',
    componentProps: {
      placeholder:
        'Please describe the customers you serve, internal customers directly @name/job number',
    },
  },
  {
    field: 'inviteer',
    component: 'Input',
    label: 'Invite reviewers',
    subLabel: '(optional)',
    componentProps: {
      placeholder: 'Please directly @name/job number, up to 5 people can be invited',
    },
  },
  {
    field: 'weights',
    component: 'InputNumber',
    label: 'weight',
    subLabel: '(optional)',
    componentProps: {
      formatter: (value: string) => (value ? `${value}%` : ''),
      parser: (value: string) => value.replace('%', ''),
      placeholder: 'Please enter',
    },
  },
  {
    field: 'disclosure',
    component: 'RadioGroup',
    label: 'target public',
    itemProps: {
      extra: 'Customers and reviewers are shared by default',
    },
    componentProps: {
      options: [
        {
          label: 'public',
          value: '1',
        },
        {
          label: 'Partially public',
          value: '2',
        },
        {
          label: 'unlisted',
          value: '3',
        },
      ],
    },
  },
  {
    field: 'disclosurer',
    component: 'Select',
    label: ' ',
    show: ({ model }) => {
      return model.disclosure === '2';
    },
    componentProps: {
      placeholder: 'Open to',
      mode: 'multiple',
      options: [
        {
          label: 'Colleague 1',
          value: '1',
        },
        {
          label: 'Colleague 2',
          value: '2',
        },
        {
          label: 'Colleague 3',
          value: '3',
        },
      ],
    },
  },
];
