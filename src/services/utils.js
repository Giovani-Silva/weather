const getKeyObject = (key) => {
  let k = new Date(key);
  k = `day_${k.getDate()}`;
  return k;
};

export const weekday = (data) => {
  const d = new Date(data);
  const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return weekDay[d.getDay()];
};

export const groupByDate = (list) => {
  const groupDatas = [];
  for (let it = 0; it < list.length; it++) {
    const item = list[it];
    const key = getKeyObject(item.dt_txt);
    if (!groupDatas[key]) groupDatas[key] = { list: [] };

    groupDatas[key].list = [...groupDatas[key].list, { ...item }];

    groupDatas[key].minDay = groupDatas[key].list.reduce(
      (min, p) => (p.main.temp_min < min ? p.main.temp_min : min),
      groupDatas[key].list[0].main.temp_min,
    );

    groupDatas[key].maxDay = groupDatas[key].list.reduce(
      (max, p) => (p.main.temp_max > max ? p.main.temp_max : max),
      groupDatas[key].list[0].main.temp_max,
    );

    groupDatas[key].widthBar = 105 - Math.trunc((groupDatas[key].minDay / groupDatas[key].maxDay) * 100);
  }

  return groupDatas;
};
