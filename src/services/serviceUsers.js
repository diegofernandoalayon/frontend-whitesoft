// const post = async () => {
//   const response = await fetch('http://localhost:2000/api/users',{

//   })
// }
const post = (data) =>{
  console.log(data)
  return fetch('http://localhost:2000/api/users',{
    method:'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify(data)
  })
}
export default  { post}