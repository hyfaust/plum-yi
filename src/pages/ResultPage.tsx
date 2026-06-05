import React, { useState, useMemo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { DivinationResult as IChingResult } from '../services/iChing';
import type { DivinationResult as MeihuaResult } from '../services/meihua';
import { WUXING_GENERATION, WUXING_DESTRUCTION } from '../services/wuxingData';
import type { WuXingElement } from '../services/wuxingData';
import { TRIGRAMS } from '../services/hexagramData';
import { comprehensiveInterpretation } from '../services/meihua';
import HexagramDisplay from '../components/HexagramDisplay';
import { getFortuneLevel } from '../types';
import type { DivinationSource, FortuneLevel, HistoryRecord } from '../types';

interface LocationState {
  source: DivinationSource;
  result: IChingResult | MeihuaResult;
}

const ELEMENT_CN: Record<string, string> = {
  metal: '金', wood: '木', water: '水', fire: '火', earth: '土',
};

const WUXING_COLOR: Record<string, string> = {
  metal: '#C0C0C0', wood: '#228B22', water: '#1E90FF', fire: '#DC143C', earth: '#DAA520',
};

/**
 * Result page: displays hexagram, judgment, five elements analysis, fortune, and save button.
 */
const ResultPage: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state as LocationState | null;
  const [saved, setSaved] = useState(false);

  // Extract result data
  const { source, result } = state || { source: 'iching' as const, result: null };

  // Build display data depending on source
  const displayData = useMemo(() => {
    if (!result) return null;

    if (source === 'iching') {
      const r = result as IChingResult;
      const hex = r.primary.hexagram;
      const fortune = getFortuneLevel(hex.number);
      const lines = r.primary.lines.map((l) => l.value);

      // Get trigram info for five elements
      const upperTrig = TRIGRAMS[r.primary.upperTrigram];
      const lowerTrig = TRIGRAMS[r.primary.lowerTrigram];

      return {
        primaryNameCN: hex.nameCN,
        primaryNameEN: hex.nameEN,
        primaryNumber: hex.number,
        primaryLines: lines,
        judgmentCN: hex.judgmentCN,
        judgmentEN: hex.judgmentEN,
        secondaryNameCN: r.secondary?.hexagram.nameCN,
        secondaryNameEN: r.secondary?.hexagram.nameEN,
        secondaryNumber: r.secondary?.hexagram.number,
        secondaryLines: r.secondary?.lines.map((l) => l.value),
        fortune,
        hasChanging: r.hasChangingHexagram,
        method: r.method,
        upperElement: upperTrig?.wuXing as string | undefined,
        lowerElement: lowerTrig?.wuXing as string | undefined,
        movingLine: r.primary.lines.find((l) => l.isChanging)?.position,
        bodyElement: undefined as string | undefined,
        useElement: undefined as string | undefined,
      };
    } else {
      const r = result as MeihuaResult;
      const interp = comprehensiveInterpretation(r, new Date().getMonth() + 1);
      const { wuxingAnalysis } = interp;
      const fortune = interp.overallInterpretation.includes('吉') ? 'good' as FortuneLevel
        : interp.overallInterpretation.includes('凶') ? 'bad' as FortuneLevel : 'neutral' as FortuneLevel;

      return {
        primaryNameCN: r.mainGua.name,
        primaryNameEN: r.mainGua.nameEN,
        primaryNumber: r.mainGua.number,
        primaryLines: r.mainGua.lines.map((l) => l.number),
        judgmentCN: interp.overallInterpretation,
        judgmentEN: interp.overallInterpretationEN,
        secondaryNameCN: r.changedGua?.name,
        secondaryNameEN: r.changedGua?.nameEN,
        secondaryNumber: r.changedGua?.number,
        secondaryLines: r.changedGua?.lines.map((l) => l.number),
        mutualNameCN: r.mutualGua?.name,
        mutualNameEN: r.mutualGua?.nameEN,
        mutualLines: r.mutualGua?.lines.map((l) => l.number),
        fortune,
        hasChanging: !!r.changedGua,
        method: r.method,
        bodyElement: wuxingAnalysis.bodyElement,
        useElement: wuxingAnalysis.useElement,
        upperElement: wuxingAnalysis.bodyElement,
        lowerElement: wuxingAnalysis.useElement,
        movingLine: r.movingLine,
        wuxingAnalysis: interp.wuxingAnalysis,
        fortuneDetail: interp.overallInterpretation,
      };
    }
  }, [result, source]);

  const handleSave = useCallback(() => {
    if (!result || !displayData) return;

    const record: HistoryRecord = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      timestamp: Date.now(),
      source,
      method: displayData.method || 'unknown',
      hexagramName: displayData.primaryNameEN,
      hexagramNameCN: displayData.primaryNameCN,
      hexagramNumber: displayData.primaryNumber,
      fortune: displayData.fortune,
      hexagramData: (result as IChingResult).primary?.hexagram || (result as MeihuaResult).mainGua as any,
      hasChangingHexagram: displayData.hasChanging,
      secondaryHexagramName: displayData.secondaryNameEN,
      secondaryHexagramNumber: displayData.secondaryNumber,
      ichingResult: source === 'iching' ? (result as IChingResult) : undefined,
      meihuaResult: source === 'meihua' ? (result as MeihuaResult) : undefined,
    };

    const existing: HistoryRecord[] = JSON.parse(localStorage.getItem('plumYiHistory') || '[]');
    existing.unshift(record);
    localStorage.setItem('plumYiHistory', JSON.stringify(existing));
    setSaved(true);
  }, [result, source, displayData]);

  if (!result || !displayData) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 20px' }}>
        <p style={{ color: '#8b7355', fontSize: '1.1rem', marginBottom: '20px' }}>{t('errors.loadFailed')}</p>
        <button
          className="btn"
          onClick={() => navigate('/')}
          style={{
            background: 'linear-gradient(135deg, #2c1810, #4a2c20)',
            color: '#d4a574',
            padding: '10px 28px',
            borderRadius: '24px',
            border: 'none',
          }}
        >
          {t('errors.goBack')}
        </button>
      </div>
    );
  }

  const fortuneColors = { good: '#2e7d32', neutral: '#f57f17', bad: '#c62828' };
  const fortuneLabels = { good: t('result.fortuneGood'), neutral: t('result.fortuneNeutral'), bad: t('result.fortuneBad') };

  const getWuxingRelation = (el1?: string, el2?: string): string | null => {
    if (!el1 || !el2) return null;
    const e1 = el1 as WuXingElement;
    const e2 = el2 as WuXingElement;
    if (WUXING_GENERATION[e1] === e2) return t('result.generating');
    if (WUXING_DESTRUCTION[e1] === e2) return t('result.overcoming');
    if (WUXING_GENERATION[e2] === e1) return `${t('result.generating')} (${t('result.element.earth')}→${t('result.element.' + el1)})`;
    return null;
  };

  return (
    <div className="result-page" style={{ paddingTop: '10px', maxWidth: '800px', margin: '0 auto', paddingBottom: '40px' }}>
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <h2
          style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            color: '#2c1810',
            fontFamily: "'Noto Serif SC', 'Songti SC', serif",
            letterSpacing: '3px',
          }}
        >
          {t('result.title')}
        </h2>
      </div>

      {/* Primary hexagram */}
      <div
        style={{
          background: 'linear-gradient(145deg, #faf6f0, #f5ede0)',
          borderRadius: '16px',
          padding: '28px',
          marginBottom: '20px',
          border: '1px solid rgba(139,115,85,0.15)',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', minWidth: '160px' }}>
            <HexagramDisplay
              lines={displayData.primaryLines}
              nameCN={displayData.primaryNameCN}
              nameEN={displayData.primaryNameEN}
              size="lg"
              label={t('result.original')}
              animate
            />
            <div style={{ fontSize: '0.8rem', color: '#8b7355', marginTop: '4px' }}>
              #{displayData.primaryNumber}
            </div>
          </div>

          {displayData.hasChanging && displayData.secondaryLines && (
            <div style={{ textAlign: 'center', minWidth: '160px' }}>
              <HexagramDisplay
                lines={displayData.secondaryLines}
                nameCN={displayData.secondaryNameCN || ''}
                nameEN={displayData.secondaryNameEN || ''}
                size="lg"
                label={t('result.changed')}
                animate
              />
              <div style={{ fontSize: '0.8rem', color: '#8b7355', marginTop: '4px' }}>
                #{displayData.secondaryNumber}
              </div>
            </div>
          )}

          {displayData.mutualLines && (
            <div style={{ textAlign: 'center', minWidth: '120px' }}>
              <HexagramDisplay
                lines={displayData.mutualLines}
                nameCN={displayData.mutualNameCN || ''}
                nameEN={displayData.mutualNameEN || ''}
                size="md"
                label={t('result.mutual')}
              />
            </div>
          )}
        </div>

        {/* Moving line info */}
        {displayData.movingLine && (
          <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '0.85rem', color: '#c0392b' }}>
            {t('result.changingLine')}: {displayData.movingLine}
          </div>
        )}
      </div>

      {/* Judgment */}
      <div
        style={{
          background: '#fff',
          borderRadius: '14px',
          padding: '24px',
          marginBottom: '16px',
          border: '1px solid rgba(139,115,85,0.12)',
        }}
      >
        <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#2c1810', marginBottom: '12px', letterSpacing: '1px' }}>
          📜 {t('result.judgment')}
        </h4>
        <p style={{ color: '#4a3728', lineHeight: 1.8, fontSize: '0.95rem', margin: 0 }}>
          {displayData.judgmentCN}
        </p>
      </div>

      {/* Fortune */}
      <div
        style={{
          background: '#fff',
          borderRadius: '14px',
          padding: '24px',
          marginBottom: '16px',
          border: '1px solid rgba(139,115,85,0.12)',
          textAlign: 'center',
        }}
      >
        <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#2c1810', marginBottom: '12px', letterSpacing: '1px' }}>
          🔮 {t('result.fortune')}
        </h4>
        <span
          style={{
            display: 'inline-block',
            fontSize: '2rem',
            fontWeight: 800,
            color: fortuneColors[displayData.fortune],
            fontFamily: "'Noto Serif SC', 'Songti SC', serif",
            letterSpacing: '4px',
          }}
        >
          {fortuneLabels[displayData.fortune]}
        </span>
        {(displayData as any).fortuneDetail && (
          <p style={{ color: '#6b5c4f', fontSize: '0.85rem', marginTop: '8px', margin: '8px 0 0' }}>
            {(displayData as any).fortuneDetail}
          </p>
        )}
      </div>

      {/* Five Elements Analysis */}
      <div
        style={{
          background: '#fff',
          borderRadius: '14px',
          padding: '24px',
          marginBottom: '16px',
          border: '1px solid rgba(139,115,85,0.12)',
        }}
      >
        <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#2c1810', marginBottom: '16px', letterSpacing: '1px' }}>
          ⚡ {t('result.fiveElements')}
        </h4>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          {displayData.upperElement && (
            <div style={{ textAlign: 'center', minWidth: '100px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: WUXING_COLOR[displayData.upperElement] || '#999',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 8px',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  fontFamily: "'Noto Serif SC', serif",
                  boxShadow: `0 2px 8px ${WUXING_COLOR[displayData.upperElement] || '#999'}44`,
                }}
              >
                {ELEMENT_CN[displayData.upperElement] || displayData.upperElement}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#6b5c4f' }}>{t('result.body')}</div>
            </div>
          )}

          {displayData.upperElement && displayData.lowerElement && (
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '1.2rem', color: '#8b7355' }}>
              {getWuxingRelation(displayData.upperElement, displayData.lowerElement) || '—'}
            </div>
          )}

          {displayData.lowerElement && (
            <div style={{ textAlign: 'center', minWidth: '100px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: WUXING_COLOR[displayData.lowerElement] || '#999',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 8px',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  fontFamily: "'Noto Serif SC', serif",
                  boxShadow: `0 2px 8px ${WUXING_COLOR[displayData.lowerElement] || '#999'}44`,
                }}
              >
                {ELEMENT_CN[displayData.lowerElement] || displayData.lowerElement}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#6b5c4f' }}>{t('result.use')}</div>
            </div>
          )}
        </div>

        {(displayData as any).wuxingAnalysis && (
          <p style={{ color: '#6b5c4f', fontSize: '0.85rem', marginTop: '16px', textAlign: 'center', lineHeight: 1.7 }}>
            {(displayData as any).wuxingAnalysis.interpretation || String((displayData as any).wuxingAnalysis)}
          </p>
        )}
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '28px', flexWrap: 'wrap' }}>
        <button
          className="btn"
          onClick={handleSave}
          disabled={saved}
          style={{
            background: saved ? '#8b7355' : 'linear-gradient(135deg, #2c1810, #4a2c20)',
            color: saved ? '#fff' : '#d4a574',
            padding: '10px 32px',
            borderRadius: '24px',
            fontWeight: 600,
            letterSpacing: '1px',
            border: 'none',
            opacity: saved ? 0.7 : 1,
          }}
        >
          {saved ? `✓ ${t('result.saved')}` : `💾 ${t('result.saveResult')}`}
        </button>
        <button
          className="btn"
          onClick={() => navigate('/history')}
          style={{
            background: 'transparent',
            color: '#8b7355',
            padding: '10px 28px',
            borderRadius: '24px',
            fontWeight: 500,
            border: '1px solid rgba(139,115,85,0.3)',
          }}
        >
          📜 {t('history.viewHistory')}
        </button>
        <button
          className="btn"
          onClick={() => navigate('/')}
          style={{
            background: 'transparent',
            color: '#8b7355',
            padding: '10px 28px',
            borderRadius: '24px',
            fontWeight: 500,
            border: '1px solid rgba(139,115,85,0.3)',
          }}
        >
          ← {t('nav.home')}
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
