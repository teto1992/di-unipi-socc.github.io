$(function() {
	loadPeopleFrom("https://raw.githubusercontent.com/di-unipi-socc/di-unipi-socc.github.io/master/resources/people.json");
	loadProjectsFrom("https://raw.githubusercontent.com/di-unipi-socc/di-unipi-socc.github.io/master/resources/research-projects.json");
	loadNewsFrom("https://raw.githubusercontent.com/di-unipi-socc/di-unipi-socc.github.io/master/resources/news.json");
});

var loadPeopleFrom = function (peopleURL) {
	$.getJSON(peopleURL, function (people) {
		var peopleDiv = $("#people-content")[0];
		$.each(people, function (i) {
			var p = document.createElement("div");
			p.className = "col-lg-4";
			
			var name = document.createElement("h3");
			name.innerHTML = this.name + " " + this.surname.toUpperCase();
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

var loadProjectsFrom = function (projectsURL) {
	$.getJSON(projectsURL, function (projects) {
		var projectsDiv = $("#projects-content")[0];
		$.each(projects, function (i) {
			var proj = document.createElement("div");
			proj.className = "col-lg-4";
			
			var title = document.createElement("h3");
			title.innerHTML = this.title;
			proj.appendChild(title);
			
			var logo = document.createElement("img");
			logo.className = "project-logo";
			switch(this.type) {
				case "eu": 
					logo.setAttribute("src","img/projects/eu.png");
					break;
				case "it": 
					logo.setAttribute("src","img/projects/it.png");
					break;
				case "unipi": 
					logo.setAttribute("src","img/projects/unipi.png");
					break;
				default:
					break;
			}
			proj.appendChild(logo);
			
			var aId = document.createElement("a");
			aId.setAttribute("href",this.home);
			aId.setAttribute("target","_blank");
			var id = document.createElement("p");
			id.innerHTML = this.id;
			aId.appendChild(id);
			proj.appendChild(aId);
			
			var subtitle = document.createElement("p");
			subtitle.innerHTML = this.subtitle;
			proj.appendChild(subtitle);
			
			projectsDiv.appendChild(proj);
		});
	});
}

var loadNewsFrom = function (newsURL) {
	$.getJSON(newsURL, function (news) {
		var newsDiv = $("#news-content")[0];
		var newsList = document.createElement("ul");
		newsList.className = "list-group";
		newsDiv.appendChild(newsList);
		
		$.each(news, function(i) {
			var n = document.createElement("li");
			n.className = "list-group-item";
			
			var nDate = document.createElement("span");
			nDate.className="badge";
			nDate.innerHTML = this.date;
			n.appendChild(nDate);
			
			var nContent = document.createElement("div");
			nContent.className = "news";
			n.appendChild(nContent);
			
			switch(this.type) {
				case "conference-paper":
					nContent.innerHTML = "The paper <em>'" + this.title + 
						"'</em> has been accepted at the <em>" + 
						this.conference.name + "</em> " +
						"(<a href='"+this.conference.url + "' target='_blank'>"+
						this.conference.shortname + "</a>).";
					break;
				case "misc": 
					nContent.innerHTML = this.content;
					break;
				default:
					break;
			}
			newsList.appendChild(n);
		});
	});
}