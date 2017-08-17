angular.module('starter.services', [])

.factory('Markers', function() {
	return {
		getRidges: function() {
			return [
        {
          id: 1,
          title: 'Introduction',
          body: 'Welcome to The Ridges Sanctuary! The Ridges was founded in 1937 by Albert Fuller with the' +
  ' help of local environmentalists who discovered the uniqueness and biodiversity of the sanctuary’s land.' +
  ' The Ridges Sanctuary is Wisconsin’s first Land Trust, and its mission is education, preservation, and' +
  ' research. The sanctuary is very unique due to the land formations, called ridges and swales, that have' +
  ' developed over the last 1400 years.<br><br>' +
  ' Ridges form because of longshore currents and wave action, which move sand deposited from the' +
  ' glacial recession into ridge formations. In between Ridges are wetland areas called swales. Swales are' +
  ' formed when the lake recedes rapidly, leaving low lying land between each ridge. The diverse habitat of' +
  ' the sanctuary, made up of ridges and swales, holds 475 vascular plant species and 26 of Wisconsin’s 40' +
  ' native orchid species!'
        }, {
          id: 2,
          title: 'A Symbol of The Ridges',
          body: 'This is one of nineteen orchid plots in the sanctuary. The red flag in this plot indicates the spot in which a' +
  ' Ram’s Head orchid successfully bloomed. Ridges staff, volunteers, and partners are working on restoring' +
  ' orchids to the sanctuary. Orchids are complex plants that rely on a specific soil and fungal partner to' +
  ' grow. These beautiful flowers are the first to disappear from habitats that have been altered or' +
  ' diminished, making them an important indicator species.<br><br>' +
  ' The Orchid Restoration Project is a central aspect of The Ridges because of the vision of its founder,' +
  ' Albert Fuller. Fuller studied the land that is now the sanctuary and knew the importance of orchids as an' +
  ' indicator species. Albert Fuller’s determination to protect this land drove his campaign to form The' +
  ' Ridges Sanctuary. The staff and volunteers at The Ridges are dedicated to continuing the research and' +
  ' preservation of orchids.'
        }, {
          id: 3,
          title: 'Hidden Brook',
          body: 'You are about to cross Hidden Brook on the boardwalk. Notice how the sides of the brook look like they' +
  ' have been cut away. This is because the brook is actually man-made. Farmers who owned the land in' +
  ' the early 1900s created the brook in an attempt to drain the swales so that cattle could graze the land.' +
  ' Since The Ridges has acquired the land, staff and volunteers have worked hard to begin to restore the' +
  ' habitat. For now, Hidden Brook remains a reminder of past human interaction with the land.'
        }, {
          id: 4,
          title: 'An Endangered Species',
					image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Somatochlora_hineana.jpg',
          body: 'Notice the blue and white flags in this swale. These flags mark crayfish burrows in the water.' +
  ' Crayfish burrow into the ground, and their burrows create shelter for another organism that lives in the' +
  ' swales: the Hine’s Emerald Dragonfly. When the surface of the swales freeze in the winter, Hine’s' +
  ' Emerald dragonfly larvae survive in the warmer crayfish burrows. The larvae use the crayfish holes to' +
  ' survive in the water for up to four years before they hatch as adult dragonflies.<br><br>' +
  ' This long larval stage is part of the reason why Hine’s Emerald dragonflies are endangered, but' +
  ' their populations are also dwindling due to loss of habitat. If you are lucky enough to see a Hine’s' +
  ' Emerald Dragonfly in The Ridges, you will notice its bright green eyes and its fluorescent green body.'
        }, {
          id: 5,
          title: 'Exploring Sandy Swale',
          body: 'Take a moment to scan Sandy Swale. What do you see? There are many birds, mammals,' +
  ' amphibians, and aquatic species living in and around the swales of The Ridges. If you have time, stand' +
  ' still looking out at the swale. You may begin to notice more birds singing and flying from tree to tree.' +
  ' Maybe you’ll see a flower you hadn’t noticed before.<br><br>' +
  ' Each swale is different. Try standing still for a moment at each swale you walk across and notice' +
  ' the different organisms present. Sandy swale is around 250 years old. Can you notice a difference' +
  ' between the habitat of Sandy Swale and an older swale, such as Winter Wren Swale.'
        }, {
          id: 6,
          title: 'It\'s a bird! It\'s a plane',
					image: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Southern_Flying_Squirrel-27527-1.jpg',
          body: 'Up in the Cedar Tree, there’s a wooden box that looks like a large bird house. These houses are' +
  ' set up around the sanctuary for the flying squirrels that live here. The Ridges is also researching these' +
  ' curious creatures, which are a species of concern in the state of Wisconsin.<br><br>' +
  ' Flying squirrels are difficult to study because they are very elusive. Staff, volunteers, and citizen' +
  ' scientists are trying to figure out which species of flying squirrels reside here, since there is overlap' +
  ' between the regional boundaries of the two species. Is it the Northern flying squirrel, Glaucomys' +
  ' sabrinus, ​or the more common Southern flying squirrel, <i>Glaucomys volans</i>?'
        }, {
          id: 7,
          title: 'Hard Tamarack',
					image: 'https://c1.staticflickr.com/3/2672/5724400506_12ae1eb8c9_b.jpg',
          body: 'The young tree you see on the side of the boardwalk is called a Tamarack. The Tamarack is a' +
  ' deciduous conifer tree, meaning it loses its needles in the fall and grows new needles in the spring.' +
  ' Because the tree loses its needles every year, it is able to direct its energy to its bark, which makes' +
  ' Tamarack wood very hardy. In the fall, the soft needles of the Tamarack turn a golden yellow color,' +
  ' making it a beautiful tree to photograph.'
        }, {
          id: 8,
          title: 'Beacons of Safety',
          body: 'You’re standing between the two Baileys Harbor Range Lights, which were built in 1869. In 1870,' +
  ' they were put into operation. The main purpose of the Range Lights was to direct ships into the harbor' +
  ' of Baileys Harbor. The harbor is flanked with shallow, rocky waters making navigation difficult and' +
  ' dangerous.<br><br>' +
  ' When approaching the harbor, sailors lined up the red and white lights of the two Range Lights,' +
  ' one above the other; the Upper Range Light is 17 feet higher than the Lower Range Light. Staying “on' +
  ' range” with the two lights helped direct ships safely into Baileys Harbor. The corridor between the two' +
  ' lighthouses was kept clear of trees, and provides a wonderful area for wildflowers to grow.'
        }, {
          id: 9,
          title: 'Amidst A Boreal Forest',
          body: 'The Trails of the ridges meander through a boreal, or northern, forest. Boreal forests are' +
  ' typically found in northern Minnesota and Canada where cooler climates promote the growth of such' +
  ' evergreen forests. Due to the orientation of Baileys Harbor, southerly winds are cooled by passing over' +
  ' Lake Michigan. These chilly winds enter the sanctuary, creating a pocket of cooler climate. The boreal' +
  ' forest community at the Ridges is home to many unusual plants and animals.'
        }, {
          id: 10,
          title: 'Shingle Bark',
					image: 'https://cdn.pixabay.com/photo/2014/09/24/08/51/tree-458788_960_720.jpg',
          body: 'Notice the color and texture of the Red Pine tree\'s bark. It lays in pieces on the tree,' +
  ' like shingles on a roof. Native Americans called the Red Pine "Apakwanagimag" referring to the' +
  ' flat plates of bark. They made a healing salve from its resin and inner skin. An easy way to identify the Red Pine is to' +
  ' remember the long green needles of this conifer are in clusters of two.<br><br>' +
  ' The Red Pine was an important commercial tree during the late 1800’s when large White Pines were' +
  ' becoming scarce. Red Pines, also known as Norway Pines, are commonly used for tree farms. The long' +
  ' needles of the Red Pine are found in groups of two.'
        }, {
          id: 11,
          title: 'White Gold',
					image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/NAS-145_Pinus_strobus.png/661px-NAS-145_Pinus_strobus.png',
          body: 'Once considered the most valuable tree in Wisconsin, giant White Pines are found in relatively' +
  ' small numbers today. Lumbermen felled the trees in the mid and late 1800’s. The trees helped to build' +
  ' Chicago and other towns of the Great Plains. Some of those pines were 500 years and older, with trunks' +
  ' 15 to 20 feet around!<br><br>' +
  ' At The Ridges, a few safety sentinels were spared the ax. Their branches tower above other' +
  ' forest trees. The long green needles of this conifer are in clusters of five, the same number of letters in' +
  ' the word “W-H-I-T-E”.'
        }, {
          id: 12,
          title: 'Antlions',
					image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Ant_lion_8785.JPG',
          body: 'Look down at the sandy ground on the edge of the trail. You may notice small pits in the sand' +
  ' that look like inverted ant hills. The insects that live in these pits are called Antlions. An Antlion beetle is' +
  ' the larva of the Antlion fly. Antlion larvae dig pits in the sand in order to catch their prey. They wait, ' +
  ' hidden in the sand, as ants walk by. If an ant is unlucky enough to fall into the sand pit, the antlion grabs' +
  ' it and eats its prey.<br><br>' +
  ' You are likely to see many antlion pits along sand trails in the late spring and summer months.'
        }, {
          id: 13,
          title: 'Life After Death',
					image: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Nursery_Log_at_Schooner_Trail.jpg',
          body: 'This may look like just a fallen tree, but it is so much more. After a large tree has died, it' +
  ' decomposes and provides a home and nutrients, known as a nurse log, for other plants to grow. New' +
  ' roots can penetrate the nurse log’s decomposing wood, getting access to the moisture reservoir within' +
  ' the log. Seeds on nurse logs avoid being trampled by feet, covered by leaves, and being exposed to' +
  ' pathogens in the soil.<br><br>' +
  ' In many old growth forests, you can see trees with exposed roots. These are likely trees that' +
  ' have grown from nurse logs; their roots are left exposed after the nurse logs have decomposed' +
  ' completely.'
        }, {
          id: 14,
          title: 'Forest Floor',
          body: 'Take a moment to look down at your feet. What kind of soil do you see? The younger ridges' +
  ' near the water are covered in dry sand, while older ridges tend to have wetter dirt and organic matter' +
  ' as a topsoil. This is because of the process of succession, which happens over time as a forest ages and' +
  ' develops. The ridges all started as sand from Lake Michigan, deposited during the glacial recession. As' +
  ' time goes on, more species develop on the ridges, creating a diverse habitat and soil composition.'
        }, {
          id: 15,
          title: 'Witch\'s Broom',
					image: 'https://c1.staticflickr.com/6/5156/14408784415_3d7e15fcec_b.jpg',
          body: 'Along the sides of the trail, you may be able to see a growth of branches on some trees called a' +
  ' “Witch\'s Broom”. A tiny parasite causes this growth of branches, which looks just like a witch’s broom.' +
  ' Dwarf Mistletoe (<i>Arceuthobium pusillum</i>) is a plant that benefits from black and white spruce trees,' +
  ' causing abnormal growth in the branches. Eventually the Dwarf Mistletoe will kill the tree. Some Spruce' +
  ' trees don’t seem to be affected by the small plant, while others die from this parasitic relationship. The' +
  ' mistletoe is about ⅛ of an inch long, brown, and resembles a dead needle. Look for Dwarf Mistletoe' +
  ' along the smallest part of a Spruce branch. If you look around, you might be able to see some Witch’s' +
  ' Brooms.'
        }, {
          id: 16,
          title: '"Tree of Life"',
					image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Thuja_occidentalis_004.JPG',
          body: 'The Northern White Cedar Grows almost everywhere in Door County. The white cedar belongs' +
  ' to a group of conifer trees known as “arborvitaes”, ​which translates to “tree of life”. ​The needles are flat' +
  ' and yellowish-green, with aromatic overlapping scales. Early American settlers used the vitamin C rich' +
  ' needles to prevent scurvy. The cones can reach a half inch in length. Also, the cedar wood’s natural' +
  ' resistance to rot makes it a  favorite for outdoor use. All of the bridges at The Ridges are made of ' +
  ' Northern White Cedar. Thank a tree as you walk across the native lumber - they’re keeping your feet' +
  ' dry!<br><br>' +
  ' The Northern White Cedar is also a favorite winter food for the White-tailed deer. As you hike' +
  ' through The Ridges and other natural areas in Door County, watch for pruned cedars. Deer have also' +
  ' been known to eat wildflowers, including several rare orchids that grow in The Ridges.'
        }, {
          id: 17,
          title: 'Lycopodium',
					image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Princess_Pine_%28Lycopodium_dendroideum%29_%285098044220%29.jpg/1024px-Princess_Pine_%28Lycopodium_dendroideum%29_%285098044220%29.jpg',
          body: 'Notice the ground cover around the trails. Much of the ground cover on this ridge is Horizontal' +
  ' Juniper, but along the ridge on the forest floor there is also Lycopodium. Varieties of lycopodium are' +
  ' commonly known as clubmoss, ground pine, and creeping cedar. Lycopodium are fern allies, meaning' +
  ' they are not true ferns, but are alike to ferns in that they have spores for reproduction. Some' +
  ' lycopodium resemble small trees, such as Princess Pine. Other lycopodium look similar to Horizontal' +
  ' Juniper, such as Creeping Cedar.'
        }, {
          id: 18,
          title: 'Labrador Tea',
					image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Bog_Labrador_Tea_%283816426668%29.jpg/1024px-Bog_Labrador_Tea_%283816426668%29.jpg',
          body: 'A typical shrub of the boreal forest is growing quite well here. This is Labrador Tea. Its' +
  ' curled-edged, leathery leaves are green throughout the year. Notice their wooly undersides. The leaves' +
  ' of this shrub are said to have been used for tea by the Native Americans. Before trying any wild plant,' +
  ' learn about it first, and remember the picking of any plants is prohibited at The Ridges.'
        }, {
          id: 19,
          title: 'Stop - Listen - Listen',
          body: 'Take a break! Try a one-minute listening exercise (This works well with children, but adults also' +
  ' enjoy it). First, sit back and relax. Then gently make your hands into fists and raise them near the sides of' +
  ' your head. Now close your eyes and carefully listen. Every time you hear something new, raise a finger.' +
  ' Listen for at least one minute. How many different sounds did you hear? Compare the sounds you heard' +
  ' with the sounds made by your trail mates.<br><br>' +
  ' Now, cup your hands and place them behind your ears so that your ears and palms face forwards. Turn' +
  ' your head in different directions. Can you hear more? You have just created bigger “ears”. Why do so' +
  ' many animals have large ears?'
        }, {
          id: 20,
          title: 'Water for Life',
          body: 'Some swales are wetter than others; they may have a pond-like appearance or be nearly' +
  ' forested. But all host at least a few unusual plants. A few swales are home for insect eating plants, such' +
  ' as Round-leaved Sundews and Pitcher-Plants. Others give Buckbean and Bog Rosemary space to grow.<br><br>' +
  ' The swale you’re standing over is mostly vegetated with sedges and a tall grass that is a relative' +
  ' of the bamboo. Large plumes form on the top of these tall grasses, explaining one of its common names:' +
  ' feather grass.<br><br>' +
  ' Observe the changes in plant life as you move toward dry land. You’ll notice more shrubs and' +
  ' trees. Why?'
        }, {
          id: 21,
          title: 'Dried Paint',
					image: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Lichen_%285465493518%29.jpg',
          body: 'Can you see green flakes of “dried paint” on the tree branches in front of you? Throughout The' +
  ' Ridges you’ll notice branches and tree trunks with these blotches. Some tree trunks have circular green, ' +
  ' crusty patterns. Bridges, rocks and even directional wooden signs have spatterings of color, too. A lichen' +
  ' (pronounced like-en) is actually a complex organism made up of a symbiotic relationship between an' +
  ' alga and a fungus.<br><br>' +
  ' There are dozens of lichen species in The Ridges. They are indicators of air quality. In industrial' +
  ' areas of the world, lichens are scarce or completely missing. Fortunately, lichens grow all over The' +
  ' Ridges. Many people mistake lichens as a tree disease, but lichens do not harm the trees they grow on.' +
  '<br><br><b>TURN RIGHT ON WINTERGREEN TRAIL</b>'
        }, {
          id: 22,
          title: 'Spruce Trees',
					image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Picea_rubens_cone.jpg/1024px-Picea_rubens_cone.jpg',
          body: 'Glaciers retreated from this area 10,000 years ago. At that time, it was cooler and wetter. Black' +
  ' spruces and Tamaracks were dominant tree species. As climates warmed, deciduous hardwoods' +
  ' replaced many of the spruces and Tamaracks. But today, you can still find these two conifers in bogs,' +
  ' cool wetlands, and near the swales of The Ridges.<br><br>' +
  ' Notice the numerous small Black Spruce along the trail, and how the “branches” of the smaller' +
  ' Black Spruce stretching for sunshine along the open trail.'
        }, {
          id: 23,
          title: 'Miniature Balsam Forest',
					image: 'https://c1.staticflickr.com/7/6110/6255945534_674ae6f9fa_z.jpg',
          body: 'If you gaze around the forest’s lower layer of trees, you’ll notice that most are one species: the' +
  ' Balsam Fir. This “fir forest” shows how shade tolerant trees can grow in the shadows. Not all trees are' +
  ' shade tolerant. For example, the Black Spruce will die if shaded out by surrounding trees. The Balsams, ' +
  ' being shade tolerant, will eventually grow up and replace the existing taller trees. Look for an' +
  ' understory of small Balsams as you hike the trails.' +
  '<br><br><b>PROCEED ON DEERLICK TRAIL</b>'
        }, {
          id: 24,
          title: 'Reindeer Moss',
					image: 'https://c1.staticflickr.com/6/5588/14509916708_c26bfbfe73_b.jpg',
          body: 'The open area in front of you is laced with a fine, light gray organism called Reindeer Moss. The' +
  ' moss is actually a lichen. Ground loving, Reindeer Moss is an important food for reindeer in northern' +
  ' climates. Reindeer moss is very brittle when dry, but spongy and soft when wet.'
        }, {
          id: 25,
          title: 'Paper Birch',
					image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Brzoza_paierowa_Betula_papyrifera.jpg',
          body: 'There is no doubt that the Paper Birch is one of the most beautiful tree species found in Door' +
  ' County. Even in a dead birch tree, you can see the bark’s resilient qualities.  Many times the bark is still' +
  ' recognizable long after the inner portion of the tree has decomposed.<br><br>' +
  ' Dead standing trees, called snags, play an important role in the ecosystem. Even though these' +
  ' trees are no longer living, snags provide a space for many different organisms to live and thrive. The' +
  ' decomposing tree also provides nutrients for the forest around it as it decomposes.'
        }, {
          id: 26,
          title: 'Leopoid Legacy',
          body: '<i>"We abuse land because we regard it as a commodity belonging to us. When we see land as a community' +
  ' to which we belong, we may begin to use it with love and respect"</i>\n' +
  ' - Aldo Leopold, from A Sand County Almanac<br><br>' +
  ' The concept of community is basic to ecology. Would we have the environmental concerns of today if' +
  ' we applied Leopold’s philosophy to decisions affecting the environment?'
        }, {
          id: 27,
          title: 'Creeping Ground Cover',
					image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Juniperus_horizontalis_Creeping_Juniper_%E1%83%B0%E1%83%9D%E1%83%A0%E1%83%98%E1%83%96%E1%83%9D%E1%83%9C%E1%83%A2%E1%83%90%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%98_%E1%83%A6%E1%83%95%E1%83%98%E1%83%90.JPG',
          body: 'Along the edges of the trail is a viney low shrub called Horizontal Juniper (<i>Juniperus horizontalis</i>),' +
  ' or Ground Juniper. Look for the pattern created by the blue-green runners. This plant is well adapted' +
  ' growing in practically sterile soils. Wildlife feed on its berries which are pale but later turn deep blue.' +
  ' Common Juniper, the cousin of Horizontal Juniper, can also be found in the sanctuary.'
        }, {
          id: 28,
          title: 'Wind Songs',
          body: 'Close your eyes for a few moments and listen to the wind songs - the movements of winds' +
  ' through different species of trees. Can you hear the birches? Or the whooshing sounds of breezes' +
  ' passing through conifers? As you walk the trails at The Ridges, stop at different habitats and listen for' +
  ' sounds of natural music. On windy days, throughout The Ridges, you can hear Lake Michigan’s surf' +
  ' breaking on the sandy shore.'
        }, {
          id: 29,
          title: 'Sharp Needled Spruces',
          body: 'Spruces have pointed, rigid needles that grow squarely as well as singly from peg-like bases. The' +
  ' cones hang downward when mature. Early settlers and their children collected resin drops oozing from' +
  ' the trunks and branches for chewing gum.<br><br>' +
  ' Observe the Black Spruce before you. Look for the faint rusty brown undersides of the twigs.' +
  ' The tips of the Black Spruce’s blue-green needles are usually more blunt than those of the White Spruce.' +
  '<br><br><b>TURN RIGHT ON MOUNTAIN MAPLE TRAIL</b>'
        }, {
          id: 30,
          title: 'Highbush Cranberry',
					image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Highbush_Cranberry.jpg',
          body: 'This shrub can grow tall enough to look like a small tree. In fact, its leaves resemble those of a' +
  ' maple. Preferring sunny wet places, the Highbush Cranberry produces a cluster of white flowers in June.<br><br>' +
  ' Bright, shiny, reddish-orange berries hang from its branches in the fall. The clustered berries are' +
  ' edible and resemble the flavor of cranberries, if prepared properly.<br><br>' +
  ' During fall and winter many song birds harvest the tart fruit from this shrub, making it a great' +
  ' spot for listening to and observing birds. Though the canopy of The Ridges Sanctuary is often too dense' +
  ' for many birds to be visible, bird calls seem to echo through the trees. Some of the birds you might see' +
  ' here at The Ridges are the Black-throated Green Warbler, Pileated Woodpecker, Caspian Tern,' +
  ' Ring-billed Gull, Red-winged Blackbird.'
        }, {
          id: 31,
          title: 'Always a Bit of Red',
					image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Red_Maple_Acer_rubrum_Red_Bark_2000px.jpg',
          body: 'The smooth, gray-barked Red Maple is truly “red” at all times of the year: red leaf stems in' +
  ' summer, red leaves in fall, red buds in winter, and red flowers in spring! It likes cold, wet soils. The' +
  ' leaves are tri-lobed and turn scarlet to wave goodbye to summer’s end.'
        }, {
          id: 32,
          title: 'The Ram\'s Head Orchid',
					image: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Rams_Head_Ladys_Slipper_-_Cypripedium_arietinum_%285797677212%29.jpg',
          body: 'This rare orchid thrives in cool wet soil and can often be found near cedar trees, spruce trees,' +
  ' Labrador tea, and twin flowers, which are all found at The Ridges. The ram’s head orchid is small, usually' +
  ' only growing to 10-20 cm. Notice the upper sepal above the flower. If it is up, the flower is unpollinated.' +
  ' If it is down, the flower has been pollinated and a hormone has been released which causes the upper' +
  ' sepal to cover the flower.<br><br>' +
  ' Not only are these orchids are an important part of The Ridges Sanctuary, but they are a rare' +
  ' and delicate plant that plays an important role in this ecosystem. Please do not pick or dig up orchids, or' +
  ' any other wildflowers you find in the sanctuary!' +
  '<br><br><b>TURN LEFT ON WINTER WREN TRAIL</b>'
        }, {
          id: 33,
          title: 'Horsetails Without Horses',
					image: 'http://maxpixel.freegreatpicture.com/static/photo/1x/Drops-Summer-Rosa-Horsetail-Plant-Green-2432530.jpg',
          body: 'Around the base of the trail guide marker, look for a plant that is 4-8 inches tall, with a single' +
  ' tubular, jointed stem. What is it? This strange plant is often called horsetail. Its Latin name is Equisetum' +
  ' arvense.<br><br>' +
  ' A whorl of foliage radiates from the joints of the stem. Small and segmented, the foliage' +
  ' resembles the spokes of a bicycle wheel. The primitive horsetail produces spores and is also known as a' +
  ' puzzle weed, joint grass, and scouring rush.<br><br>' +
  ' “Scouring rush” describes its abrasive feature. The plant contains silica, a common mineral in' +
  ' the sandy soils of The Ridges. The Ridges harbors half a dozen species of horsetails.'
        }, {
          id: 34,
          title: 'Natural Landscapes',
          body: 'A fine example of “Canadian Carpet” spreads across the forest floor here. Plants common to the' +
  ' boreal or northern forest create this lush, vegetative cover. Look for mosses, ferns, wildflowers, and' +
  ' other herbaceous plants.<br><br>' +
  ' Areas like this are very fragile to foot travel so please remain on the trails. We all would like to' +
  ' preserve these landscapes for others to enjoy – and for the plants!'
        }, {
          id: 35,
          title: 'Caution: Sensitive Fronds!',
					image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Sensitive_Fern_%282974756592%29.jpg',
          body: 'The Sensitive Fern’s name derives from its sensitivity to cold weather. The fronds, or leaves, of' +
  ' the Sensitive Fern die back at the early signs of frost. Its brown beaded spore stalk remains throughout' +
  ' winter and often into the next summer.<br><br>' +
  ' Ferns are vascular plants that reproduce through spores, and they thrive in areas with a lot of' +
  ' moisture.  Other species of ferns in the Ridges include Marginal Shield, Spinulose Shield, and Common' +
  ' Polypody ferns. Watch carefully for the many species of ferns in The Ridges'
        }, {
          id: 36,
          title: 'North Campus',
          body: 'Welcome to the old entrance to The Ridges Sanctuary. The larger of the two cabins, Kaye Cabin,' +
  ' was found on the farm of Orville Kaye in the 1970’s. It was purchased and moved to The Ridges in 1973.' +
  ' The Marshall Cabin was built by the daughter of Increase Claflin, the first non-native American settler in' +
  ' Door County, and her husband. It was originally located in the area that is now Peninsula State Park, and' +
  ' was moved to The Ridges in 1982.<br><br>' +
  ' The Kaye Cabin was The Ridges nature store until 2015, when the Cook-Fuller Nature Center was' +
  ' built. The cabins are still used for programs held by The Ridges, including the backpack adventure camp' +
  ' in July.'
        }, {
          id: 37,
          title: 'The Upper Range Light',
          body: 'The Range lights were built in 1869 and powered by kerosene and animal lard, which' +
  ' had to be replenished every three hours  by lighthouse keepers. The Upper and Lower Range Lights were' +
  ' maintained by eight different lighthouse keepers from 1869 until 1923, when they were updated to an' +
  ' unmanned acetylene gas system. In 1930, the Upper Range Light was wired for electricity and became' +
  ' the home of a Lutheran minister and his family. The building became a parsonage and remained used by' +
  ' the Lutheran church through the 1950s.<br><br>' +
  ' Roy Lukes was the first naturalist of The Ridges to live in the Upper Range Light in 1964. In 1969,' +
  ' the Range Lights were decommissioned and the Fresnel lenses were taken out of the buildings. The' +
  ' Upper Range light had served as the main offices for The Ridges until 2015, when the coast guard' +
  ' allowed The Ridges to turn on the lights and use the Range Lights as a private navigational aid to boats' +
  ' coming into Baileys Harbor. The main offices for The Ridges were relocated to the Cook Albert Fuller' +
  ' Nature Center.'
        }, {
          id: 38,
          title: 'Final Words',
          body: 'We sincerely hope you enjoyed your visit to The Ridges Sanctuary. We invite you to join the' +
  ' 1,800 members who support the important work we do here in research, education, and conservation.' +
  ' Support from our membership enables us to preserve 1,600 acres of the most biologically significant' +
  ' landscape in Wisconsin. Members receive the satisfaction of knowing that active preservation is assured,' +
  ' are eligible to participate in adult workshops, and receive our newsletter, Sanctuary, ​which is published' +
  ' twice a year. For membership information, stop by the Cook-Fuller Nature Center. Come visit us again!'
        }
      ];
		},
		getDiscovery: function() {
			return [
        {
          id: 1,
          title: 'Boneyard',
          body: 'Help archaeologists discover bones of animals that use to live here.'
        }, {
          id: 2,
          title: 'Wooden Homes and Lean-To\'s',
          body: 'There can never be too many forts along the trail! Can you build one of the shelters? What kind of creature would live in this home?'
        }, {
          id: 3,
          title: 'Creepy Crawlies',
          body: 'Explore the wacky world of insects up close. Make observations about their bright colors, big eyes, twitching antennae, or any sounds they make.'
        }, {
          id: 4,
          title: 'Monarchs and Milkweeks',
          body: 'Monarch butterflies and milkweeds have a mutual relationship. One can not live without the other. Find one and you\'re bound to find the other.'
        }, {
          id: 5,
          title: 'Mystery Animal ID',
          body: 'Have you found any evidence of wildlife? Tiny dots, scratches on bark, and scat are all signs of life.'
        }, {
          id: 6,
          title: 'Adopt a Tree',
          body: 'Trees are all different shapes, sizes, and colors. Find one to adopt, take care of it or read it a book. Watch it grow every time you visit.'
        }, {
          id: 7,
          title: 'Bird Blinds & Bluebird Boxes',
          body: 'Hide in one of the already-made bird blinds, or build your own! Listen and observe the birds in the trees and field. Keep an eye on the bluebird boxes.'
        }, {
          id: 8,
          title: 'Stream Crossing',
          body: 'Water is important for survival on Earth. Using tree stumps and wooden planks, try and build a bridge to cross the stream.'
        }, {
          id: 9,
          title: 'Rocks & Fossils',
          body: 'Millions of years ago this area was deep under water. However it was shallow enough to allow coral and reefs to grow. Today you can find fossils of what remains of those bodies within the bedrock.'
        }, {
          id: 10,
          title: 'Circle of Cedars',
          body: 'There are many different animals that live in this area. Think of an animal and create a nest for it.'
        }
      ]
		}
	};
})
