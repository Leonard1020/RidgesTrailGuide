angular.module('starter.controllers', [])

  .controller('NavCtrl', function($scope) {
    $scope.drawers = [
      {
        route: 'trails',
        img: 'img/icon.png',
        text: 'Trails'
      }, {
        route: 'map',
        img: 'img/mapicon.png',
        text: 'Map'
      }
    ]
  })

  .controller('MapCtrl', function($scope) {

  })

/*
  .controller('EventCtrl', function($scope, $http) {
    $scope.entries = [];
    $scope.spreadsheet = "1j1WnOZfYugUWFltOI-h-Ny0W7U6uVQiAUx6O7UyPPPM";

    $scope.get_summary = function(){
      $http({
        url: 'https://spreadsheets.google.com/feeds/list/' + $scope.spreadsheet + '/default/public/values?alt=json',
        method: "GET"
      }).then(function(response) { // success
          var temp = [];
          for (i = 0; i < response.data.feed.entry.length; i++) {
            var entry = response.data.feed.entry[i];
            var location = entry.gsx$location.$t;
            var startdate = entry.gsx$startdate.$t;
            var starttime = entry.gsx$starttime.$t;
            var enddate = entry.gsx$enddate.$t;
            var endtime = entry.gsx$endtime.$t;
            var costmem = entry.gsx$costmem.$t;
            var costnonmem = entry.gsx$costnonmem.$t;
            var costchild = entry.gsx$costchild.$t;
            var desc  = entry.gsx$description.$t;

            var start = startdate;
            if (start && starttime){
              start += " " + starttime;
            } else if (starttime) {
              start = starttime;
            }
            var end = (enddate == startdate) ? undefined : enddate;
            if (end && endtime){
              end += " " + endtime;
            } else if (endtime) {
              end = endtime;
            }
            var time = start;
            if (time && end){
              time += " - " + end;
            } else if (end) {
              time = end;
            }

            var cost = "";
            if (costmem) {
              if (costmem.toLowerCase() === "free"){
                costmem = "Free";
              }
              cost = costmem + " for Members";
            }
            if (costnonmem){
              if (costnonmem === "free"){
                costnonmem = "Free";
              }
              if (cost === ""){
                cost = costnonmem + " for Non-Members";
              } else {
                cost += " | " + costnonmem + " for Non-Members";
              }
            }
            if (costchild){
              if (cost === ""){
                cost = "Under 18 " + costchild;
              } else {
                cost += " | Under 18 " + costchild;
              }
            }
            if ((!costmem || costmem.toLowerCase() === "free")
              && (!costnonmem || costnonmem.toLowerCase() === "free")
              && (!costchild || costchild.toLowerCase() === "free")){
              cost = "FREE! Donations are welcome!";
            }

            entry = {
              name: entry.title.$t,
              location: location,
              time: time,
              cost: cost,
              desc: desc
            }
            temp.push(entry);
          }
          $scope.entries = temp;
		  $scope.entries = [{
			  name: "Coming Soon",
			  desc: "This page is currently under development"
		  }];
        },
        function(response) { // failed (optional)
            $scope.entries = [{name: "Failed to load events."}];
        }
      );
    }
    $scope.doRefresh = function() {
      $scope.get_summary();
      $scope.$broadcast('scroll.refreshComplete');
    };
    $scope.get_summary();
  })
  */

  .controller('TrailsCtrl', function($scope) {

  })

  .controller('DisCtrl', function($scope) {
    $scope.markers = [
      {
        title: 'Boneyard',
        body: 'Help archaeologists discover bones of animals that use to live here.'
      }, {
        title: 'Wooden Homes and Lean-To\'s',
        body: 'There can never be too many forts along the trail! Can you build one of the shelters? What kind of creature would live in this home?'
      }, {
        title: 'Creepy Crawlies',
        body: 'Explore the wacky world of insects up close. Make observations about their bright colors, big eyes, twitching antennae, or any sounds they make.'
      }, {
        title: 'Monarchs and Milkweeks',
        body: 'Monarch butterflies and milkweeds have a mutual relationship. One can not live without the other. Find one and you\'re bound to find the other.'
      }, {
        title: 'Mystery Animal ID',
        body: 'Have you found any evidence of wildlife? Tiny dots, scratches on bark, and scat are all signs of life.'
      }, {
        title: 'Adopt a Tree',
        body: 'Trees are all different shapes, sizes, and colors. Find one to adopt, take care of it or read it a book. Watch it grow every time you visit.'
      }, {
        title: 'Bird Blinds & Bluebird Boxes',
        body: 'Hide in one of the already-made bird blinds, or build your own! Listen and observe the birds in the trees and field. Keep an eye on the bluebird boxes.'
      }, {
        title: 'Stream Crossing',
        body: 'Water is important for survival on Earth. Using tree stumps and wooden planks, try and build a bridge to cross the stream.'
      }, {
        title: 'Rocks & Fossils',
        body: 'Millions of years ago this area was deep under water. However it was shallow enough to allow coral and reefs to grow. Today you can find fossils of what remains of those bodies within the bedrock.'
      }, {
        title: 'Circle of Cedars',
        body: 'There are many different animals that live in this area. Think of an animal and create a nest for it.'
      }
    ];

    if (localStorage.getItem('currentDiscoveryMarker') == undefined ||
        localStorage.getItem('currentDiscoveryMarker') < 0) {
  		localStorage.setItem('currentDiscoveryMarker', 0);
  	};
    $scope.marker = $scope.markers[localStorage.getItem('currentDiscoveryMarker')];

    $scope.nextMarker = function(){
      var index = $scope.markers.findIndex(m => m.title == $scope.marker.title);
      index++;
      if (index > $scope.markers.length - 1) {
        index = 0;
      }
      localStorage.setItem('currentDiscoveryMarker', index)
      $scope.marker = $scope.markers[index];
    }

    $scope.previousMarker = function(){
      var index = $scope.markers.findIndex(m => m.title == $scope.marker.title);
      index--;
      if (index < 0) {
        index = $scope.markers.length - 1;
      }
      localStorage.setItem('currentDiscoveryMarker', index)
      $scope.marker = $scope.markers[index];
    }

    $scope.updateCurrent = function(marker) {
      var index = $scope.markers.findIndex(m => m.title == marker.title);
	    localStorage.setItem('currentDiscoveryMarker', index);
    }
  })

  .controller('RidgesCtrl', function($scope) {
    $scope.markers = [
      {
        id: 1,
        title: 'Amidst a Boreal Forest',
        body: 'The trails of The Ridges meander through a boreal or northern forest. Boreal forests are typically found in northern Minnesota and Canada where cooler climates promote the growth of such evergreen forests. Due to the orientation of Baileys Harbor, southerly winds are cooled by passing over Lake Michigan. These chilly winds enter the Sanctuary. The boreal forest community at The Ridges is home to many unusual plants and animals.'
      },
      {
        id: 2,
        title: 'Messy Woods?',
        body: 'Should someone clean up all those branches, old trees, and maybe rake the leaves? Visitors sometimes ask if we are going to clean up the forest. <br><br>In nature, it is more important to leave the dead material on the ground. The recycling of organic (once living) material is vital to the well-being of an ecosystem. What was once part of an aspen leaf collecting solar energy for the tree may, in future years, be part of an orchid or wildflower. Through decomposition, the dead material conditions and builds soils - a very slow process, especially in a boreal forest. Before completely decomposing, dead trees also provide nesting cavities and food for wild animals.'
      },
      {
        id: 3,
        title: 'Ice-Scarred Ridges',
        body: 'Notice the steepness of the ridge before you. The angle of its south facing side is very sharp. Other ridges have a gentle slope. Why is there a difference? <br><br>Long ago, Lake Michigan waters were near this site. During many spring seasons, lake ice melted and broke into large blocks. As the waves pushed these ice blocks upon the shore, they dragged and shoved rocks with them. The rocks, flat on two sides, stacked easily. Over time a new, steeply angled ridge was formed.'
      },
      {
        id: 4,
        title: 'Spectacular Spruce',
        body: 'Before you used to stand a spectacular spruce, more specifically a White Spruce. This 120-year-old tree is the largest of its species in The Ridges. Why did it develop two trunks? <br><br>When the tree was very young, the leading bud was probably injured. Perhaps a snow or wind storm broke it off. Or an animal or person may have snapped it off. When a leading bud is removed, one of the side buds usually outcompetes the others, becoming the new leader and creating a new, single trunk. In the case of the spectacular spruce, two side buds continued to grow, forming a double trunked tree. Pretty spectacular, wouldn\'t you say?'
      },
      {
        id: 5,
        title: 'Beacons of Safety',
        body: 'You\'re standing between the two Baileys Harbor Range Lights, which were built in 1869. In 1870, they were put into operation. The main purpose of the Range Lights was to safely direct ships into the harbor of Baileys Harbor. The harbor is flanked with shallow, rocky waters making navigation difficult and dangerous. <br><br>When approaching the harbor, sailors lined up the lights of the two Range Lights, one above the other. The Upper Range Light was 17 feet higher than the Lower Range Light. Staying "on range" with the two lights helped direct ships safely into Baileys Harbor. The corridor between the two lighthouses was kept clear of trees, and provided a wonderful area for wildflowers to grow.'
      },
      {
        id: 6,
        title: 'Deerlike Ridge',
        body: 'Years before The Ridges Sanctuary was organized, local hunters placed a block of salt on this ridge to attract deer. Therefore, the name Deerlick Ridge was given to this aged beach ridge.'
      },
      {
        id: 7,
        title: 'Succession - A Natural Process',
        body: 'As you walk toward the beach, observe the change in vegetation. Compare the plants within 50 feet of the water\'s edge to those two or three ridges back. What do you notice? <br><br>At one time, all the ridges were beaches. Several hundred years ago lake water was near Sandy Ridge and shoreline vegetation was similar to that of the beach today. In time, plant communities changed from beach grasses, rushes, sedges and other "pioneers" ... to shrubs and small trees ... to larger trees and taller forests. The process of one community of plants replacing another community of plants is called succession.'
      },
      {
        id: 8,
        title: 'Underwater Ridges',
        body: '<b><i>Note:</i></b> To find trail marker #8 cross Ridges Drive (watch for traffic) and walk along the left trail. <br><br>On a calm day, underwater "ridges" can be seen in Baileys Harbor. At the beach, search for bands of sandy colored water in the bay that parallel the shore. \n\nWater, through long shore currents and wave action, transports sand particles into Baileys Harbor and toward the beach. Sand continues to migrate toward the beach to become a future beach ridge.'
      },
      {
        id: 9,
        title: 'A Deciduous Conifer?',
        body: '<b><i>Note:</i></b> To find marker #9, go back across Ridges Drive to the first ridge - Sandy. <br><br>Sounds strange, but there is actually an "evergreen" tree that loses its needles in the fall. Commonly found along the edges of the wetter swales, the Tamarack sheds all of its needles every year. <br><br>Related to the White Pine and the Northern White Cedar, the Tamarack is also known as the American Larch. Find a Tamarack tree and observe its dense, bushy clusters of needles. In fall, seek out these trees for a breath-taking autumn sight. Before they shed their finery, the green needles turn a lovely smokey gold.'
      },
      {
        id: 10,
        title: 'Shingle Bark',
        body: 'Notice the color and texture of the Red Pine tree\'s bark. It lays in pieces on the tree, like shingles on a roof. <br><br>Native Americans called the Red Pine "Apakwanagimag" referring to the flat plates of bark. They made a healing salve from its resin and inner skin. The long green needles of this conifer are in clusters of two.'
      },
      {
        id: 11,
        title: 'White Gold',
        body: 'Once considered the most valuable tree in Wisconsin, giant White Pines are found in relatively small numbers today. Lumbermen felled the trees in the mid and late 1800\'s. The trees helped to build Chicago and other towns of the Great Plains. Some of those pines were 500 years and older, with trunks 15 to 20 feet around! <br><br>At The Ridges, a few stately sentinels were spared the ax. Their branches tower above other forest trees. The long green needles of this conifer are in clusters of five, the same number of letters in the word "white."'
      },
      {
        id: 12,
        title: 'Bark for Tanning',
        body: 'The dark green tree branching over the trail is an Eastern Hemlock. Its short needles are distinctly green above and gray-white underneath. The hemlock\'s cones look similar to miniature wooden roses. <br><br>Hemlock bark was once harvested from large trees and sent to tanning mills for processing animal hides. Hemlocks favor moist woodlands and are found in many northern Great Lakes forests.'
      },
      {
        id: 13,
        title: 'Leaning Giant',
        body: 'When walking near this leaning White Pine, people often ask, "When is it going to fall?" Judging from its "cat\'s eye" fire scar, inherited from an 1872 fire, this 200-year-old tree has been leaning for over 100 years! It survived the fire, but the intense heat and flames pierced the protective bark. Once injured, the tree began to lean. <br><br>Fires are an important element in natural management of forests and other ecosystems. Even though fire can be destructive in human terms, it often benefits nature. <br><br>Now, when do you think this tree will fall?'
      },
      {
        id: 14,
        title: 'Fishing in Trees',
        body: 'Several birds have visited the large dead tree before you. Do you see any signs of their work? The birds use their beaks like chisels, chipping wood away, to find insects beneath the bark. Woodpeckers "fish-out" insects with "hooked" tongues. <br><br>The Hairy and Downy Woodpeckers are two common woodpeckers at The Ridges. If you see a large, rectangular hole in a tree, the Pileated Woodpecker, Wisconsin\'s largest hammer head, may have been at work!'
      },
      {
        id: 15,
        title: 'Witch\'s Broom',
        body: 'A tiny parasite can cause a bunchy growth of branches, called witch\'s broom. The Dwarf Mistletoe (<i>Arceuthobium pusillum</i>) is a plant that "feeds" on White and Black Spruce trees, causing abnormal growth. Eventually the mistletoe will kill the tree. Some spruce trees don\'t seem to be affected by the parasite while others fall victim to this small plant. The mistletoe plant is about 1/8 inch long, brown, and resembles a tiny twig. Look for clusters along the smallest woody part of a tree branch.  Look around and see if you can find a broom or two.'
      },
      {
        id: 16,
        title: '"Tree of Life"',
        body: 'The Northern White Cedar grows almost everywhere in Door County. Its Latin name, arborvitae, translates to "tree of life." <br><br>Early American settlers used the vitamin C rich needles to prevent scurvy. The needles are flat and yellowish-green, with aromatic overlapping scales. The cones can reach a half inch in length. Also, the cedar wood\'s natural resistance to rot makes it a favorite for outdoor use. All of the bridges at The Ridges are made of Northern White Cedar. Thank a tree as you walk across the native lumber - they\'re keeping your feet dry!'
      },
      {
        id: 17,
        title: 'Farming on a Ridge',
        body: 'This open sandy area was once a garden for potatoes, corn and other vegetables. Now natural processes are at work "reclaiming" the garden of 50 years ago. Look for young species of White Pine and White Spruce taking hold of the open turf. Foxes also use the area for a den site. <br><br><i>Please remain on the trail</i> - disturbing den sites could cause the foxes to abandon this area. Thank you!'
      },
      {
        id: 18,
        title: 'Labrador Tea',
        body: 'A typical shrub of the boreal forest is growing quite well here. This is Labrador Tea. Its curled-edged, leathery leaves are green through out the year. Notice their wooly undersides. The leaves of this shrub are said to have been used for tea by the Native Americans. Before trying any wild plant, learn about it first, and remember the picking of plants is prohibited at The Ridges.'
      },
      {
        id: 19,
        title: 'Stop - Listen - Listen',
        body: 'Take a break! Try a one-minute listening exercise. (This works well with children, but adults enjoy it also.) First, sit back and relax. Then gently make your hands into fists and raise them near the sides of your head. Now close your eyes and carefully listen. Every time you hear something new, raise a finger. Listen for at least one minute. How many different sounds did you hear? Compare the sounds you heard with the sounds heard by your trail mates. <br><br>Now, cup your hands, place them behind your ears so your ears and palms face forward. Turn your head in different directions. Can you hear more? You have just created bigger "ears." Why do so many animals have large ears? <br><br>Proceed to Wintergreen Trail.'
      },
      {
        id: 20,
        title: 'Water for Life',
        body: 'Swales are the low, wet areas between two ridges. Some swales are wetter than others; they may have a pond-like appearance or be nearly forested. But all host at least a few unusual plants. A few swales are home for insect eating plants like Round-leaved Sundews and Pitcher-Plants. Others give Buckbean and Bog Rosemary space to grow. <br><br>The swale you\'re "standing in" is mostly vegetated with sedges and a tall grass that is a relative of the bamboo. Large plumes form on the top of these tall grasses, explaining one of its common names, feather grass. Observe the changes in plant life as you move toward dry land. You\'ll notice more shrubs and trees. Why?'
      },
      {
        id: 21,
        title: 'Dried Paint',
        body: 'Can you see green flakes of "dried paint" on the tree branches in front of you? Through out the Ridges you\'ll notice branches and tree trunks with these blotches. Some tree trunks have circular green, crusty patterns. Bridges, rocks and even the directional wooden signs have spatterings of color, too. The paint is really a complex group of plants called lichens. <br><br>There are dozens of lichen species in The Ridges. They are indicators of air quality. In industrial areas of the world, lichens are scarce or completely missing. Lichens do not harm the trees they grow on. <br><br>Turn right on Wintergreen Trail.'
      },
      {
        id: 22,
        title: 'Spruce Trees',
        body: 'Glaciers retreated from this area 10,000 years ago. At that time, it was cooler and wetter. Black Spruces and Tamaracks were dominant tree species. As climates warmed, deciduous hardwoods replaced many of the spruces and Tamaracks. But today, you can still find these two conifers in bogs, cool wetlands, and near the swales of The Ridges. <br><br>Notice the numerous small Black Spruce along the trail. Notice the  "branches" of the smaller Black Spruce stretching for sunshine along the open trail.'
      },
      {
        id: 23,
        title: 'Miniature Balsam Forest',
        body: 'If you gaze around the forest\'s lower layer of trees, you\'ll notice that most are one species, the Balsam Fir. This "fir forest" shows how shade tolerant trees can grow in the shadows. The balsams will eventually grow up and replace the existing taller trees. <br><br>Not all trees are shade tolerant. For Example, the Black Spruce will die if shaded out by surrounding trees.'
      },
      {
        id: 24,
        title: 'Food for Thought',
        body: 'The Northern White Cedar in front of you, with its pruned condition, is a sure sign of deer browsing. The cedar is a favorite winter food of the White-tailed Deer. <br><br>As you hike through The Ridges and other natural areas in Door County, watch for the pruned cedars. Without any natural predators, increasing deer populations can adversely impact their own habitat, tilting the "balance of nature." Uncontrolled deer populations impact plant communities. Deer have been known to eat wildflowers, including several rare orchids that grow in The Ridges.'
      },
      {
        id: 25,
        title: 'Puzzle Bark',
        body: 'Notice the scaly pink puzzle-like bark of the tree that stands in front of you. The Red Pine was an important commercial tree during the late 1800\'s when large White Pines were becoming scarce. In fact, the name Red Pine was used interchangeably with Norway Pine, named after Norway Township in Maine. Red or Norway Pines are commonly used for tree farms. Look at the long needles. They are usually in pairs of two.'
      },
      {
        id: 26,
        title: 'Oh Christmas Tree',
        body: 'The fragrant needles of the tree in front of you make it a favorite tree for Christmas trees and for wreaths. It is the Balsam Fir. <br><br>The single needles are flat and the cones are upright. The Balsam Fir is a common tree in The Ridges. It tolerates low light conditions. Look for an understory of small balsams as you hike the trails.'
      },
      {
        id: 27,
        title: 'Reindeer Moss',
        body: 'The open area in front of you is laced with a fine light gray plant called Reindeer Moss. The moss is actually a lichen (pronounced <i>like</i>-en). Ground loving, this plant is an important food for reindeer in northern climates. Reindeer Moss is very brittle when dry and spongy soft when wet.'
      },
      {
        id: 28,
        title: 'Lady of the Woods',
        body: 'There is no doubt that the Paper Birch is one of the most beautiful tree species found in Door County. Common in northern mixed forests, birches are not as common in the Sanctuary\'s boreal forest. The tough, white bark was used by Native Americans to build canoes, make food containers, and for wigwam covers. If you find a dead birch tree, you\'ll see the bark\'s resilient qualities. Many times the bark is still recognizable long after the inner portion of the tree has decomposed.'
      },
      {
        id: 29,
        title: 'Leopold Legacy',
        body: '<i>We abuse land because we regard it as a commodity belonging to us. <br>When we see land as a community to which we belong, <br>we may begin to use it with love and respect.</i> <br>- Aldo Leopold, from <u>A Sand County Almanac.</u> <br><br>The concept of community is basic to ecology. Would we have the environmental concerns of today if we applied Leopold\'s philosophy to decisions affecting the environment?'
      },
      {
        id: 30,
        title: 'Creeping Ground Cover',
        body: 'Along the edges of the trail is a viney low shrub called Horizontal Juniper (<i>Juniperus horiontalis</i>) or Ground Juniper. Look for the pattern created by the blue-green runners. This plant is well adapted for growing in practically sterile soils. Wildlife feed on its berries which are pale but later turn deep blue.'
      },
      {
        id: 31,
        title: 'Wind Songs',
        body: 'Close your eyes for a few seconds and listen to wind songs - the movements of winds through different species of trees. Can you hear the birches? Or the whooshing sounds of breezes passing through conifers? As you walk the trails at The Ridges, stop at different habitats and listen for sounds of natural music. On windy days, throughout The Ridges, you can hear Lake Michigan\'s surf tumbling on the sandy shore.'
      },
      {
        id: 32,
        title: 'Sharp Needled Spruces',
        body: 'Spruces have pointed, rigid needles that grow squarely as well as singly from peg-like bases. The cones hang downward when mature. Early settlers and their children collected resin drops oozing from the trunks and branches for chewing gum. <br><br>Observe the Black Spruce before you. Look for the faint rusty brown undersides of the twigs. The tips of the Black Spruce\'s blue-green needles are usually more blunt than those of the White Spruce.'
      },
      {
        id: 33,
        title: 'The Living Dead Tree',
        body: 'Recycling is an important activity in all our communities. In nature, many resources are recycled by decomposition. The old tree stump before you was once a living tree producing energy from the sun. Today, the rotting stump provides nutrients and a home for young plants. As the stump decomposes, it releases nutrients to the new life growing on and near it. When leaves, twigs, branches, and tree trunks die and rot they enrich soils and "feed" new plants. Walk across the bridge nearest to you and proceed to Mountain Maple Trail.'
      },
      {
        id: 34,
        title: 'Highbush Cranberry',
        body: 'This shrub can grow tall enough to look like a small tree. In fact, its leaves resemble those of a maple. Preferring sunny wet places, the Highbush Cranberry produces a cluster of white flowers in June.Bright, shiny reddish-orange berries hang from its branches in the fall. The clustered berries are edible and resemble the flavor of cranberries, if prepared properly. During fall and winter many song birds harvest the tart fruit from this shrub.'
      },
      {
        id: 35,
        title: 'Always a Bit of Red',
        body: 'The smooth, gray-barked Red Maple is truly "red" at all times of the year: red leaf stems in summer, red leaves in fall, red buds in winter, and red flowers in spring! It likes cold, wet soils. The leaves are trice-lobed and turn scarlet to wave good-bye to summer\'s end.'
      },
      {
        id: 36,
        title: 'Horsetails without Horses',
        body: 'Around the base of the trail guide marker, look for a plant that is 4-8 inches tall, with a single tubular, jointed stem. What is it? This strange plant is often called horsetail. Its Latin name is Equisetum arvense. <br><br>A sworl of foliage radiates from the joints of the stem. Small and segmented, the foliage resembles the spokes of a bicycle wheel. The primitive horsetail produces spores and is also known as puzzle weed, joint grass, snake grass, and scouring rush. <br><br>"Scouring rush" describes its abrasive feature. The plant contains silica, a common mineral in the sandy soils of The Ridges. The Ridges harbors a half a dozen species of horsetails.'
      },
      {
        id: 37,
        title: 'Natural Landscapes',
        body: 'A fine example of "Canadian Carpet" spreads across the forest floor here. Plants common to the boreal or northern forest create this lush, vegetative cover. Look for mosses, ferns, wildflowers, and other herbaceous plants. <br><br>Areas like this are very fragile to foot travel so please remain on the trails. We all would like to preserve these landscapes for others to enjoy - and for the plants!'
      },
      {
        id: 38,
        title: 'Caution: Sensitive Fronds!',
        body: 'The fronds, or leaves, of the Sensitive Fern die back at the early signs of frost. Its brown beaded spore stalk remains through out winter and often into the next summer. Watch carefully for the many species of ferns in The Ridges.'
      },
      {
        id: 39,
        title: 'Final Words',
        body: 'We sincerely hope that you enjoyed your visit to The Ridges Sanctuary. We\'d like to invite you to join The Ridges, along with over 3,000 members. The Ridges receives support from membership to preserve over twelve hundred acres of land, educate youths and adults, carry on research, and perform the daily duties needed to maintain the organization. Members receive the satisfaction of knowing that active preservation is assured, are eligible to participate in adult workshops, and receive a quarterly newsletter, The Ridges News. For membership information, see the form inserted in this guide. Come visit again!'
      }
    ];

  	if (!localStorage.getItem('currentMarker')) {
  		localStorage.setItem('currentMarker', 0)
  	};

    $scope.currentMarker = localStorage.getItem('currentMarker');

    $scope.marker = $scope.markers[$scope.currentMarker];

    $scope.nextMarker = function(){
      $scope.currentMarker++;
      if ($scope.currentMarker > $scope.markers.length - 1) {
        $scope.currentMarker = 0;
      }
      localStorage.setItem('currentMarker', $scope.currentMarker)
      $scope.marker = $scope.markers[$scope.currentMarker];
      var markerSelect = document.getElementById("MarkerSelect");
      markerSelect.selectedIndex = $scope.currentMarker;
    }

    $scope.previousMarker = function(){
      $scope.currentMarker--;
      if ($scope.currentMarker < 0) {
        $scope.currentMarker = $scope.markers.length - 1;
      }
      localStorage.setItem('currentMarker', $scope.currentMarker)
      $scope.marker = $scope.markers[$scope.currentMarker];
      var markerSelect = document.getElementById("MarkerSelect");
      markerSelect.selectedIndex = $scope.currentMarker;
    }

    $scope.updateCurrent = function(id) {
      $scope.currentMarker = id - 1;
      localStorage.setItem('currentMarker', $scope.currentMarker)
    }
  })
