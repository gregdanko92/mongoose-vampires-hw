const mongoose = require('mongoose')
const connectionString = 'mongodb://localhost:27017/vampiredb'
const Vampire = require('./models/Vampire.js')

mongoose.connect(connectionString, {
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
})

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
  });

/////////////////////////////////////////////////
//Write your answers to add, query, update, remove, and Hungry for More below.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// INSERT USING MONGOOSE
// ### Add the vampire data that we gave you

// const vampireData = require('./populateVampires.js')

// Vampire.create(vampireData, (err, createdVampires)=>{
//     if (err) return console.log(err)
//     console.log('created Vampires')
// })

// Vampire.find({}, (err, allVampires) => {
// 	console.log(allVampires);
// });




// ### Add some new vampire data

const vamps = [
{
    name: 'Lenin',
    dob: Date(1870, 04, 22),
    hair_color: 'black as the night',
    eye_color: 'red as russia',
    gender: 'male'
},
{
    name: 'Lenin',
    dob: Date(1878, 12, 18),
    hair_color: 'bald',
    eye_color: 'black',
    gender: 'male'
},
{
    name: 'Sylvia Plath',
    dob: Date(1937, 10, 22),
    hair_color: 'brown',
    eye_color: 'blue',
    gender: 'female'
},{
    name: 'Jane',
    dob: Date(1972, 01, 2),
    hair_color: 'red',
    eye_color: 'blue',
    gender: 'female'
}]


// Vampire.create(vamps, (err, createdVamps)=>{
//     console.log(createdVamps)
// })


/////////////////////////////////////////////////
// ## QUERYING
/////////////////////////////////////////////////
// ### Select by comparison
// Vampire.find({gender:'female'}, (err, output)=>{
//      console.log(output)
// })
// Vampire.find({victims: { $gte:500}}, (err, output)=>{
//     console.log(output)
// })

// Vampire.find({victims: {$ne:210234}}, (err, output)=>{
//     console.log(output)
// })

// Vampire.find({victims: {$ne:210234}}, (err, output)=>{
//     console.log(output)
// })
// Vampire.find({victims: { $gt : 150 , $lt : 500 }}, (err, output)=>{
//     console.log(output)
// })

// Vampire.find({title:{$exists:true}}, (err, output)=>{
//     console.log(output)
// })
 
// Vampire.find(  { victims: {$exists: false}, title: {$exists: true}} , (err, output)=>{
//     console.log(output)
// })
// Vampire.find(  { victims: {$exists: true}, victims: {$gt: 1000}} , (err, output)=>{
//     console.log(output)
// })

// Vampire.find( { $or: [ { location: 'New York, New York, US' }, { location: 'New Orleans, Louisiana, US' } ] }, (err, output) => {
//     if(err) return console.log(err)
//     console.log(output)
//   })
// Vampire.find( { $or: [ { loves: 'brooding' }, { location: 'being tragic' } ] }, (err, output) => {
//     if(err) return console.log(err)
//     console.log(output)
//   })
// Vampire.find( { $or: [ { loves: 'marshmellows' }, { victims:  {$gte:1000}  } ] }, (err, output) => {
//     if(err) return console.log(err)
//     console.log(output)
//   })
// Vampire.find( { $or: [ { hair_color: 'red' }, { eye_color: 'green'} ] }, (err, output) => {
//     if(err) return console.log(err)
//     console.log(output)
//   })
// Vampire.find( { $or: [ { loves: 'frilly shirtsleeves' }, { loves: 'frilly collatrs'} ] }, (err, output) => {
//     if(err) return console.log(err)
//     console.log(output)
//   })
// Vampire.find( { loves: 'brooding' }, (err, output) => {
//     if(err) return console.log(err)
//     console.log(output)
//   })

// Vampire.find( { $or: [ { loves: 'appearing innocent' }, { loves: 'trickery'}, { loves: 'lurking in rotting mansions'}, { loves: 'R&B music'} ] }, (err, output) => {
//     if(err) return console.log(err)
//     console.log(output)
//   })

// Vampire.find( { $or: [ { loves: 'frilly shirtsleeves' }, { loves: 'frilly collars'} ] }, (err, output) => {
//     if(err) return console.log(err)
//     console.log(output)
//   })


// Vampire.find( { $nin: [ "virgin blood", "top hats" ] }, { $loves: 'fancy cloaks' }, (err, output)=>{
//     if (err) return console.log(err)
//     console.log(output)
// } )



// Vampire.find(  { loves: 'ribbons' , $not: {eye_color:'brown'} }, (err, output)=>{
//     console.log(output)
// })

// Vampire.find(  { location: {$not: 'rome' }}, (err, output)=>{
//     console.log(output)
// })
// Vampire.find(  { location: {$not: 'rome' }}, (err, output)=>{
//     console.log(output)
// })

// Vampire.find(  { love: {$not: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding'] }}, (err, output)=>{
//     console.log(output)
// })
