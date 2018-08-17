export default (item, filters) => {
  if (filters.date.from && filters.date.to && item.date) {
    const itemDate = new Date(item.date)
    if (itemDate < filters.date.from || itemDate > filters.date.to) {
      return false
    }
  }

  if (filters.select.length !== 0) {
    if (
      !filters.select.reduce(
        (sum, element) => element.label === item.title || sum,
        false
      )
    ) {
      return false
    }
  }

  return true
}
