import React from 'react';
import { useTranslation } from 'react-i18next';
import LineDisplay from './LineDisplay';
import type { HexagramDisplayProps } from '../types';

/**
 * Displays a complete 6-line hexagram with name and optional label.
 * Lines are rendered bottom-to-top (position 1 = bottom).
 */
const HexagramDisplay: React.FC<HexagramDisplayProps> = ({
  lines,
  nameCN,
  nameEN,
  animate = false,
  size = 'md',
  label,
}) => {
  const { i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  // Display lines from top (index 5) to bottom (index 0)
  const displayLines = [...lines].reverse();

  return (
    <div className="hexagram-display" style={{ textAlign: 'center', padding: '12px 0' }}>
      {label && (
        <div
          style={{
            fontSize: size === 'sm' ? '0.75rem' : size === 'lg' ? '1rem' : '0.85rem',
            color: '#8b7355',
            marginBottom: '8px',
            fontWeight: 500,
            letterSpacing: '1px',
          }}
        >
          {label}
        </div>
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: size === 'sm' ? '3px' : size === 'lg' ? '6px' : '4px',
          alignItems: 'center',
          padding: '10px 0',
        }}
      >
        {displayLines.map((lineValue, idx) => {
          const position = 6 - idx; // Original position (1-6, bottom to top)
          return (
            <LineDisplay
              key={position}
              value={lineValue}
              position={position}
              animate={animate}
              size={size}
            />
          );
        })}
      </div>
      <div
        style={{
          marginTop: '10px',
          fontSize: size === 'sm' ? '1.1rem' : size === 'lg' ? '1.8rem' : '1.4rem',
          fontWeight: 700,
          color: '#2c1810',
          letterSpacing: '2px',
        }}
      >
        {nameCN}
      </div>
      <div
        style={{
          fontSize: size === 'sm' ? '0.7rem' : size === 'lg' ? '0.9rem' : '0.8rem',
          color: '#8b7355',
          marginTop: '2px',
        }}
      >
        {isZh ? nameEN : nameCN}
      </div>
    </div>
  );
};

export default HexagramDisplay;
