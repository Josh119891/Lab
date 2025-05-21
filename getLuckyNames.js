const WATER_STROKES = {

  "凡": 3, "水": 4,
  "冰": 6, "白": 6,
  "汐": 7, "汀": 7, "江": 7, "妍": 7, "妙": 7, "冷": 7, "希": 7,
  "河": 8, "沁": 8, "沐": 8, "雨": 8,
  "沛": 8, "泠": 9, "泳": 9, "沫": 9, "洲": 9, "洪": 9, "泓": 9, "泊": 9,
  "洋": 10, "洁": 10, "洛": 10,
  "海": 11, "曼": 11, "涓": 11, "涔": 11, "浛": 11, "淇": 11, "浵": 11,
  "淼": 12, "渐": 12, "淑": 12, "涵": 12, "雯": 12, "渊": 12, "清": 12, "淳": 12, "淯": 12, "渌": 12, "添": 12, "淮": 12,
  "浪": 13, "熙": 13, "湙": 13, "湘": 13, "湲": 13, "涣": 13,
  "渤": 14, "漾": 14, "溪": 14, "溏": 14,
  "滔": 15, "潭": 15, "滢": 15, "慧": 15, "漫": 15, "漩": 15, "漪": 15,
  "润": 16, "澈": 16, "澜": 16, "澹": 16, "浔": 16, "霏": 16, "霖": 16, "澄": 16,
  "潮": 17, "澎": 17,
  "涛": 18, "潇": 20,
};

const WOOD_STROKES = {

  "可": 5, "冉": 5, "竹": 6,
  "彤": 7, "杉": 7, "杏": 7,
  "兰": 8, "林": 8, "枚": 8, "枝": 8, "青": 8, "果": 8, "杰": 8,
  "芊": 9, "柔": 9, "卉": 9, "柏": 9, "柳": 9, "柯": 9, "柚": 9, "柠": 9, "虹": 9, "柃": 9,
  "桃": 10, "芷": 10, "芸": 10, "芮": 10, "芝": 10, "桐": 10, "芯": 10, "桑": 10, "芙": 10, "芩": 10, "栗": 10, "芹": 10, "桔": 10, "桓": 10,
  "苒": 11, "若": 11, "苗": 11, "茉": 11, "梧": 11, "苑": 11, "苡": 11, "茂": 11,
  "枫": 12, "雅": 12, "茜": 12, "茵": 12, "茹": 12, "荔": 12, "棋": 12, "树": 12, "幂": 12, "棠": 12,
  "杨": 13, "楠": 13, "榆": 13, "莉": 13, "莘": 13, "筱": 13, "楹": 13,
  "嘉": 14, "梦": 14, "萌": 14, "菲": 14, "歌": 14, "榕": 14, "菁": 14, "萓": 14, "箐": 14,
  "楚": 15, "慕": 15, "槿": 15, "萱": 15, "葶": 15,
  "檬": 16, "橙": 16, "蓉": 16, "桥": 16, "蓓": 16, "桦": 16, "橦": 16,
  "檩": 17, "蔚": 17, "蕊": 18, "檬": 18, "蔓": 17,
  "薇": 19, "蕾": 19,
  "樱": 21, "艺": 21,
}
const METAL_STROKES = {
  "千": 3, "小": 3,
  "心": 4, "双": 4,
  "玉": 5,
  "初": 7,
  "星": 9, "思": 9, "秋": 9, "姝": 9,
  "珍": 10, "珊": 10, "玲": 10, "书": 10, "倩": 10,
  "悦": 11,
  "顺": 12, "朝": 12,

  "诗": 13, "铃": 13, "钰": 13, "宸": 13, "愉": 13, "歆": 13, "新": 13,
  "铭": 14, "瑜": 14, "瑞": 14, "慈": 14, "韶": 14, "睿": 14, "嫦": 14,
  "瑶": 15, "婵": 15,
  "锦": 16, "谕": 16,
  "馨": 20,
  "钥": 25,
}

//这里是姓氏,姓在这里单独添加,不用做名
const SURNAME = { "李": 7, };

const strokesMap = { ...SURNAME, ...WATER_STROKES, ...WOOD_STROKES, ...METAL_STROKES }


function isLuckyGrid(grid) {
  let luckyNums = [1, 3, 5, 6, 7, 8, 11, 13, 15, 16, 18, 21, 23, 24, 25, 31, 32, 33, 35, 37, 39, 41, 45, 47, 48, 52, 57, 63];
  let normalNums = [9, 10, 12, 17, 20, 22, 34, 36, 38, 40, 46];
  let unluckyNums = [2, 4, 19, 14, 26, 27, 28, 29, 30, 42, 43, 44, 49, 50, 51, 53, 54, 55, 56, 58, 59, 60, 61, 62, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81];  // 凶
  if (luckyNums.includes(grid)) {
    return 1;
  } else if (normalNums.includes(grid)) {
    return 0;
  }
  return -1;
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

  // 6. 分析天→人,人与地的生克平关系 :contentReference[oaicite:5]{index=5}
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
  return { tian, ren, di, tianE, renE, diE, t2r, r2d, luck }
}

function getFiveGrids(name = '') {
  if (name.length < 2 || name.length > 3) {
    console.log('⚠️ 名字应为2~3个字（含姓）。');
    throw new Error('name is required')
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
  return { tiange, renge, dige, waige, zongge };
}

//
const A = []; // 大吉
const B = []; // 吉
const C = []; // 平
// const D = []; // 凶

function addName(name) {
  const { tiange, renge, dige, waige, zongge } = getFiveGrids(name);
  //要求五格全吉,如果外格允许凶,去掉waige即可
  if ([tiange, renge, dige, zongge, waige].every((i) => isLuckyGrid(i) >= 0)) {
    const { luck } = isLuckyTalents(tiange, renge, dige)
    if (luck === "大吉") {
      A.push(name)
    } else if (luck === "吉") {
      B.push(name)
    } else if (luck === "平") {
      C.push(name);
    }
  }
  return;
}

//确定好名字,用这个看细节
function checkNameInfo(name) {


  const { tiange, renge, dige, waige, zongge } = getFiveGrids(name);
  const { tianE, renE, diE, t2r, r2d, luck } = isLuckyTalents(tiange, renge, dige);
  console.log(`名字：${name}`)
  console.log(`天格：${tiange} ${isLuckyGrid(tiange)}`);
  console.log(`人格：${renge} ${isLuckyGrid(renge)}`);
  console.log(`地格：${dige} ${isLuckyGrid(dige)}`);
  console.log(`总格：${zongge} ${isLuckyGrid(zongge)}`);
  console.log(`外格：${waige} ${isLuckyGrid(waige)}`);

  console.log(`三才: ${tianE} - ${renE} - ${diE}`);
  console.log(`天人: ${t2r}`);
  console.log(`人地: ${r2d}`);
  console.log(`结论: ${luck}`)
}

// 起名逻辑
function getLuckyNames() {
  const surname = Object.keys(SURNAME)[0];
  //
  // 这里考虑五行,要的逻辑自己加
  // 去重
  const waterChars = [...new Set(Object.keys(WATER_STROKES))];
  const woodChars = [...new Set(Object.keys(WOOD_STROKES))];
  const metalChars = [...new Set(Object.keys(METAL_STROKES))];


  for (let i = 0; i < waterChars.length; i++) {
    for (let woodChar of woodChars) {
      //1木1水
      let nameA = surname + woodChar + waterChars[i];
      addName(nameA);
      //1水1木
      let nameB = surname + waterChars[i] + woodChar;
      addName(nameB)
    }

    // for (let metalChar of metalChars) {
    //   //1金1水
    //   let nameA = surname + metalChar + waterChars[i];
    //   addName(nameA);
    //   //1水1金
    //   let nameB = surname + waterChars[i] + metalChar;
    //   addName(nameB)
    // }

    //考虑叠词,考虑两个水
    for (let j = i; j < waterChars.length; j++) {
      let nameC = surname + waterChars[i] + waterChars[j];
      addName(nameC)

    }
  }
  //
  //
  return;
}
getLuckyNames()
console.log(A);
console.log(B);
console.log(C);
