var workBoxes = [{
		id: '1',
		titleOuter:     "wp",
		imgOuter:       'img/wordpress.png',
		titleInner:     "wordpress website redo",
		imgInner:       "img/wordpress-inner.jpg",
		description:    "I CREATED THIS SITE USING HTML, CSS, AND PHP LANGUAGES. IT IS A WORDPRESS SITE THAT INTEGRATES CONTENT AND PLUGINS, AND USES A CUSTOMIZED THEME. IT IS FULLY RESPONSIVE ON DESKTOP, TABLET AND MOBILE. AT THIS TIME, THE PARTICULAR CLIENT IS UNABLE TO BE DISCLOSE TO THE PUBLIC.",
		siteButtonText: '',
		siteButtonUrl:  ''
	}, {
		id: '2',	
		titleOuter:     "maxx",
		imgOuter:       'img/maxx-outer.png',
		titleInner:     "maxx potential",
		imgInner:       "img/maxx2.png",
		description:    "FOR THE MAXX POTENTIAL WEBSITE, I STYLED THE SUPPORT PAGE and updated content on the for learners page. I ALSO COMPLETED SOME TESTING ON THE SITE. IN TESTING, I WAS RESPONSIBLE FOR FIXING THE ISSUES FOUND IN THE TESTING PROCESS. THIS INCLUDED USING HTML, CSS, AND PHP IN ORDER TO PROVIDE THE CORRECT FIXES FOR THE WEBSITE. In order to make some content updates, I also was able to use a SFTP client to update the server. ",
		siteButtonText: "visit maxx",
		siteButtonUrl:  "http://www.maxxpotential.com"
	}, {	
		id: '3',	
		titleOuter:     "unhack",
		imgOuter:       'img/bug3.png',
		titleInner:     "unhacking wordpress sites",
		imgInner:       "img/bug.png",
		description:    "I WORKED WITH A TEAM OF APPRENTICES TO COMB THROUGH HACKED SITES' SQL DATABASES AND WORDPRESS FILES TO FIND ANY SUSPICIOUS CODE OR FILES. AFTER THE FILES AND DATABASE WERE CLEANED, DANGEROUS FILES AND TABLES REMOVED, THE SITE WAS PUT BACK TOGETHER BY REINSTALLING THE THEME AND ANY PLUGIN'S USED BY THE THEME ANEW.",
		siteButtonText: '',
		siteButtonUrl:  ''
	}, {
		id: '4',
		titleOuter:     "medstar",
		imgOuter:       'img/medstar-outer.png',
		titleInner:     "Find A Doctor iOS app",
		imgInner:       "img/medstar-inner.jpg",
		description:    "I added filtering functionality on search for Medstar on their Find a Doctor iOS app. This allowed people using the app to find doctors based on their language spoken and insurance accepted and see on doctor profiles which insurances they accepted. ",
		siteButtonText: '',
		siteButtonUrl:  ''
	}, {
		id: '5',
		titleOuter:     "iOS++",
		imgOuter:       'img/ios-outer.jpg',
		titleInner:     "from objective-c to swift",
		imgInner:       "img/ios-inner.png",
		description:    "I gained proficiency with Objective-C through recreating UIViews, TableViews, WebViews, and CollectionViews that I saw in the wild. I have taken projects given to me by peers and recreated them in iOS using storyboards and Ojective-C. While I started learning Swift 3, I am continuing down that path of learning towards switching completely to programming for iOS in Swift. For now, I know enough to be able to recreate some things in Objective-C.",
		siteButtonText: '',
		siteButtonUrl:  ''
	}, {
		id: '6',
		titleOuter:     "timber",
		imgOuter:       'img/truetimber-outer.png',
		titleInner:     "True Timber Arborists",
		imgInner:       "img/truetimber-inner.png",
		description:    "For True Timber, I focused on fixing bugs that the client had noticed. These bugs included making updates to the content both by using plugins and in PHP templates. I updated the front page logo, used media queries and added a Back to Map button on individual tree pages. I used PHP, CSS and HTML to correct these issues. I also connected the True Timber Instagram feed.",
		siteButtonText: '',
		siteButtonUrl:  ''
	}, {
		id: '7',
		titleOuter:     "pra",
		imgOuter:       'img/pragroup.png',
		titleInner:     "Database Migration",
		imgInner:       "img/hpqc.png",
		description:    "I worked with PRA Group based out of Norfolk, Va on a database migration project. The QA team was switching from HP Quality Center to a new testing suite called Version One. In this process, I wrote and ran queries on their database using PL SQL to loop through the data. I worked to transform the data from what was exported from HP Quality Center into usable data that Version One would take in.",
		siteButtonText: '',
		siteButtonUrl:  ''
	}, {
		id: '8',
		titleOuter:     "authentic",
		imgOuter:       'img/authentic-outer.png',
		titleInner:     "component creation and styling",
		imgInner:       "img/weareauthentic.png",
		description:    "I have worked with the digital consulting agency, Authentic, multiple times. Both times,  I worked with several clients on the creation and styling of components for their Hippo CMS based websites. I was able to use SCSS to style the majority of the pages and components while using the Freemarker and Nunjucks templating language to build out components. In this project, I was in contact with both clients and worked to provide them the necessary required products in an efficient manner.",
		siteButtonText: '',
		siteButtonUrl:  ''
	}, {
		id: '9',
		titleOuter:     "tsheets",
		imgOuter:       'img/tsheets-outer.png',
		titleInner:     "component creation and styling",
		imgInner:       "img/tsheets-inner.png",
		description:    "I built an admin webapp designed to be able to bulk edit employee and group permissions, create and auto-email reports and authenticate users. This web app was built using the Laravel framework. It also used Docker, SCSS and the TSheets API utilizing GET, POST, PUT, and DELETE requests.",
		siteButtonText: '',
		siteButtonUrl:  ''
}];

const workBoxesMarkup = `
	${workBoxes.map(workBox => `  

		<div class="work-box col-md-4" id="work-${workBox.id}" data-toggle="modal" data-target="#work-${workBox.id}" style="background-image: url('${workBox.imgOuter}');">
			<p class="work-title text-right">${workBox.titleOuter}</p>
			</div>
		</div>

	`).join('')}
`;

const modalsMarkup = `
	${workBoxes.map(workBox => `  
	<div class="modal fade" id="work-${workBox.id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title" id="myModalLabel">${workBox.titleInner}</h4>
					</div>
					<div class="modal-body">
						<div class="col-md-8">
							<img class="img-responsive inner-img" src="${workBox.imgInner}" />
						</div>
						<div class="col-md-4">
							<p class="description">
								${workBox.description}
							</p>
						</div>
					</div>
					<div class="modal-footer">
						<div class="modal-footer-btns">
							<button type="button" class="btn btn-default btn-close" data-dismiss="modal">
								back to work
							</button>
							<button type="button" class="btn btn-default btn-prev">
								previous
							</button>
							<button type="button" class="btn btn-default btn-next">
								next
							</button>
						</div>
					</div>
			</div>
		</div> 
	</div>

	`).join('')}
`;

var allModals = document.querySelector('.all-modals');
allModals.innerHTML = modalsMarkup;

var rowMain   = document.querySelector('.row.main.work');
rowMain.innerHTML = workBoxesMarkup;



$("div[id^='work-']").each(function(){
  
  var currentModal = $(this);
  
  //click next
  currentModal.find('.btn-next').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='work-']").nextAll("div[id^='work-']").first().modal('show'); 
  });
  
  //click prev
  currentModal.find('.btn-prev').click(function(){
    currentModal.modal('hide');
    currentModal.closest("div[id^='work-']").prevAll("div[id^='work-']").first().modal('show'); 
  });

});








