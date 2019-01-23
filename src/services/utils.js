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
    if (!groupDatas[key]) groupDatas[key] = [];
    groupDatas[key].push(item);
  }

  return groupDatas;
};

// data.day_24.reduce((min, p) => p.main.temp_min < min ? p.main.temp_min : min, data.day_24[0].main.temp_min)

// data.day_24.reduce((max, p) => p.main.temp_max > max ? p.main.temp_max : max, data.day_24[0].main.temp_max);
