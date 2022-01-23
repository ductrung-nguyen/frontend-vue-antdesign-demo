<template>
  <PageWrapper
    contentFullHeight
    title="Basic components"
    content="The basic components depend on ant-design-vue, the existing basic components in the component library, and the demo will not be displayed again in the project (except for the secondary package components)"
  >
    <a-row :gutter="[20, 20]">
      <a-col :xl="10" :lg="24">
        <a-card title="BasicButton Color">
          <div class="my-2">
            <h3>success</h3>
            <div class="py-2">
              <a-button color="success"> success </a-button>
              <a-button color="success" class="ml-2" disabled> disabled </a-button>
              <a-button color="success" class="ml-2" loading> loading </a-button>
              <a-button color="success" type="link" class="ml-2"> link </a-button>
              <a-button color="success" type="link" class="ml-2" loading> loading link </a-button>
              <a-button color="success" type="link" class="ml-2" disabled> disabled link </a-button>
            </div>
          </div>

          <div class="my-2">
            <h3>warning</h3>
            <a-button color="warning"> warning </a-button>
            <a-button color="warning" class="ml-2" disabled> disabled </a-button>
            <a-button color="warning" class="ml-2" loading> loading </a-button>
            <a-button color="warning" type="link" class="ml-2"> link </a-button>
            <a-button color="warning" type="link" class="ml-2" loading> loading link </a-button>
            <a-button color="warning" type="link" class="ml-2" disabled> disabled link </a-button>
          </div>

          <div class="my-2">
            <h3>error</h3>
            <a-button color="error"> error </a-button>
            <a-button color="error" class="ml-2" disabled> disabled </a-button>
            <a-button color="error" class="ml-2" loading> loading </a-button>
            <a-button color="error" type="link" class="ml-2"> link </a-button>
            <a-button color="error" type="link" class="ml-2" loading> loading link </a-button>
            <a-button color="error" type="link" class="ml-2" disabled> disabled link </a-button>
          </div>

          <div class="my-2">
            <h3>ghost</h3>
            <a-button ghost color="success" class="ml-2"> ghost success </a-button>
            <a-button ghost color="warning" class="ml-2"> ghost warning </a-button>
            <a-button ghost color="error" class="ml-2"> ghost error </a-button>
            <a-button ghost type="dashed" color="warning" class="ml-2">
              ghost warning dashed
            </a-button>
            <a-button ghost danger class="ml-2"> ghost danger </a-button>
          </div>
        </a-card>
      </a-col>
      <a-col :xl="14" :lg="24">
        <a-card title="BasicButton Types">
          <div class="my-2">
            <h3>primary</h3>
            <a-button type="primary" preIcon="mdi:page-next-outline"> Primary button </a-button>
            <a-button type="primary" class="ml-2" disabled> disabled </a-button>
            <a-button type="primary" class="ml-2" danger preIcon="mdi:page-next-outline">
              danger
            </a-button>
            <a-button type="primary" class="ml-2" loading> loading </a-button>
            <a-button type="link" class="ml-2"> link </a-button>
            <a-button type="link" class="ml-2" loading> loading link </a-button>
            <a-button type="link" class="ml-2" disabled> disabled link </a-button>
          </div>

          <div class="my-2">
            <h3>default</h3>
            <a-button type="default"> default </a-button>
            <a-button type="default" class="ml-2" disabled> disabled </a-button>
            <a-button type="default" class="ml-2" danger> danger </a-button>
            <a-button type="default" class="ml-2" loading> loading </a-button>
            <a-button type="link" class="ml-2"> link </a-button>
            <a-button type="link" class="ml-2" loading> loading link </a-button>
            <a-button type="link" class="ml-2" disabled> disabled link </a-button>
          </div>

          <div class="my-2">
            <h3>dashed</h3>
            <a-button type="dashed"> dashed </a-button>
            <a-button type="dashed" class="ml-2" disabled> disabled </a-button>
            <a-button type="dashed" class="ml-2" danger> danger </a-button>
            <a-button type="dashed" class="ml-2" loading> loading </a-button>
          </div>

          <div class="my-2">
            <h3>Regular ghost buttons are often used on colored backgrounds</h3>
            <div class="bg-gray-400 py-2">
              <a-button ghost type="primary" class="ml-2"> ghost primary </a-button>
              <a-button ghost type="default" class="ml-2"> ghost default </a-button>
              <a-button ghost type="dashed" class="ml-2"> ghost dashed </a-button>
              <a-button ghost type="primary" class="ml-2" disabled> disabled </a-button>
              <a-button ghost type="primary" class="ml-2" loading> loading </a-button>
            </div>
            <!-- antd button cannot use ghost and link at the same time -->
            <!--      <a-button ghost type="link" class="ml-2"> link </a-button>-->
            <!--      <a-button ghost type="link" class="ml-2" loading> loading link </a-button>-->
            <!--      <a-button ghost type="link" class="ml-2" disabled> disabled link </a-button>-->
          </div>
        </a-card>
      </a-col>
    </a-row>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { Card, Row, Col } from 'ant-design-vue';
  export default defineComponent({
    components: { PageWrapper, ACard: Card, ARow: Row, ACol: Col },
  });
</script>
