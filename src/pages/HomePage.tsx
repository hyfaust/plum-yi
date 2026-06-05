import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * Home page with welcome message and two divination method cards.
 */
const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const cardBase: React.CSSProperties = {
    borderRadius: '16px',
    padding: '32px 28px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(139, 115, 85, 0.2)',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  };

  return (
    <div className="home-page" style={{ paddingTop: '20px' }}>
      {/* Hero section */}
      <div
        style={{
          textAlign: 'center',
          padding: '40px 20px 30px',
          background: 'linear-gradient(180deg, rgba(44,24,16,0.03) 0%, transparent 100%)',
          borderRadius: '20px',
          marginBottom: '32px',
        }}
      >
        <div
          style={{
            fontSize: '2.8rem',
            fontWeight: 800,
            color: '#2c1810',
            fontFamily: "'Noto Serif SC', 'Songti SC', serif",
            letterSpacing: '4px',
            marginBottom: '12px',
          }}
        >
          ☰ {t('home.title')}
        </div>
        <p
          style={{
            fontSize: '1.15rem',
            color: '#8b7355',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: 1.8,
          }}
        >
          {t('home.subtitle')}
        </p>
      </div>

      {/* Two method cards */}
      <div className="row g-4 mb-5" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="col-md-6">
          <div
            style={{
              ...cardBase,
              background: 'linear-gradient(145deg, #faf6f0 0%, #f0e8d8 100%)',
            }}
            onClick={() => navigate('/iching')}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(44,24,16,0.12)';
              e.currentTarget.style.borderColor = 'rgba(184,134,11,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(139,115,85,0.2)';
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>☯</div>
            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#2c1810',
                marginBottom: '12px',
                fontFamily: "'Noto Serif SC', 'Songti SC', serif",
              }}
            >
              {t('home.ichingCard.title')}
            </h3>
            <p style={{ color: '#6b5c4f', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>
              {t('home.ichingCard.desc')}
            </p>
            <button
              className="btn"
              style={{
                background: 'linear-gradient(135deg, #2c1810, #4a2c20)',
                color: '#d4a574',
                border: 'none',
                padding: '10px 28px',
                borderRadius: '24px',
                fontSize: '0.95rem',
                fontWeight: 600,
                letterSpacing: '1px',
              }}
            >
              {t('home.ichingCard.button')} →
            </button>
          </div>
        </div>

        <div className="col-md-6">
          <div
            style={{
              ...cardBase,
              background: 'linear-gradient(145deg, #f0f4f8 0%, #e8eff5 100%)',
            }}
            onClick={() => navigate('/meihua')}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(44,24,16,0.12)';
              e.currentTarget.style.borderColor = 'rgba(184,134,11,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(139,115,85,0.2)';
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🌸</div>
            <h3
              style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#2c1810',
                marginBottom: '12px',
                fontFamily: "'Noto Serif SC', 'Songti SC', serif",
              }}
            >
              {t('home.meihuaCard.title')}
            </h3>
            <p style={{ color: '#6b5c4f', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>
              {t('home.meihuaCard.desc')}
            </p>
            <button
              className="btn"
              style={{
                background: 'linear-gradient(135deg, #2c1810, #4a2c20)',
                color: '#d4a574',
                border: 'none',
                padding: '10px 28px',
                borderRadius: '24px',
                fontSize: '0.95rem',
                fontWeight: 600,
                letterSpacing: '1px',
              }}
            >
              {t('home.meihuaCard.button')} →
            </button>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '20px',
          paddingBottom: '40px',
        }}
      >
        {[
          { icon: '📖', title: t('home.featureDivination'), desc: t('home.featureDivinationDesc') },
          { icon: '🔮', title: t('home.featureAnalysis'), desc: t('home.featureAnalysisDesc') },
          { icon: '📜', title: t('home.featureHistory'), desc: t('home.featureHistoryDesc') },
        ].map((f) => (
          <div
            key={f.title}
            style={{
              textAlign: 'center',
              padding: '20px',
              borderRadius: '12px',
              background: 'rgba(250,246,240,0.5)',
              border: '1px solid rgba(139,115,85,0.1)',
            }}
          >
            <div style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{f.icon}</div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#2c1810', marginBottom: '6px' }}>{f.title}</h4>
            <p style={{ fontSize: '0.8rem', color: '#8b7355', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
