type CategoryCardProps = {
  icon: string
  title: string
  description: string
}

function CategoryCard({
  icon,
  title,
  description,
}: CategoryCardProps) {
  return (
    <button className="category-card">
      <div className="category-icon">
        {icon}
      </div>

      <div className="category-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <span className="category-arrow">
        →
      </span>
    </button>
  )
}

export default CategoryCard