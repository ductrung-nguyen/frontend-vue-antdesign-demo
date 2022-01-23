export const cardList = (() => {
  const result: any[] = [];
  for (let i = 0; i < 6; i++) {
    result.push({
      id: i,
      title: 'Vue Admin',
      description:
        'A complete set of enterprise-level background management system based on Vue Next, TypeScript, Ant Design Vue',
      datetime: '2020-11-26 17:39',
      extra: 'edit',
      icon: 'logos:vue',
      color: '#1890ff',
      author: 'Vue admin',
      percent: 20 * (i + 1),
    });
  }
  return result;
})();
