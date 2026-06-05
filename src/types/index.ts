/**
 * Shared UI types for the Plum Yi divination app.
 */

import type { DivinationResult as IChingResult } from '../services/iChing';
import type { DivinationResult as MeihuaResult } from '../services/meihua';
import type { HexagramData } from '../services/hexagramData';

/** Supported divination sources */
export type DivinationSource = 'iching' | 'meihua';

/** Fortune rating */
export type FortuneLevel = 'good' | 'neutral' | 'bad';

/** A stored history record wrapping either IChing or Meihua result */
export interface HistoryRecord {
  id: string;
  timestamp: number;
  source: DivinationSource;
  method: string;
  hexagramName: string;
  hexagramNameCN: string;
  hexagramNumber: number;
  fortune: FortuneLevel;
  question?: string;
  ichingResult?: IChingResult;
  meihuaResult?: MeihuaResult;
  hexagramData: HexagramData;
  hasChangingHexagram?: boolean;
  secondaryHexagramName?: string;
  secondaryHexagramNumber?: number;
}

/** Props for hexagram display component */
export interface HexagramDisplayProps {
  lines: number[];
  nameCN: string;
  nameEN: string;
  animate?: boolean;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

/** Props for a single line display component */
export interface LineDisplayProps {
  value: number;
  position: number;
  isChanging?: boolean;
  animate?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

/** Helper: determine fortune from hexagram data */
export function getFortuneLevel(hexagramNumber: number): FortuneLevel {
  // Simple heuristic based on hexagram number ranges
  // Traditional: 1-10 generally auspicious, middle range mixed
  const good = [1, 2, 11, 14, 15, 16, 20, 25, 26, 33, 34, 35, 37, 42, 45, 46, 49, 50, 55, 57, 58];
  const bad = [3, 4, 6, 12, 18, 23, 29, 36, 39, 40, 47, 48, 54, 60, 63];
  if (good.includes(hexagramNumber)) return 'good';
  if (bad.includes(hexagramNumber)) return 'bad';
  return 'neutral';
}
