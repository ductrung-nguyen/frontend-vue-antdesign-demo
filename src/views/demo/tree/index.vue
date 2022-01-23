<template>
  <PageWrapper title="Tree basic example">
    <Row :gutter="[16, 16]">
      <Col :span="8">
        <BasicTree
          title="Basic example, the first layer is expanded by default"
          :treeData="treeData"
          defaultExpandLevel="1"
        >
          <template #title> 123123 </template>
        </BasicTree>
      </Col>
      <Col :span="8">
        <BasicTree
          title="Can be checked, all expanded by default"
          :treeData="treeData"
          :checkable="true"
          defaultExpandAll
          @check="handleCheck"
        />
      </Col>
      <Col :span="8">
        <BasicTree
          title="Specify default expand/tick example"
          :treeData="treeData"
          :checkable="true"
          :expandedKeys="['0-0']"
          :checkedKeys="['0-0']"
        />
      </Col>
      <Col :span="8">
        <BasicTree
          title="Lazy load async tree"
          ref="asyncTreeRef"
          :treeData="tree"
          :load-data="onLoadData"
        />
      </Col>
      <Col :span="16">
        <Card title="Asynchronous data, expanded by default">
          <template #extra>
            <a-button @click="loadTreeData" :loading="treeLoading">Download Data</a-button>
          </template>
          <Spin :spinning="treeLoading">
            <BasicTree ref="asyncExpandTreeRef" :treeData="tree2" />
          </Spin>
        </Card>
      </Col>
    </Row>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, nextTick, ref, unref } from 'vue';
  import { BasicTree, TreeActionType, TreeItem } from '/@/components/Tree/index';
  import { treeData } from './data';
  import { PageWrapper } from '/@/components/Page';
  import { Card, Row, Col, Spin } from 'ant-design-vue';
  import { cloneDeep } from 'lodash-es';

  export default defineComponent({
    components: { BasicTree, PageWrapper, Card, Row, Col, Spin },
    setup() {
      const asyncTreeRef = ref<Nullable<TreeActionType>>(null);
      const asyncExpandTreeRef = ref<Nullable<TreeActionType>>(null);
      const tree2 = ref<TreeItem[]>([]);
      const treeLoading = ref(false);

      function handleCheck(checkedKeys, e) {
        console.log('onChecked', checkedKeys, e);
      }

      function loadTreeData() {
        treeLoading.value = true;
        // The following is to simulate asynchronously fetching data
        setTimeout(() => {
          // Set data source
          tree2.value = cloneDeep(treeData);
          treeLoading.value = false;
          // Expand All
          nextTick(() => {
            console.log(unref(asyncExpandTreeRef));
            unref(asyncExpandTreeRef)?.expandAll(true);
          });
        }, 2000);
      }

      const tree = ref([
        {
          title: 'parent ',
          key: '0-0',
        },
      ]);

      function onLoadData(treeNode) {
        return new Promise((resolve: (value?: unknown) => void) => {
          if (!treeNode.children) {
            resolve();
            return;
          }
          setTimeout(() => {
            const asyncTreeAction: TreeActionType | null = unref(asyncTreeRef);
            if (asyncTreeAction) {
              const nodeChildren = [
                { title: `Child Node ${treeNode.eventKey}-0`, key: `${treeNode.eventKey}-0` },
                { title: `Child Node ${treeNode.eventKey}-1`, key: `${treeNode.eventKey}-1` },
              ];
              asyncTreeAction.updateNodeByKey(treeNode.eventKey, { children: nodeChildren });
              asyncTreeAction.setExpandedKeys([
                treeNode.eventKey,
                ...asyncTreeAction.getExpandedKeys(),
              ]);
            }

            resolve();
            return;
          }, 1000);
        });
      }
      return {
        treeData,
        handleCheck,
        tree,
        onLoadData,
        asyncTreeRef,
        asyncExpandTreeRef,
        tree2,
        loadTreeData,
        treeLoading,
      };
    },
  });
</script>
