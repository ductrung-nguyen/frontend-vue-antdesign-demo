import { BasicColumn } from '/@/components/Table/src/types/table';

import { Badge } from 'ant-design-vue';

export const refundTimeTableSchema: BasicColumn[] = [
  {
    title: 'time',
    width: 150,
    dataIndex: 't1',
  },
  {
    title: 'Current progress',
    width: 150,
    dataIndex: 't2',
  },
  {
    title: 'Status',
    width: 150,
    dataIndex: 't3',
    customRender: ({ record }) => {
      return <Badge status="success" text={record.t3} />;
    },
  },
  {
    title: 'Operator ID',
    width: 150,
    dataIndex: 't4',
  },
  {
    title: 'Time consuming',
    width: 150,
    dataIndex: 't5',
  },
];

export const refundTimeTableData: any[] = [
  {
    t1: '2017-10-01 14:10',
    t2: 'Contact customer',
    t3: 'in progress',
    t4: 'Picker ID1234',
    t5: '5mins',
  },
  {
    t1: '2017-10-01 14:10',
    t2: 'Pickup clerk departs',
    t3: 'success',
    t4: 'Picker ID1234',
    t5: '5mins',
  },
  {
    t1: '2017-10-01 14:10',
    t2: 'The picker takes the order',
    t3: 'success',
    t4: 'system',
    t5: '5mins',
  },
  {
    t1: '2017-10-01 14:10',
    t2: 'Application approved',
    t3: 'success',
    t4: 'User',
    t5: '1h',
  },
];
