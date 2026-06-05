import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { HistoryRecord } from '../types';
import HexagramDisplay from '../components/HexagramDisplay';

/**
 * History page: displays saved divination records with view details and delete.
 */
const HistoryPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isZh = i18n.language === 'zh';

  const [records, setRecords] = useState<HistoryRecord[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  useEffect(() => {
    const stored: HistoryRecord[] = JSON.parse(localStorage.getItem('plumYiHistory') || '[]');
    setRecords(stored);
  }, []);

  const handleDelete = useCallback((id: string) => {
    const updated = records.filter((r) => r.id !== id);
    setRecords(updated);
    localStorage.setItem('plumYiHistory', JSON.stringify(updated));
    setConfirmDelete(null);
    if (selectedId === id) setSelectedId(null);
  }, [records, selectedId]);

  const handleClearAll = useCallback(() => {
    setRecords([]);
    localStorage.removeItem('plumYiHistory');
    setSelectedId(null);
  }, []);

  const handleViewResult = useCallback((record: HistoryRecord) => {
    navigate('/result', {
      state: {
        source: record.source,
        result: record.ichingResult || record.meihuaResult,
      },
    });
  }, [navigate]);

  const fortuneColors = { good: '#2e7d32', neutral: '#f57f17', bad: '#c62828' };
  const fortuneLabels = { good: t('result.fortuneGood'), neutral: t('result.fortuneNeutral'), bad: t('result.fortuneBad') };

  const formatDate = (ts: number) => {
    const d = new Date(ts);
    return d.toLocaleString(isZh ? 'zh-CN' : 'en-US', {
      year: 'numeric', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  };

  return (
    <div className="history-page" style={{ paddingTop: '20px', maxWidth: '800px', margin: '0 auto', paddingBottom: '40px' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <h2
          style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            color: '#2c1810',
            fontFamily: "'Noto Serif SC', 'Songti SC', serif",
            letterSpacing: '2px',
            margin: 0,
          }}
        >
          📜 {t('history.title')}
        </h2>
        {records.length > 0 && (
          <button
            className="btn"
            onClick={handleClearAll}
            style={{
              background: 'transparent',
              color: '#c0392b',
              padding: '6px 16px',
              borderRadius: '16px',
              fontSize: '0.85rem',
              fontWeight: 500,
              border: '1px solid rgba(192,57,43,0.3)',
            }}
          >
            {t('history.clearHistory')}
          </button>
        )}
      </div>

      {records.length === 0 ? (
        /* Empty state */
        <div
          style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: 'rgba(250,246,240,0.5)',
            borderRadius: '16px',
            border: '1px dashed rgba(139,115,85,0.2)',
          }}
        >
          <div style={{ fontSize: '3rem', marginBottom: '16px', opacity: 0.4 }}>📭</div>
          <p style={{ color: '#8b7355', fontSize: '1.1rem', marginBottom: '8px' }}>{t('history.empty')}</p>
          <p style={{ color: '#a89880', fontSize: '0.9rem', marginBottom: '24px' }}>{t('history.emptyHint')}</p>
          <button
            className="btn"
            onClick={() => navigate('/')}
            style={{
              background: 'linear-gradient(135deg, #2c1810, #4a2c20)',
              color: '#d4a574',
              padding: '10px 28px',
              borderRadius: '24px',
              fontWeight: 600,
              border: 'none',
            }}
          >
            {t('home.startButton')} →
          </button>
        </div>
      ) : (
        /* Records list */
        <div>
          <p style={{ color: '#8b7355', fontSize: '0.85rem', marginBottom: '16px' }}>
            {t('history.totalRecords', { count: records.length })}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {records.map((record) => (
              <div
                key={record.id}
                style={{
                  background: selectedId === record.id
                    ? 'linear-gradient(145deg, #faf6f0, #f0e8d8)'
                    : '#fff',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  border: `1px solid ${selectedId === record.id ? 'rgba(184,134,11,0.3)' : 'rgba(139,115,85,0.12)'}`,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onClick={() => setSelectedId(selectedId === record.id ? null : record.id)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '1.2rem' }}>{record.source === 'iching' ? '☯' : '🌸'}</span>
                    <div>
                      <span style={{ fontWeight: 600, color: '#2c1810', fontSize: '1rem' }}>
                        {isZh ? record.hexagramNameCN : record.hexagramName}
                      </span>
                      <span style={{ color: '#a89880', fontSize: '0.8rem', marginLeft: '8px' }}>
                        #{record.hexagramNumber}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: fortuneColors[record.fortune],
                        background: `${fortuneColors[record.fortune]}15`,
                        padding: '2px 10px',
                        borderRadius: '10px',
                      }}
                    >
                      {fortuneLabels[record.fortune]}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#a89880' }}>{formatDate(record.timestamp)}</span>
                  </div>
                </div>

                {/* Expanded details */}
                {selectedId === record.id && (
                  <div
                    style={{
                      marginTop: '16px',
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(139,115,85,0.1)',
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '16px', justifyContent: 'center' }}>
                      <HexagramDisplay
                        lines={record.ichingResult?.primary.lines.map((l) => l.value) || record.meihuaResult?.mainGua.lines.map((l) => l.number) || []}
                        nameCN={record.hexagramNameCN}
                        nameEN={record.hexagramName}
                        size="sm"
                        label={t('result.original')}
                      />
                    </div>

                    <div style={{ fontSize: '0.8rem', color: '#6b5c4f', marginBottom: '12px' }}>
                      <span style={{ fontWeight: 500 }}>{t('history.divinationMethod')}:</span>{' '}
                      {t(`divination.methods.${record.method}.name`, record.method)}
                    </div>

                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <button
                        className="btn btn-sm"
                        onClick={() => handleViewResult(record)}
                        style={{
                          background: 'linear-gradient(135deg, #2c1810, #4a2c20)',
                          color: '#d4a574',
                          padding: '5px 16px',
                          borderRadius: '16px',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                          border: 'none',
                        }}
                      >
                        {t('process.viewResult')}
                      </button>
                      {confirmDelete === record.id ? (
                        <>
                          <button
                            className="btn btn-sm"
                            onClick={() => handleDelete(record.id)}
                            style={{
                              background: '#c0392b',
                              color: '#fff',
                              padding: '5px 16px',
                              borderRadius: '16px',
                              fontSize: '0.8rem',
                              fontWeight: 500,
                              border: 'none',
                            }}
                          >
                            {t('common.confirm')}
                          </button>
                          <button
                            className="btn btn-sm"
                            onClick={() => setConfirmDelete(null)}
                            style={{
                              background: 'transparent',
                              color: '#8b7355',
                              padding: '5px 12px',
                              borderRadius: '16px',
                              fontSize: '0.8rem',
                              border: '1px solid rgba(139,115,85,0.3)',
                            }}
                          >
                            {t('common.cancel')}
                          </button>
                        </>
                      ) : (
                        <button
                          className="btn btn-sm"
                          onClick={() => setConfirmDelete(record.id)}
                          style={{
                            background: 'transparent',
                            color: '#c0392b',
                            padding: '5px 16px',
                            borderRadius: '16px',
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            border: '1px solid rgba(192,57,43,0.3)',
                          }}
                        >
                          🗑 {t('common.delete')}
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
