import { FormSchema } from '/@/components/Form/index';

export const searchList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 6; i++) {
    result.push({
      id: i,
      title: 'Vue Admin',
      description: ['Vue admin', 'design language', 'Typescript'],
      content:
        'A complete set of enterprise-level background management system based on Vue Next, TypeScript, Ant Design.',
      time: '2020-11-14 11:20',
    });
  }
  return result;
})();

export const actions: any[] = [
  { icon: 'clarity:star-line', text: '156', color: '#018ffb' },
  { icon: 'bx:bxs-like', text: '156', color: '#459ae8' },
  { icon: 'bx:bxs-message-dots', text: '2', color: '#42d27d' },
];

export const schemas: FormSchema[] = [
  {
    field: 'field1',
    component: 'InputSearch',
    label: 'Item name',
    colProps: {
      span: 8,
    },
    componentProps: {
      onChange: (e: any) => {
        console.log(e);
      },
    },
  },
];
