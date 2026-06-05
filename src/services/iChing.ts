/**
 * 易经占卜算法模块
 * I Ching Divination Algorithm Module
 *
 * 实现传统的易经占卜方法：蓍草法、铜钱法
 * 支持变卦计算和卦象解析
 */

import type {
  LineType,
  TrigramName,
  HexagramData,
} from './hexagramData';
import {
  HEXAGRAMS,
  getHexagramByTrigrams,
  getHexagramByName,
} from './hexagramData';

// ============================================================
// 类型定义 Type Definitions
// ============================================================

/** 占卜方法 Divination Methods */
export type DivinationMethod = 'yarrow' | 'coin' | 'random';

/** 单爻结果 Single Line Result */
export interface LineResult {
  /** 爻位（1-6，从下到上） */
  position: number;
  /** 爻值（6, 7, 8, 9） */
  value: number;
  /** 爻类型 */
  type: LineType;
  /** 是否为变爻 */
  isChanging: boolean;
  /** 二进制表示（0阴1阳） */
  binary: 0 | 1;
}

/** 单卦结果 Single Hexagram Result */
export interface HexagramResult {
  /** 六爻结果（从下到上） */
  lines: LineResult[];
  /** 上卦 */
  upperTrigram: TrigramName;
  /** 下卦 */
  lowerTrigram: TrigramName;
  /** 卦象数据 */
  hexagram: HexagramData;
}

/** 变卦信息 Changing Hexagram Info */
export interface ChangingInfo {
  /** 变爻位置列表 */
  changingPositions: number[];
  /** 变爻数量 */
  changingCount: number;
}

/** 占卜结果 Divination Result */
export interface DivinationResult {
  /** 占卜方法 */
  method: DivinationMethod;
  /** 本卦结果 */
  primary: HexagramResult;
  /** 变卦结果（如果有变爻） */
  secondary?: HexagramResult;
  /** 变卦信息 */
  changingInfo: ChangingInfo;
  /** 占卜时间 */
  timestamp: Date;
  /** 是否有变卦 */
  hasChangingHexagram: boolean;
}

/** 卦象解析 Hexagram Interpretation */
export interface HexagramInterpretation {
  /** 卦名（中文） */
  nameCN: string;
  /** 卦名（英文） */
  nameEN: string;
  /** 卦辞（中文） */
  judgmentCN: string;
  /** 卦辞（英文） */
  judgmentEN: string;
  /** 象辞（中文） */
  imageCN: string;
  /** 象辞（英文） */
  imageEN: string;
  /** 概述（中文） */
  summaryCN: string;
  /** 概述（英文） */
  summaryEN: string;
  /** 变爻爻辞（如果有） */
  changingLines?: Array<{
    position: number;
    textCN: string;
    textEN: string;
    interpretationCN: string;
    interpretationEN: string;
  }>;
}

// ============================================================
// 核心算法 Core Algorithms
// ============================================================

/**
 * 蓍草法单爻计算（简化版）
 * Yarrow Stalk Method - Single Line Calculation (Simplified)
 *
 * 传统蓍草法需要50根蓍草，经过18次变化得到一个爻
 * 简化版使用概率模拟：
 * - 老阴（6）: 1/16 概率
 * - 少阳（7）: 5/16 概率
 * - 少阴（8）: 7/16 概率
 * - 老阳（9）: 3/16 概率
 *
 * @returns 爻值 (6, 7, 8, 或 9)
 */
function yarrowStalkSingleLine(): number {
  // 蓍草法概率分布
  const random = Math.random();

  if (random < 1 / 16) {
    return 6; // 老阴 Old Yin (changing)
  } else if (random < 6 / 16) {
    return 7; // 少阳 Young Yang (stable)
  } else if (random < 13 / 16) {
    return 8; // 少阴 Young Yin (stable)
  } else {
    return 9; // 老阳 Old Yang (changing)
  }
}

/**
 * 铜钱法单爻计算
 * Three Coins Method - Single Line Calculation
 *
 * 使用三枚铜钱，正面为3，背面为2
 * 三个面值相加：
 * - 6 (三个背面): 老阴
 * - 7 (两背一正): 少阳
 * - 8 (两正一背): 少阴
 * - 9 (三个正面): 老阳
 *
 * @returns 爻值 (6, 7, 8, 或 9)
 */
function coinSingleLine(): number {
  // 模拟三枚铜钱，每枚正面(3)或背面(2)
  const coins = [
    Math.random() < 0.5 ? 2 : 3,
    Math.random() < 0.5 ? 2 : 3,
    Math.random() < 0.5 ? 2 : 3,
  ];

  const sum = coins.reduce((a, b) => a + b, 0);
  return sum; // 6, 7, 8, 或 9
}

/**
 * 解析爻值为爻结果
 * Parse line value to LineResult
 *
 * @param value 爻值 (6, 7, 8, 9)
 * @param position 爻位 (1-6)
 * @returns LineResult
 */
function parseLineValue(value: number, position: number): LineResult {
  let type: LineType;
  let binary: 0 | 1;
  let isChanging: boolean;

  switch (value) {
    case 6: // 老阴
      type = '老阴';
      binary = 0;
      isChanging = true;
      break;
    case 7: // 少阳
      type = '阳';
      binary = 1;
      isChanging = false;
      break;
    case 8: // 少阴
      type = '阴';
      binary = 0;
      isChanging = false;
      break;
    case 9: // 老阳
      type = '老阳';
      binary = 1;
      isChanging = true;
      break;
    default:
      throw new Error(`Invalid line value: ${value}. Must be 6, 7, 8, or 9.`);
  }

  return {
    position,
    value,
    type,
    isChanging,
    binary,
  };
}

/**
 * 根据三爻获取八卦名称
 * Get trigram name from three lines
 *
 * @param lines 三个爻的二进制值 [bottom, middle, top]
 * @returns TrigramName
 */
function getTrigramFromLines(lines: [0 | 1, 0 | 1, 0 | 1]): TrigramName {
  // 八卦二进制映射（从下到上）
  const trigramMap: Record<string, TrigramName> = {
    '111': '乾', // ☰
    '000': '坤', // ☷
    '100': '震', // ☳
    '011': '巽', // ☴
    '010': '坎', // ☵
    '101': '离', // ☲
    '001': '艮', // ☶
    '110': '兑', // ☱
  };

  const key = lines.join('');
  const trigram = trigramMap[key];

  if (!trigram) {
    throw new Error(`Invalid trigram pattern: ${key}`);
  }

  return trigram;
}

/**
 * 根据六爻计算卦象
 * Calculate hexagram from six lines
 *
 * @param lines 六爻结果数组（从下到上）
 * @returns HexagramResult
 */
function calculateHexagramFromLines(lines: LineResult[]): HexagramResult {
  // 获取下卦（1-3爻）
  const lowerLines: [0 | 1, 0 | 1, 0 | 1] = [
    lines[0].binary,
    lines[1].binary,
    lines[2].binary,
  ];
  const lowerTrigram = getTrigramFromLines(lowerLines);

  // 获取上卦（4-6爻）
  const upperLines: [0 | 1, 0 | 1, 0 | 1] = [
    lines[3].binary,
    lines[4].binary,
    lines[5].binary,
  ];
  const upperTrigram = getTrigramFromLines(upperLines);

  // 查找对应的卦象数据
  const hexagram = getHexagramByTrigrams(upperTrigram, lowerTrigram);

  if (!hexagram) {
    throw new Error(
      `Hexagram not found for trigrams: upper=${upperTrigram}, lower=${lowerTrigram}`
    );
  }

  return {
    lines,
    upperTrigram,
    lowerTrigram,
    hexagram,
  };
}

// ============================================================
// 占卜方法 Divination Methods
// ============================================================

/**
 * 蓍草法占卜
 * Yarrow Stalk Divination Method
 *
 * 传统蓍草法是最正统的易经占卜方法
 * 使用50根蓍草，经过复杂的分蓍过程得到卦象
 * 此实现使用概率模拟简化版本
 *
 * @returns 六爻结果数组（从下到上）
 */
export function yarrowStalkDivination(): LineResult[] {
  const lines: LineResult[] = [];

  for (let i = 1; i <= 6; i++) {
    const value = yarrowStalkSingleLine();
    const line = parseLineValue(value, i);
    lines.push(line);
  }

  return lines;
}

/**
 * 铜钱法占卜
 * Three Coins Divination Method
 *
 * 铜钱法是民间最常用的占卜方法
 * 使用三枚铜钱摇六次得到卦象
 *
 * @returns 六爻结果数组（从下到上）
 */
export function coinDivination(): LineResult[] {
  const lines: LineResult[] = [];

  for (let i = 1; i <= 6; i++) {
    const value = coinSingleLine();
    const line = parseLineValue(value, i);
    lines.push(line);
  }

  return lines;
}

/**
 * 随机占卜（简化版）
 * Random Divination (Simplified)
 *
 * 直接生成随机卦象，每个爻有相等概率为阴或阳
 * 无变爻
 *
 * @returns 六爻结果数组（从下到上）
 */
export function randomDivination(): LineResult[] {
  const lines: LineResult[] = [];

  for (let i = 1; i <= 6; i++) {
    // 随机生成7(少阳)或8(少阴)，无变爻
    const value = Math.random() < 0.5 ? 7 : 8;
    const line = parseLineValue(value, i);
    lines.push(line);
  }

  return lines;
}

// ============================================================
// 变卦计算 Changing Hexagram Calculation
// ============================================================

/**
 * 计算变卦
 * Calculate changing hexagram
 *
 * 变卦规则：
 * - 老阴(6) 变为 阳(7)
 * - 老阳(9) 变为 阴(8)
 * - 少阳(7) 和 少阴(8) 不变
 *
 * @param primaryLines 本卦六爻
 * @returns 变卦六爻，如果没有变爻则返回null
 */
export function calculateChangingLines(
  primaryLines: LineResult[]
): LineResult[] | null {
  const hasChanging = primaryLines.some(line => line.isChanging);

  if (!hasChanging) {
    return null;
  }

  const changingLines: LineResult[] = primaryLines.map(line => {
    if (!line.isChanging) {
      return { ...line };
    }

    // 变爻转换
    const newValue = line.value === 6 ? 7 : line.value === 9 ? 8 : line.value;
    return parseLineValue(newValue, line.position);
  });

  return changingLines;
}

/**
 * 获取变爻信息
 * Get changing line information
 *
 * @param lines 六爻结果
 * @returns 变爻信息
 */
export function getChangingInfo(lines: LineResult[]): ChangingInfo {
  const changingPositions = lines
    .filter(line => line.isChanging)
    .map(line => line.position);

  return {
    changingPositions,
    changingCount: changingPositions.length,
  };
}

// ============================================================
// 主要占卜接口 Main Divination Interface
// ============================================================

/**
 * 执行占卜
 * Perform divination
 *
 * @param method 占卜方法 ('yarrow' | 'coin' | 'random')
 * @returns 完整的占卜结果
 */
export function performDivination(method: DivinationMethod = 'coin'): DivinationResult {
  // 1. 根据方法生成本卦
  let primaryLines: LineResult[];

  switch (method) {
    case 'yarrow':
      primaryLines = yarrowStalkDivination();
      break;
    case 'coin':
      primaryLines = coinDivination();
      break;
    case 'random':
      primaryLines = randomDivination();
      break;
    default:
      throw new Error(`Unknown divination method: ${method}`);
  }

  // 2. 计算本卦
  const primary = calculateHexagramFromLines(primaryLines);

  // 3. 获取变爻信息
  const changingInfo = getChangingInfo(primaryLines);

  // 4. 计算变卦（如果有变爻）
  const changingLines = calculateChangingLines(primaryLines);
  let secondary: HexagramResult | undefined;

  if (changingLines) {
    secondary = calculateHexagramFromLines(changingLines);
  }

  return {
    method,
    primary,
    secondary,
    changingInfo,
    timestamp: new Date(),
    hasChangingHexagram: !!secondary,
  };
}

// ============================================================
// 卦象解析 Hexagram Interpretation
// ============================================================

/**
 * 解析卦象
 * Interpret hexagram
 *
 * @param hexagram 卦象数据
 * @param changingLines 变爻列表（可选）
 * @returns 卦象解析结果
 */
export function interpretHexagram(
  hexagram: HexagramData,
  changingLines?: LineResult[]
): HexagramInterpretation {
  const interpretation: HexagramInterpretation = {
    nameCN: hexagram.nameCN,
    nameEN: hexagram.nameEN,
    judgmentCN: hexagram.judgmentCN,
    judgmentEN: hexagram.judgmentEN,
    imageCN: hexagram.imageCN,
    imageEN: hexagram.imageEN,
    summaryCN: hexagram.summaryCN,
    summaryEN: hexagram.summaryEN,
  };

  // 如果有变爻，添加变爻爻辞
  if (changingLines && changingLines.length > 0) {
    interpretation.changingLines = changingLines
      .filter(line => line.isChanging)
      .map(line => {
        const lineText = hexagram.lines[line.position - 1];
        return {
          position: line.position,
          textCN: lineText.textCN,
          textEN: lineText.textEN,
          interpretationCN: lineText.interpretationCN,
          interpretationEN: lineText.interpretationEN,
        };
      });
  }

  return interpretation;
}

/**
 * 解析占卜结果
 * Interpret divination result
 *
 * @param result 占卜结果
 * @returns 本卦和变卦（如果有）的解析
 */
export function interpretDivinationResult(result: DivinationResult): {
  primary: HexagramInterpretation;
  secondary?: HexagramInterpretation;
} {
  // 解析本卦
  const primaryInterpretation = interpretHexagram(
    result.primary.hexagram,
    result.primary.lines
  );

  // 解析变卦（如果有）
  let secondaryInterpretation: HexagramInterpretation | undefined;

  if (result.secondary) {
    secondaryInterpretation = interpretHexagram(result.secondary.hexagram);
  }

  return {
    primary: primaryInterpretation,
    secondary: secondaryInterpretation,
  };
}

// ============================================================
// 辅助函数 Helper Functions
// ============================================================

/**
 * 获取爻的中文描述
 * Get line description in Chinese
 *
 * @param line 爻结果
 * @returns 爻的中文描述
 */
export function getLineDescriptionCN(line: LineResult): string {
  const typeDesc = line.type === '阳' || line.type === '老阳' ? '阳爻' : '阴爻';
  const changeDesc = line.isChanging ? '（变爻）' : '';
  return `第${line.position}爻: ${typeDesc} ${changeDesc}`;
}

/**
 * 获取爻的英文描述
 * Get line description in English
 *
 * @param line 爻结果
 * @returns 爻的英文描述
 */
export function getLineDescriptionEN(line: LineResult): string {
  const typeDesc = line.type === '阳' || line.type === '老阳' ? 'Yang' : 'Yin';
  const changeDesc = line.isChanging ? ' (changing)' : '';
  return `Line ${line.position}: ${typeDesc}${changeDesc}`;
}

/**
 * 获取卦象的Unicode符号
 * Get hexagram Unicode symbol
 *
 * @param hexagram 卦象数据
 * @returns Unicode卦象符号
 */
export function getHexagramUnicode(hexagram: HexagramData): string {
  // Unicode易经卦象符号范围: 4DC0-4DFF
  // 卦序1-64对应Unicode编码
  const unicodeOffset = 0x4DC0 + (hexagram.number - 1);
  return String.fromCodePoint(unicodeOffset);
}

/**
 * 获取卦象的ASCII艺术表示
 * Get hexagram ASCII art representation
 *
 * @param lines 六爻结果
 * @returns ASCII艺术字符串
 */
export function getHexagramASCII(lines: LineResult[]): string {
  const artLines: string[] = [];

  // 从上爻到初爻绘制
  for (let i = 5; i >= 0; i--) {
    const line = lines[i];
    const isYang = line.binary === 1;
    const position = i + 1;

    if (isYang) {
      artLines.push(`  ${position}  ——————————  `);
    } else {
      artLines.push(`  ${position}  ———  ———  `);
    }
  }

  return artLines.join('\n');
}

/**
 * 根据卦名获取卦象数据（支持模糊匹配）
 * Get hexagram by name (supports fuzzy matching)
 *
 * @param name 卦名（中文或英文）
 * @returns 卦象数据或undefined
 */
export function findHexagramByName(name: string): HexagramData | undefined {
  // 先尝试精确匹配
  const exactMatch = getHexagramByName(name);
  if (exactMatch) {
    return exactMatch;
  }

  // 尝试英文名匹配
  const englishMatch = HEXAGRAMS.find(
    h => h.nameEN.toLowerCase() === name.toLowerCase()
  );
  if (englishMatch) {
    return englishMatch;
  }

  // 尝试模糊匹配
  const fuzzyMatch = HEXAGRAMS.find(
    h =>
      h.nameCN.includes(name) ||
      h.nameEN.toLowerCase().includes(name.toLowerCase())
  );

  return fuzzyMatch;
}

/**
 * 获取六十四卦列表
 * Get list of all 64 hexagrams
 *
 * @returns 卦象基础信息列表
 */
export function getAllHexagrams(): Array<{
  number: number;
  nameCN: string;
  nameEN: string;
  upperTrigram: TrigramName;
  lowerTrigram: TrigramName;
}> {
  return HEXAGRAMS.map(h => ({
    number: h.number,
    nameCN: h.nameCN,
    nameEN: h.nameEN,
    upperTrigram: h.upperTrigram,
    lowerTrigram: h.lowerTrigram,
  }));
}

/**
 * 根据卦序范围获取卦象
 * Get hexagrams by number range
 *
 * @param start 起始卦序（包含）
 * @param end 结束卦序（包含）
 * @returns 卦象数据数组
 */
export function getHexagramRange(start: number, end: number): HexagramData[] {
  return HEXAGRAMS.filter(h => h.number >= start && h.number <= end);
}
