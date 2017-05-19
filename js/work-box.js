// work-box.js



var workBoxes = [{
	titleOuter: "wp",
	imgOuter: 'img/wordpress.png',
	titleInner: "wordpress website redo",
	imgInner: "img/wordpress-inner.jpg",
	description: "I CREATED THIS SITE USING HTML, CSS, AND PHP LANGUAGES. IT IS A WORDPRESS SITE THAT INTEGRATES CONTENT AND PLUGINS, AND USES A CUSTOMIZED THEME. IT IS FULLY RESPONSIVE ON DESKTOP, TABLET AND MOBILE. AT THIS TIME, THE PARTICULAR CLIENT IS UNABLE TO BE DISCLOSE TO THE PUBLIC.",
	siteButtonText: '',
	siteButtonUrl: ''
},{
	titleOuter: "maxx",
	imgOuter: 'img/maxx.png',
	titleInner: "maxx potential",
	imgInner: "img/maxx2.png",
	description: "FOR THE MAXX POTENTIAL WEBSITE, I STYLED THE SUPPORT PAGE. I ALSO COMPLETED SOME TESTING ON THE SITE. IN TESTING, I WAS RESPONSIBLE FOR FIXING THE ISSUES FOUND IN THE TESTING PROCESS. THIS INCLUDED USING HTML, CSS, AND PHP IN ORDER TO PROVIDE THE CORRECT FIXES FOR THE WEBSITE.",
	siteButtonText: "visit maxx",
	siteButtonUrl: "http://www.maxxpotential.com"
},{
	titleOuter: "unhack",
	imgOuter: 'img/bug3.png',
	titleInner: "unhacking wordpress sites",
	imgInner: "img/bug.png",
	description: "I HAVE BEEN WORKING WITH A TEAM OF APPRENTICES TO COMB THROUGH HACKED SITES' SQL DATABASES AND WORDPRESS FILES TO FIND ANY SUSPICIOUS CODE OR FILES. AFTER THE FILES AND DATABASE HAS BEEN CLEANED, THE SITE IS PUT BACK TOGETHER BY REINSTALLING THE THEME AND ANY PLUGIN'S FRESH.",
	siteButtonText: '',
	siteButtonUrl: ''
},{
	titleOuter: "medstar",
	imgOuter: 'img/medstar-outer.png',
	titleInner: "medstar iOS",
	imgInner: "img/wordpress-inner.jpg",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis est mauris, ac posuere lacus elementum sit amet. Aliquam in faucibus justo, non euismod lectus. Etiam condimentum finibus nibh nec hendrerit. Cras vestibulum eleifend bibendum. Morbi auctor consequat tellus, ac mollis dolor facilisis vitae. ",
	siteButtonText: 'download on Apple Store',
	siteButtonUrl: 'http://www.google.com'
}];



var container = document.createElement('div');
var rowHeader = document.createElement('div');
var rowMain = document.createElement('div');
var rowFooter = document.createElement('div');

var allModals = document.createElement('div');

for (var w in workBoxes) {
	allModals.className = "all-modals";

	//modals HTML creation
		var modal = document.createElement('div');
		modal.className = 'modal fade';
		modal.id = "work-"+w;
		modal.setAttribute('tabindex', -1);
		modal.setAttribute('role', "dialog");
		modal.setAttribute('aria-labelledby', 'myModalLabel');
		modal.setAttribute('aria-hidden', true);

		var modalDialog = document.createElement('div');
		modalDialog.className = 'modal-dialog';
		modalDialog.setAttribute('role', 'document');

		var modalContent = document.createElement('div');
		modalContent.className = "modal-content";

		var modalHeader = document.createElement('div');
		modalHeader.className= "modal-header";

		var modalTitle = document.createElement('h4');
		modalTitle.className = 'modal-title';
		modalTitle.id = "myModalLabel";
		modalTitle.innerHTML = workBoxes[w].titleInner;

		var modalBody = document.createElement('div');
		modalBody.className = "modal-body";

		var col8 = document.createElement('div');
		col8.className = 'col-md-8';

		var innerImg = document.createElement('img');
		innerImg.className = 'img-responsive inner-img';
		innerImg.setAttribute('src', workBoxes[w].imgInner);

		var col4 = document.createElement('div');
		col4.className = 'col-md-4';

		var descInner = document.createElement('p');
		descInner.className = 'description';
		descInner.innerHTML = workBoxes[w].description;	

		var modalFooter = document.createElement('div');
		modalFooter.className = 'modal-footer';

		var modalFooterBtns = document.createElement('div');
		modalFooterBtns.className = 'modal-footer-btns';

		var backButton = document.createElement('button');
		backButton.setAttribute('type', 'button');
		backButton.className = 'btn btn-secondary close';
		backButton.setAttribute('data-dismiss', 'modal');
		backButton.innerHTML = 'back to work';

		



		//add child divs to parent div
		allModals.appendChild(modal);
		modal.appendChild(modalDialog);
		modalDialog.appendChild(modalContent);
		modalContent.appendChild(modalHeader);
		modalHeader.appendChild(modalTitle);
		modalContent.appendChild(modalBody);
		modalBody.appendChild(col8);
		col8.appendChild(innerImg);
		modalBody.appendChild(col4);
		col4.appendChild(descInner);
		modalContent.appendChild(modalFooter);
		modalFooter.appendChild(modalFooterBtns);
		modalFooterBtns.appendChild(backButton);



	// Visible work boxes creation
		container.className = "container work";
		rowHeader.className = "row header";
		rowMain.className = "row main";
		rowFooter.className = "row footer";

		//create outer div and give it a class name and id
	    var outerDiv = document.createElement('div');
	    outerDiv.className = "col-md-4 text-center"; 

		//create workbox div
	    var workBoxDiv = document.createElement('div');
	    workBoxDiv.className = "work-box";
		workBoxDiv.id = "work-"+w;
		workBoxDiv.setAttribute('data-toggle', "modal");
		workBoxDiv.setAttribute('data-target', "#work-" + w); 

		//create the h1 title and give it a class name, set the inner html of h1 to titleOuter
	    var outerTitle = document.createElement('h1');
	    outerTitle.className = "work-title text-right";
	    outerTitle.innerHTML = workBoxes[w].titleOuter;
	    outerTitle.style.position = 'relative';

	    //create img div box
	    var outerImg = document.createElement('div');
	    outerImg.className = "work-image";
	    outerImg.style.backgroundImage = 'url("' + workBoxes[w].imgOuter + '")';

	    

		rowMain.appendChild(outerDiv);
		outerDiv.appendChild(workBoxDiv)
		workBoxDiv.appendChild(outerTitle);
	    workBoxDiv.appendChild(outerImg);

	    
		
}
var headerButton = document.createElement('a');
headerButton.setAttribute('href', 'mu-home.html');
headerButton.className =" header-btn work";
headerButton.innerHTML = "home";

var headerCopy = document.createElement('p');
headerCopy.innerHTML = "work i've done";

var footerCopy = document.createElement('p');
footerCopy.innerHTML = "&copy; Molly Underwood 2017";


//add modal html
document.body.appendChild(allModals);



document.body.appendChild(container);
container.appendChild(rowHeader);
rowHeader.appendChild(headerCopy);
rowHeader.appendChild(headerButton);
container.appendChild(rowMain);
container.appendChild(rowFooter);
rowFooter.appendChild(footerCopy);



    





