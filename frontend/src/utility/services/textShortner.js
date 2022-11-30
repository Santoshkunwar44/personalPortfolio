const textShortner = (text, words_count) => {
    if (!text) return
    let theTextArr = text?.split(' ')
    let shorternedTextArr = theTextArr.slice(0, words_count)
    let finalText = shorternedTextArr.map(text => text).join(" ")
    return finalText + "..."

}

export default textShortner