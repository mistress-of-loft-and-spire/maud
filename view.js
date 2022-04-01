window.api.send("init");



window.api.receive("setFile", (path) => {
	document.getElementById("filePath").innerHTML = path;
	window.api.send("readFrames");
});

window.api.receive("displayFrames", (data) => {
  document.getElementById("content").innerHTML = "<p>Data is:</p><p>" + data +"</p>";
  parseData(data);

  renderProjects();
});



// Clickable ELements

document.getElementById("openBtn").onclick = function() {
  window.api.send("openFileDialog");
}

document.getElementById("printBtn").onclick = function() {
  window.api.send("print");
}



var frames = [];
var projects = [];

var colors = ["#c35ca4",
"#5ba965",
"#757bcd",
"#af963e",
"#cb5b4c"]
/* generated with https://medialab.github.io/iwanthue/ */

function parseData(data) {
	frames = JSON.parse(data);

	console.log(frames);

	for (var element in frames)
	{
		var isAdded = false
		for (var project in projects) { if (projects[project] == frames[element][2]) isAdded = true; }
		if (!isAdded) projects.push(frames[element][2]);
	}

}

function renderProjects() {
	document.getElementById("content").innerHTML = "<p>Projects:</p><ul>";
	for (var element in projects)
	{
		document.getElementById("content").innerHTML += "<button style='background-color: " + colors[element] + "'>" + projects[element] + "</button>";
	}
	document.getElementById("content").innerHTML += "</ul>"
}