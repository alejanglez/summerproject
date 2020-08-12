document.addEventListener(
  'DOMContentLoaded',
  () => {
    console.log('IronGenerator JS imported successfully!')
  },
  false
)

function like(e) {
  const button = e.currentTarget

  // const user = session.currentUser

  axios
    .post(`http://localhost:3000/${button.id}/like`)
    .then((res) => {
      const add = res.data.like
      button.querySelector('.likes-count').innerText =
        Number(button.querySelector('.likes-count').innerText) + add
    })
    .catch(console.error)
}
