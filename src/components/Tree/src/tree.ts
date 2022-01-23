import type { ExtractPropTypes } from 'vue';
import type { TreeDataItem } from 'ant-design-vue/es/tree/Tree';

import { buildProps } from '/@/utils/props';

export enum ToolbarEnum {
  SELECT_ALL,
  UN_SELECT_ALL,
  EXPAND_ALL,
  UN_EXPAND_ALL,
  CHECK_STRICTLY,
  CHECK_UN_STRICTLY,
}

export const treeEmits = [
  'update:expandedKeys',
  'update:selectedKeys',
  'update:value',
  'change',
  'check',
  'update:searchValue',
];

export interface TreeState {
  expandedKeys: KeyType[];
  selectedKeys: KeyType[];
  checkedKeys: CheckKeys;
  checkStrictly: boolean;
}

export interface FieldNames {
  children?: string;
  title?: string;
  key?: string;
}

export type KeyType = string | number;

export type CheckKeys =
  | KeyType[]
  | { checked: string[] | number[]; halfChecked: string[] | number[] };

export const treeProps = buildProps({
  value: {
    type: [Object, Array] as PropType<KeyType[] | CheckKeys>,
  },

  renderIcon: {
    type: Function as PropType<(params: Recordable) => string>,
  },

  helpMessage: {
    type: [String, Array] as PropType<string | string[]>,
    default: '',
  },

  title: {
    type: String,
    default: '',
  },
  toolbar: Boolean,
  search: Boolean,
  searchValue: {
    type: String,
    default: '',
  },
  checkStrictly: Boolean,
  clickRowToExpand: {
    type: Boolean,
    default: false,
  },
  checkable: Boolean,
  defaultExpandLevel: {
    type: [String, Number] as PropType<string | number>,
    default: '',
  },
  defaultExpandAll: Boolean,

  fieldNames: {
    type: Object as PropType<FieldNames>,
  },

  treeData: {
    type: Array as PropType<TreeDataItem[]>,
  },

  actionList: {
    type: Array as PropType<TreeActionItem[]>,
    default: () => [],
  },

  expandedKeys: {
    type: Array as PropType<KeyType[]>,
    default: () => [],
  },

  selectedKeys: {
    type: Array as PropType<KeyType[]>,
    default: () => [],
  },

  checkedKeys: {
    type: Array as PropType<CheckKeys>,
    default: () => [],
  },

  beforeRightClick: {
    type: Function as PropType<(...arg: any) => ContextMenuItem[] | ContextMenuOptions>,
    default: undefined,
  },

  rightMenuList: {
    type: Array as PropType<ContextMenuItem[]>,
  },
  // Custom data filtering judgment method (Note: It is not the entire filtering method,
  // but the built-in filtering judgment method, which is used to enhance the method that can only be filtered by title)
  filterFn: {
    type: Function as PropType<
      (searchValue: any, node: TreeItem, fieldNames: FieldNames) => boolean
    >,
    default: undefined,
  },
  // Highlight the search value, only highlight the specific matching value (through title) when the value is true,
  // the default color value is used, when the value is #xxx, this value is used instead and the highlighting is enabled
  highlight: {
    type: [Boolean, String] as PropType<Boolean | String>,
    default: false,
  },
  // Automatically expand results when search is complete
  expandOnSearch: Boolean,
  // After the search is completed, all results are automatically selected, and only when checkable===true is valid
  checkOnSearch: Boolean,
  // Search done automatically selects all results
  selectedOnSearch: Boolean,
});

export type TreeProps = ExtractPropTypes<typeof treeProps>;

export interface ContextMenuItem {
  label: string;
  icon?: string;
  disabled?: boolean;
  handler?: Fn;
  divider?: boolean;
  children?: ContextMenuItem[];
}

export interface ContextMenuOptions {
  icon?: string;
  styles?: any;
  items?: ContextMenuItem[];
}

export interface TreeItem extends TreeDataItem {
  icon?: any;
}

export interface TreeActionItem {
  render: (record: Recordable) => any;
  show?: boolean | ((record: Recordable) => boolean);
}

export interface InsertNodeParams {
  parentKey: string | null;
  node: TreeDataItem;
  list?: TreeDataItem[];
  push?: 'push' | 'unshift';
}

export interface TreeActionType {
  checkAll: (checkAll: boolean) => void;
  expandAll: (expandAll: boolean) => void;
  setExpandedKeys: (keys: KeyType[]) => void;
  getExpandedKeys: () => KeyType[];
  setSelectedKeys: (keys: KeyType[]) => void;
  getSelectedKeys: () => KeyType[];
  setCheckedKeys: (keys: CheckKeys) => void;
  getCheckedKeys: () => CheckKeys;
  filterByLevel: (level: number) => void;
  insertNodeByKey: (opt: InsertNodeParams) => void;
  insertNodesByKey: (opt: InsertNodeParams) => void;
  deleteNodeByKey: (key: string) => void;
  updateNodeByKey: (key: string, node: Omit<TreeDataItem, 'key'>) => void;
  setSearchValue: (value: string) => void;
  getSearchValue: () => string;
}
