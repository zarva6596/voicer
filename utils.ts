export const random = (): String =>
  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

export const stopStringLength = (l, e) => {
  const str = e.target.value
  const toSpace = str?.split('').reverse().join('').indexOf(' ')
  if (toSpace === -1 && str?.length >= l || toSpace >= l) e.preventDefault()
}

export const removeEnter = e => {
  if (e.keyCode === 13) e.preventDefault()
  stopStringLength(25, e)
}
