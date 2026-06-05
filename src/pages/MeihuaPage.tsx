import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { divinationByTime, divinationByNumber, divinationByText } from '../services/meihua';
import type { DivinationResult } from '../services/meihua';
import HexagramDisplay from '../components/HexagramDisplay';

type MeihuaMethod = 'time' | 'number' | 'text';
type Step = 'select' | 'input' | 'result';

/**
 * Estimate stroke count for a Chinese character based on Unicode code point.
 * Returns a value between 1 and 28 for CJK characters.
 */
function estimateStrokeCount(char: string): number {
  const code = char.charCodeAt(0);
  if (code >= 0x4E00 && code <= 0x9FFF) {
    return ((code - 0x4E00) % 28) + 1;
  }
  return (code % 20) + 1;
}

function getStrokeCounts(text: string): number[] {
  return Array.from(text.trim()).map(estimateStrokeCount);
}

/**
 * Plum Blossom Numerology divination page with time, number, and text methods.
 */
const MeihuaPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [step, setStep] = useState<Step>('select');
  const [method, setMethod] = useState<MeihuaMethod>('time');
  const [result, setResult] = useState<DivinationResult | null>(null);
  const [error, setError] = useState('');

  // Number inputs
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  // Text input
  const [text, setText] = useState('');

  const handleSelectMethod = useCallback((m: MeihuaMethod) => {
    setMethod(m);
    setError('');
    setStep('input');
  }, []);

  const handleDivine = useCallback(() => {
    setError('');
    try {
      let divResult: DivinationResult;

      if (method === 'time') {
        const now = new Date();
        divResult = divinationByTime(
          now.getFullYear(),
          now.getMonth() + 1,
          now.getDate(),
          now.getHours()
        );
      } else if (method === 'number') {
        const n1 = parseInt(num1, 10);
        const n2 = num2 ? parseInt(num2, 10) : undefined;
        if (isNaN(n1) || n1 <= 0) {
          setError(t('process.number.invalidNumber'));
          return;
        }
        divResult = divinationByNumber(n1, n2);
      } else {
        if (!text.trim()) {
          setError(t('process.text.emptyText'));
          return;
        }
        const strokeCounts = getStrokeCounts(text.trim());
        divResult = divinationByText(strokeCounts, text.trim());
      }

      setResult(divResult);
      setStep('result');
    } catch {
      setError(t('errors.invalidInput'));
    }
  }, [method, num1, num2, text, t]);

  const handleViewResult = useCallback(() => {
    if (!result) return;
    navigate('/result', { state: { source: 'meihua', result } });
  }, [result, navigate]);

  const handleRetry = useCallback(() => {
    setStep('select');
    setResult(null);
    setNum1('');
    setNum2('');
    setText('');
    setError('');
  }, []);

  const methodCardStyle: React.CSSProperties = {
    borderRadius: '14px',
    padding: '24px 20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '2px solid rgba(139,115,85,0.15)',
    textAlign: 'center',
    background: 'linear-gradient(145deg, #f0f4f8, #e8eff5)',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 14px',
    border: '1px solid rgba(139,115,85,0.3)',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    background: '#faf6f0',
    color: '#2c1810',
    transition: 'border-color 0.2s',
  };

  return (
    <div className="meihua-page" style={{ paddingTop: '20px', maxWidth: '700px', margin: '0 auto' }}>
      {/* Step 1: Method Selection */}
      {step === 'select' && (
        <div>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h2
              style={{
                fontSize: '1.8rem',
                fontWeight: 700,
                color: '#2c1810',
                fontFamily: "'Noto Serif SC', 'Songti SC', serif",
                letterSpacing: '2px',
                marginBottom: '8px',
              }}
            >
              {t('divination.methods.plumBlossom.name')}
            </h2>
            <p style={{ color: '#8b7355', fontSize: '0.95rem' }}>{t('divination.methods.plumBlossom.description')}</p>
          </div>

          <div className="row g-4">
            {(['time', 'number', 'text'] as const).map((m) => (
              <div key={m} className="col-md-4">
                <div
                  style={methodCardStyle}
                  onClick={() => handleSelectMethod(m)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(44,24,16,0.1)';
                    e.currentTarget.style.borderColor = 'rgba(184,134,11,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = 'rgba(139,115,85,0.15)';
                  }}
                >
                  <div style={{ fontSize: '2.2rem', marginBottom: '12px' }}>
                    {m === 'time' ? '⏰' : m === 'number' ? '🔢' : '✏️'}
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#2c1810', marginBottom: '6px' }}>
                    {t(`divination.methods.${m}.name`)}
                  </h4>
                  <p style={{ color: '#6b5c4f', fontSize: '0.8rem', lineHeight: 1.5, margin: 0 }}>
                    {t(`divination.methods.${m}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Input form */}
      {step === 'input' && (
        <div style={{ maxWidth: '450px', margin: '0 auto', padding: '30px 20px' }}>
          <h3
            style={{
              fontSize: '1.3rem',
              fontWeight: 600,
              color: '#2c1810',
              marginBottom: '24px',
              textAlign: 'center',
              fontFamily: "'Noto Serif SC', 'Songti SC', serif",
            }}
          >
            {t(`divination.methods.${method}.name`)}
          </h3>

          {/* Time method */}
          {method === 'time' && (
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: '#6b5c4f', marginBottom: '24px', fontSize: '0.9rem' }}>
                {t('process.time.instruction')}
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '12px',
                  marginBottom: '24px',
                  flexWrap: 'wrap',
                }}
              >
                {(() => {
                  const now = new Date();
                  return [
                    { label: t('process.time.currentYear'), value: now.getFullYear() },
                    { label: t('process.time.currentMonth'), value: now.getMonth() + 1 },
                    { label: t('process.time.currentDay'), value: now.getDate() },
                    { label: t('process.time.currentHour'), value: now.getHours() },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        background: '#faf6f0',
                        border: '1px solid rgba(139,115,85,0.2)',
                        borderRadius: '10px',
                        padding: '12px 18px',
                        minWidth: '70px',
                      }}
                    >
                      <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#2c1810' }}>{item.value}</div>
                      <div style={{ fontSize: '0.75rem', color: '#8b7355' }}>{item.label}</div>
                    </div>
                  ));
                })()}
              </div>
            </div>
          )}

          {/* Number method */}
          {method === 'number' && (
            <div>
              <p style={{ color: '#6b5c4f', marginBottom: '20px', fontSize: '0.9rem' }}>
                {t('process.number.instruction')}
              </p>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#6b5c4f', marginBottom: '6px' }}>
                  {t('process.number.upperLabel')}
                </label>
                <input
                  type="number"
                  value={num1}
                  onChange={(e) => setNum1(e.target.value)}
                  placeholder={t('process.number.placeholder1')}
                  style={inputStyle}
                  min="1"
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#6b5c4f', marginBottom: '6px' }}>
                  {t('process.number.lowerLabel')}
                </label>
                <input
                  type="number"
                  value={num2}
                  onChange={(e) => setNum2(e.target.value)}
                  placeholder={t('process.number.placeholder2')}
                  style={inputStyle}
                  min="1"
                />
              </div>
            </div>
          )}

          {/* Text method */}
          {method === 'text' && (
            <div>
              <p style={{ color: '#6b5c4f', marginBottom: '20px', fontSize: '0.9rem' }}>
                {t('process.text.instruction')}
              </p>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={t('process.text.placeholder')}
                rows={3}
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                  minHeight: '80px',
                }}
              />
            </div>
          )}

          {error && (
            <div style={{ color: '#c0392b', fontSize: '0.85rem', marginBottom: '16px', textAlign: 'center' }}>
              {error}
            </div>
          )}

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: '8px' }}>
            <button
              className="btn"
              onClick={handleDivine}
              style={{
                background: 'linear-gradient(135deg, #2c1810, #4a2c20)',
                color: '#d4a574',
                padding: '10px 36px',
                borderRadius: '24px',
                fontSize: '1rem',
                fontWeight: 600,
                letterSpacing: '1px',
                border: 'none',
              }}
            >
              {t(`process.${method}.confirm`)}
            </button>
            <button
              className="btn"
              onClick={handleRetry}
              style={{
                background: 'transparent',
                color: '#8b7355',
                padding: '10px 24px',
                borderRadius: '24px',
                fontWeight: 500,
                border: '1px solid rgba(139,115,85,0.3)',
              }}
            >
              {t('common.back')}
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Result preview */}
      {step === 'result' && result && (
        <div style={{ textAlign: 'center', padding: '30px 20px' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#2c1810', marginBottom: '24px' }}>
            {t('process.complete')}
          </h3>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginBottom: '30px' }}>
            <HexagramDisplay
              lines={result.mainGua.lines.map((l) => l.number)}
              nameCN={result.mainGua.name}
              nameEN={result.mainGua.nameEN}
              size="lg"
              label={t('result.original')}
              animate
            />
            {result.changedGua && (
              <HexagramDisplay
                lines={result.changedGua.lines.map((l) => l.number)}
                nameCN={result.changedGua.name}
                nameEN={result.changedGua.nameEN}
                size="lg"
                label={t('result.changed')}
                animate
              />
            )}
            {result.mutualGua && (
              <HexagramDisplay
                lines={result.mutualGua.lines.map((l) => l.number)}
                nameCN={result.mutualGua.name}
                nameEN={result.mutualGua.nameEN}
                size="md"
                label={t('result.mutual')}
                animate
              />
            )}
          </div>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn"
              onClick={handleViewResult}
              style={{
                background: 'linear-gradient(135deg, #2c1810, #4a2c20)',
                color: '#d4a574',
                padding: '10px 32px',
                borderRadius: '24px',
                fontWeight: 600,
                letterSpacing: '1px',
                border: 'none',
              }}
            >
              {t('process.viewResult')} →
            </button>
            <button
              className="btn"
              onClick={handleRetry}
              style={{
                background: 'transparent',
                color: '#8b7355',
                padding: '10px 32px',
                borderRadius: '24px',
                fontWeight: 500,
                border: '1px solid rgba(139,115,85,0.3)',
              }}
            >
              {t('process.retry')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeihuaPage;
