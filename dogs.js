import { dogs } from "./data.js"

class dog {
    constructor(data) {
        Object.assign(this, data)
    }

    setDogHTML() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this
        return `
        <img class="avatar" src="${avatar}" alt="dog">
                    <div class="info">
                        <h2>${name}, ${age}</h2>
                        <p>${bio}</p>
                    </div>
        `

    }
}

export { dog }