const text = 'hello world nicola solazzo'

function capitalize(txt) {
    // ['hello', 'world', 'nicola', 'solazzo']
    let splitText = txt.split(' ')
    const named = splitText.map(elem => {
        let name = elem.split('') // ex: ['h','e','l','l','o']
        let start = 0
        let newNameArray = []
        while (start < name.length) {
            if(start == 0) {
                newNameArray.push(name[start].toUpperCase())
            } else {
                newNameArray.push(name[start])
            }
            start++
        }
        return newNameArray.join('')
    })
    return named.join(' ')
}

capitalize(text) // 'Hello World Nicola Solazzo'

var t = ['54', '5', '12', '23', '34']

parseInt(t.sort((a,b) => {return parseInt(a + b) - parseInt(b + a)}).reverse().join('')) // 554342312 numero piu grande possibile
