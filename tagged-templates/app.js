function taggedTemplate(strings, ...dynamicValues){
    // console.log(strings, dynamicValues)
    let newContent = ''
    strings.forEach((string, index) => {
        const strong = dynamicValues[index] ? `<strong>${dynamicValues[index]}</strong>` : '' // Ternario
        // console.log(dynamicValues[index])
        // console.log(string)
        // newContent += string + strong
        newContent += `${string} ${strong}`
    })
    // console.log(newContent)
    return `<p>${newContent}</p>`
}
const message = taggedTemplate`El ${'trabajo duro'} supera al ${'talento natural'}`
document.body.innerHTML = message