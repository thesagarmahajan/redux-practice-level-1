export const increment = () => {
    return {
      type:"increment"
    }
  }
export const decrement = () => {
    return {
      type:"decrement"
    }
  }

export const reset = () => {
  return {
    type:"reset"
  }
}

export const add = (dataToAdd) => {
  return {
    type:"add",
    payload:dataToAdd
  }
}