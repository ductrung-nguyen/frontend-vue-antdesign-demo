<template>
  <PageWrapper title="Collapsible form example">
    <CollapseContainer title="Base Shrink Example">
      <BasicForm @register="register" />
    </CollapseContainer>

    <CollapseContainer
      title="More than 3 rows are automatically folded, and 2 rows are retained when folded"
      class="mt-4"
    >
      <BasicForm @register="register1" />
    </CollapseContainer>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container';
  import { PageWrapper } from '/@/components/Page';

  const getSchamas = (): FormSchema[] => {
    return [
      {
        field: 'field1',
        component: 'Input',
        label: 'field 1',
        colProps: {
          span: 8,
        },
        componentProps: {
          placeholder: 'Custom placeholder',
          onChange: (e: any) => {
            console.log(e);
          },
        },
      },
      {
        field: 'field2',
        component: 'Input',
        label: 'Field 2',
        colProps: {
          span: 8,
        },
      },
      {
        field: 'field3',
        component: 'DatePicker',
        label: 'Field 3',
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
      },
      // {
      //   field: 'field7',
      //   component: 'RadioGroup',
      //   label: 'Field 7',
      //   colProps: {
      //     span: 8,
      //   },
      //   componentProps: {
      //     options: [
      //       {
      //         label: 'Option 1',
      //         value: '1',
      //       },
      //       {
      //         label: 'Option 2',
      //         value: '2',
      //       },
      //     ],
      //   },
      // },
    ];
  };

  function getAppendSchemas(): FormSchema[] {
    return [
      {
        field: 'field10',
        component: 'Input',
        label: 'Field 10',
        colProps: {
          span: 8,
        },
      },
      {
        field: 'field11',
        component: 'Input',
        label: 'Field 11',
        colProps: {
          span: 8,
        },
      },
      {
        field: 'field12',
        component: 'Input',
        label: 'Field 12',
        colProps: {
          span: 8,
        },
      },
      {
        field: 'field13',
        component: 'Input',
        label: 'Field 13',
        colProps: {
          span: 8,
        },
      },
    ];
  }
  export default defineComponent({
    components: { BasicForm, CollapseContainer, PageWrapper },
    setup() {
      const [register] = useForm({
        labelWidth: 120,
        schemas: getSchamas(),
        actionColOptions: {
          span: 24,
        },
        compact: true,
        showAdvancedButton: true,
      });
      const extraSchemas: FormSchema[] = [];
      for (let i = 14; i < 30; i++) {
        extraSchemas.push({
          field: 'field' + i,
          component: 'Input',
          label: 'Field' + i,
          colProps: {
            span: 8,
          },
        });
      }
      const [register1] = useForm({
        labelWidth: 120,
        schemas: [
          ...getSchamas(),
          ...getAppendSchemas(),
          { field: '', component: 'Divider', label: 'More fields' },
          ...extraSchemas,
        ],
        actionColOptions: {
          span: 24,
        },
        compact: true,
        showAdvancedButton: true,
        alwaysShowLines: 2,
      });
      return {
        register,
        register1,
      };
    },
  });
</script>
