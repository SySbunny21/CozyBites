export function getRandomRecipes<T>(
  items: T[],
  count: number,
  exclude: T[] = []
): T[] {
  const available = items.filter(
    (item) => !exclude.includes(item)
  )

  const pool =
    available.length >= count ? available : items

  const shuffled = [...pool]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))

    ;[shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ]
  }

  return shuffled.slice(0, count)
}
