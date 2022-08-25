const moveName = document.querySelector('input').value
try{
    const response = await fetch(`  ${moveName}`)

    const data = await response.json()

    console.log(data)
    document.querySelector('h2').innerText = data.difficulty
}catch(error){
    console.log(error)
}
}