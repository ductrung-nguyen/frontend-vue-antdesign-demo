<template>
  <PageWrapper title="Tree function operation example">
    <Row :gutter="[16, 16]">
      <Col :span="8">
        <BasicTree
          title="Right Action Button/Custom Icon"
          helpMessage="Help information"
          :treeData="treeData"
          :actionList="actionList"
          :renderIcon="createIcon"
        />
      </Col>
      <Col :span="8">
        <BasicTree
          title="Right-click menu"
          :treeData="treeData"
          :beforeRightClick="getRightMenuList"
        />
      </Col>
      <Col :span="8">
        <BasicTree
          title="Toolbar usage"
          toolbar
          checkable
          search
          :treeData="treeData"
          :beforeRightClick="getRightMenuList"
        />
      </Col>
      <Col :span="8">
        <BasicTree
          title="Slot works without fieldNames"
          helpMessage="Correct example"
          :treeData="treeData3"
        >
          <template #title="item"> Slot: {{ item.name }} </template>
        </BasicTree>
      </Col>
      <Col :span="8">
        <BasicTree
          title="After having fieldNames, the slot is invalid"
          helpMessage="Incorrect example, should show the contents of the slot"
          :fieldNames="{ key: 'id', title: 'name' }"
          :treeData="treeData2"
        >
          <template #title="item"> Slot:{{ item.title }} </template>
        </BasicTree>
      </Col>
      <Col :span="8">
        <BasicTree
          title="After there are fieldNames, actionList is invalid"
          helpMessage="Incorrect example, the add and delete buttons should be displayed when the mouse is moved up"
          :treeData="treeData3"
          :actionList="actionList"
          :fieldNames="{ key: 'key', title: 'name' }"
        />
      </Col>
    </Row>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, h } from 'vue';
  import { Row, Col } from 'ant-design-vue';
  import { BasicTree, TreeActionItem, ContextMenuItem } from '/@/components/Tree/index';
  import { treeData, treeData2, treeData3 } from './data';
  import { PlusOutlined, DeleteOutlined } from '@ant-design/icons-vue';
  import { PageWrapper } from '/@/components/Page';

  export default defineComponent({
    components: { BasicTree, PageWrapper, Row, Col },
    setup() {
      function handlePlus(node: any) {
        console.log(node);
      }

      function getRightMenuList(node: any): ContextMenuItem[] {
        return [
          {
            label: 'New',
            handler: () => {
              console.log('Click to add', node);
            },
            icon: 'bi:plus',
          },
          {
            label: 'Delete',
            handler: () => {
              console.log('Clicked delete', node);
            },
            icon: 'bx:bxs-folder-open',
          },
        ];
      }
      const actionList: TreeActionItem[] = [
        {
          // show:()=>boolean;
          render: (node) => {
            return h(PlusOutlined, {
              class: 'ml-2',
              onClick: () => {
                handlePlus(node);
              },
            });
          },
        },
        {
          render: () => {
            return h(DeleteOutlined);
          },
        },
      ];

      function createIcon({ level }) {
        if (level === 1) {
          return 'ion:git-compare-outline';
        }
        if (level === 2) {
          return 'ion:home';
        }
        if (level === 3) {
          return 'ion:airplane';
        }
        return '';
      }
      return { treeData, treeData2, treeData3, actionList, getRightMenuList, createIcon };
    },
  });
</script>
