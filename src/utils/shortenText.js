 export const shortenText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text
    return `${text.slice(0, maxLength)}...`
  }