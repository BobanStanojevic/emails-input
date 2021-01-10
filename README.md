# Emails Input

Download the project either via git or download button, run `yarn` and `yarn dev:start` or `npm install` and `npm run dev:start`;

## Tech stack

- Vanilla JS
- Webpack
- Babel
- Jest
- ESLint and prettier

## Architecture and folder structure

I've splitted the scripts according to their use:

- components: are visual logical part of the application 
- assets: are used for different type of static resources(images, fonts, styles)
- root index.js is used for the presentation purpose as a demo script
- I've splitted the webpack builds to dev and production

## Installation

Default production build provides a link plug and use type of plgin/component where you are not dependent of webpack to use it, as such it also gives you the plugin/component as a global `EmailsInput`.

```html
<head>
  <script src="./app.bundle.js"></script>
</head>

<script>
 const inputContainer = document.querySelector('.emails-input') // your container where you want email-inputs component to be instanciated
 const emailsInput = new EmailsInput(inputContainer)
</script>
```

## Configuration/ Available API

```js
// Placeholder container where the component will be rendered
const inputContainer = document.querySelector(
  '.emails-input'
)

// Initialization
const emailsInput = new EmailsInput(inputContainer)

/** getAllEmails
 * Returns: Array of Objects:
 *   [{
 *     address: String,
 *     element: HTML Element,
 *     isValid: Boolean
 *   }]
 * Params: none
 */
emailsInput.getAllEmails()

/** subscribeToChanges
 * Returns: Void
 * Params: Callback Function:
 *   () => console.log('My callback')
 */
emailsinput.subscribeToChanges(() => console.log('my fancy function'))

/** insertEmailBlock
 * Returns: Void
 * Params: Email String:
 *   'mufasa@lion.com'
 */
insertEmail: this.insertEmailBlock('mufasa@lion.com')
```
