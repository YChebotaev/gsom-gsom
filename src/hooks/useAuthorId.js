export const useAuthorId = () => {
  const authorId = window.localStorage.getItem('authorId')
  return [authorId]
}
