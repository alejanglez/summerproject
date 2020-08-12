document.addEventListener(
  'DOMContentLoaded',
  () => {
    console.log('IronGenerator JS imported successfully!')
  },
  false
)

function like(e) {
  const button = e.currentTarget
  const likes = `/${button.id}/like`

  // const user = session.currentUser

  axios
    .post(likes)
    .then((res) => {
      const add = res.data.like
      button.querySelector('.likes-count').innerText =
        Number(button.querySelector('.likes-count').innerText) + add
    })
    .catch(console.error)
}
