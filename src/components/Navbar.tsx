import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

/**
 * Main navigation bar with app name, nav links, and language toggle.
 * Responsive: collapses to hamburger on mobile.
 */
const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(true);

  const navItems = [
    { to: '/', label: t('nav.home') },
    { to: '/iching', label: t('nav.iching') },
    { to: '/meihua', label: t('nav.meihua') },
    { to: '/history', label: t('nav.history') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className="navbar navbar-expand-md navbar-dark fixed-top"
      style={{
        background: 'linear-gradient(135deg, #2c1810 0%, #4a2c20 50%, #1a0f0a 100%)',
        borderBottom: '1px solid rgba(184, 134, 11, 0.2)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
      }}
    >
      <div className="container">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center"
          style={{
            fontFamily: "'Noto Serif SC', 'Songti SC', serif",
            fontSize: '1.3rem',
            fontWeight: 700,
            color: '#d4a574',
            letterSpacing: '2px',
            textDecoration: 'none',
          }}
        >
          <span style={{ fontSize: '1.6rem', marginRight: '6px' }}>☰</span>
          {t('app.name')}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          aria-expanded={!collapsed}
          aria-label="Toggle navigation"
          style={{
            borderColor: 'rgba(212, 165, 116, 0.5)',
            padding: '4px 8px',
          }}
        >
          <span
            className="navbar-toggler-icon"
            style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(212,165,116,0.8)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")` }}
          />
        </button>

        <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`}>
          <ul className="navbar-nav ms-auto me-3">
            {navItems.map((item) => (
              <li key={item.to} className="nav-item">
                <Link
                  to={item.to}
                  className={`nav-link ${isActive(item.to) ? 'active' : ''}`}
                  onClick={() => setCollapsed(true)}
                  style={{
                    color: isActive(item.to) ? '#d4a574' : 'rgba(212, 165, 116, 0.7)',
                    fontWeight: isActive(item.to) ? 600 : 400,
                    fontSize: '0.95rem',
                    letterSpacing: '1px',
                    padding: '8px 14px',
                    borderRadius: '4px',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
