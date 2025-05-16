


const WATER_STROKES = {
  "凡": 3, "水": 4, "冰": 6, "汀": 7, "江": 7, "汐": 7, "河": 8,
  "沁": 8, "沐": 8, "雨": 8, "沛": 8, "沫": 9, "洲": 9, "洪": 9,
  "洋": 10, "洁": 10, "洛": 10, "海": 11, "淇": 11, "淼": 12, "涵": 12,
  "雯": 12, "渊": 12, "渐": 12, "清": 12, "淑": 12,
  "浪": 13, "熙": 13, "渤": 14, "漾": 14, "溪": 14, "滔": 15, "潭": 15, "滢": 15,
  "慧": 15, "润": 16, "澜": 16, "澈": 16, "霏": 16, "澹": 16, "霖": 16, "澄": 16, "浔": 16,
  "潮": 17, "澎": 17,
  "涛": 18, "潇": 20, "潇": 20,
};

const WOOD_STROKES = {
  "可": 5, "冉": 5,
  "彤": 7,
  "兰": 8, "林": 8, "枚": 8, "枝": 8, "青": 8,
  "芊": 9, "柔": 9, "卉": 9, "柏": 9, "柳": 9, "榕": 9, "柯": 9,
  "桃": 10, "芷": 10, "芸": 10, "芮": 10, "芝": 10,
  "苒": 11, "苑": 11, "若": 11, "苗": 11, "茉": 11,
  "枫": 12, "树": 12, "雅": 12, "棋": 12, "茜": 12, "茵": 12, "茹": 12, "幂": 12, "荔": 12,
  "杨": 13, "楠": 13, "榆": 13, "莉": 13, "莘": 13, "筱": 13,
  "嘉": 14, "梦": 14, "萌": 14,
  "楚": 15, "慕": 15, "槿": 15, "萱": 15,
  "桥": 16, "檬": 16, "橙": 16, "柚": 16, "蓉": 16,
  "檩": 17, "蔚": 17, "柠": 18, "蕊": 18, "檬": 18,
  "薇": 19, "蕾": 19,
  "樱": 21, "艺": 21,
}


//这里是姓氏,姓在这里单独添加，不用做名
const SURNAME = { "李": 7, };

const strokesMap = { ...SURNAME, ...WATER_STROKES, ...WOOD_STROKES }


function isLuckyGrids(grids) {
  const nums = [1, 3, 5, 6, 8, 11, 13, 15, 16, 18, 21, 23, 24, 25, 31, 32, 33, 37, 39, 41];
  return grids.every((i) => nums.includes(i));
}

function isLuckyTalents(tian, ren, di) {
  function numToElement(n) {
    const mod = n % 10;
    if (mod === 1 || mod === 2) return '木';
    if (mod === 3 || mod === 4) return '火';
    if (mod === 5 || mod === 6) return '土';
    if (mod === 7 || mod === 8) return '金';
    return '水';
  }
  const tianE = numToElement(tian);
  const renE = numToElement(ren);
  const diE = numToElement(di);

  // 5. 生克规则映射 :contentReference[oaicite:4]{index=4}
  const sheng = { 木: '火', 火: '土', 土: '金', 金: '水', 水: '木' };
  const ke = { 木: '土', 火: '金', 土: '水', 金: '木', 水: '火' };

  // 6. 分析天→人、人与地的生克平关系 :contentReference[oaicite:5]{index=5}
  const t2r = sheng[tianE] === renE ? '相生'
    : ke[tianE] === renE ? '相克'
      : '平';
  const r2d = sheng[renE] === diE ? '相生'
    : ke[renE] === diE ? '相克'
      : '平';

  // 7. 根据生克组合判定吉凶：  
  //    大吉：天→人&人→地均相生  
  //    吉：一生一平  
  //    平：两平  
  //    凶：出现任何相克 :contentReference[oaicite:6]{index=6}
  let luck;
  if (t2r === '相生' && r2d === '相生') luck = '大吉';
  else if ((t2r === '相生' && r2d === '平') || (t2r === '平' && r2d === '相生')) luck = '吉';
  else if (t2r === '平' && r2d === '平') luck = '平';
  else luck = '凶';

  return luck;
}

function getFiveGrids(name) {
  if (name.length < 2 || name.length > 3) {
    console.log('⚠️ 名字应为2~3个字（含姓）。');
    return;
  }

  const nameChars = [...name];
  const strokes = nameChars.map(char => strokesMap[char] || '?');
  const totalStrokes = strokes.reduce((sum, n) => typeof n === 'number' ? sum + n : sum, 0);

  const [xing, ming1, ming2] = nameChars;
  const [s1, s2, s3] = strokes;

  // 五格计算（康熙笔画标准）
  const tiange = (typeof s1 === 'number') ? s1 + 1 : '?';                // 姓 + 1
  const renge = (typeof s1 === 'number' && typeof s2 === 'number') ? s1 + s2 : '?';  // 姓 + 名1
  const dige = (typeof s2 === 'number' && typeof s3 === 'number') ? s2 + s3 : '?';  // 名1 + 名2
  const waige = (typeof tiange === 'number' && typeof dige === 'number' && typeof renge === 'number')
    ? tiange + dige - renge : '?';
  const zongge = totalStrokes;
  return [tiange, renge, dige, waige, zongge];
}

//
const A = []; // 大吉
const B = []; // 吉
const C = []; // 平
function judgeName(name) {
  const [tiange, renge, dige, waige, zongge] = getFiveGrids(name);
  //要求五格全吉，如果外格允许凶，去掉waige即可
  if (isLuckyGrids([tiange, renge, dige, waige, zongge])) {
    const luck = isLuckyTalents(tiange, renge, dige)
    if (luck === "大吉") {
      A.push(name)
    }
    if (luck === "吉") {
      B.push(name)
    }
    if (luck === "平") {
      C.push(name);
    }
  }
  return;
}

// 起名逻辑
function getLuckyNames() {
  const surname = SURNAME.keys[0];
  //
  // 这里考虑五行，要的逻辑自己加
  // 去重
  const waterChars = [...new Set(Object.keys(WATER_STROKES))];
  const woodChars = [...new Set(Object.keys(WOOD_STROKES))];

  for (let i = 0; i < waterChars.length; i++) {
    for (let woodChar of woodChars) {
      //1木1水
      let nameA = surname + woodChar + waterChars[i];
      judgeName(result, nameA);
      //1水1木
      let nameB = surname + waterChars[i] + woodChar;
      judgeName(result, nameB)
    }
    //考虑叠词，考虑两个水
    for (let j = i; j < waterChars.length; j++) {
      let nameC = surname + waterChars[i] + waterChars[j];
      judgeName(result, nameC)

    }
  }
  //
  //
  return;
}

console.log(A);
console.log(B);
console.log(C);
