$(function() {
	loadPeopleFrom("https://raw.githubusercontent.com/di-unipi-socc/di-unipi-socc.github.io/master/resources/people.json");
});

var loadPeopleFrom = function (peopleURL) {
	$.getJSON(peopleURL, function (people) {
		var peopleDiv = $("#people-content")[0];
		$.each(people, function (i) {
			var p = document.createElement("div");
			p.className = "col-lg-3";
			
			var name = document.createElement("h3");
			name.innerHTML = "<b>" + this.name.toUpperCase() + "</b>";
			p.appendChild(name);
			
			var aPhoto = document.createElement("a");
			aPhoto.setAttribute("href",this.home);
			aPhoto.setAttribute("target","_blank");
			var photo = document.createElement("img");
			photo.className = "photo";
			photo.setAttribute("src", this.photo);
			aPhoto.appendChild(photo);
			p.appendChild(aPhoto);
			
			var position = document.createElement("p");
			switch(this.position) {
				case "full-professor":
					position.innerHTML = "Full Professor";
					break
				case "post-doc":
					position.innerHTML = "Post-Doc Researcher";
					break
				case "phd-student":
					position.innerHTML = "PhD Student";
					break
				case "master-student":
					position.innerHTML = "MSc Student";
					break
				default:
					position.innerHTML = "Other";
			}			
			p.appendChild(position);
			
			peopleDiv.appendChild(p);
		});
	});
}