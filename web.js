$(document).ready(function(){
  var numItems = $('.card').length
  var get = ["<div class='img12 card' id='proj_n1'><h3>Django (Python) Project. Group Project.</h3>\
              <h3>Technologies Used:  Python, SQLite, JavaScript, HTML5, CSS3, Twitter Bootstrap, and Zurb Foundation.</h3><div class='butt_repo'>\
		<a href='https://github.com/mjnorona/djangoProject'>Repo</a>\
    </div></div>", 
             "<div class='img12 card' id='proj_n2'><h3>MEAN Project. Group Project.</h3>\
			<h3>Technologies Used:  JavaScript, MongoDB, Express.js, AngularJS, Node.js, Materialize CSS, HTML5, and CSS3.</h3>\
  <div class='butt_repo'><a href='https://github.com/sushmamangalapally/MEANHackathon'>Repo</a>\
             </div></div>", 
             "<div class='img12 card' id='proj_n3'><h3>Web Programming 1 Course. Group Project.</h3>\
		          <h3>Technologies Used:  PHP, Twitter Bootstrap, MySQL, HTML5, CSS3, and JavaScript.</h3>\
		<div class='butt_repo'><a href='http://students.engr.scu.edu/~smangala/coen161projectmarch/projectcoen161.php'>Demo</a>\
		<a href='https://github.com/sushmamangalapally/WebProgrammingProject'>Repo</a>\
             </div></div>"];
  
  var former_get = ['<div class="img12 card" id="proj1">\
    <img alt="Newsfeed Page of CreativeSpace" src="https://cdn.glitch.com/4c8884cd-c732-4de8-a83a-3fb8edae32ec%2Fdjangoproject.png?1515110224234" class="activator">\
    <div class="show_card">\
      <h2>CreativeSpace</h2>\
      <h2>Built a web application that makes user submit solutions for problematic issues and lets them collaborate with others.</h2>\
    </div>\
    <div class="butt_repo">\
    <a href="https://github.com/mjnorona/djangoProject">Repo</a>\
    </div>\
    </div> ', '<div class="img12 card" id="proj2">\
        <img alt="Catalogue Page of RentTheDress" src="https://cdn.glitch.com/4c8884cd-c732-4de8-a83a-3fb8edae32ec%2Frentthedressimg.png?1515110244971" class="activator">\
    <div class="show_card">\
      <h2>RentTheDress</h2>\
      <h2>Modeled after the Rent the Runway. Built a web application to manage clothes as an owner and to rent clothes as a customer.</h2> \
    </div>\
    <div class="butt_repo">\
    <a href="https://github.com/sushmamangalapally/MEANHackathon">Repo</a>\
    </div></div>', '<div class="img12 card" id="proj3"><img alt="Home Page of EdCamps Inc" src="https://cdn.glitch.com/4c8884cd-c732-4de8-a83a-3fb8edae32ec%2Fedcamphome.png?1515226371689" class="activator">\
    <div class="show_card">\
      <h2>EdCamps Inc</h2>\
      <h2>Mock website for a camp.</h2>\
    </div>\
    <div class="butt_repo">\
		<a href="http://students.engr.scu.edu/~smangala/coen161projectmarch/projectcoen161.php">Demo</a>\
		<a href="https://github.com/sushmamangalapally/WebProgrammingProject">Repo</a>\
    </div></div> '];
    $(document).on("click", ".card", function() {
      var get_id = $(this).attr("id");
      var former;
        for(var i = 1; i <= numItems; i++){
        if(get_id == ("proj"+i)){
          console.log($(this).html());
          former = $(this).html();
          $(this).replaceWith(get[i-1]);
        }else if(get_id == ("proj_n"+i)){
          $(this).replaceWith(former_get[i-1]);
        }
      }
      }
                       );
      
      
    

});
