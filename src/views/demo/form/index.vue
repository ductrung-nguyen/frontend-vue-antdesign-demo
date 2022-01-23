<template>
  <PageWrapper title="Form Basics Example" contentFullHeight>
    <CollapseContainer title="Basic example">
      <BasicForm
        autoFocusFirstItem
        :labelWidth="200"
        :schemas="schemas"
        :actionColOptions="{ span: 24 }"
        @submit="handleSubmit"
        @reset="handleReset"
      >
        <template #selectA="{ model, field }">
          <a-select
            :options="optionsA"
            mode="multiple"
            v-model:value="model[field]"
            @change="valueSelectA = model[field]"
            allowClear
          />
        </template>
        <template #selectB="{ model, field }">
          <a-select
            :options="optionsB"
            mode="multiple"
            v-model:value="model[field]"
            @change="valueSelectB = model[field]"
            allowClear
          />
        </template>
        <template #localSearch="{ model, field }">
          <ApiSelect
            :api="optionsListApi"
            showSearch
            v-model:value="model[field]"
            optionFilterProp="label"
            resultField="list"
            labelField="name"
            valueField="id"
          />
        </template>
        <template #remoteSearch="{ model, field }">
          <ApiSelect
            :api="optionsListApi"
            showSearch
            v-model:value="model[field]"
            :filterOption="false"
            resultField="list"
            labelField="name"
            valueField="id"
            :params="searchParams"
            @search="onSearch"
          />
        </template>
      </BasicForm>
    </CollapseContainer>
  </PageWrapper>
</template>
<script lang="ts">
  import { computed, defineComponent, unref, ref } from 'vue';
  import { BasicForm, FormSchema, ApiSelect } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { PageWrapper } from '/@/components/Page';

  import { optionsListApi } from '/@/api/demo/select';
  import { useDebounceFn } from '@vueuse/core';
  import { treeOptionsListApi } from '/@/api/demo/tree';
  import { Select } from 'ant-design-vue';
  import { cloneDeep } from 'lodash-es';

  const valueSelectA = ref<string[]>([]);
  const valueSelectB = ref<string[]>([]);
  const options = ref<Recordable[]>([]);
  for (let i = 1; i < 10; i++) options.value.push({ label: 'Options' + i, value: `${i}` });

  const optionsA = computed(() => {
    return cloneDeep(unref(options)).map((op) => {
      op.disabled = unref(valueSelectB).indexOf(op.value) !== -1;
      return op;
    });
  });
  const optionsB = computed(() => {
    return cloneDeep(unref(options)).map((op) => {
      op.disabled = unref(valueSelectA).indexOf(op.value) !== -1;
      return op;
    });
  });

  const provincesOptions = [
    {
      id: 'guangdong',
      label: 'Guangdong Province',
      value: '1',
      key: '1',
    },
    {
      id: 'jiangsu',
      label: 'Jiangsu Province',
      value: '2',
      key: '2',
    },
  ];
  const citiesOptionsData = {
    guangdong: [
      {
        label: 'Zhuhai city',
        value: '1',
        key: '1',
      },
      {
        label: 'Shenzhen',
        value: '2',
        key: '2',
      },
      {
        label: 'Guangzhou City',
        value: '3',
        key: '3',
      },
    ],
    jiangsu: [
      {
        label: 'Nanjing',
        value: '1',
        key: '1',
      },
      {
        label: 'Wuxi',
        value: '2',
        key: '2',
      },
      {
        label: 'Suzhou City',
        value: '3',
        key: '3',
      },
    ],
  };

  const schemas: FormSchema[] = [
    {
      field: 'divider-basic',
      component: 'Divider',
      label: 'base field',
    },
    {
      field: 'field1',
      component: 'Input',
      label: 'field 1',

      colProps: {
        span: 8,
      },
      // componentProps:{},
      // can func
      componentProps: ({ schema, formModel }) => {
        console.log('form:', schema);
        console.log('formModel:', formModel);
        return {
          placeholder: 'custom placeholder',
          onChange: (e: any) => {
            console.log(e);
          },
        };
      },
      renderComponentContent: () => {
        return {
          prefix: () => 'pSlot',
          suffix: () => 'sSlot',
        };
      },
    },
    {
      field: 'field2',
      component: 'Input',
      label: 'with suffix',
      defaultValue: '111',
      colProps: {
        span: 8,
      },
      componentProps: {
        onChange: (e: any) => {
          console.log(e);
        },
      },
      suffix: 'day',
    },
    {
      field: 'field3',
      component: 'DatePicker',
      label: 'field 3',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field4',
      component: 'Select',
      label: 'field 4',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            label: 'Option 1',
            value: '1',
            key: '1',
          },
          {
            label: 'Option 2',
            value: '2',
            key: '2',
          },
        ],
      },
    },
    {
      field: 'field5',
      component: 'CheckboxGroup',
      label: 'field 5',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            label: 'Option 1',
            value: '1',
          },
          {
            label: 'Option 2',
            value: '2',
          },
        ],
      },
    },
    {
      field: 'field7',
      component: 'RadioGroup',
      label: 'field 7',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            label: 'Option 1',
            value: '1',
          },
          {
            label: 'Option 2',
            value: '2',
          },
        ],
      },
    },
    {
      field: 'field8',
      component: 'Checkbox',
      label: 'field 8',
      colProps: {
        span: 8,
      },
      renderComponentContent: 'Check',
    },
    {
      field: 'field9',
      component: 'Switch',
      label: 'Field 9',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field10',
      component: 'RadioButtonGroup',
      label: 'Field 10',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            label: 'Option 1',
            value: '1',
          },
          {
            label: 'Option 2',
            value: '2',
          },
        ],
      },
    },
    {
      field: 'field11',
      component: 'Cascader',
      label: 'Field 11',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                  {
                    value: 'xihu',
                    label: 'West Lake',
                  },
                ],
              },
            ],
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    {
      field: 'divider-api-select',
      component: 'Divider',
      label: 'Remote drop down demo',
    },
    {
      field: 'field30',
      component: 'ApiSelect',
      label: 'Lazy loading remote dropdown',
      required: true,
      componentProps: {
        // more details see /src/components/Form/src/components/ApiSelect.vue
        api: optionsListApi,
        params: {
          id: 1,
        },
        resultField: 'list',
        // use name as label
        labelField: 'name',
        // use id as value
        valueField: 'id',
        // not request untill to select
        immediate: false,
        onChange: (e) => {
          console.log('selected:', e);
        },
        // atfer request callback
        onOptionsChange: (options) => {
          console.log('get options', options.length, options);
        },
      },
      colProps: {
        span: 8,
      },
      defaultValue: '0',
    },
    {
      field: 'field31',
      component: 'Input',
      label: 'Drop down local search',
      helpMessage: [
        'ApiSelect component',
        'Local search of remote data source',
        'Only one request to get all options',
      ],
      required: true,
      slot: 'localSearch',
      colProps: {
        span: 8,
      },
      defaultValue: '0',
    },
    {
      field: 'field32',
      component: 'Input',
      label: 'Drop down remote search',
      helpMessage: ['ApiSelect component', 'Send keywords to the API for remote search'],
      required: true,
      slot: 'remoteSearch',
      colProps: {
        span: 8,
      },
      defaultValue: '0',
    },
    {
      field: 'field33',
      component: 'ApiTreeSelect',
      label: 'Remote drop down tree',
      helpMessage: [
        'ApiTreeSelect component',
        'Use the data generation options provided by the API',
      ],
      required: true,
      componentProps: {
        api: treeOptionsListApi,
        resultField: 'list',
      },
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field34',
      component: 'ApiRadioGroup',
      label: 'Remote Radio',
      helpMessage: [
        'ApiRadioGroup component',
        'Use the data generation options provided by the API',
      ],
      required: true,
      componentProps: {
        api: optionsListApi,
        params: {
          count: 2,
        },
        resultField: 'list',
        // use name as label
        labelField: 'name',
        // use id as value
        valueField: 'id',
      },
      defaultValue: '1',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field35',
      component: 'ApiRadioGroup',
      label: 'Remote Radio',
      helpMessage: [
        'ApiRadioGroup component',
        'Use the data generation options provided by the API',
      ],
      required: true,
      componentProps: {
        api: optionsListApi,
        params: {
          count: 2,
        },
        resultField: 'list',
        // use name as label
        labelField: 'name',
        // use id as value
        valueField: 'id',
        isBtn: true,
      },
      colProps: {
        span: 8,
      },
    },
    {
      field: 'divider-linked',
      component: 'Divider',
      label: 'Field linkage',
    },
    {
      field: 'province',
      component: 'Select',
      label: 'province',
      colProps: {
        span: 8,
      },
      componentProps: ({ formModel, formActionType }) => {
        return {
          options: provincesOptions,
          placeholder: 'Province and city linkage',
          onChange: (e: any) => {
            // console.log(e)
            let citiesOptions =
              e == 1
                ? citiesOptionsData[provincesOptions[0].id]
                : citiesOptionsData[provincesOptions[1].id];
            // console.log(citiesOptions)
            if (e === undefined) {
              citiesOptions = [];
            }
            formModel.city = undefined; //  reset city value
            const { updateSchema } = formActionType;
            updateSchema({
              field: 'city',
              componentProps: {
                options: citiesOptions,
              },
            });
          },
        };
      },
    },
    {
      field: 'city',
      component: 'Select',
      label: 'City',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [], // defalut []
        placeholder: 'Province and city linkage',
      },
    },
    {
      field: 'divider-selects',
      component: 'Divider',
      label: 'Mutually exclusive multiple choice',
      helpMessage: [
        'Two Selects share a data source',
        'but cannot select items selected by each other',
      ],
    },
    {
      field: 'selectA',
      component: 'Select',
      label: 'Mutually exclusive SelectA',
      slot: 'selectA',
      defaultValue: [],
      colProps: {
        span: 8,
      },
    },
    {
      field: 'selectB',
      component: 'Select',
      label: 'Mutually exclusive SelectB',
      slot: 'selectB',
      defaultValue: [],
      colProps: {
        span: 8,
      },
    },
    {
      field: 'divider-others',
      component: 'Divider',
      label: 'other',
    },
    {
      field: 'field20',
      component: 'InputNumber',
      label: 'Field 20',
      required: true,
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field21',
      component: 'Slider',
      label: 'Field 21',
      componentProps: {
        min: 0,
        max: 100,
        range: true,
        marks: {
          20: '20°C',
          60: '60°C',
        },
      },
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field22',
      component: 'Rate',
      label: 'Field 22',
      defaultValue: 3,
      colProps: {
        span: 8,
      },
      componentProps: {
        disabled: false,
        allowHalf: true,
      },
    },
  ];

  export default defineComponent({
    components: { BasicForm, CollapseContainer, PageWrapper, ApiSelect, ASelect: Select },
    setup() {
      const check = ref(null);
      const { createMessage } = useMessage();
      const keyword = ref<string>('');
      const searchParams = computed<Recordable>(() => {
        return { keyword: unref(keyword) };
      });

      function onSearch(value: string) {
        keyword.value = value;
      }
      return {
        schemas,
        optionsListApi,
        optionsA,
        optionsB,
        valueSelectA,
        valueSelectB,
        onSearch: useDebounceFn(onSearch, 300),
        searchParams,
        handleReset: () => {
          keyword.value = '';
        },
        handleSubmit: (values: any) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        check,
      };
    },
  });
</script>
