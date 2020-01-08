  // add span tags around each letter
  const makeSpans = selector => {
    const [...elements] = document.querySelectorAll(selector)
    return elements.map(element => {
      const text = element.innerText.split('')
      const spans = text
        .map(letter => '<span>' + letter + '</span>')
        .join('')
      return element.innerHTML = spans
    })
  }

  makeSpans('p, h1, h2')
