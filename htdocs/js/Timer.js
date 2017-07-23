	let stop = document.getElementById("stop");
	let resset = document.getElementById("resset");
	let functionIsRunning = false;
	let hours = 0;
	let minutes = 0;
	let seconds = 0;

	document.getElementById("demo").innerHTML = "00:00";

	function startTimer() {
	    document.getElementById("stop").disabled = false;
	    document.getElementById("start").disabled = true;

	    if (!functionIsRunning) {
	        functionIsRunning = true;
	        hours = document.getElementById("htmlHours").value;
	        minutes = document.getElementById("htmlMinutes").value;
	        seconds = document.getElementById("htmlSeconds").value;

	    }
	    let countDownDate = new Date((new Date()).valueOf() + 1000 + (hours * 1000 * 60 * 60) +
	        (minutes * 1000 * 60) + (seconds * 1000)).getTime();


	    let x = setInterval(function() {


	        let now = new Date().getTime();
	        let distance = countDownDate - now;

	        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	        seconds = Math.floor((distance % (1000 * 60)) / 1000);

	        if (days > 0) {
	            document.getElementById("demo").innerHTML = days + "d " + hours + ":" +
	                (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
	        } else if (hours > 0) {
	            document.getElementById("demo").innerHTML = hours + ":" +
	                (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
	        } else {
	            document.getElementById("demo").innerHTML = (minutes < 10 ? "0" + minutes : minutes) +
	                ":" + (seconds < 10 ? "0" + seconds : seconds);
	        }

	        if (distance < 0) {
	            clearInterval(x);
	            document.getElementById("demo").innerHTML = "EXPIRED";
	        }

	    });

	    stop.onclick = function() {
	        clearInterval(x);
	        document.getElementById("start").disabled = false;
	        document.getElementById("stop").disabled = true;
	        document.getElementById("demo").innerHTML = distance;
	    }

	    resset.onclick = function() {
	        functionIsRunning = false;
	        document.getElementById("start").disabled = false;
	        document.getElementById("stop").disabled = true;
	        document.getElementById("myForm").reset();
	        clearInterval(x);
	        hours = 0;
	        minutes = 0;
	        seconds = 0;
	        document.getElementById("demo").innerHTML = "00:00";
	    }

	}