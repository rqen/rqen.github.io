// recursively counts a pageModule-structure
// returns the amount of entries passing test()

// ex: countModules(pageModules, (module) => module.item.type === 'media')

export const countModules = function (inputArr, test) {
  if (!inputArr?.length) return 0

  let count = 0

  const search = (arr, test) => {
    arr.forEach(item => {
      if (test(item)) {
        count += 1
      }

      if (Array.isArray(item.children)) {
        search(item.children, test)
      }
    })
  }

  search(inputArr, test)

  return count
}
