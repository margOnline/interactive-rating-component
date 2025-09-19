const form = document.querySelector('form')
form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const ratingInput = form.elements['rating']
  const rating = ratingInput ? ratingInput.value : null
  if (!rating) {
    alert('Please select a rating')
    return
  }

  const thankYouCard = document.querySelector('section')
  thankYouCard.querySelector('h1 span').textContent = rating
  thankYouCard.className = 'thank-you-card'
  document.querySelector('.rating-card').className = 'hidden'
}
