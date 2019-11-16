const path = require('path')
const { Storage } = require('@google-cloud/storage')
/**
 * Google Cloud Storage Bucket object
 */
const gc = new Storage({
    keyFilename: path.join(__dirname, '../keys/gcloud.json'),
    projectId: 'unpossible',
})
const bucket = gc.bucket('unpossible_bucket')

/**
 * Source Code: https://github.com/GoogleCloudPlatform/nodejs-getting-started/tree/8bb3d70596cb0c1851cd587d393faa76bfad8f80/3-binary-data
 */

// Returns the public, anonymously accessable URL to a given Cloud Storage
// object.
// The object's ACL has to be set to public read.
// [START public_url]
function getPublicUrl(filename) {
    return `https://storage.googleapis.com/unpossible_bucket/${filename}`
}

// Express middleware that will automatically pass uploads to Cloud Storage.
// req.file is processed and will have two new properties:
// * ``cloudStorageObject`` the object name in cloud storage.
// * ``cloudStoragePublicUrl`` the public url to the object.
// [START process]
function sendUploadToGCS(req, fileName) {
    if (!fileName) return

    const file = bucket.file(fileName)

    const stream = file.createWriteStream({
        metadata: {
            contentType: req.file.mimetype,
        },
        resumable: false,
    })

    stream.on('error', err => {
        throw new Error(err)
    })

    stream.on('finish', () => {
        req.file.cloudStorageObject = fileName
        file.makePublic().then(() => {
            // public_url = getPublicUrl(fileName)
            console.log('File uploaded successfully')
        })
    })
    stream.end(req.file.buffer)
}

// Multer handles parsing multipart/form-data requests.
// This instance is configured to store images in memory.
// This makes it straightforward to upload to Cloud Storage.
// [START multer]
const Multer = require('multer')
let limit = process.env.GCLOUD_STORAGE_UPLOAD_LIMIT || 5

const multer = Multer({
    storage: Multer.MemoryStorage,
    limits: {
        fileSize: limit * 1024 * 1024, // no larger than 5mb
    },
})
// [END multer]
module.exports = { bucket, getPublicUrl, sendUploadToGCS, multer }
