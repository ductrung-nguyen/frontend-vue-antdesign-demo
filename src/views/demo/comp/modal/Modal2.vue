<template>
  <BasicModal
    @register="register"
    title="Modal Title"
    :helpMessage="['hint 1', 'hint 2']"
    :okButtonProps="{ disabled: true }"
  >
    <a-button type="primary" @click="closeModal" class="mr-2"> Close popup from inside </a-button>
    <a-button type="primary" @click="setModalProps"> Modify title from within </a-button>
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  export default defineComponent({
    components: { BasicModal },
    setup() {
      const [register, { closeModal, setModalProps }] = useModalInner();
      return {
        register,
        closeModal,
        setModalProps: () => {
          setModalProps({ title: 'Modal New Title' });
        },
      };
    },
  });
</script>
