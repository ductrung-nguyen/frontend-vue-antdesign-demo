<template>
  <div ref="chartRef" :style="{ height, width }"></div>
</template>
<script lang="ts">
  import { defineComponent, PropType, ref, Ref, onMounted } from 'vue';

  import { useECharts } from '/@/hooks/web/useECharts';

  export default defineComponent({
    props: {
      width: {
        type: String as PropType<string>,
        default: '100%',
      },
      height: {
        type: String as PropType<string>,
        default: 'calc(100vh - 78px)',
      },
    },
    setup() {
      const chartRef = ref<HTMLDivElement | null>(null);
      const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>);
      const dataAll = [389, 259, 262, 324, 232, 176, 196, 214, 133, 370];
      const yAxisData = [
        'Reason 1',
        'Reason 2',
        'Reason 3',
        'Reason 4',
        'Reason 5',
        'Reason 6',
        'Reason 7',
        'Reason 8',
        'Reason 9',
        'Reason 10',
      ];
      onMounted(() => {
        setOptions({
          backgroundColor: '#0f375f',
          title: [
            {
              text: 'Proportion of complaints by channel',
              left: '2%',
              top: '1%',
              textStyle: {
                color: '#fff',
                fontSize: 14,
              },
            },
            {
              text: 'TOP10 Reason',
              left: '40%',
              top: '1%',
              textStyle: {
                color: '#fff',
                fontSize: 14,
              },
            },
            {
              text: 'Proportion of complaints at all levels ',
              left: '2%',
              top: '50%',
              textStyle: {
                color: '#fff',
                fontSize: 14,
              },
            },
          ],
          grid: [{ left: '50%', top: '7%', width: '45%', height: '90%' }],
          tooltip: {
            formatter: '{b} ({c})',
          },
          xAxis: [
            {
              gridIndex: 0,
              axisTick: { show: false },
              axisLabel: { show: false },
              splitLine: { show: false },
              axisLine: { show: false },
            },
          ],
          yAxis: [
            {
              gridIndex: 0,
              interval: 0,
              data: yAxisData.reverse(),
              axisTick: { show: false },
              axisLabel: { show: true },
              splitLine: { show: false },
              axisLine: { show: true, lineStyle: { color: '#6173a3' } },
            },
          ],
          series: [
            {
              name: 'Proportion of complaints by channel',
              type: 'pie',
              radius: '30%',
              center: ['22%', '25%'],
              data: [
                { value: 335, name: 'Customer service phone' },
                { value: 310, name: 'Audi official website' },
                { value: 234, name: 'Media exposure' },
                { value: 135, name: 'AQSIQ' },
                { value: 105, name: 'other' },
              ],
              labelLine: { show: false },
              label: {
                show: true,
                formatter: '{b} \n ({d}%)',
                color: '#B1B9D3',
              },
            },
            {
              name: 'Proportion of complaints at all levels',
              type: 'pie',
              radius: '30%',
              center: ['22%', '75%'],
              labelLine: { show: false },
              data: [
                { value: 335, name: 'Class A' },
                { value: 310, name: 'Class B' },
                { value: 234, name: 'Class C' },
                { value: 135, name: 'Class D' },
              ],
              label: {
                show: true,
                formatter: '{b} \n ({d}%)',
                color: '#B1B9D3',
              },
            },
            {
              name: 'TOP10 Complaint reasons',
              type: 'bar',
              xAxisIndex: 0,
              yAxisIndex: 0,
              barWidth: '45%',
              itemStyle: { color: '#86c9f4' },
              label: { show: true, position: 'right', color: '#9EA7C4' },
              data: dataAll.sort(),
            },
          ],
        });
      });
      return { chartRef };
    },
  });
</script>
