import { DescItem } from '/@/components/Description/index';
import { BasicColumn } from '/@/components/Table/src/types/table';
import { Button } from '/@/components/Button';

import { Badge } from 'ant-design-vue';

export const refundData = {
  a1: '1000000000',
  a2: 'Picked up',
  a3: '1234123421',
  a4: '3214321432',
};

export const personData = {
  b1: 'Pay Xiaoxiao',
  b2: '18100000000',
  b3: 'Rookie storage',
  b4: 'No. 18, Wantang Road, Xihu District, Hangzhou City, Zhejiang Province',
  b5: 'none',
};
export const refundSchema: DescItem[] = [
  {
    field: 'a1',
    label: 'Pickup No.',
  },
  {
    field: 'a2',
    label: 'Status',
  },
  {
    field: 'a3',
    label: 'Sales Order Number',
  },
  {
    field: 'a4',
    label: 'sub-order',
  },
];
export const personSchema: DescItem[] = [
  {
    field: 'b1',
    label: 'User name',
  },
  {
    field: 'b2',
    label: 'Contact phone number',
  },
  {
    field: 'b3',
    label: 'Commonly used express',
  },
  {
    field: 'b4',
    label: 'Pickup address',
  },
  {
    field: 'b5',
    label: 'Notes',
  },
];

export const refundTableSchema: BasicColumn[] = [
  {
    title: 'Item number',
    width: 150,
    dataIndex: 't1',
    customRender: ({ record }) => {
      return (
        <Button type="link" size="small">
          {() => record.t1}
        </Button>
      );
    },
  },
  {
    title: 'Product name',
    width: 150,
    dataIndex: 't2',
  },
  {
    title: 'Commodity barcode',
    width: 150,
    dataIndex: 't3',
  },
  {
    title: 'unit price',
    width: 150,
    dataIndex: 't4',
  },
  {
    title: 'Quantity (pieces)',
    width: 150,
    dataIndex: 't5',
  },
  {
    title: 'Amount',
    width: 150,
    dataIndex: 't6',
  },
];

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

export const refundTableData: any[] = [
  {
    t1: 1234561,
    t2: 'Mineral water 550ml',
    t3: '12421432143214321',
    t4: '2.00',
    t5: 1,
    t6: 2.0,
  },
  {
    t1: 1234562,
    t2: 'Mineral water 550ml',
    t3: '12421432143214321',
    t4: '2.00',
    t5: 2,
    t6: 2.0,
  },
  {
    t1: 1234562,
    t2: 'Mineral water 550ml',
    t3: '12421432143214321',
    t4: '2.00',
    t5: 2,
    t6: 2.0,
  },
  {
    t1: 1234562,
    t2: 'Mineral water 550ml',
    t3: '12421432143214321',
    t4: '2.00',
    t5: 2,
    t6: 2.0,
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
