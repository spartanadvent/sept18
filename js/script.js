var li_list = document.getElementsByTagName('li');

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

        li_list[i].addEventListener('mouseenter',function(){
            
        });
    }
};


var fu_click= function(target){
    
};

var fu_hover = function(target){
    target.classList.add('hover');
};

var fu_mouse_leave = function(target){
    target.classList.remove('hover');
};

loop_all();