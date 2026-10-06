import { useEffect, useState } from 'react'

import './App.css'

import Navbar from './components/Navbar'
import CategoryCard from './components/CategoryCard'
import CookingMethodBook from './components/CookingMethodBook'
import RecipeCard from './components/RecipeCard'

import { recipes } from './data/recipes'


function App() {

  /* ========================================
     Language
  ======================================== */

  const [language, setLanguage] = useState<'en' | 'zh'>(() => {
    const savedLanguage = localStorage.getItem('language')

    return savedLanguage === 'zh' ? 'zh' : 'en'
  })


  /* ========================================
     Theme
  ======================================== */

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme')

    return savedTheme === 'dark' ? 'dark' : 'light'
  })


  /* ========================================
     Save Theme
  ======================================== */

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      theme
    )

    localStorage.setItem('theme', theme)
  }, [theme])


  /* ========================================
     Save Language
  ======================================== */

  useEffect(() => {
    localStorage.setItem('language', language)

    document.documentElement.lang =
      language === 'en'
        ? 'en'
        : 'zh-CN'
  }, [language])


  /* ========================================
     Toggle Theme
  ======================================== */

  const toggleTheme = () => {
    setTheme(
      theme === 'light'
        ? 'dark'
        : 'light'
    )
  }


  return (
    <div className="app">

      {/* ====================================
          Navbar
      ==================================== */}

      <Navbar
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeChange={toggleTheme}
      />


      <main>

        {/* ==================================
            Hero
        ================================== */}

        <section className="hero">

          <span className="hero-capybara">
            🐻ིྀ
          </span>


          <h1>
            {language === 'en'
              ? 'What are we cooking today?'
              : '今天想做点什么？'}
          </h1>


          <p>
            {language === 'en'
              ? 'Find something delicious for every mood and every moment.'
              : '为每一种心情，找到一道刚刚好的美味。'}
          </p>


          {/* Search Bar */}

          <div className="search-bar">

            <svg
              className="search-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >

              <circle
                cx="11"
                cy="11"
                r="7"
              />

              <line
                x1="16.5"
                y1="16.5"
                x2="21"
                y2="21"
              />

            </svg>


            <input
              type="text"
              placeholder={
                language === 'en'
                  ? 'Search recipes or ingredients...'
                  : '搜索食谱或食材...'
              }
              aria-label={
                language === 'en'
                  ? 'Search recipes or ingredients'
                  : '搜索食谱或食材'
              }
            />


            <button className="search-button">
              {language === 'en'
                ? 'Search'
                : '搜索'}
            </button>

          </div>

        </section>


        {/* ==================================
            Categories
        ================================== */}

        <section className="categories-section">

          <div className="section-heading">

            <div>

              <span className="section-label">
                {language === 'en'
                  ? 'EXPLORE'
                  : '探索'}
              </span>


              <h2>
                {language === 'en'
                  ? 'Browse by Category'
                  : '按分类浏览'}
              </h2>


              <p>
                {language === 'en'
                  ? "Find something delicious for whatever you're craving."
                  : '无论今天想吃什么，都能找到合适的美味。'}
              </p>

            </div>


            <button className="view-all-button">

              {language === 'en'
                ? 'View all'
                : '查看全部'}

              <span>→</span>

            </button>

          </div>


          <div className="category-grid">

            <CategoryCard
              icon="🥩"
              title={
                language === 'en'
                  ? 'Meat'
                  : '肉类'
              }
              description={
                language === 'en'
                  ? 'Beef, pork, chicken & more'
                  : '牛肉、猪肉、鸡肉等'
              }
            />


            <CategoryCard
              icon="🥬"
              title={
                language === 'en'
                  ? 'Vegetables'
                  : '蔬菜'
              }
              description={
                language === 'en'
                  ? 'Fresh and colorful dishes'
                  : '新鲜又丰富的蔬菜料理'
              }
            />


            <CategoryCard
              icon="🍰"
              title={
                language === 'en'
                  ? 'Desserts'
                  : '甜点'
              }
              description={
                language === 'en'
                  ? 'Something sweet for later'
                  : '给生活加一点甜'
              }
            />


            <CategoryCard
              icon="🧋"
              title={
                language === 'en'
                  ? 'Drinks'
                  : '饮品'
              }
              description={
                language === 'en'
                  ? 'Warm, cold and refreshing'
                  : '冷热饮品与清爽特调'
              }
            />

          </div>

        </section>


        {/* ==================================
            Cooking Methods
        ================================== */}

        <CookingMethodBook language={language} />


        {/* ==================================
            Cozy Picks
        ================================== */}

        <section className="cozy-picks-section">

          <div className="section-heading">

            <div>

              <span className="section-label">
                {language === 'en'
                  ? 'COZY PICKS'
                  : '今日精选'}
              </span>


              <h2>
                {language === 'en'
                  ? "Recipes we're loving"
                  : '我们最近喜欢的食谱'}
              </h2>


              <p>
                {language === 'en'
                  ? 'A few delicious ideas picked for you.'
                  : '为你挑选几道值得尝试的美味。'}
              </p>

            </div>


            <button className="view-all-button">

              {language === 'en'
                ? 'View all'
                : '查看全部'}

              <span>→</span>

            </button>

          </div>


          <div className="recipe-grid">

            {recipes
              .slice(0, 3)
              .map((recipe) => (

                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  language={language}
                />

              ))}

          </div>

        </section>

      </main>

    </div>
  )
}

export default App