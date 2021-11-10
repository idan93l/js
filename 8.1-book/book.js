const book = {
  name: `Dune`,
  author: `Frank Herbert`,
  publishYear: `1965`,
  language: `English`
}

const bookInfo = book => {
  return `The book ${book.name} was written by ${book.author} in the year ${book.publishYear}`
}

console.log(bookInfo(book)); 