const { Schema, model } = require('mongoose');

const MessageSchema = new Schema({
    of:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    to:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message:{
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

exports.Message = model('Message', MessageSchema);