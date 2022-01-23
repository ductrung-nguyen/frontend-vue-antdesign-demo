<template>
  <PageWrapper title="Dynamic form example">
    <div class="mb-4">
      <a-button @click="changeLabel3" class="mr-2"> Change field 3 label </a-button>
      <a-button @click="changeLabel34" class="mr-2">
        Change fields 3,4 label at the same time
      </a-button>
      <a-button @click="appendField" class="mr-2"> Insert field 10 after field 3 </a-button>
      <a-button @click="deleteField" class="mr-2"> delete field 11 </a-button>
    </div>
    <CollapseContainer
      title="An example of a dynamic form, which dynamically changes according to other values in the form"
    >
      <BasicForm @register="register" />
    </CollapseContainer>

    <CollapseContainer class="mt-5" title="ComponentProps change dynamically">
      <BasicForm @register="register1" />
    </CollapseContainer>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  import { PageWrapper } from '/@/components/Page';

  const schemas: FormSchema[] = [
    {
      field: 'field1',
      component: 'Input',
      label: 'Field 1',
      colProps: {
        span: 8,
      },
      show: ({ values }) => {
        return !!values.field5;
      },
    },
    {
      field: 'field2',
      component: 'Input',
      label: 'Field 2',
      colProps: {
        span: 8,
      },
      ifShow: ({ values }) => {
        return !!values.field6;
      },
    },
    {
      field: 'field3',
      component: 'DatePicker',
      label: 'Field 3',
      colProps: {
        span: 8,
      },
      dynamicDisabled: ({ values }) => {
        return !!values.field7;
      },
    },
    {
      field: 'field4',
      component: 'Select',
      label: 'Field 4',
      colProps: {
        span: 8,
      },
      dynamicRules: ({ values }) => {
        return values.field8 ? [{ required: true, message: 'Field 4 is required' }] : [];
      },
      componentProps: {
        options: [
          {
            label: 'Option 1',
            value: '1',
            key: '1',
          },
          {
            label: 'Option 1',
            value: '2',
            key: '2',
          },
        ],
      },
    },
    {
      field: 'field11',
      component: 'DatePicker',
      label: 'Field 11',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field5',
      component: 'Switch',
      label: 'Whether to display field 1 (css control)',
      colProps: {
        span: 8,
      },
      labelWidth: 200,
    },
    {
      field: 'field6',
      component: 'Switch',
      label: 'Whether to display field 2 (dom control)',
      colProps: {
        span: 8,
      },
      labelWidth: 200,
    },
    {
      field: 'field7',
      component: 'Switch',
      label: 'Whether to disable field 3',
      colProps: {
        span: 8,
      },
      labelWidth: 200,
    },
    {
      field: 'field8',
      component: 'Switch',
      label: 'Is field 4 required?',
      colProps: {
        span: 8,
      },
      labelWidth: 200,
    },
  ];

  const schemas1: FormSchema[] = [
    {
      field: 'f1',
      component: 'Input',
      label: 'F1',
      colProps: {
        span: 12,
      },
      labelWidth: 200,
      componentProps: ({ formModel }) => {
        return {
          placeholder: 'The value of sync f2 is f1',
          onChange: (e: ChangeEvent) => {
            formModel.f2 = e.target.value;
          },
        };
      },
    },
    {
      field: 'f2',
      component: 'Input',
      label: 'F2',
      colProps: {
        span: 12,
      },
      labelWidth: 200,
      componentProps: { disabled: true },
    },
    {
      field: 'f3',
      component: 'Input',
      label: 'F3',
      colProps: {
        span: 12,
      },
      labelWidth: 200,
      // @ts-ignore
      componentProps: ({ formActionType }) => {
        return {
          placeholder: 'Execute a query when the value changes, see the console',
          onChange: async () => {
            const { validate } = formActionType;
            // tableAction is only applicable to the example that opens the form within the form
            // const { reload } = tableAction;
            const res = await validate();
            console.log(res);
          },
        };
      },
    },
  ];

  export default defineComponent({
    components: { BasicForm, CollapseContainer, PageWrapper },
    setup() {
      const [register, { setProps, updateSchema, appendSchemaByField, removeSchemaByFiled }] =
        useForm({
          labelWidth: 120,
          schemas,
          actionColOptions: {
            span: 24,
          },
        });
      const [register1] = useForm({
        labelWidth: 120,
        schemas: schemas1,
        actionColOptions: {
          span: 24,
        },
      });
      function changeLabel3() {
        updateSchema({
          field: 'field3',
          label: 'Field 3 New',
        });
      }
      function changeLabel34() {
        updateSchema([
          {
            field: 'field3',
            label: 'Field 3 New++',
          },
          {
            field: 'field4',
            label: 'Field 4 New++',
          },
        ]);
      }

      function appendField() {
        appendSchemaByField(
          {
            field: 'field10',
            label: 'Field 10',
            component: 'Input',
            colProps: {
              span: 8,
            },
          },
          'field3',
        );
      }
      function deleteField() {
        removeSchemaByFiled('field11');
      }
      return {
        register,
        register1,
        schemas,
        setProps,
        changeLabel3,
        changeLabel34,
        appendField,
        deleteField,
      };
    },
  });
</script>
