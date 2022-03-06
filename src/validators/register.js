const registerValidator = data => {
    let error = {}

    if (!data.name) {
        error.name = 'Name field is required!'
    }
    if (!data.email) {
        error.email = 'Email field is required!'
    }
    if (!data.password) {
        error.password = 'Password field is required!'
    }


    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}

module.exports = registerValidator