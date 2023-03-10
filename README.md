# TagSetNote
## data
	setting.json文件
	储存系统设置。
	library.json
	储存book信息。
	[book]...文件夹
	每本book单独对应一个文件夹，以数字id做文件名
		使用3个json文件储存id-单位名称、最后的界面配置、标签-id
		以id为文件名储存txt信息
		img文件（可选）
## node
	fileAct.js
	保存、读取操作
## web
	index.html
	初始界面，用于创建、打开book
	book.html
	主要界面，操作book的内容
### 数据读写逻辑
	idName.json
	{1:[00001.json,XXYY,1,tags:"XX;YY;ZZ"],2:[文件名,标题,标识类型,标签]...}
	tagId.json
	{"XX":{type:"1",ids:[1,2,3]}}
	falMenu.json
	{1:{title:"",item:[1,2,3],color:1},2:...}
	00001.json
	{text:""}
	...
	library.json
	{list:[{title:"book1",id:"123",img:"imgURL",author:"XX",create:"date",lastEdit:"date"},...]}