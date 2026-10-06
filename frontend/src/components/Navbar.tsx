type NavbarProps = {
  language: 'en' | 'zh'
  onLanguageChange: (language: 'en' | 'zh') => void

  theme: 'light' | 'dark'
  onThemeChange: () => void
}

function Navbar({
  language,
  onLanguageChange,
  theme,
  onThemeChange,
}: NavbarProps) {
  return (
    <header className="navbar">

      <div className="navbar-brand">
        <span className="navbar-capybara">🐻ིྀ</span>
        <span className="navbar-logo">CozyBites</span>
      </div>

      <nav className="navbar-links">
        <a href="#">
          {language === 'en' ? 'Home' : '首页'}
        </a>

        <a href="#">
          {language === 'en' ? 'Recipes' : '食谱'}
        </a>

        <a href="#">
          {language === 'en' ? 'Categories' : '分类'}
        </a>
      </nav>

      <div className="navbar-actions">

        <div className="language-toggle">

          <button
            className={
              language === 'en'
                ? 'language-option active'
                : 'language-option'
            }
            onClick={() => onLanguageChange('en')}
          >
            EN
          </button>

          <button
            className={
              language === 'zh'
                ? 'language-option active'
                : 'language-option'
            }
            onClick={() => onLanguageChange('zh')}
          >
            中文
          </button>

        </div>

        <button
          className="theme-button"
          onClick={onThemeChange}
          aria-label="Switch theme"
        >

          {theme === 'light' ? (
            <svg
              className="theme-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="12" cy="12" r="4" />

              <line x1="12" y1="2" x2="12" y2="4" />
              <line x1="12" y1="20" x2="12" y2="22" />

              <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
              <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />

              <line x1="2" y1="12" x2="4" y2="12" />
              <line x1="20" y1="12" x2="22" y2="12" />

              <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
              <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
            </svg>
          ) : (
            <svg
              className="theme-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          )}

        </button>

      </div>

    </header>
  )
}

export default Navbar