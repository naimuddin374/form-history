const formValidator = data => {
    let error = {}

    if (!data.name) {
        error.name = 'The name field is required!'
    }
    if (!data.location) {
        error.location = 'The location field is required!'
    }
    if (!data.description) {
        error.description = 'The description field is required!'
    }
    if (!data.lat) {
        error.lat = 'The lat field is required!'
    }
    if (!data.lon) {
        error.lon = 'The lon field is required!'
    }
    return {
        error,
        isValid: Object.keys(error).length === 0
    }
}
module.exports = formValidator