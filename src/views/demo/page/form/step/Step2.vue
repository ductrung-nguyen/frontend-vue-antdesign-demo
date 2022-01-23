<template>
  <div class="step2">
    <a-alert
      message="After confirming the transfer, the funds will be directly credited to the other party's account and cannot be returned."
      show-icon
    />
    <a-descriptions :column="1" class="mt-5">
      <a-descriptions-item label="Payment Account"> ant-design@alipay.com </a-descriptions-item>
      <a-descriptions-item label="Receiving account"> test@example.com </a-descriptions-item>
      <a-descriptions-item label="Payee Name"> Vben </a-descriptions-item>
      <a-descriptions-item label="transfer amount"> 500 yuan </a-descriptions-item>
    </a-descriptions>
    <a-divider />
    <BasicForm @register="register" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form';
  import { step2Schemas } from './data';
  import { Alert, Divider, Descriptions } from 'ant-design-vue';

  export default defineComponent({
    components: {
      BasicForm,
      [Alert.name]: Alert,
      [Divider.name]: Divider,
      [Descriptions.name]: Descriptions,
      [Descriptions.Item.name]: Descriptions.Item,
    },
    emits: ['next', 'prev'],
    setup(_, { emit }) {
      const [register, { validate, setProps }] = useForm({
        labelWidth: 80,
        schemas: step2Schemas,
        actionColOptions: {
          span: 14,
        },
        resetButtonOptions: {
          text: 'Previous step',
        },
        submitButtonOptions: {
          text: 'Submit',
        },
        resetFunc: customResetFunc,
        submitFunc: customSubmitFunc,
      });

      async function customResetFunc() {
        emit('prev');
      }

      async function customSubmitFunc() {
        try {
          const values = await validate();
          setProps({
            submitButtonOptions: {
              loading: true,
            },
          });
          setTimeout(() => {
            setProps({
              submitButtonOptions: {
                loading: false,
              },
            });
            emit('next', values);
          }, 1500);
        } catch (error) {}
      }

      return { register };
    },
  });
</script>
<style lang="less" scoped>
  .step2 {
    width: 450px;
    margin: 0 auto;
  }
</style>
