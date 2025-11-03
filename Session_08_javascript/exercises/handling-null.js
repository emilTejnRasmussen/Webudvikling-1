const users = [
    { id: 1, name: "Troels" },
    { id: 2, name: "Michael" },
    { id: 3, name: "Richard" }
]

function getUserById(id) {
    for (let user of users) {
        if (user.id === id) {
            return user
        }
    }
    return null
}

function sendMessageToUser(userId, message) {
    const user = getUserById(userId)

    // Your Code here
    if(user == null) {
        console.log("No user with id: " + userId)
        return
    }
    console.log("Sending message to "  + user.name + ": " + message)
}

sendMessageToUser(2, "Hello!")
sendMessageToUser(5, "Are you there?")