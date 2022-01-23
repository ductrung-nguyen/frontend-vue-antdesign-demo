export interface ListItem {
  title: string;
  icon: string;
  color?: string;
}

export interface TabItem {
  key: string;
  name: string;
  component: string;
}

export const tags: string[] = [
  'very thoughtful',
  'Focus on design',
  'Sichuan girl',
  'big legs',
  'The sea contains hundreds of rivers',
  'Front-end development',
  'vue3',
];
<span class="iconify" data-icon="jam:codepen-circle" data-inline="false"></span>;
export const teams: ListItem[] = [
  {
    icon: 'ri:alipay-fill',
    title: 'Science moving bricks group',
    color: '#ff4000',
  },
  {
    icon: 'emojione-monotone:letter-a',
    title: 'Secondary Two Youth League',
    color: '#7c51b8',
  },
  {
    icon: 'ri:alipay-fill',
    title: 'High-quality design',
    color: '#00adf7',
  },
  {
    icon: 'jam:codepen-circle',
    title: "Programmer's Day",
    color: '#00adf7',
  },
  {
    icon: 'fa:behance-square',
    title: 'Science moving bricks group',
    color: '#7c51b8',
  },
  {
    icon: 'jam:codepen-circle',
    title: "Programmer's Day",
    color: '#ff4000',
  },
];

export const details: ListItem[] = [
  {
    icon: 'ic:outline-contacts',
    title: 'Interaction expert',
  },
  {
    icon: 'grommet-icons:cluster',
    title: 'Business group',
  },
  {
    icon: 'bx:bx-home-circle',
    title: 'Nice, France',
  },
];

export const achieveList: TabItem[] = [
  {
    key: '1',
    name: 'article',
    component: 'Article',
  },
  {
    key: '2',
    name: 'application',
    component: 'Application',
  },
  {
    key: '3',
    name: 'project',
    component: 'Project',
  },
];

export const actions: any[] = [
  { icon: 'clarity:star-line', text: '156', color: '#018ffb' },
  { icon: 'bx:bxs-like', text: '156', color: '#459ae8' },
  { icon: 'bx:bxs-message-dots', text: '2', color: '#42d27d' },
];

export const articleList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 4; i++) {
    result.push({
      title: 'Vue Admin',
      description: ['Vue', 'design language', 'Typescript'],
      content:
        'A complete set of enterprise-level background management system based on Vue Next, TypeScript, Ant Design.',
      time: '2020-11-14 11:20',
    });
  }
  return result;
})();

export const applicationList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 8; i++) {
    result.push({
      title: 'Vue Admin',
      icon: 'emojione-monotone:letter-a',
      color: '#1890ff',
      active: '100',
      new: '1,799',
      download: 'bx:bx-download',
    });
  }
  return result;
})();

export const projectList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 8; i++) {
    result.push({
      title: 'Vue Admin',
      content:
        'A complete set of enterprise-level background management system based on Vue Next, TypeScript, Ant Design.',
    });
  }
  return result;
})();
