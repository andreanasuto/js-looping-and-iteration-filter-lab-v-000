// Code your solution in this file
function findMatching(array, name) {
  const new_array = []
  for (const element of array) {
    if (element == name || element == name.toLowerCase()) {
      new_array.push(element)
    }
  }
  return new_array
}

function fuzzyMatch(array, input) {
  const new_array = []
  for (const element of array) {
    if (element.substring(input.length) == input {
      new_array.push(element)
    }
  }
  debugger
  return new_array
}
