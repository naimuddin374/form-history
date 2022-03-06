const { Form } = require('../models')
const { actionSuccess, serverError, badRequest, validationError, createdSuccess, updatedSuccess } = require('../utils')
const formValidator = require('../validators/form')



// GET ALL DATA 
exports.getAll = async (req, res) => {
    try {
        const data = await Form.find().sort({ _id: -1 }).populate(['createdBy', 'updatedBy'])
        return actionSuccess(res, '', data)
    } catch (error) {
        return serverError(res, error)
    }
}



// GET DETAIL
exports.getDetail = async (req, res) => {
    try {
        const data = await Form.findById(req.params.id).populate(['createdBy', 'updatedBy'])
        return actionSuccess(res, '', data)
    } catch (error) {
        return serverError(res, error)
    }
}



// DATA STORE 
exports.store = async (req, res) => {
    try {
        const { name, location, lat, lon, description } = req.body


        // FORM VALIDATE
        const validate = formValidator(req.body)
        if (!validate.isValid) {
            return validationError(res, validate.error)
        }


        // MAKE SCHEMA
        const form = new Form({
            name,
            location,
            lat,
            lon,
            description,
            createdBy: req.user._id,
        })
        // STORE DATA 
        const result = await form.save()

        return createdSuccess(res, '', result)
    } catch (error) {
        return serverError(res, error)
    }
}



// DATA UPDATE
exports.update = async (req, res) => {
    try {
        const { name, location, lat, lon, description } = req.body


        // FORM VALIDATE
        const validate = formValidator(req.body)
        if (!validate.isValid) {
            return validationError(res, validate.error)
        }


        // ID VALIDITY
        const oldData = await Form.findById(req.params.id)
        if (!oldData) {
            return badRequest(res, null, 'Invalid ID!')
        }


        const formData = { name, location, lat, lon, description, updatedBy: req.user._id, }


        // UPDATE  
        await Form.findOneAndUpdate({ _id: oldData._id }, { $set: formData }, { new: true, useFindAndModify: false })

        return updatedSuccess(res, null, 'Form has been updated successfully!!!')
    } catch (error) {
        return serverError(res, error)
    }
}
