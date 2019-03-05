var

var game = {
	preload:function ()
	{
		game.load.image('snake','./assets/images/snake.png');
		game.load.image('apple','./assets/images/apple.png');
	},
	
	create: function ()
	{
		
		
	snake =[]
	apple ={}
	squaresize =15;
	
	score = 0;
	speed = 0;
	updatedelay = 0;
	direction = 'right';
	new_direction = null;
	addnew = false;
	cursors = game.input.keyboard.createCursorKeys();
	game.backgroundColor ='#061f27';
	
	
	
	for (var i =0; i < 10 i++)
	{
		snake[i]=game.add.sprite(150+i * squaresize, 150, 'snake');
	}
	
	this.generateApple();
	
	texststyle_Key = { font: "bold 14px sans-serif",fill: "#46c0f9",align: "center" };
	texststyle_Key = { font: "bold 18px sans-serif",fill: "#fff",align: "center" };
	game.add.text(30,20,"SCORE", textstyle_key);
	scoreTextValue = game.add.text(90,18, score.tosring(),texstyle_Value);
	
	game.add.text(500,20, "SPEED",texstyle_key);
	speedTextValue = game.add.text(558,18,speed.tostring(),textstyle_Value);
	},
	
		
	
	
	