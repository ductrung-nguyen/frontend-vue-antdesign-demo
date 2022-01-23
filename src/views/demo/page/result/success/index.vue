<template>
  <div class="m-5 result-success">
    <Result
      status="success"
      title="Submitted successfully"
      sub-title="The submission result page is used to feedback the processing results of a series of operation tasks. If it is only a simple operation, you can use the Message global prompt for feedback. This text area can display simple supplementary instructions. If there is a need to display 'documents', the gray area below can display more complex content."
    >
      <template #extra>
        <a-button key="console" type="primary"> Back to list </a-button>
        <a-button key="buy"> View project </a-button>
        <a-button key="buy"> Print </a-button>
      </template>
    </Result>
    <div class="result-success__content">
      <Descriptions title="Project name">
        <DescriptionItem label="Project ID"> 111222 </DescriptionItem>
        <DescriptionItem label="Person in charge"> Ameli </DescriptionItem>
        <DescriptionItem label="Effective time"> 2016-12-12 ~ 2017-12-12 </DescriptionItem>
      </Descriptions>
      <Steps :current="1" progress-dot size="small">
        <Step title="Create project">
          <template #description>
            <div>Vue admin</div>
            <p>2016-12-12 12:32</p>
          </template>
        </Step>
        <Step title="Department Preliminary Review">
          <template #description>
            <p>Chad</p>
          </template>
        </Step>
        <Step title="Financial review" />
        <Step title="Finish" />
      </Steps>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Result, Steps, Descriptions } from 'ant-design-vue';
  export default defineComponent({
    components: {
      Result,
      Steps,
      Step: Steps.Step,
      Descriptions,
      DescriptionItem: Descriptions.Item,
    },
  });
</script>
<style lang="less" scoped>
  .result-success {
    padding: 48px 32px;
    background-color: @component-background;

    &__content {
      padding: 24px 40px;
      background-color: @background-color-light;
    }
  }
</style>
