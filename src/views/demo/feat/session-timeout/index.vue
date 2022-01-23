<template>
  <PageWrapper
    title="Login Expiration Example"
    content="Example of user login expiration, no longer jump to the login page, and directly generate a page to cover the current page, which is convenient to maintain the user status before expiration!"
  >
    <a-card
      title="Please click the button below to access the test API"
      extra="The accessed API will return a Token expiration response"
    >
      <a-card-grid style="width: 50%; text-align: center">
        <a-button type="primary" @click="test1">HttpStatus == 401</a-button>
      </a-card-grid>
      <a-card-grid style="width: 50%; text-align: center">
        <span></span>
        <a-button class="ml-4" type="primary" @click="test2">Response.code == 401</a-button>
      </a-card-grid>
    </a-card>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { useUserStore } from '/@/store/modules/user';

  import { sessionTimeoutApi, tokenExpiredApi } from '/@/api/demo/account';
  import { Card } from 'ant-design-vue';

  export default defineComponent({
    name: 'TestSessionTimeout',
    components: { ACardGrid: Card.Grid, ACard: Card, PageWrapper },
    setup() {
      const userStore = useUserStore();
      async function test1() {
        // The production environment of the sample website uses mock data and cannot return the Http status code.
        // So directly change the state in the production environment to achieve the test effect
        if (import.meta.env.PROD) {
          userStore.setToken(undefined);
          userStore.setSessionTimeout(true);
        } else {
          // This api will return a response with status code 401
          await sessionTimeoutApi();
        }
      }

      async function test2() {
        // This api will return json data with code 401 and Http status code 200
        try {
          await tokenExpiredApi();
        } catch (err) {
          console.log('API error:', (err as Error).message || 'Something wrong');
        }
      }

      return { test1, test2 };
    },
  });
</script>
