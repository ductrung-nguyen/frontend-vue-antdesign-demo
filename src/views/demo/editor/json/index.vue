<template>
  <PageWrapper
    title="Code Editor Component Example"
    contentFullHeight
    fixedHeight
    contentBackground
  >
    <template #extra>
      <a-space size="middle">
        <a-button @click="showData" type="primary">Retrieve data</a-button>
        <RadioGroup button-style="solid" v-model:value="modeValue" @change="handleModeChange">
          <RadioButton value="application/json"> JSON data </RadioButton>
          <RadioButton value="htmlmixed"> HTML code </RadioButton>
          <RadioButton value="javascript"> Javascript code </RadioButton>
        </RadioGroup>
      </a-space>
    </template>
    <CodeEditor v-model:value="value" :mode="modeValue" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, unref, h } from 'vue';
  import { CodeEditor, JsonPreview, MODE } from '/@/components/CodeEditor';
  import { PageWrapper } from '/@/components/Page';
  import { Radio, Space, Modal } from 'ant-design-vue';

  const jsonData =
    '{"name":"BeJson","url":"http://www.xxx.com","page":88,"isNonProfit":true,"address":{"street":"Science and Technology Park Road.","city":"Suzhou, Jiangsu","country":"China"},"links":[{"name":"Google","url":"http://www.xxx.com"},{"name":"Baidu","url":"http://www.xxx.com"},{"name":"SoSo","url":"http://www.xxx.com"}]}';

  const jsData = `
      (() => {
        var htmlRoot = document.getElementById('htmlRoot');
        var theme = window.localStorage.getItem('__APP__DARK__MODE__');
        if (htmlRoot && theme) {
          htmlRoot.setAttribute('data-theme', theme);
          theme = htmlRoot = null;
        }
      })();
  `;

  const htmlData = `
     <!DOCTYPE html>
<html lang="en" id="htmlRoot">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="renderer" content="webkit" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"
    />
    <title><%= title %></title>
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body>
    <div id="app">
    </div>
  </body>
</html>
  `;
  export default defineComponent({
    components: {
      CodeEditor,
      PageWrapper,
      RadioButton: Radio.Button,
      RadioGroup: Radio.Group,
      ASpace: Space,
    },
    setup() {
      const modeValue = ref<MODE>(MODE.JSON);
      const value = ref(jsonData);

      function handleModeChange(e: ChangeEvent) {
        const mode = e.target.value;
        if (mode === MODE.JSON) {
          value.value = jsonData;
          return;
        }
        if (mode === MODE.HTML) {
          value.value = htmlData;
          return;
        }
        if (mode === MODE.JS) {
          value.value = jsData;
          return;
        }
      }

      function showData() {
        if (unref(modeValue) === 'application/json') {
          Modal.info({
            title: 'Editor current value',
            content: h(JsonPreview, { data: JSON.parse(value.value) }),
          });
        } else {
          Modal.info({ title: 'Editor current value', content: value.value });
        }
      }

      return { value, modeValue, handleModeChange, showData };
    },
  });
</script>
