const fs = require('fs')


module.exports={
	write:function(event,str){
		console.log(event,str)
	fs.writeFile(__dirname+"/"+"1.txt",str+"","utf-8",function(err,data){
		if(err){
			console.log(err);
		}else{
			console.log(data);
		}
	});
},
}