export const loadState = () => {
  
  try {
    const serializedState = localStorage.getItem('state')
    if(!serializedState)
      return undefined

    return JSON.parse(serializedState)
  } catch(error) {
    return undefined
  }
}

export const peristState = (state) => {
  if(!state)
    return 
  
    const jsonState = JSON.stringify(state)
    console.log(jsonState)
  localStorage.setItem('state',jsonState)

}