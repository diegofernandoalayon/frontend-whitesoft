const baseUrl = 'https://secure-temple-74134.herokuapp.com/api/users'
// const baseUrl = 'http://localhost:2000/api/users'

const post = (data) =>{
  console.log(data)
  return fetch(baseUrl,{
    method:'POST',
    mode: 'cors',
    headers: {
      "Content-Type": "application/json",
      
    },
    body:JSON.stringify(data)
  })
}
export default  { post}