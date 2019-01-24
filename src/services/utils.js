const getKeyObject = (key) => {
  let k = new Date(key);
  k = `day_${k.getDate()}`;
  return k;
};

// const dtTotxt = (data) => {
//   const d = new Date(data);
//   const k = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()} ${d.getHours()}:00:00`;
//   return k;
// };

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

/*
  '3-7': 'dawn',
  '8-11': 'morning',
  '12-15': 'afternoon',
  '16-21': 'dusk' =>,
  '22-2': 'night',
*/
export const montaArrayBar = (data, lista) => {
  const arr = [];
  let now = data.getHours();
  now = now % 2 ? now : now - 1;
  const periodo = compactPeriodo(lista);

  for (let i = 0; i <= lista.length; i++) {
    if (now > 2 && now < 8) {
      // 3 ~ 7
      arr.push({
        color: '0_dawn',
        hour: now,
        item: periodo[6] || 'weather',
      });
    }
    if (now > 7 && now < 13) {
      // 8 ~ 12
      arr.push({
        color: '1_morning',
        hour: now,
        item: periodo[9] || 'weather',
      });
    }
    if (now > 12 && now < 16) {
      // 13 ~ 15
      arr.push({
        color: '2_afternoon',
        hour: now,
        item: periodo[13] || 'weather',
      });
    }
    if (now > 15 && now < 22) {
      // 16 ~ 21
      arr.push({
        color: '3_dusk',
        hour: now,
        item: periodo[16] || 'weather',
      });
    }
    if ((now > 21 && now < 24) || (now > -1 && now < 3)) {
      // 22 ~ 2
      arr.push({
        color: '4_night',
        hour: now,
        item: periodo[22] || 'weather',
      });
    }
    now = now > 23 ? 1 : now+ 2;
  }

  const filter = arr.map((i) => {
    const flex = arr.filter(o => o.color === i.color).length;
    return { ...i, flex: `flex-${flex}` };
  });

  return filter;
};

export const compactPeriodo = (list) => {
  const group = [];
  for (let it = 0; it < list.length; it++) {
    const item = list[it];
    const key = new Date(item.dt * 1000).getHours();
    if (!group[key]) group[key] = '';
    group[key] = item;
  }
  return group;
};

export const compactRender = (stack) => {
  const group = [];
  for (let it = 0; it < stack.length; it++) {
    const item = stack[it];
    const key = new Date().getTime() + '_' + item.color;
    if (!group[key]) group[key] = [];
    group[key] = [...group[key], { ...item
    }];
  }
  return group;
};