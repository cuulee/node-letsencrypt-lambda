const getS3 = require('../sdk/getS3')

const readFile = (bucket, siteId, fileName) =>
  getS3().getObject({
    Bucket: bucket,
    Key: `${siteId}/${fileName}`
  }).promise()
  .catch((e) => {
    console.error(`Couldn't read s3://${bucket}/${siteId}/${fileName}`, e)
    throw e
  })

module.exports = readFile
