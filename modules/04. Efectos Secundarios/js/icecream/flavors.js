let selectedFlavors = []

function selectFlavor() {
    if(!selectedFlavors.includes(this)){
        selectedFlavors.push(this)
        this.classList.toggle('is-active', true)
        if(selectedFlavors.length > 2){
            let deleted = selectedFlavors.shift()
            deleted.classList.toggle('is-active', false)
        }
    }
    else {
        selectedFlavors.splice(selectedFlavors.indexOf(this), 1)
        this.classList.toggle('is-active', false)
    }
}

export {
    selectFlavor
}