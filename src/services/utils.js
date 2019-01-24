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

export const montaArrayBar = (now, lista) => {
  const arr = [];
  now = now % 2 ? now : now - 1;

  for (let i = 0; i < 7; i++) {
    const periodo = new Date(lista[i].dt_txt).getHours();
    const item = lista[i];
    if (now > 2 && now < 8) {
      arr.push({
        color: 'dawn',
        hours: now,
        item: now < periodo && periodo < 8 ? item.dt_txt : null,
      });
    }
    if (now > 7 && now < 12) {
      arr.push({
        color: 'manha',
        hours: now,
        item: now > periodo && periodo < 12 ? item.dt_txt : null,
      });
    }
    if (now > 11 && now < 16) {
      arr.push({
        color: 'afternoon',
        hours: now,
        item: periodo > 11 && periodo < 16 ? item.dt_txt : null,
      });
    }
    if (now > 15 && now < 22) {
      arr.push({
        color: 'dusk',
        hours: now,
        item: periodo > 15 && periodo < 22 ? item.dt_txt : null,
      });
    }
    if (now > 21 || now < 2) {
      arr.push({
        color: 'night',
        hours: now,
        item: periodo > 21 || periodo < 2 ? item.dt_txt : null,
      });
    }
    now += 2;
  }
  return arr;
};

export const groupItemsBar = (list) => {
  const group = [];
  for (let it = 0; it < list.length; it++) {
    const item = list[it];
    const key = item.color;
    if (!group[key]) group[key] = [];
    group[key].push(item);
  }
  return group;
};
