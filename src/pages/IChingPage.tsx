import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { performDivination } from '../services/iChing';
import type { DivinationMethod, DivinationResult } from '../services/iChing';
import HexagramDisplay from '../components/HexagramDisplay';

type Step = 'select' | 'process' | 'result';

/**
 * I Ching divination page with yarrow stalk and coin methods.
 * Guides user through the traditional divination process.
 */
const IChingPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [step, setStep] = useState<Step>('select');
  const [method, setMethod] = useState<DivinationMethod>('yarrow');
  const [result, setResult] = useState<DivinationResult | null>(null);
  const [animating, setAnimating] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);

  const handleSelectMethod = useCallback((m: DivinationMethod) => {
    setMethod(m);
    setStep('process');
  }, []);

  const handlePerformDivination = useCallback(() => {
    setAnimating(true);
    setCurrentLine(0);

    // Animate line by line
    let line = 0;
    const interval = setInterval(() => {
      line++;
      setCurrentLine(line);
      if (line >= 6) {
        clearInterval(interval);
        const divResult = performDivination(method);
        setResult(divResult);
        setTimeout(() => {
          setAnimating(false);
          setStep('result');
        }, 600);
      }
    }, 400);
  }, [method]);

  const handleViewResult = useCallback(() => {
    if (!result) return;
    navigate('/result', {
      state: { source: 'iching', result: result },
    });
  }, [result, navigate]);

  const handleRetry = useCallback(() => {
    setStep('select');
    setResult(null);
    setCurrentLine(0);
  }, []);

  const methodCardStyle: React.CSSProperties = {
    borderRadius: '14px',
    padding: '28px 24px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '2px solid rgba(139,115,85,0.15)',
    textAlign: 'center',
    background: 'linear-gradient(145deg, #faf6f0, #f5ede0)',
  };

  return (
    <div className="iching-page" style={{ paddingTop: '20px', maxWidth: '700px', margin: '0 auto' }}>
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
              {t('divination.title')}
            </h2>
            <p style={{ color: '#8b7355', fontSize: '0.95rem' }}>{t('divination.subtitle')}</p>
          </div>

          <div className="row g-4">
            {(['yarrow', 'coin'] as const).map((m) => (
              <div key={m} className="col-md-6">
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
                  <div style={{ fontSize: '2.5rem', marginBottom: '14px' }}>{m === 'yarrow' ? '🌿' : '🪙'}</div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#2c1810', marginBottom: '8px' }}>
                    {t(`divination.methods.${m}.name`)}
                  </h4>
                  <p style={{ color: '#6b5c4f', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                    {t(`divination.methods.${m}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Process animation */}
      {step === 'process' && (
        <div style={{ textAlign: 'center', padding: '40px 20px' }}>
          <h3
            style={{
              fontSize: '1.4rem',
              fontWeight: 600,
              color: '#2c1810',
              marginBottom: '24px',
              fontFamily: "'Noto Serif SC', 'Songti SC', serif",
            }}
          >
            {t('process.title')}
          </h3>

          {/* Animated line display */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              alignItems: 'center',
              margin: '24px 0',
              minHeight: '180px',
            }}
          >
            {[...Array(6)].map((_, i) => {
              const lineIdx = 5 - i; // Display top to bottom
              const isVisible = lineIdx < currentLine;
              return (
                <div
                  key={lineIdx}
                  style={{
                    opacity: isVisible ? 1 : 0.15,
                    transition: 'all 0.4s ease',
                    transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                  }}
                >
                  <div
                    style={{
                      width: '120px',
                      height: '8px',
                      background: isVisible
                        ? 'linear-gradient(90deg, #2c1810, #4a2c20)'
                        : 'rgba(139,115,85,0.15)',
                      borderRadius: '4px',
                      display: 'flex',
                      gap: '5px',
                      justifyContent: 'center',
                    }}
                  >
                    {isVisible && (
                      <>
                        <div style={{ width: '48%', height: '100%', background: '#2c1810', borderRadius: '4px' }} />
                        <div style={{ width: '48%', height: '100%', background: '#2c1810', borderRadius: '4px' }} />
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <p style={{ color: '#8b7355', marginBottom: '20px', fontSize: '0.9rem' }}>
            {animating
              ? t('process.generating')
              : currentLine >= 6
              ? t('process.complete')
              : `${t(`process.${method}.step1`)}...`}
          </p>

          {!animating && currentLine === 0 && (
            <button
              className="btn"
              onClick={handlePerformDivination}
              style={{
                background: 'linear-gradient(135deg, #2c1810, #4a2c20)',
                color: '#d4a574',
                padding: '12px 36px',
                borderRadius: '24px',
                fontSize: '1rem',
                fontWeight: 600,
                letterSpacing: '1px',
                border: 'none',
              }}
            >
              {t('process.start')}
            </button>
          )}

          {!animating && currentLine >= 6 && (
            <button
              className="btn"
              onClick={handleViewResult}
              style={{
                background: 'linear-gradient(135deg, #2c1810, #4a2c20)',
                color: '#d4a574',
                padding: '12px 36px',
                borderRadius: '24px',
                fontSize: '1rem',
                fontWeight: 600,
                letterSpacing: '1px',
                border: 'none',
              }}
            >
              {t('process.viewResult')} →
            </button>
          )}
        </div>
      )}

      {/* Step 3: Quick result preview */}
      {step === 'result' && result && (
        <div style={{ textAlign: 'center', padding: '30px 20px' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#2c1810', marginBottom: '24px' }}>
            {t('process.complete')}
          </h3>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginBottom: '30px' }}>
            <HexagramDisplay
              lines={result.primary.lines.map((l) => l.value)}
              nameCN={result.primary.hexagram.nameCN}
              nameEN={result.primary.hexagram.nameEN}
              size="lg"
              label={t('result.original')}
              animate
            />
            {result.hasChangingHexagram && result.secondary && (
              <HexagramDisplay
                lines={result.secondary.lines.map((l) => l.value)}
                nameCN={result.secondary.hexagram.nameCN}
                nameEN={result.secondary.hexagram.nameEN}
                size="lg"
                label={t('result.changed')}
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

export default IChingPage;
