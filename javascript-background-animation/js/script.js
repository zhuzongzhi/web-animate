const numbers = document.querySelector('.numbers'),
      numString = numbers.textContent,
      solitNum = numString.split('')


      numbers.textContent = ''

      for (let i = 0; i < solitNum.length; i++) {
        numbers.innerHTML += `<span>${solitNum[i]}</span>`
      }

      