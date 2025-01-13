function newFreeText_Timeout(free_text, time_mss){
    setTimeout(() => {
        console.log(`${free_text}`)
    }, time_mss);
    return ('Wait for result:')
}

console.log(newFreeText_Timeout('Operation was done', 5000))