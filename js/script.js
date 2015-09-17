var li_list = document.getElementsByTagName('li');
var games = document.getElementsByClassName('game_list_item');
var game_unordered_list = document.getElementsByTagName('ul')[0];


var loop_all = function(){
    for (var i= 0; i < li_list.length; i++){

        li_list[i].addEventListener('click',function(){
            fu_click(this);

        });

        li_list[i].addEventListener('mouseover',function(){
            fu_hover(this);
        });

        li_list[i].addEventListener('mouseleave',function(){
            fu_mouse_leave(this);
        });

    }
};


var fu_click= function(target){
    
};

var fu_hover = function(target){
    target.classList.add('hover');
    make_minus(target);
    fu_open_form(target);
};

var fu_mouse_leave = function(target){
    target.classList.remove('hover');
    remove_minus(target);
    fu_closed_form(target);
};

loop_all();

function add_game(name_value){
   var new_game = name_value.toUpperCase();
   
   new_game = name_game.replace(/^\s+/, '').replace(/\s+$/, '');
   
   if (new_game===''|| new_game===null){
   	return ;
   }
   for (var i = 0; i < games.length; i++){
   		
   		if(new_game === games[i].innerText){
   			alert("you already have this game");
   			return;
   		}
   }
   
   var new_li = document.createElement('li');
   new_li.innerText = name_value; 
	game_unordered_list.appendChild(new_li);
	new_li.innerText = name_value.toUpperCase(); 
	new_li.classList.toggle("game_list_item");
}

document.getElementById('add_submit_button').addEventListener('click',function(){
    var name_value = document.getElementById("name_input_box").value;
    add_game(name_value);
    li_list[1].classList.toggle("closed");
    li_list[1].classList.toggle("open");
    document.getElementById("name_input_box").value='';
});

document.getElementById("name_input_box").addEventListener('keydown', function keydown(){    
       if(event.keyCode == 13) {
           document.getElementById('add_submit_button').click();       
   };
});

function make_minus(target){
    if (target.classList.contains('title') || target.classList.contains('form')){
        return;
    }
    if (target.children.length < 1){
        var new_minus = document.createElement('div');
        target.appendChild(new_minus);
        new_minus.innerText = "-";
        new_minus.classList.add("minus");
    }
    
}

function remove_minus(target){
    if(target.children.length == 1){
        target.removeChild(target.children[0]);
    }
}

function fu_open_form(target){
    if (target.classList.contains('title')){
        li_list[1].classList.add('open');
        li_list[1].classList.remove('closed');
    }
}

function fu_closed_form(target){
    if (target.classList.contains('form')){
        li_list[1].classList.remove('open');
        li_list[1].classList.add('closed');
    }
}