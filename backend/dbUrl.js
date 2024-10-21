import mongoose from 'mongoose'

const urlSchema = mongoose.Schema({
    name:String,
    url:String
})

export default mongoose.model('urls',urlSchema)