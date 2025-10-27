type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const groups: any = {};

  items.forEach((item) => {
    const propertyValue = (item as { [k: string]: T })[key];

    if (!groups[propertyValue]) {
      groups[propertyValue] = [];
    }

    groups[propertyValue].push(item);
  });

  return groups as GroupsMap<T>;
}
