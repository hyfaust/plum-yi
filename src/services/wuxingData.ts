/**
 * 五行数据定义
 * 五行属性、相生相克关系、八卦五行映射、季节旺衰表
 * Five Elements Data: attributes, generation/destruction relationships, 
 * trigram-element mappings, seasonal prosperity/decline tables
 */

// 五行类型定义
export type WuXingElement = '金' | '木' | '水' | '火' | '土';
export type WuXingElementEN = 'Metal' | 'Wood' | 'Water' | 'Fire' | 'Earth';

// 八卦类型定义
export type BaGua = '乾' | '兑' | '离' | '震' | '巽' | '坎' | '艮' | '坤';
export type BaGuaEN = 'Qian' | 'Dui' | 'Li' | 'Zhen' | 'Xun' | 'Kan' | 'Gen' | 'Kun';

// 季节类型定义
export type Season = '春' | '夏' | '秋' | '冬' | '四季';
export type SeasonEN = 'Spring' | 'Summer' | 'Autumn' | 'Winter' | 'Four Seasons';

// 五行属性接口
export interface WuXingAttribute {
  element: WuXingElement;
  elementEN: WuXingElementEN;
  direction: string;      // 方位
  directionEN: string;
  color: string;          // 颜色
  colorEN: string;
  season: Season;         // 季节
  seasonEN: SeasonEN;
  organ: string;          // 脏腑
  organEN: string;
  number: number[];       // 数字
  nature: string;         // 性质
  natureEN: string;
}

// 五行属性数据
export const WUXING_ATTRIBUTES: Record<WuXingElement, WuXingAttribute> = {
  '金': {
    element: '金',
    elementEN: 'Metal',
    direction: '西',
    directionEN: 'West',
    color: '白',
    colorEN: 'White',
    season: '秋',
    seasonEN: 'Autumn',
    organ: '肺、大肠',
    organEN: 'Lung, Large Intestine',
    number: [4, 9],
    nature: '从革',
    natureEN: 'Reforming',
  },
  '木': {
    element: '木',
    elementEN: 'Wood',
    direction: '东',
    directionEN: 'East',
    color: '青',
    colorEN: 'Green',
    season: '春',
    seasonEN: 'Spring',
    organ: '肝、胆',
    organEN: 'Liver, Gallbladder',
    number: [3, 8],
    nature: '曲直',
    natureEN: 'Bending and Straightening',
  },
  '水': {
    element: '水',
    elementEN: 'Water',
    direction: '北',
    directionEN: 'North',
    color: '黑',
    colorEN: 'Black',
    season: '冬',
    seasonEN: 'Winter',
    organ: '肾、膀胱',
    organEN: 'Kidney, Bladder',
    number: [1, 6],
    nature: '润下',
    natureEN: 'Moistening and Descending',
  },
  '火': {
    element: '火',
    elementEN: 'Fire',
    direction: '南',
    directionEN: 'South',
    color: '红',
    colorEN: 'Red',
    season: '夏',
    seasonEN: 'Summer',
    organ: '心、小肠',
    organEN: 'Heart, Small Intestine',
    number: [2, 7],
    nature: '炎上',
    natureEN: 'Blazing and Rising',
  },
  '土': {
    element: '土',
    elementEN: 'Earth',
    direction: '中',
    directionEN: 'Center',
    color: '黄',
    colorEN: 'Yellow',
    season: '四季',
    seasonEN: 'Four Seasons',
    organ: '脾、胃',
    organEN: 'Spleen, Stomach',
    number: [5, 10],
    nature: '稼穑',
    natureEN: 'Sowing and Reaping',
  },
};

// 五行相生关系：木生火，火生土，土生金，金生水，水生木
export const WUXING_GENERATION: Record<WuXingElement, WuXingElement> = {
  '木': '火',
  '火': '土',
  '土': '金',
  '金': '水',
  '水': '木',
};

// 五行相克关系：木克土，土克水，水克火，火克金，金克木
export const WUXING_DESTRUCTION: Record<WuXingElement, WuXingElement> = {
  '木': '土',
  '土': '水',
  '水': '火',
  '火': '金',
  '金': '木',
};

// 八卦五行属性映射
export const BAGUA_WUXING_MAP: Record<BaGua, WuXingElement> = {
  '乾': '金',
  '兑': '金',
  '离': '火',
  '震': '木',
  '巽': '木',
  '坎': '水',
  '艮': '土',
  '坤': '土',
};

// 八卦五行属性映射（英文）
export const BAGUA_WUXING_MAP_EN: Record<BaGuaEN, WuXingElementEN> = {
  'Qian': 'Metal',
  'Dui': 'Metal',
  'Li': 'Fire',
  'Zhen': 'Wood',
  'Xun': 'Wood',
  'Kan': 'Water',
  'Gen': 'Earth',
  'Kun': 'Earth',
};

// 季节五行旺衰表
export interface SeasonalProsperity {
  prosperous: WuXingElement[];   // 旺
  generating: WuXingElement[];   // 相（生我者）
  resting: WuXingElement[];      // 休
  imprisoned: WuXingElement[];   // 囚
  dead: WuXingElement[];         // 死
}

export const SEASONAL_PROSPERITY: Record<Season, SeasonalProsperity> = {
  '春': {
    prosperous: ['木'],          // 木旺
    generating: ['水'],          // 水生木，相
    resting: ['火'],            // 木生火，休
    imprisoned: ['金'],         // 金克木，囚
    dead: ['土'],              // 木克土，死
  },
  '夏': {
    prosperous: ['火'],
    generating: ['木'],
    resting: ['土'],
    imprisoned: ['水'],
    dead: ['金'],
  },
  '秋': {
    prosperous: ['金'],
    generating: ['土'],
    resting: ['水'],
    imprisoned: ['火'],
    dead: ['木'],
  },
  '冬': {
    prosperous: ['水'],
    generating: ['金'],
    resting: ['木'],
    imprisoned: ['土'],
    dead: ['火'],
  },
  '四季': {
    prosperous: ['土'],
    generating: ['火'],
    resting: ['金'],
    imprisoned: ['木'],
    dead: ['水'],
  },
};

// 八卦数字映射（先天八卦数）
export const BAGUA_NUMBER_MAP: Record<number, BaGua> = {
  1: '乾',
  2: '兑',
  3: '离',
  4: '震',
  5: '巽',
  6: '坎',
  7: '艮',
  8: '坤',
};

// 八卦数字映射（英文）
export const BAGUA_NUMBER_MAP_EN: Record<number, BaGuaEN> = {
  1: 'Qian',
  2: 'Dui',
  3: 'Li',
  4: 'Zhen',
  5: 'Xun',
  6: 'Kan',
  7: 'Gen',
  8: 'Kun',
};

// 八卦象征
export interface BaGuaSymbol {
  nature: string;       // 自然象征
  natureEN: string;
  family: string;       // 家庭象征
  familyEN: string;
  body: string;         // 身体象征
  bodyEN: string;
  animal: string;       // 动物象征
  animalEN: string;
}

export const BAGUA_SYMBOLS: Record<BaGua, BaGuaSymbol> = {
  '乾': {
    nature: '天',
    natureEN: 'Heaven',
    family: '父',
    familyEN: 'Father',
    body: '头',
    bodyEN: 'Head',
    animal: '马',
    animalEN: 'Horse',
  },
  '兑': {
    nature: '泽',
    natureEN: 'Lake',
    family: '少女',
    familyEN: 'Youngest Daughter',
    body: '口',
    bodyEN: 'Mouth',
    animal: '羊',
    animalEN: 'Sheep',
  },
  '离': {
    nature: '火',
    natureEN: 'Fire',
    family: '中女',
    familyEN: 'Middle Daughter',
    body: '目',
    bodyEN: 'Eye',
    animal: '雉',
    animalEN: 'Pheasant',
  },
  '震': {
    nature: '雷',
    natureEN: 'Thunder',
    family: '长男',
    familyEN: 'Eldest Son',
    body: '足',
    bodyEN: 'Foot',
    animal: '龙',
    animalEN: 'Dragon',
  },
  '巽': {
    nature: '风',
    natureEN: 'Wind',
    family: '长女',
    familyEN: 'Eldest Daughter',
    body: '股',
    bodyEN: 'Thigh',
    animal: '鸡',
    animalEN: 'Chicken',
  },
  '坎': {
    nature: '水',
    natureEN: 'Water',
    family: '中男',
    familyEN: 'Middle Son',
    body: '耳',
    bodyEN: 'Ear',
    animal: '豕',
    animalEN: 'Pig',
  },
  '艮': {
    nature: '山',
    natureEN: 'Mountain',
    family: '少男',
    familyEN: 'Youngest Son',
    body: '手',
    bodyEN: 'Hand',
    animal: '狗',
    animalEN: 'Dog',
  },
  '坤': {
    nature: '地',
    natureEN: 'Earth',
    family: '母',
    familyEN: 'Mother',
    body: '腹',
    bodyEN: 'Belly',
    animal: '牛',
    animalEN: 'Ox',
  },
};

/**
 * 获取五行生克关系
 * Get WuXing generation/destruction relationship
 * @param element1 第一个五行元素
 * @param element2 第二个五行元素
 * @returns 关系类型：'生'、'克'、'被生'、'被克'、'同'
 */
export function getWuXingRelation(
  element1: WuXingElement,
  element2: WuXingElement
): '生' | '克' | '被生' | '被克' | '同' {
  if (element1 === element2) {
    return '同';
  }
  
  if (WUXING_GENERATION[element1] === element2) {
    return '生';
  }
  
  if (WUXING_GENERATION[element2] === element1) {
    return '被生';
  }
  
  if (WUXING_DESTRUCTION[element1] === element2) {
    return '克';
  }
  
  return '被克';
}

/**
 * 获取五行生克关系（英文）
 * Get WuXing generation/destruction relationship (English)
 */
export function getWuXingRelationEN(
  element1: WuXingElement,
  element2: WuXingElement
): 'generates' | 'destroys' | 'generated by' | 'destroyed by' | 'same' {
  const relation = getWuXingRelation(element1, element2);
  
  switch (relation) {
    case '生':
      return 'generates';
    case '克':
      return 'destroys';
    case '被生':
      return 'generated by';
    case '被克':
      return 'destroyed by';
    case '同':
      return 'same';
  }
}

/**
 * 获取当前季节
 * Get current season based on month
 * @param month 月份（1-12）
 * @returns 季节
 */
export function getSeasonByMonth(month: number): Season {
  if (month >= 3 && month <= 5) return '春';
  if (month >= 6 && month <= 8) return '夏';
  if (month >= 9 && month <= 11) return '秋';
  return '冬';
}

/**
 * 获取五行在特定季节的旺衰状态
 * Get WuXing prosperity state in a specific season
 * @param element 五行元素
 * @param season 季节
 * @returns 旺衰状态
 */
export function getElementSeasonalState(
  element: WuXingElement,
  season: Season
): '旺' | '相' | '休' | '囚' | '死' {
  const prosperity = SEASONAL_PROSPERITY[season];
  
  if (prosperity.prosperous.includes(element)) return '旺';
  if (prosperity.generating.includes(element)) return '相';
  if (prosperity.resting.includes(element)) return '休';
  if (prosperity.imprisoned.includes(element)) return '囚';
  return '死';
}

/**
 * 获取五行在特定季节的旺衰状态（英文）
 * Get WuXing prosperity state in a specific season (English)
 */
export function getElementSeasonalStateEN(
  element: WuXingElement,
  season: Season
): 'Prosperous' | 'Generating' | 'Resting' | 'Imprisoned' | 'Dead' {
  const state = getElementSeasonalState(element, season);
  
  switch (state) {
    case '旺':
      return 'Prosperous';
    case '相':
      return 'Generating';
    case '休':
      return 'Resting';
    case '囚':
      return 'Imprisoned';
    case '死':
      return 'Dead';
  }
}

/**
 * 获取八卦的五行属性
 * Get WuXing element of a BaGua trigram
 * @param bagua 八卦名称
 * @returns 五行属性
 */
export function getBaGuaElement(bagua: BaGua): WuXingElement {
  return BAGUA_WUXING_MAP[bagua];
}

/**
 * 获取八卦的五行属性（英文）
 * Get WuXing element of a BaGua trigram (English)
 */
export function getBaGuaElementEN(bagua: BaGuaEN): WuXingElementEN {
  return BAGUA_WUXING_MAP_EN[bagua];
}

/**
 * 根据数字获取八卦
 * Get BaGua trigram by number (1-8)
 * @param number 数字（1-8）
 * @returns 八卦名称
 */
export function getBaGuaByNumber(number: number): BaGua {
  // 处理0的情况，0视为8（坤）
  if (number === 0) number = 8;
  // 确保数字在1-8范围内
  const normalizedNumber = ((number - 1) % 8) + 1;
  return BAGUA_NUMBER_MAP[normalizedNumber];
}

/**
 * 根据数字获取八卦（英文）
 * Get BaGua trigram by number (English)
 */
export function getBaGuaByNumberEN(number: number): BaGuaEN {
  if (number === 0) number = 8;
  const normalizedNumber = ((number - 1) % 8) + 1;
  return BAGUA_NUMBER_MAP_EN[normalizedNumber];
}

/**
 * 获取八卦象征信息
 * Get BaGua symbolic information
 * @param bagua 八卦名称
 * @returns 象征信息
 */
export function getBaGuaSymbol(bagua: BaGua): BaGuaSymbol {
  return BAGUA_SYMBOLS[bagua];
}

/**
 * 五行生克关系矩阵
 * WuXing relationship matrix
 */
export const WUXING_RELATION_MATRIX: Record<WuXingElement, Record<WuXingElement, string>> = {
  '金': {
    '金': '比和',
    '木': '克',
    '水': '生',
    '火': '被克',
    '土': '被生',
  },
  '木': {
    '金': '被克',
    '木': '比和',
    '水': '被生',
    '火': '生',
    '土': '克',
  },
  '水': {
    '金': '生',
    '木': '克',
    '水': '比和',
    '火': '被克',
    '土': '被生',
  },
  '火': {
    '金': '克',
    '木': '被生',
    '水': '生',
    '火': '比和',
    '土': '被克',
  },
  '土': {
    '金': '生',
    '木': '被克',
    '水': '克',
    '火': '被生',
    '土': '比和',
  },
};