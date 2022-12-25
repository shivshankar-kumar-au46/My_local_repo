const mongoose = require("mongoose");

//Connection creation and creat in new db.
mongoose
  .connect("mongodb://127.0.0.1:27017/shivChannel")
  .then(() => console.log("connection successful running..."))
  .catch((err) => console.log(err));

//Schema
//A mongoose Schema defines the structure of the documents, and it also help to get the default values, validators etc.

const playListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: Number,
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  data: {
    type: Date,
    default: Date.now,
  },
});

//Collection creation

const Playlist = new mongoose.model("Playlist", playListSchema);

//create document or insert
const createDocument = async () => {
  try {
    const jsPlaylist = new Playlist({
      name: "javaScript",
      ctype: "Back End",
      videos: 50,
      author: "Shiva Verma",
      active: true,
    });
    const mongoDBPlaylist = new Playlist({
      name: "MongoDB",
      ctype: "Database",
      videos: 33,
      author: "Shiva Verma",
      active: true,
    });
    const mongoosePlaylist = new Playlist({
      name: "Mongoose",
      ctype: "Database",
      videos: 22,
      author: "Shiva Verma",
      active: true,
    });
    const reactjsPlaylist = new Playlist({
      name: "ReactJs",
      ctype: "Front End",
      videos: 44,
      author: "Shiva Verma",
      active: true,
    });

    const result = await Playlist.insertMany([
      jsPlaylist,
      mongoDBPlaylist,
      mongoosePlaylist,
      reactjsPlaylist,
    ]);
    // console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// createDocument();


const getDocument = async ()=>{
    const result = await Playlist
    .find({$not : [{name:"javaScript"},{author:"Shiv Verma"}]})
    .select({name:1})
    // .limit(1)
    console.log(result);
}


// getDocument()


const updateDocument = async () =>{
    result = await Playlist
    
}




updateDocument();
