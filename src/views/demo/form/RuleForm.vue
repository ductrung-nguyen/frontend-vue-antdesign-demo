<template>
  <PageWrapper title="Form validation example">
    <div class="mb-4">
      <a-button @click="validateForm" class="mr-2"> Validate the form manually </a-button>
      <a-button @click="resetValidate" class="mr-2"> Clear verification information </a-button>
      <a-button @click="getFormValues" class="mr-2"> Get form value </a-button>
      <a-button @click="setFormValues" class="mr-2"> Set form value </a-button>
      <a-button @click="resetFields" class="mr-2"> Reset </a-button>
    </div>
    <CollapseContainer title="Form validation">
      <BasicForm @register="register" @submit="handleSubmit" />
    </CollapseContainer>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { PageWrapper } from '/@/components/Page';
  import { isAccountExist } from '/@/api/demo/system';

  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: 'Field 1',
      colProps: {
        span: 8,
      },
      required: true,
    },
    {
      field: 'field2',
      component: 'Input',
      label: 'Field 2',
      colProps: {
        span: 8,
      },
      required: true,
    },
    {
      field: 'id',
      label: 'id',
      required: true,
      defaultValue: 0,
      component: 'InputNumber',
      show: false,
    },
    {
      field: 'field3',
      component: 'DatePicker',
      label: 'Field 3',
      colProps: {
        span: 8,
      },
      required: true,
    },
    {
      field: 'field33',
      component: 'DatePicker',
      label: 'Field 33',
      colProps: {
        span: 8,
      },
      componentProps: {
        valueFormat: 'YYYY-MM-DD',
      },
      rules: [{ required: true, type: 'string' }],
    },
    {
      field: 'field44',
      component: 'InputCountDown',
      label: 'Verification code',
      colProps: {
        span: 8,
      },
      required: true,
    },
    {
      field: 'field4',
      component: 'Select',
      label: 'Field 4',
      colProps: {
        span: 8,
      },
      componentProps: {
        mode: 'multiple',
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
      rules: [
        {
          required: true,
          message: 'Please enter aa',
          type: 'array',
        },
      ],
    },
    {
      field: 'field441',
      component: 'Input',
      label: 'Custom check',
      colProps: {
        span: 8,
      },
      rules: [
        {
          required: true,
          // @ts-ignore
          validator: async (rule, value) => {
            if (!value) {
              /* eslint-disable-next-line */
              return Promise.reject('Value cannot be empty');
            }
            if (value === '1') {
              /* eslint-disable-next-line */
              return Promise.reject('Value cannot be 1');
            }
            return Promise.resolve();
          },
          trigger: 'change',
        },
      ],
    },
    {
      field: 'field5',
      component: 'CheckboxGroup',
      label: 'Field 5',
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
      rules: [{ required: true }],
    },
    {
      field: 'field7',
      component: 'RadioGroup',
      label: 'Field 7',
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
      rules: [
        { required: true, message: 'Override the default generated verification information' },
      ],
    },
    {
      field: 'field8',
      component: 'Input',
      label: 'Backend Asynchronous Validation',
      colProps: {
        span: 8,
      },
      helpMessage: [
        'This field demonstrates asynchronous validation',
        'Local rules: must be filled in',
        'Backend rules: cannot contain admin',
      ],
      rules: [
        {
          required: true,
          message: 'Please enter data',
        },
        {
          validator(_, value) {
            return new Promise((resolve, reject) => {
              isAccountExist(value)
                .then(() => resolve())
                .catch((err) => {
                  reject(err.message || 'Verification failed');
                });
            });
          },
        },
      ],
    },
  ];

  export default defineComponent({
    components: { BasicForm, CollapseContainer, PageWrapper },
    setup() {
      const { createMessage } = useMessage();
      const [
        register,
        { validateFields, clearValidate, getFieldsValue, resetFields, setFieldsValue },
      ] = useForm({
        labelWidth: 120,
        schemas,
        actionColOptions: {
          span: 24,
        },
      });
      async function validateForm() {
        try {
          const res = await validateFields();
          console.log('passing', res);
        } catch (error) {
          console.log('not passing', error);
        }
      }
      async function resetValidate() {
        clearValidate();
      }
      function getFormValues() {
        const values = getFieldsValue();
        createMessage.success('values:' + JSON.stringify(values));
      }
      function setFormValues() {
        setFieldsValue({
          field1: 1111,
          field5: ['1'],
          field7: '1',
          field33: '2020-12-12',
          field3: '2020-12-12',
        });
      }
      return {
        register,
        schemas,
        handleSubmit: (values: any) => {
          createMessage.success('click search,values:' + JSON.stringify(values));
        },
        getFormValues,
        setFormValues,
        validateForm,
        resetValidate,
        resetFields,
      };
    },
  });
</script>
