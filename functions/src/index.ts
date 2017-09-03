import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
admin.initializeApp(functions.config().firebase)

// Organize cloud functions based on logical roles
import * as email from './email'
import * as images from './images'

export const sendEmail = email.sendEmail
export const updateImage = images.updateImage
export const resizeImage = images.resizeImage
