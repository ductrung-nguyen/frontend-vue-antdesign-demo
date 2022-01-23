<template>
  <PageWrapper contentBackground title="Button permission control" contentClass="p-4">
    <CurrentPermissionMode />
    <p>
      List of currently owned codes: <a> {{ permissionStore.getPermCodeList }} </a>
    </p>
    <Divider />
    <Alert
      class="mt-4"
      type="info"
      message="Please check the button changes after clicking (you must be in background permission mode to test the functions displayed on this page)"
      show-icon
    />
    <Divider />
    <a-button type="primary" class="mr-2" @click="switchToken(2)" :disabled="!isBackPremissionMode">
      Click the toggle button permission (user id is 2)
    </a-button>
    <a-button type="primary" @click="switchToken(1)" :disabled="!isBackPremissionMode">
      Click the toggle button permission (user id is 1, default)
    </a-button>

    <template v-if="isBackPremissionMode">
      <Divider>Component way to judge permissions</Divider>
      <Authority :value="'1000'">
        <a-button type="primary" class="mx-4"> Visible with code ['1000'] permission </a-button>
      </Authority>

      <Authority :value="'2000'">
        <a-button color="success" class="mx-4"> Visible with code ['2000'] permission </a-button>
      </Authority>

      <Authority :value="['1000', '2000']">
        <a-button color="error" class="mx-4">
          Visible with code ['1000','2000'] role permission
        </a-button>
      </Authority>

      <Divider>Functional way to judge permissions</Divider>
      <a-button v-if="hasPermission('1000')" type="primary" class="mx-4">
        Visible with code['1000'] permission
      </a-button>

      <a-button v-if="hasPermission('2000')" color="success" class="mx-4">
        Visible with code['2000'] permission
      </a-button>

      <a-button v-if="hasPermission(['1000', '2000'])" color="error" class="mx-4">
        Visible with code ['1000','2000'] role permission
      </a-button>

      <Divider
        >Instruction method to judge permissions (this method cannot dynamically modify
        permissions.)</Divider
      >
      <a-button v-auth="'1000'" type="primary" class="mx-4">
        Visible with code ['1000'] permission
      </a-button>

      <a-button v-auth="'2000'" color="success" class="mx-4">
        Visible with code ['2000'] permission
      </a-button>

      <a-button v-auth="['1000', '2000']" color="error" class="mx-4">
        Visible with code ['1000','2000'] role permission
      </a-button>
    </template>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { Alert, Divider } from 'ant-design-vue';
  import CurrentPermissionMode from '../CurrentPermissionMode.vue';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { Authority } from '/@/components/Authority';
  import { usePermissionStore } from '/@/store/modules/permission';
  import { PermissionModeEnum } from '/@/enums/appEnum';
  import { PageWrapper } from '/@/components/Page';
  import { useAppStore } from '/@/store/modules/app';
  import { useUserStore } from '/@/store/modules/user';

  export default defineComponent({
    components: { Alert, PageWrapper, CurrentPermissionMode, Divider, Authority },
    setup() {
      const { hasPermission } = usePermission();
      const permissionStore = usePermissionStore();
      const appStore = useAppStore();
      const userStore = useUserStore();

      const isBackPremissionMode = computed(
        () => appStore.getProjectConfig.permissionMode === PermissionModeEnum.BACK,
      );

      async function switchToken(userId: number) {
        // The part of this function to switch the user's login Token is only for demonstration,
        // and the user should log in again when switching the identity in actual production
        const token = 'fakeToken' + userId;
        userStore.setToken(token);

        // Retrieve user info and menu
        userStore.getUserInfoAction();
        permissionStore.changePermissionCode();
      }

      return {
        hasPermission,
        permissionStore,
        switchToken,
        isBackPremissionMode,
      };
    },
  });
</script>
<style lang="less" scoped>
  .demo {
    background-color: @component-background;
  }
</style>
