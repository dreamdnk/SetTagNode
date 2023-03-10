const fs = require('fs')
const path = require('path')
const { app } = require('electron')
const { resolve } = require('dns');
const { rejects } = require('assert');

const exePath = path.dirname(app.getPath('exe'));
const place = app.isPackaged;
let rootUrl,bookUrl = '';
//区分开发环境
if(place){
	rootUrl = exePath + "/TSNdata/";
}else{
	rootUrl = __dirname + "/../TSNdata/";
}
fs.stat(rootUrl,err=>{
	if(err){
		fs.mkdir(rootUrl,err=>{
			console.log(err);
			fs.writeFile(rootUrl+"setting.json","","utf-8",err=>{
				console.log(err);
			})
		});
	}else{
		console.log("have created");
	}
})

module.exports={
	write:function(name,str){
		fs.writeFile(rootUrl+name,str+"","utf-8",err=>{
			if(err){
				console.log(err);
			}else{
			}
		});
	},
	bookClick:function(id){
		//读取3个数据配置文件
		console.log(id);
		bookUrl = rootUrl+id+"/";
		return "a"+id;
	},
	load:async function(name){//读取文件
		return new Promise((resolve,rejects)=>{
			fs.readFile(rootUrl+name,"utf-8",(err,data)=>{
				if(err){
					rejects("load file failed");
				}else{
					resolve(data);
				}
			})
		})
	},
	save:function(file,str){//修改或创建文件
		
	}
}