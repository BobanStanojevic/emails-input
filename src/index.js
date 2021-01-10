import './assets/styles/main.css'
import './components/form/index.css'
import './components/emails-input/index.css'
import EmailsInput from './components/emails-input/index'

const inputContainer = document.querySelector('.emails-input')
const emailsInput = new EmailsInput(inputContainer)

const randomEmails = [
  'joan@miro.com',
  'rene@magritte.com',
  'pablo@picasso.com',
  'salvador@dali.com',
  'sava@sumanovic.com',
]
const addEmailButton = document.querySelector('#add-email')
const getEmailsCountButton = document.querySelector('#count-emails')

addEmailButton.onclick = () => {
  const randomIndex = Math.floor(Math.random() * randomEmails.length)
  const randomEmail = randomEmails[randomIndex]
  emailsInput.insertEmail(randomEmail)
}

getEmailsCountButton.onclick = () => {
  const emails = emailsInput.getAllEmails()
  const validEmails = emails.filter(({ isValid }) => isValid)
  alert(`Valid emails: ${validEmails.length}`)
}
