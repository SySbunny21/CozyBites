import { useState } from 'react'


/* ========================================
   Types
======================================== */

type Language = 'en' | 'zh'

type CookingMethodBookProps = {
  language: Language
}

type CookingMethod = {
  icon: string

  name: string
  nameZh: string

  description: string
  descriptionZh: string
}


/* ========================================
   Cooking Method Data
======================================== */

const pages: CookingMethod[][] = [

  /* Page 1 */

  [
    {
      icon: '🍳',

      name: 'Stir-Fry',
      nameZh: '炒',

      description: 'Quick & flavorful',
      descriptionZh: '快速又入味',
    },

    {
      icon: '🥘',

      name: 'Braised',
      nameZh: '红烧 / 炖',

      description: 'Slow & comforting',
      descriptionZh: '慢火烹煮，温暖入味',
    },

    {
      icon: '♨️',

      name: 'Steamed',
      nameZh: '蒸',

      description: 'Light & simple',
      descriptionZh: '清淡又简单',
    },

    {
      icon: '🔥',

      name: 'Grilled',
      nameZh: '烧烤',

      description: 'Smoky & savory',
      descriptionZh: '焦香浓郁',
    },

    {
      icon: '🍲',

      name: 'Soup',
      nameZh: '汤',

      description: 'Warm & cozy',
      descriptionZh: '暖胃又治愈',
    },

    {
      icon: '🧁',

      name: 'Baked',
      nameZh: '烘焙',

      description: 'Fresh from the oven',
      descriptionZh: '刚出炉的香气',
    },
  ],


  /* Page 2 */

  [
    {
      icon: '🍳',

      name: 'Pan-Fry',
      nameZh: '煎',

      description: 'Golden & crispy',
      descriptionZh: '金黄酥香',
    },

    {
      icon: '💧',

      name: 'Boiled',
      nameZh: '煮',

      description: 'Simple & classic',
      descriptionZh: '简单又经典',
    },

    {
      icon: '🔥',

      name: 'Roasted',
      nameZh: '烤',

      description: 'Deep & rich',
      descriptionZh: '香气浓郁',
    },

    {
      icon: '❄️',

      name: 'Cold Dish',
      nameZh: '凉菜',

      description: 'Fresh & refreshing',
      descriptionZh: '清爽开胃',
    },

    {
      icon: '🍟',

      name: 'Air Fryer',
      nameZh: '空气炸锅',

      description: 'Crispy & easy',
      descriptionZh: '简单又酥脆',
    },

    {
      icon: '🫕',

      name: 'Slow Cook',
      nameZh: '慢炖',

      description: 'Low & slow',
      descriptionZh: '低温慢煮，软烂入味',
    },
  ],
]


/* ========================================
   Component
======================================== */

function CookingMethodBook({
  language,
}: CookingMethodBookProps) {

  const [currentPage, setCurrentPage] = useState(0)

  const [animation, setAnimation] = useState('')


  /* ========================================
     Page Change
  ======================================== */

  const changePage = (
    newPage: number,
    direction: 'left' | 'right'
  ) => {

    setAnimation(
      direction === 'right'
        ? 'page-exit-left'
        : 'page-exit-right'
    )


    setTimeout(() => {

      setCurrentPage(newPage)

      setAnimation(
        direction === 'right'
          ? 'page-enter-right'
          : 'page-enter-left'
      )


      setTimeout(() => {
        setAnimation('')
      }, 250)

    }, 200)
  }


  const nextPage = () => {

    if (currentPage < pages.length - 1) {

      changePage(
        currentPage + 1,
        'right'
      )

    }
  }


  const previousPage = () => {

    if (currentPage > 0) {

      changePage(
        currentPage - 1,
        'left'
      )

    }
  }


  const currentMethods = pages[currentPage]


  return (
    <section className="cooking-method-section">


      {/* ==================================
          Heading
      ================================== */}

      <div className="cooking-method-heading">

        <span className="section-label">

          {language === 'en'
            ? 'COOK YOUR WAY'
            : '选择你的做法'}

        </span>


        <h2>

          {language === 'en'
            ? 'Explore by Cooking Method'
            : '按烹饪方式探索'}

        </h2>


        <p>

          {language === 'en'
            ? 'Pick a cooking style and discover something delicious.'
            : '选择一种喜欢的烹饪方式，发现今天的美味。'}

        </p>

      </div>


      {/* ==================================
          Recipe Book
      ================================== */}

      <div className="recipe-book">


        <div
          className={`book-content ${animation}`}
        >


          {/* Left Page */}

          <div className="book-page book-page-left">

            <span className="book-note">

              {language === 'en'
                ? 'Cozy methods ♡'
                : '温暖的料理方式 ♡'}

            </span>


            {currentMethods
              .slice(0, 3)
              .map((method) => (

                <button
                  className="method-item"
                  key={method.name}
                >

                  <span className="method-icon">
                    {method.icon}
                  </span>


                  <span className="method-text">

                    <strong>

                      {language === 'en'
                        ? method.name
                        : method.nameZh}

                    </strong>


                    <small>

                      {language === 'en'
                        ? method.description
                        : method.descriptionZh}

                    </small>

                  </span>


                  <span className="method-arrow">
                    →
                  </span>

                </button>

              ))}

          </div>


          {/* Right Page */}

          <div className="book-page book-page-right">

            <span className="book-note">

              {language === 'en'
                ? 'Made with love'
                : '用心做好每一道菜'}

            </span>


            {currentMethods
              .slice(3, 6)
              .map((method) => (

                <button
                  className="method-item"
                  key={method.name}
                >

                  <span className="method-icon">
                    {method.icon}
                  </span>


                  <span className="method-text">

                    <strong>

                      {language === 'en'
                        ? method.name
                        : method.nameZh}

                    </strong>


                    <small>

                      {language === 'en'
                        ? method.description
                        : method.descriptionZh}

                    </small>

                  </span>


                  <span className="method-arrow">
                    →
                  </span>

                </button>

              ))}

          </div>

        </div>


        {/* ==================================
            Binder Rings
        ================================== */}

        <div className="binder-rings">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

      </div>


      {/* ==================================
          Page Navigation
      ================================== */}

      <div className="book-navigation">


        <button
          className="page-button"
          onClick={previousPage}
          disabled={currentPage === 0}
          aria-label={
            language === 'en'
              ? 'Previous page'
              : '上一页'
          }
        >
          ←
        </button>


        <div className="page-indicator">


          {pages.map((_, index) => (

            <span
              key={index}
              className={
                index === currentPage
                  ? 'page-dot active'
                  : 'page-dot'
              }
            />

          ))}


          <span className="page-number">
            {currentPage + 1} / {pages.length}
          </span>


        </div>


        <button
          className="page-button"
          onClick={nextPage}
          disabled={
            currentPage === pages.length - 1
          }
          aria-label={
            language === 'en'
              ? 'Next page'
              : '下一页'
          }
        >
          →
        </button>


      </div>

    </section>
  )
}

export default CookingMethodBook