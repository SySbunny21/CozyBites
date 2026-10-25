import type { Recipe } from '../data/recipes'


type RecipeCardProps = {
  recipe: Recipe
  language: 'en' | 'zh'
}


function RecipeCard({
  recipe,
  language,
}: RecipeCardProps) {

  const difficultyText = {

    Easy:
      language === 'en'
        ? 'Easy'
        : '简单',

    Medium:
      language === 'en'
        ? 'Medium'
        : '中等',

    Hard:
      language === 'en'
        ? 'Hard'
        : '较难',

  }


  const categoryText = {

    meat:
      language === 'en'
        ? 'Meat'
        : '肉类',

    vegetable:
      language === 'en'
        ? 'Vegetables'
        : '蔬菜',

    dessert:
      language === 'en'
        ? 'Dessert'
        : '甜点',

    drink:
      language === 'en'
        ? 'Drink'
        : '饮品',

  }


  const meatTypeText = {

    beef:
      language === 'en'
        ? 'Beef'
        : '牛肉',

    pork:
      language === 'en'
        ? 'Pork'
        : '猪肉',

    chicken:
      language === 'en'
        ? 'Chicken'
        : '鸡肉',

    lamb:
      language === 'en'
        ? 'Lamb'
        : '羊肉',

    seafood:
      language === 'en'
        ? 'Seafood'
        : '海鲜',

  }


  return (
    <article className="recipe-card">


      {/* Image */}

      <div className="recipe-image-wrapper">

        <img
          src={recipe.image}
          alt={
            language === 'en'
              ? recipe.name
              : recipe.nameZh
          } 
          className="recipe-image"
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = '/images/placeholder.svg'
          }}
        />


        <button
          className="favorite-button"
          aria-label={
            language === 'en'
              ? `Save ${recipe.name}`
              : `收藏${recipe.nameZh}`
          }
        >

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >

            <path
              d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"
            />

          </svg>

        </button>


        <span className="recipe-category-badge">

          {categoryText[recipe.category]}

        </span>

      </div>


      {/* Content */}

      <div className="recipe-card-content">


        <div className="recipe-title-row">

          <div>

            <h3>

              {language === 'en'
                ? recipe.name
                : recipe.nameZh}

            </h3>


            <span className="recipe-chinese-name">

              {language === 'en'
                ? recipe.nameZh
                : recipe.name}

            </span>

          </div>

        </div>


        <p className="recipe-description">

          {language === 'en'
            ? recipe.description
            : recipe.descriptionZh}

        </p>


        {/* Metadata */}

        <div className="recipe-meta">


          <span>

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >

              <circle
                cx="12"
                cy="12"
                r="9"
              />

              <path d="M12 7v5l3 2" />

            </svg>


            {recipe.time}

            {language === 'en'
              ? ' min'
              : ' 分钟'}

          </span>


          <span className="meta-dot">
            •
          </span>


          <span>
            {difficultyText[recipe.difficulty]}
          </span>


          {recipe.meatType && (
            <>

              <span className="meta-dot">
                •
              </span>

              <span className="meat-type">

                {meatTypeText[recipe.meatType]}

              </span>

            </>
          )}


        </div>

      </div>

    </article>
  )
}

export default RecipeCard