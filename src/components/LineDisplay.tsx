import React from 'react';
import type { LineDisplayProps } from '../types';

/**
 * Renders a single I Ching line (yao).
 * Yang (value 2,6,7,8 → even = yang solid): solid line
 * Yin (value 3,7 → odd = yin broken): broken line
 * Moving lines get a pulsing marker.
 */
const LineDisplay: React.FC<LineDisplayProps> = ({
  value,
  position,
  isChanging = false,
  animate = false,
  size = 'md',
}) => {
  // In I Ching: even values (6,8) are yin, odd values (7,9) are yang
  // But our services use: value 0 = yin (broken), value 1 = yang (solid)
  const isYang = value === 1 || value === 7 || value === 9;

  const sizeMap = {
    sm: { height: 4, gap: 3, fontSize: 10, width: 60 },
    md: { height: 6, gap: 4, fontSize: 12, width: 100 },
    lg: { height: 8, gap: 5, fontSize: 14, width: 140 },
  };

  const s = sizeMap[size];

  const lineStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: `${s.gap}px`,
    height: `${s.height}px`,
    width: `${s.width}px`,
    margin: '0 auto',
    position: 'relative',
    animation: animate ? `lineAppear 0.3s ease ${position * 0.12}s both` : undefined,
  };

  const segmentStyle: React.CSSProperties = {
    height: `${s.height}px`,
    backgroundColor: isChanging ? '#c0392b' : '#2c1810',
    borderRadius: `${s.height / 3}px`,
    transition: 'all 0.3s ease',
  };

  return (
    <div className="line-display" style={lineStyle}>
      {isYang ? (
        // Solid line
        <div style={{ ...segmentStyle, width: '100%' }} />
      ) : (
        // Broken line — two segments with gap
        <>
          <div style={{ ...segmentStyle, width: '42%' }} />
          <div style={{ ...segmentStyle, width: '42%' }} />
        </>
      )}
      {isChanging && (
        <span
          className="changing-marker"
          style={{
            position: 'absolute',
            right: '-20px',
            fontSize: `${s.fontSize}px`,
            color: '#c0392b',
            fontWeight: 700,
            animation: 'pulse 1.2s ease-in-out infinite',
          }}
        >
          ✦
        </span>
      )}
    </div>
  );
};

export default LineDisplay;
