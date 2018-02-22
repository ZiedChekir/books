const Book = require('./Book.model');



module.exports = {
	query:  async function(){
		try{
			let books = await  Book.find({})	

			return books
		}catch(err){
			return null
		}
		
		
	},
	queryid: async function(id){
		
		try{
			let newuser = await Book.findOne({_id:id})	
			return newuser
		}catch(err){
			return null
		}
		
	
}
}




// module.exports = function ameli(){
// 	this.query=  async function(req,res,next){
// 		var books = await Book.find({})
// 		res.json(books)
// 	}
// }