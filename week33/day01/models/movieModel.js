const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    year:{
       type: Number,
    },
    runtime:{
        type:Number,
    },
    releasedDate:{
        type:Date
    },
    poster:{
        type:String,
    },
    Plot:{
        type:String,
    },
    fullplot:{
        type:String,
    },
    lastupdated:{
        type:Date,
    },
    directors:{
        type:[String]
    },
    imdb:{
        rating:{
            type:Number,
            min:0,
            max:10,
        }
    },
    votes:{
        type:Number,
    },
    id:{
        type:Number,
    },
    cast:{
        type:String,
    },
    countries:{
        type:String,
    },
    genres:{
        type:[String]
    }
})

const MovieModel = mongoose.model('movie',movieSchema)

module.exports = MovieModel;