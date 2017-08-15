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
	imgOuter: 'img/maxx-outer.png',
	titleInner: "maxx potential",
	imgInner: "img/maxx2.png",
	description: "FOR THE MAXX POTENTIAL WEBSITE, I STYLED THE SUPPORT PAGE and updated content on the for learners page. I ALSO COMPLETED SOME TESTING ON THE SITE. IN TESTING, I WAS RESPONSIBLE FOR FIXING THE ISSUES FOUND IN THE TESTING PROCESS. THIS INCLUDED USING HTML, CSS, AND PHP IN ORDER TO PROVIDE THE CORRECT FIXES FOR THE WEBSITE. In order to make some content updates, I also was able to use a SFTP client to update the server. ",
	siteButtonText: "visit maxx",
	siteButtonUrl: "http://www.maxxpotential.com"
},{
	titleOuter: "unhack",
	imgOuter: 'img/bug3.png',
	titleInner: "unhacking wordpress sites",
	imgInner: "img/bug.png",
	description: "I WORKED WITH A TEAM OF APPRENTICES TO COMB THROUGH HACKED SITES' SQL DATABASES AND WORDPRESS FILES TO FIND ANY SUSPICIOUS CODE OR FILES. AFTER THE FILES AND DATABASE WERE CLEANED, DANGEROUS FILES AND TABLES REMOVED, THE SITE WAS PUT BACK TOGETHER BY REINSTALLING THE THEME AND ANY PLUGIN'S USED BY THE THEME ANEW.",
	siteButtonText: '',
	siteButtonUrl: ''
},{
	titleOuter: "medstar",
	imgOuter: 'img/medstar-outer.png',
	titleInner: "Find A Doctor iOS app",
	imgInner: "img/medstar-inner.jpg",
	description: "I added filtering functionality on search for Medstar on their Find a Doctor iOS app. This allowed people using the app to find doctors based on their language spoken and insurance accepted and see on doctor profiles which insurances they accepted. ",
	siteButtonText: '',
	siteButtonUrl: ''
},{
	titleOuter: "iOS++",
	imgOuter: 'img/ios-outer.jpg',
	titleInner: "from objective-c to swift",
	imgInner: "img/ios-inner.png",
	description: "I gained proficiency with Objective-C through recreating UIViews, TableViews, WebViews, and CollectionViews that I saw in the wild. I have taken projects given to me by peers and recreated them in iOS using storyboards and Ojective-C. While I started learning Swift 3, I am continuing down that path of learning towards switching completely to programming for iOS in Swift. For now, I know enough to be able to recreate some things in Objective-C.",
	siteButtonText: '',
	siteButtonUrl: ''
},{
	titleOuter: "timber",
	imgOuter: 'img/truetimber-outer.png',
	titleInner: "True Timber Arborists",
	imgInner: "img/truetimber-inner.png",
	description: "For True Timber, I focused on fixing bugs that the client had noticed. These bugs included making updates to the content both by using plugins and in PHP templates. I updated the front page logo, used media queries and added a Back to Map button on individual tree pages. I used PHP, CSS and HTML to correct these issues. I also connected the True Timber Instagram feed.",
	siteButtonText: '',
	siteButtonUrl: ''
},{
	titleOuter: "pra",
	imgOuter: 'img/pragroup.png',
	titleInner: "Database Migration",
	imgInner: "img/hpqc.png",
	description: "I worked with PRA Group based out of Norfolk, Va on a database migration project. The QA team was switching from HP Quality Center to a new testing suite called Version One. In this process, I wrote and ran queries on their database using PL SQL to loop through the data. I worked to transform the data from what was exported from HP Quality Center into usable data that Version One would take in.",
	siteButtonText: '',
	siteButtonUrl: ''
},{
	titleOuter: "authentic",
	imgOuter: 'img/authentic-outer.png',
	titleInner: "component creation and styling",
	imgInner: "img/weareauthentic.png",
	description: "I have worked with the digital consulting agency, Authentic, multiple times. Both times,  I worked with several clients on the creation and styling of components for their Hippo CMS based websites. I was able to use SCSS to style the majority of the pages and components while using the Freemarker and Nunjucks templating language to build out components. In this project, I was in contact with both clients and worked to provide them the necessary required products in an efficient manner.",
	siteButtonText: '',
	siteButtonUrl: ''
},{
	titleOuter: "tsheets",
	imgOuter: 'img/tsheets-outer.png',
	titleInner: "component creation and styling",
	imgInner: "img/tsheets-inner.png",
	description: "I built an admin webapp designed to be able to bulk edit employee and group permissions, create and auto-email reports and authenticate users. This web app was built using the Laravel framework. It also used Docker, SCSS and the TSheets API utilizing GET, POST, PUT, and DELETE requests.",
	siteButtonText: '',
	siteButtonUrl: ''
}
];

// const completedBoxes = workBoxes.map(
// 	(completedBox) => `
// 	<div class="col-md-4">
// 		<div class="work-box" id="work-0" data-toggle="modal" data-target="#work-0">
// 			<p class="work-title text-right" style="position: relative;">wp</p>
// 			<div class="work-image" style="background-image: url(file:///Users/mollyunderwood/Documents/Personal/htmlPortfolio/s3-mollyunderwood.com/img/wordpress.png);">
// 			</div>
// 		</div>
// 	</div>

// 	`
// );

var allModals = document.querySelector('.all-modals');

var container = document.querySelector('.container');
var rowHeader = document.querySelector('.row.header');
var rowMain = document.querySelector('.row.main.work');
var rowFooter = document.querySelector('.row.footer');


for (var w in workBoxes) {

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

		
		//add child divs to parent divs
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

		//create outer div and give it a class name and id
	    var outerDiv = document.createElement('div');
	    outerDiv.className = "col-md-4"; 

		//create workbox div
	    var workBoxDiv = document.createElement('div');
	    workBoxDiv.className = "work-box";
		workBoxDiv.id = "work-"+w;
		workBoxDiv.setAttribute('data-toggle', "modal");
		workBoxDiv.setAttribute('data-target', "#work-" + w); 

		//create the h1 title and give it a class name, set the inner html of h1 to titleOuter
	    var outerTitle = document.createElement('p');
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


    





