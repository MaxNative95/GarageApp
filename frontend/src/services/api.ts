export const getList = async () => {
  const response = await fetch('http://localhost:3000/')
  return response.json()
}
