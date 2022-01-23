<template>
  <PageWrapper title="Order number: 234231029431" contentBackground>
    <template #extra>
      <a-button> Operation one </a-button>
      <a-button> Operation two </a-button>
      <a-button type="primary"> Main operation </a-button>
    </template>

    <template #footer>
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="Details" />
        <a-tab-pane key="2" tab="Rules" />
      </a-tabs>
    </template>

    <div class="pt-4 m-4 desc-wrap">
      <a-descriptions size="small" :column="2">
        <a-descriptions-item label="Founder"> Qu Lili </a-descriptions-item>
        <a-descriptions-item label="Ordering Products"> XX service </a-descriptions-item>
        <a-descriptions-item label="Creation time"> 2017-01-10 </a-descriptions-item>
        <a-descriptions-item label="Associated documents">
          <a>12421</a>
        </a-descriptions-item>
        <a-descriptions-item label="Effective date"> 2017-07-07 ~ 2017-08-08 </a-descriptions-item>
        <a-descriptions-item label="Remark">
          Please confirm within two working days
        </a-descriptions-item>
      </a-descriptions>
      <a-card title="Process progress" :bordered="false">
        <a-steps :current="1" progress-dot size="small">
          <a-step title="Create project">
            <template #description>
              <div>Vben</div>
              <p>2016-12-12 12:32</p>
            </template>
          </a-step>
          <a-step title="Department Preliminary Review">
            <template #description>
              <p>Chad</p>
            </template>
          </a-step>
          <a-step title="financial review" />
          <a-step title="Finish" />
        </a-steps>
      </a-card>

      <a-card title="User Info" :bordered="false" class="mt-5">
        <a-descriptions :column="3">
          <a-descriptions-item label="Username"> James Bond </a-descriptions-item>
          <a-descriptions-item label="Member card number">
            XX 32943898021309809423
          </a-descriptions-item>
          <a-descriptions-item label="ID card"> 3321944288191034921 </a-descriptions-item>
          <a-descriptions-item label="Contact information"> 18112345678 </a-descriptions-item>
          <a-descriptions-item label="Contact address" :span="2">
            Qu Lili 18100000000 Intersection of Gongzhuan Road, Huanggushan Road, Xihu District,
            Hangzhou City, Zhejiang Province
          </a-descriptions-item>
        </a-descriptions>

        <a-descriptions title="Information group" :column="3">
          <a-descriptions-item label="Other data"> 111 </a-descriptions-item>
          <a-descriptions-item label="Update time"> 2017-08-08 </a-descriptions-item>
          <a-descriptions-item label="More data"> 725 </a-descriptions-item>
          <a-descriptions-item label="Update time"> 2017-08-08 </a-descriptions-item>
        </a-descriptions>

        <h4>Information group</h4>
        <a-card title="Multi-level information group">
          <a-descriptions title="Group name" :column="3">
            <a-descriptions-item label="Person in charge"> Jack </a-descriptions-item>
            <a-descriptions-item label="Role code"> 1234567 </a-descriptions-item>
            <a-descriptions-item label="Department">
              XX Company - YY Department
            </a-descriptions-item>
            <a-descriptions-item label="Expire date"> 2017-08-08 </a-descriptions-item>
            <a-descriptions-item label="Description" :span="2">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </a-descriptions-item>
          </a-descriptions>
          <a-divider />
          <a-descriptions title="Group name" :column="1">
            <a-descriptions-item label="Scientific name">
              Citrullus lanatus (Thunb.) Matsum. et Nakai annual trailing vine; stems and branches
              stout, with distinct ridges. The tendrils are thicker..
            </a-descriptions-item>
          </a-descriptions>
          <a-divider />
          <a-descriptions title="Group name" :column="1">
            <a-descriptions-item label="Person in charge"> Luis Donnier </a-descriptions-item>
            <a-descriptions-item label="Role code"> 1234568 </a-descriptions-item>
          </a-descriptions>
        </a-card>
      </a-card>
      <a-card title="User's call records in the past six months" class="my-5">
        <Empty />
      </a-card>
      <BasicTable @register="registerTimeTable" />
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { PageWrapper } from '/@/components/Page';
  import { Divider, Card, Empty, Descriptions, Steps, Tabs } from 'ant-design-vue';

  import { refundTimeTableSchema, refundTimeTableData } from './data';
  export default defineComponent({
    components: {
      BasicTable,
      PageWrapper,
      [Divider.name]: Divider,
      [Card.name]: Card,
      Empty,
      [Descriptions.name]: Descriptions,
      [Descriptions.Item.name]: Descriptions.Item,
      [Steps.name]: Steps,
      [Steps.Step.name]: Steps.Step,
      [Tabs.name]: Tabs,
      [Tabs.TabPane.name]: Tabs.TabPane,
    },
    setup() {
      const [registerTimeTable] = useTable({
        title: 'Return progress',
        columns: refundTimeTableSchema,
        pagination: false,
        dataSource: refundTimeTableData,
        showIndexColumn: false,
        scroll: { y: 300 },
      });

      return {
        registerTimeTable,
      };
    },
  });
</script>
