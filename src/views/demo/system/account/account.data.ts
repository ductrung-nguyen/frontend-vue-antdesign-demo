import { getAllRoleList, isAccountExist } from '/@/api/demo/system';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: 'Username',
    dataIndex: 'account',
    width: 120,
  },
  {
    title: 'Nickname',
    dataIndex: 'nickname',
    width: 120,
  },
  {
    title: 'Mailbox',
    dataIndex: 'email',
    width: 120,
  },
  {
    title: 'Create time',
    dataIndex: 'createTime',
    width: 180,
  },
  {
    title: 'Role',
    dataIndex: 'role',
    width: 200,
  },
  {
    title: 'Notes',
    dataIndex: 'remark',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'account',
    label: 'username',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'nickname',
    label: 'nickname',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const accountFormSchema: FormSchema[] = [
  {
    field: 'account',
    label: 'username',
    component: 'Input',
    helpMessage: [
      'This field demonstrates asynchronous authentication',
      'You cannot enter a username with admin',
    ],
    rules: [
      {
        required: true,
        message: 'Please enter a username',
      },
      {
        validator(_, value) {
          return new Promise((resolve, reject) => {
            isAccountExist(value)
              .then(() => resolve())
              .catch((err) => {
                reject(err.message || 'Authentication failed');
              });
          });
        },
      },
    ],
  },
  {
    field: 'pwd',
    label: 'password',
    component: 'InputPassword',
    required: true,
    ifShow: false,
  },
  {
    label: 'role',
    field: 'role',
    component: 'ApiSelect',
    componentProps: {
      api: getAllRoleList,
      labelField: 'roleName',
      valueField: 'roleValue',
    },
    required: true,
  },
  {
    field: 'dept',
    label: 'Department',
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
    field: 'nickname',
    label: 'nickname',
    component: 'Input',
    required: true,
  },

  {
    label: 'mailbox',
    field: 'email',
    component: 'Input',
    required: true,
  },

  {
    label: 'Notes',
    field: 'remark',
    component: 'InputTextArea',
  },
];
