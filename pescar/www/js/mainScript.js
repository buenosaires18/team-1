$(document).ready(function(){
	
	var attachFastClick = Origami.fastclick;
	attachFastClick(document.body);
	
	var appModule = "HOME";
    var appPopup = "";
    
    var join = document.getElementById('join');
    var feed = document.getElementById('feed');
    var profile = document.getElementById('profile');
    var search = document.getElementById('search');
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
    
    function changeAppModule(module, e){
		switch(module)
		{
			case 'FEED':
			{
				feed.style.opacity = 1;
                profile.style.opacity = 0;
				Nav_Click(e);
				break;
			}
            case 'PROFILE':
			{
				feed.style.opacity = 0;
                profile.style.opacity = 1;
				Nav_Click(e);
				break;	
			}
		}
		appModule = module;
	}
    
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