export const categoriseData = (data, mainType) =>
  data.reduce((groups, item) => {
    const group = groups.find((group) => group.category === item[mainType]);
    if (group) {
      group.items.push(item);
    } else {
      groups.push({
        category: item[mainType],
        items: [item],
      });
    }
    return groups;
  }, []);

export const formatTitle = (title) => {
  const temp = title.split("-").join(" ");
  return temp.charAt(0).toUpperCase() + temp.slice(1);
};
