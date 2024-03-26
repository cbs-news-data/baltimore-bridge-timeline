/* script.js */

//jquery code
$(document).ready(function(){ // begin document.ready block

	//jquery code here

	$.get('timeline.csv', function(csvString) {

			// Use PapaParse to convert string to array of objects
	    	var timeline = Papa.parse(csvString, {header: true, dynamicTyping: true}).data;

	    	var timeline_counter = 0

	    	console.log(timeline.length)
	    	console.log(timeline_counter)

	    	for(i = 0; i < timeline.length; i++) { 
			  $("#videos").append('<div class="video video'+timeline[i].position+'">'+timeline[i].video+'</video>')
			}

	    	$(".next").on("click", function(){

	    		if (timeline_counter < timeline.length-1) {
	    			timeline_counter++;
	    			console.log(timeline[timeline_counter].title)
	    			console.log(timeline_counter)

	    			var videonum = 'video' + timeline_counter
	    			var prev_videonum = 'video' + (Number(timeline_counter)-1)
	    			console.log(videonum)
	    			console.log(prev_videonum)

	    			$(".timeline-content").removeClass("segment0").html('<div class="segment-title title'+timeline[timeline_counter].position+'"><h2>'+timeline[timeline_counter].title+'</h2><h3>'+timeline[timeline_counter].time+'</h3></div><div class="segment-content"><div class="segment-photo"><img src="'+timeline[timeline_counter].video+'"></div><div class="segment-desc">'+timeline[timeline_counter].desc+'</div></div>')
	    			
	    			$('.'+videonum).animate({"opacity":"1"}).find("video").get(0).play()
	    			$('.'+prev_videonum).animate({"opacity":"0"})
	    			
	    			$(".back").fadeIn()


	    		} else if (timeline_counter == timeline.length-1) {
	    			timeline_counter = 0
	    			console.log(timeline[timeline_counter].title)
	    			console.log(timeline_counter)

	    			var videonum = 'video' + timeline_counter
	    			var prev_videonum = 'video' + (Number(timeline.length)-1)
	    			console.log(videonum)
	    			console.log(prev_videonum)

	    			$(".timeline-content").addClass("segment0").html('<div class="segment-title title'+timeline[timeline_counter].position+'"><h2>'+timeline[timeline_counter].title+'</h2></div>')
	    			
	    			$('.'+videonum).animate({"opacity":"1"})
	    			$('.'+prev_videonum).animate({"opacity":"0"})
	    		}

	    	})

	    	$(".back").on("click", function(){

	    		if (timeline_counter == 0) {
	    			timeline_counter = timeline.length-1;
	    			console.log(timeline[timeline_counter].title)
	    			console.log(timeline_counter)

	    			var videonum = 'video' + timeline_counter
	    			var prev_videonum = 'video0'
	    			console.log(videonum)
	    			console.log(prev_videonum)

	    			$(".timeline-content").removeClass("segment0").html('<div class="segment-title title'+timeline[timeline_counter].position+'"><h2>'+timeline[timeline_counter].title+'</h2><h3>'+timeline[timeline_counter].time+'</h3></div><div class="segment-content"><div class="segment-photo"><img src="'+timeline[timeline_counter].video+'"></div><div class="segment-desc">'+timeline[timeline_counter].desc+'</div></div>')

	    			$(".back").fadeIn()

	    			$('.'+videonum).animate({"opacity":"1"}).find("video").get(0).play()
	    			$('.'+prev_videonum).animate({"opacity":"0"})

	    		

	    		} else if (timeline_counter == 1) {
	    			timeline_counter--;
	    			console.log(timeline[timeline_counter].title)
	    			console.log(timeline_counter)

	    			var videonum = 'video' + timeline_counter
	    			var prev_videonum = 'video' + (Number(timeline_counter)+1)
	    			console.log(videonum)
	    			console.log(prev_videonum)

	    			$(".timeline-content").addClass("segment0").html('<div class="segment-title title'+timeline[timeline_counter].position+'"><h2>'+timeline[timeline_counter].title+'</h2></div>')

	    			$('.'+videonum).animate({"opacity":"1"})
	    			$('.'+prev_videonum).animate({"opacity":"0"})
	    		
	    		} else if ((timeline_counter > 1) && (timeline_counter < timeline.length)) {
	    			timeline_counter--;
	    			console.log(timeline[timeline_counter].title)
	    			console.log(timeline_counter)

	    			var videonum = 'video' + timeline_counter
	    			var prev_videonum = 'video' + (Number(timeline_counter)+1)
	    			console.log(videonum)
	    			console.log(prev_videonum)

	    			$(".timeline-content").removeClass("segment0").html('<div class="segment-title title'+timeline[timeline_counter].position+'"><h2>'+timeline[timeline_counter].title+'</h2><h3>'+timeline[timeline_counter].time+'</h3></div><div class="segment-content"><div class="segment-photo"><img src="'+timeline[timeline_counter].video+'"></div><div class="segment-desc">'+timeline[timeline_counter].desc+'</div></div>')

	    			$('.'+videonum).animate({"opacity":"1"}).find("video").get(0).play()
	    			$('.'+prev_videonum).animate({"opacity":"0"})
	    			

	    		}

	    	})

	});

}); //end document.ready block
