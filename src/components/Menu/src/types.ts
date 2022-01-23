// import { ComputedRef } from 'vue';
// import { ThemeEnum } from '/@/enums/appEnum';
// import { MenuModeEnum } from '/@/enums/menuEnum';
export interface MenuState {
  // List selected by default
  defaultSelectedKeys: string[];

  // model
  // mode: MenuModeEnum;

  // // theme
  // theme: ComputedRef<ThemeEnum> | ThemeEnum;

  // indentation
  inlineIndent?: number;

  // expand array
  openKeys: string[];

  // Array of currently selected menu item keys
  selectedKeys: string[];

  // Expanded array in collapsed state
  collapsedOpenKeys: string[];
}
