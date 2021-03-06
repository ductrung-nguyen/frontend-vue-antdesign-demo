export interface GrowCardItem {
  icon: string;
  title: string;
  value: number;
  total: number;
  color: string;
  action: string;
}

export const growCardList: GrowCardItem[] = [
  {
    title: 'Number of visits',
    icon: 'visit-count|svg',
    value: 2000,
    total: 120000,
    color: 'green',
    action: 'Month',
  },
  {
    title: 'Turnover',
    icon: 'total-sales|svg',
    value: 20000,
    total: 500000,
    color: 'blue',
    action: 'Month',
  },
  {
    title: 'Downloads',
    icon: 'download-count|svg',
    value: 8000,
    total: 120000,
    color: 'orange',
    action: 'Week',
  },
  {
    title: 'Number of transactions',
    icon: 'transaction|svg',
    value: 5000,
    total: 50000,
    color: 'purple',
    action: 'Year',
  },
];
