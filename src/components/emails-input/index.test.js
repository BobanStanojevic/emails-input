/**
 * @jest-environment jsdom
 */

import EmailsInput from './index'

function createEventMock(params) {
  return { preventDefault() {}, stopPropagation() {}, ...params }
}

describe('EmailsInput', () => {
  describe('when instantiated', () => {
    it('inserts component HTML', () => {
      const container = document.createElement('div')

      new EmailsInput(container)

      const html = container.querySelector('.emails-input__textarea')
      expect(html).toStrictEqual(expect.anything())
    })

    it('returns the correct interface', () => {
      const container = document.createElement('div')

      const emailsInput = new EmailsInput(container)

      expect(emailsInput).toEqual(
        expect.objectContaining({
          getAllEmails: expect.any(Function),
          subscribeToChanges: expect.any(Function),
        })
      )
    })
  })

  describe('onKeydown', () => {
    describe('when it is a comma', () => {
      it('inserts a new email', () => {
        const container = document.createElement('div')
        new EmailsInput(container)
        const input = container.querySelector('.emails-input__input')

        input.onkeydown(
          createEventMock({ key: ',', target: { value: 'rene@magritte.com' } })
        )

        const emailBlockValue = container.querySelector(
          '.emails-input__pill-text'
        ).textContent
        expect(emailBlockValue).toContain('rene@magritte.com')
      })
    })

    describe('when it is an enter', () => {
      it('inserts a new email', () => {
        const container = document.createElement('div')
        new EmailsInput(container)
        const input = container.querySelector('.emails-input__input')

        input.onkeydown(
          createEventMock({
            key: 'Enter',
            target: { value: 'rene@magritte.com' },
          })
        )

        const emailBlockValue = container.querySelector(
          '.emails-input__pill-text'
        ).textContent
        expect(emailBlockValue).toContain('rene@magritte.com')
      })
    })
  })

  describe('onDelete', () => {
    it('deletes the clicked email', () => {
      const container = document.createElement('div')
      new EmailsInput(container)
      const input = container.querySelector('.emails-input__input')
      input.onkeydown(
        createEventMock({ key: ',', target: { value: 'mufasa@lion.com' } })
      )

      const emailBlock = container.querySelector('.emails-input__email-pill')
      const button = emailBlock.querySelector('.emails-input__delete-button')
      button.onclick(createEventMock({ target: button }))

      const deletedEmailBlock = container.querySelector(
        '.emails-input__email-pill'
      )
      expect(deletedEmailBlock).toBeNull()
    })
  })

  describe('onPaste', () => {
    it('inserts a new email', () => {
      const container = document.createElement('div')
      new EmailsInput(container)

      container.querySelector('.emails-input__input').onpaste(
        createEventMock({
          clipboardData: {
            getData() {
              return 'rene@magritte.com, joan@miro.com'
            },
          },
        })
      )

      const [
        firstEmailBlockText,
        secondEmailBlockText,
      ] = container.querySelectorAll('.emails-input__pill-text')
      const firstEmailBlockTextValue = firstEmailBlockText.textContent
      const secondEmailBlockTextValue = secondEmailBlockText.textContent
      expect(firstEmailBlockTextValue).toBe('rene@magritte.com')
      expect(secondEmailBlockTextValue).toBe('joan@miro.com')
    })
  })

  describe('on getAllEmails', () => {
    it('returns an array with all email', () => {
      const container = document.createElement('div')
      const emailsInput = new EmailsInput(container)
      const input = container.querySelector('.emails-input__input')
      input.onkeydown(
        createEventMock({ key: ',', target: { value: 'rene@magritte.com' } })
      )

      const emails = emailsInput.getAllEmails()

      const emailBlock = container.querySelector('.emails-input__email-pill')
      expect(emails).toContainEqual({
        address: 'rene@magritte.com',
        element: emailBlock,
        isValid: true,
      })
    })
  })
})
