$(document).ready(function(){
	
	var attachFastClick = Origami.fastclick;
	attachFastClick(document.body);
	
	var appModule = "HOME";
    var appPopup = "";
    
    var join = document.getElementById('join');
    var feed = document.getElementById('feed');
    var notif = document.getElementById('notif');
    var more = document.getElementById('more');
    var profile = document.getElementById('profile');
    var search = document.getElementById('search');
    var chat = document.getElementById("chat");
    var userlist = document.getElementById("userlist");
    var chatview = document.getElementById("chatview");
    var nav_down = document.getElementById("nav_down");
    var nav_up_logo = document.getElementById("nav_up_logo");
    var btn_more = document.getElementById('btn_more');
    var btn_chat = document.getElementById('btn_chat');
    var ul_caption = document.getElementById("ul_caption");
    var txt_search = document.getElementById('txt_search');
	
	$(document).on('tap', '#logo', function(){
		join.style.display = "none";
	});
    
    $(document).on('tap', '#btn_search', function(){
		search.style.display = "block";
        appPopup = "SEARCH";
	});
    
    $(document).on('tap', '#s_close', function(){
		CloseSearch();
	});
    
    $(document).on('tap', '#btn_feed', function(){
		changeAppModule('FEED', this);
	});
    
    $(document).on('tap', '#btn_profile', function(){
		changeAppModule('PROFILE', this);
	});
    
    $(document).on('tap', '#btn_notif', function(){
		changeAppModule('NOTIF', this);
	});
    
    $(document).on('tap', '#btn_more', function(){
		changeAppModule('MORE', this);
	});
    
    $(document).on('tap', '#btn_chat', function(){
        chat.style.visibility = "visible";
        appPopup = "CHAT";
	});
    
    $(document).on('tap', '#c_close', function(){
        CloseChat();
	});
    
    $(document).on('tap', '#ul_close', function(){
        CloseUserList();
	});
    
    $(document).on('tap', '#followers', function(){
		userlist.style.visibility = "visible";
        ul_caption.className = "";
        ul_caption.innerHTML = "Seguidores";
        appPopup = "USERLIST";
	});
    
    $(document).on('tap', '#followed', function(){
		userlist.style.visibility = "visible";
        ul_caption.className = "";
        ul_caption.innerHTML = "Siguiendo";
        appPopup = "USERLIST";
	});
    
    $(document).on('tap', '#btn_like', function(){
		if($(this).css('color') == 'rgb(33, 33, 33)') $(this).css('color', '#EE2A1B');
        else $(this).css('color', '#212121');
	});
    
    $(document).on('tap', '.btn_p_like', function(ev){
        ev.stopPropagation();
		if($(this).css('color') == 'rgb(255, 255, 255)') 
        {
            $(this).css('color', '#EE2A1B');
            $(this).removeClass('icon-heart-empty');
            $(this).addClass('icon-heart');
        }
        else 
        {
            $(this).css('color', 'white');
            $(this).removeClass('icon-heart');
            $(this).addClass('icon-heart-empty');
        }
	});
    
    $(document).on('tap', '.feed_like', function(){
		if($(this).css('color') == 'rgb(33, 33, 33)') 
        {
            $(this).css('color', '#EE2A1B');
            $(this).html('18,232');
            $(this).removeClass('icon-heart-empty');
            $(this).addClass('icon-heart');
        }
        else 
        {
            $(this).css('color', '#212121');
            $(this).html('18,231');
            $(this).removeClass('icon-heart');
            $(this).addClass('icon-heart-empty');
        }
	});
    
    $(".friend").each(function(){		
		$(this).click(function(){																						
			//$("#profile_chat .friendname").html($(this).find(".friendtext .friendname").html());		
			//$(".message").not(".right").find("img").attr("src", $(this).find('img').eq(0).attr("src"));									
            chatview.style.visibility = "visible";
			$('#cc_close').unbind("click").click(function(){
				chatview.style.visibility = "hidden";
			});
		});
	});
    
    function CloseChat(){
        chat.style.visibility = "hidden";
        appPopup = "";
    }
    
    function CloseUserList(){
        userlist.style.visibility = "hidden";
        appPopup = "";   
    }
    
    function changeAppModule(module, e){
        $("html, body").animate({ scrollTop: 0 }, "slow");
		switch(module)
		{
			case 'FEED':
			{
				feed.style.opacity = 1;
                profile.style.opacity = 0;
                notif.style.opacity =0;
                more.style.opacity =0;
				Nav_Click(e);
				break;
			}
            case 'PROFILE':
			{
				feed.style.opacity = 0;
                profile.style.opacity = 1;
                notif.style.opacity =0;
                more.style.opacity =0;
				Nav_Click(e);
				break;	
			}
            case 'NOTIF':
			{
				feed.style.opacity = 0;
                profile.style.opacity = 0;
                notif.style.opacity =1;
                more.style.opacity =0;
				Nav_Click(e);
				break;	
			}
            case 'MORE':
			{
				feed.style.opacity = 0;
                profile.style.opacity = 0;
                notif.style.opacity =0;
                more.style.opacity =1;
				Nav_Click(e);
				break;	
			}
		}
		appModule = module;
	}
    
    $(document).on('tap', '.btn_follow', function(){
        $(this).removeClass('icon-user-add-1 btn_follow');
        $(this).addClass('icon-group btn_unfollow');
	});
    
    $(document).on('tap', '.btn_unfollow', function(){
        $(this).removeClass('icon-group btn_unfollow');
        $(this).addClass('icon-user-add-1 btn_follow');
	});
    
    function CloseSearch(){
        txt_search.value = "";
		search.style.display = "none";
        appPopup = "";   
    }
    
    function Nav_Click(e){
		clearPressedButtons();
		$(e).css({
			'color' : '#E94E1B'
		});
	}
	
	function clearPressedButtons(){
		/*$('.btn_navup').css({
			'color' : '#212121'
		});*/
		$('.btn_navdown').css({
			'border' : 'none',
			'background-color' : 'white',
			'color' : 'lightgray'
		});
	}
});

function LoadApp(){
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady(){
	document.addEventListener("backbutton", onPressBackButton, true);
}

function onPressBackButton(){
	navigator.app.exitApp();
}

$.event.special.tap = {
	// Abort tap if touch moves further than 10 pixels in any direction
	distanceThreshold: 10,
	// Abort tap if touch lasts longer than half a second
	timeThreshold: 500,
	setup: function() {
		var self = this,
		$self = $(self);
		
		// Bind touch start
		$self.on('touchstart', function(startEvent) {
			// Save the target element of the start event
			var target = startEvent.target,
				touchStart = startEvent.originalEvent.touches[0],
				startX = touchStart.pageX,
				startY = touchStart.pageY,
				threshold = $.event.special.tap.distanceThreshold,
				timeout
			;
		
	function removeTapHandler() {
		clearTimeout(timeout);
		$self.off('touchmove', moveHandler).off('touchend', tapHandler);
	};
	
	function tapHandler(endEvent) {
		removeTapHandler();
	
	// When the touch end event fires, check if the target of the
	// touch end is the same as the target of the start, and if
	// so, fire a click.
		if (target == endEvent.target) {
		  $.event.simulate('tap', self, endEvent);
		}
	};
	
	// Remove tap and move handlers if the touch moves too far
	function moveHandler(moveEvent) {
	var touchMove = moveEvent.originalEvent.touches[0],
	  moveX = touchMove.pageX,
	  moveY = touchMove.pageY;
	
		if (Math.abs(moveX - startX) > threshold ||
			Math.abs(moveY - startY) > threshold) {
		  removeTapHandler();
		}
	};
	
	// Remove the tap and move handlers if the timeout expires
	timeout = setTimeout(removeTapHandler, $.event.special.tap.timeThreshold);
	
	// When a touch starts, bind a touch end and touch move handler
	$self.on('touchmove', moveHandler).on('touchend', tapHandler);
	});
	}
};