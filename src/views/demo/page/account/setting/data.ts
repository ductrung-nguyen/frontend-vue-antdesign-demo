import { FormSchema } from '/@/components/Form/index';

export interface ListItem {
  key: string;
  title: string;
  description: string;
  extra?: string;
  avatar?: string;
  color?: string;
}

// list of tabs
export const settingList = [
  {
    key: '1',
    name: 'Basic settings',
    component: 'BaseSetting',
  },
  {
    key: '2',
    name: 'Security Settings',
    component: 'SecureSetting',
  },
  {
    key: '3',
    name: 'Account binding',
    component: 'AccountBind',
  },
  {
    key: '4',
    name: 'New message notification',
    component: 'MsgNotify',
  },
];

// basic settings form
export const baseSetschemas: FormSchema[] = [
  {
    field: 'email',
    component: 'Input',
    label: 'mailbox',
    colProps: { span: 18 },
  },
  {
    field: 'name',
    component: 'Input',
    label: 'nickname',
    colProps: { span: 18 },
  },
  {
    field: 'introduction',
    component: 'InputTextArea',
    label: 'Profile',
    colProps: { span: 18 },
  },
  {
    field: 'phone',
    component: 'Input',
    label: 'Contact phone number',
    colProps: { span: 18 },
  },
  {
    field: 'address',
    component: 'Input',
    label: 'Location',
    colProps: { span: 18 },
  },
];

// security settings list
export const secureSettingList: ListItem[] = [
  {
    key: '1',
    title: 'Account Password',
    description: 'Current password strength::strong',
    extra: 'modify',
  },
  {
    key: '2',
    title: 'Secret mobile phone',
    description: 'Bound mobile phone::138****8293',
    extra: 'modify',
  },
  {
    key: '3',
    title: 'Security Question',
    description:
      'The security question is not set, the security question can effectively protect the security of the account',
    extra: 'modify',
  },
  {
    key: '4',
    title: 'Alternate Email',
    description: 'Email has been bound: :ant***sign.com',
    extra: 'modify',
  },
  {
    key: '5',
    title: 'MFA Device',
    description:
      'The MFA device is not bound, after binding, a second confirmation can be performed',
    extra: 'modify',
  },
];

// account binding list
export const accountBindList: ListItem[] = [
  {
    key: '1',
    title: 'Bind Taobao',
    description: 'Currently unbound Taobao account',
    extra: 'binding',
    avatar: 'ri:taobao-fill',
    color: '#ff4000',
  },
  {
    key: '2',
    title: 'Bind Alipay',
    description: 'The Alipay account is not currently bound',
    extra: 'binding',
    avatar: 'fa-brands:alipay',
    color: '#2eabff',
  },
  {
    key: '3',
    title: 'Binding Dingding',
    description: 'The DingTalk account is not currently bound',
    extra: 'binding',
    avatar: 'ri:dingding-fill',
    color: '#2eabff',
  },
];

// new message notification list
export const msgNotifyList: ListItem[] = [
  {
    key: '1',
    title: 'Account Password',
    description: 'Messages from other users will be notified in the form of internal messages',
  },
  {
    key: '2',
    title: 'System message',
    description: 'System messages will be notified in the form of an internal letter',
  },
  {
    key: '3',
    title: 'To-do task',
    description: 'To-do tasks will be notified in the form of an internal letter',
  },
];
