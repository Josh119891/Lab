

const waterStrokes = {
  "凡": 3, "水": 4, "汀": 7, "江": 7, "河": 8, "汐": 7, "沁": 8, "清": 12, "霏": 16,
  "洋": 10, "洲": 9, "洁": 10, "洪": 9, "海": 11,
  "浪": 13, "涵": 12, "涛": 18, "润": 16,
  "淇": 11, "淼": 12, "渊": 12, "渤": 14,
  "渐": 12,
  "滔": 15, "滢": 15,
  "漾": 14, "潇": 20, "潭": 15,
  "潮": 17, "澜": 16, "澈": 16, "澎": 17,
  "澹": 16, "沐": 8, "溪": 14, "洛": 10, "霖": 16,
  "慧": 15, "雯": 12, "雨": 8, "冰": 6,
  "沛": 8, "沫": 9,
};

const woodStrokes = {

  "可": 5, "兰": 8, "卉": 9, "林": 8, "柏": 9, "柳": 9, "桃": 10, "苒": 11,
  "枫": 12, "树": 12, "杨": 13, "楠": 13, "榆": 13, "楚": 15, "桥": 16,
  "檬": 16, "檩": 17, "柠": 18,
  "若": 11, "棋": 12, "樱": 21,
  "芊": 9, "茜": 12, "茵": 12, "茹": 12, "幂": 12,
  "柔": 9, "芷": 10, "枚": 8, "枝": 8, "青": 8, "冉": 5, "檬": 18, "槿": 15, "萱": 15, "茉": 11, "蓉": 16, "萌": 14, "芝": 10, "莘": 13, "蔚": 17, "筱": 13, "艺": 21, "荔": 12,
}

const strokesMap = { "李": 7, ...waterStrokes, ...woodStrokes }

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

  return { tian, ren, di, tianE, renE, diE, relation: { t2r, r2d }, luck };
}

function isLuckyName(name) {
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
  const fiveGrids = [tiange, renge, dige, waige, zongge];
  return isLuckyGrids(fiveGrids) && isLuckyTalents(tiange, renge, dige).luck !== '凶'
}



function getLuckyNames() {
  const surname = '李';
  const result = []
  for (let woodKey of Object.keys(woodStrokes)) {
    for (let waterKey of Object.keys(waterStrokes)) {
      let tempA = surname + woodKey + waterKey;
      if (isLuckyName(tempA)) {
        result.push(tempA)
      }
      let tempB = surname + waterKey + woodKey
      if (isLuckyName(tempB)) {
        result.push(tempB)
      }
    }
  }
  return result;
}
const names = getLuckyNames()
console.log(names)
