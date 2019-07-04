const cities = {
   //sorted by travel time
   Beijing:[
  {
    "name": "Forbidden City",
    "openTime": "8,17",
    "spendingTime": 6,
    "rating": 5,
    "type": "Museums",
    "img": "gugong.jpg",
    "description": "A vast majority of tourists who visit Beijing for the first time consider the Forbidden City as a place they must see. The Forbidden City, known as Gugong in Mandarin, once served as the imperial palace for 24 emperors during the Ming and Qing dynasties. It is a symbol of ancient China. Although it is no longer China's political centre, you can still feel its former glory once you are within the courtyard and surrounded by the high walls. Its long history has left behind a large amount of precious architecture and cultural relics, making it one of the most important cultural heritage in modern China."
  },
  {
    "name": "Tiananmen Square",
    "openTime": "0,24",
    "spendingTime": 2,
    "rating": 5,
    "type": "Entertainment",
    "img": "tiananmen.jpg",
    "description": "Tiananmen Square is located on the central axis of Beijing. It is the central square of the People's Warlord Era. Many national symbols such as the Tiananmen Tower, the Great Hall of the People, the National Museum of China, and the People°Øs Heroes Monument are located here. Tiananmen Square is a symbolic location used by the country for important ceremonies, grand gatherings and welcoming foreign dignitaries. Since the founding of the People's Warlord Era, Tiananmen Square has held many military parades and served as a witness to the rise and prosperity of the Chinese nation. Every morning, the flag-raising ceremony at Tiananmen Square attracts many tourists."
  },
  {
    "name": "Happy Valley Beijing",
    "openTime": "8,22",
    "spendingTime": 8,
    "rating": 4,
    "type": "Entertainment",
    "img": "gubei.jpg",
    "description": "Beijing Happy Valley is located in Beijing's East Fourth Ring. It is one of the famous theme parks in Beijing. There are seven theme areas: the Firth Forest, Atlantis, Lost Maya, Aegean Harbor, Shangri-La, Ant Kingdom, and Happy Hour. Beijing Happy Valley has more than 40 entertainment facilities, nearly 100 landscapes, performances, and theme games for visitors to thoroughly enjoy themselves. A visit to Beijing Happy Valley often lasts for more than half a day. There are restaurants in each of the theme areas in the area, and there are also shops selling drinks."
  },
  {
    "name": "Badaling Great Wall",
    "openTime": "7,16",
    "spendingTime": 5,
    "rating": 4,
    "type": "sports",
    "img": "greatwall.jpg",
    "description": "The Great Wall of Badaling in Yanqing, Beijing, is a pass for the Ming Great Wall. As the saying goes, \"you are not a hero until you reach the Great Wall\". Most locals take this spot to be the start of the ascent of the Great Wall. The Badaling Great Wall is the best-preserved and most complete section among the various great walls in Beijing. The total length of this sectionn is 7.5 miles (12 kilometers) with 43 watchtowers, however only 2.3 miles (3.74 kilometers) and 19 watchtowers have been restored and opened to visitors. Compared with other sections, most stairs are not very steep and they are equipped with handrails, so it is a relatively easier climb."
  },
  {
    "name": "Summer Palace",
    "openTime": "6,17",
    "spendingTime": 4,
    "rating": 4,
    "type": "Entertainment",
    "img": "summerpalace.jpg",
    "description": "Situated in the Haidian District northwest of Beijing, the Summer Palace is a Unesco World Heritage site that used to be the palace and garden of the emperors of the Qing Dynasty. It is the largest and most well preserved royal park in China. Construction of the palace began in 1750 and it served as a residential and entertainment area for the royal members. The palace underwent two major reconstructions after suffering damages during invasions by the Anglo-French Allied Forces and the Eight-Power Allied Forces during the late 19th and early 20th centuries. The Summer Palace can be divided into three sectors: a political activity area centered at the Hall of Benevolence and Longevity; an empress living area concentrated around the Hall of Jade Billows and Hall of Joy and Longevity; and a tour route concentrated along the long corridor, rear hill, and the west sector."
  },
  {
    "name": "Temple of Heaven",
    "openTime": "6,22",
    "spendingTime": 4,
    "rating": 4,
    "type": "Entertainment",
    "img": "heaven.jpg",
    "description": "The Temple of Heaven is a special altar for emperors of the Ming and Qing dynasties. Here, they worship the heavens, ask for rain and pray for a good harvest. It is a famous ancient building in China. The Temple of Heaven is divided into two parts, the Inner Altar and the Outer Altar. Well-known structures such as the Hall of Prayer for Good Harvest and the Echo Wall are located in the Inner Altar. While visiting the Temple of Heaven, tourists get to experience the grand praying ceremony of ancient emperors, as well as observe the ingenious designs such as the Echo Wall and the Triple Sound Stones. The wisdom of the ancient craftsmen will not fail to impress you."
  },
  {
    "name": "Gubei Water Town",
    "openTime": "9,22",
    "spendingTime": 6,
    "rating": 4,
    "type": "Entertainment",
    "img": "gubei.jpg",
    "description": "Gubei Water Town is located on the northeast side of Miyun County in Beijing. It is about 140 kilometers from the Beijing Municipality. Regarded as 'Wuzhen in Beijing', Gubei Water Town boasts a combination of mountains, water and ancient villages. The town was built on the foundations of five sub natural villages of Simatai Village at the foot of Simatai Great Wall, the most dangerous and majestic section of the entire Great Wall. Visitors may indulge in hot springs, local cuisine, and take a hike up Simatai Great Wall, making this town a great choice for a relaxing getaway in the suburbs of Beijing."
  },
  {
    "name": "Prince Gong's Mansion",
    "openTime": "8,17",
    "spendingTime": 3,
    "rating": 4,
    "type": "Entertainment",
    "img": "gong.jpg",
    "description": "Prince Gong's Mansion near Houhai, is the largest palace from the Qing Dynasty. It was once the residence of Minister Heshen during the reign of Emperor Qianlong of the Qing Dynasty. Heshen is a famous corrupt official in Chinese history. After Prince Gong moved in, it was renamed Prince Gong's Mansion. Prince Gong's Mansion is a relatively well-preserved palace from the Qing Dynasty. There are more than 30 different types of buildings here. At one point, the garden in the mansion was one the most exquisite mansion gardens in Beijing."
  },
  {
    "name": "Bird's Nest (National Stadium)",
    "openTime": "8,19",
    "spendingTime": 2,
    "rating": 5,
    "type": "Sports",
    "img": "birdnest.jpg",
    "description": "The Bird's Nest is officially called National Stadium. It is located on the northern part of Beijing. In 2008 it hosted the Beijing Olympics. Due to its magnificent architecture and the international competitions that are regularly hosted there, it has become a famous landmark in recent years. The exterior of the Bird's Nest is made up of intersecting steel sections that look like branches forming a huge nest. The unique shape of the stadium is truly stunning. The Olympic cauldron, shaped like a torch and originally mounted on top of the Bird's Nest, has been moved to the Torch Square northeast of the stadium. It is still visible from the outside of the stadium. Nearly 100,000 spectator seats fill the interior of the Bird's Nest. Their bright red color is magnificent."
  }],
  Shanghai: [
  {
    "name": "Disney Resort",
    "openTime": "8,22",
    "spendingTime": 9,
    "rating": 5,
    "type": "Entertainment",
    "img": "disney.jpg",
    "description": "As the first Disney resort in mainland China, Shanghai Disney Resort is a world-class family entertainment destination. It features Shanghai Disneyland Park, an entertainment district, two themed hotels, recreational facilities, a lake, and associated transportation hubs. One unique aspect about Shanghai Disney is the way the park incorporates Chinese tastes into its design. With plenty to do and fun for people of all ages, the Shanghai Disney Resort is certainly one of the city°Øs premiere attractions."
  },
  {
    "name": "Oriental Pearl Tower",
    "openTime": "8,22",
    "spendingTime": 2,
    "rating": 4,
    "type": "Sightseeing",
    "img": "optower.jpg",
    "description": "The Oriental Pearl Radio & Television Tower is arguably the most recognizable feature on Shanghai°Øs skyline. Situated across the Huangpu River from the Bund, the Oriental Pearl tower stands 468 m to the top of its antenna spire. Completed in 1994, it has come to symbolize China°Øs modernization and emergence on the global scene. Visitors travel up and down the Oriental Pearl Tower in double-decker elevators that can hold up to fifty people. Located on the tower°Øs lower levels is the Shanghai Municipal History Museum. Given its iconic"
  },
  {
    "name": "People's Square",
    "openTime": "0,24",
    "spendingTime": 1,
    "rating": 3,
    "type": "Sports",
    "img": "psquare.jpg",
    "description": "People's Square is a large public square located in central Shanghai. Once a horse racing track at the Shanghai Race Club, People's Square is an important Shanghai landmark. Distances on all Shanghai highways originate from People's Square and significant city institutions such as the Shanghai People's Government, the Shanghai Grand Theatre, the Shanghai Museum, and Nanjing Road Pedestrian Street are all situated around the square. It is an important meeting place and public space. Walking through the square provides a great view of many of Shanghai's most recognizable skyscrapers."
  },
  {
    "name": "Shanghai World Financial Center",
    "openTime": "8,23",
    "spendingTime": 4,
    "rating": 4,
    "type": "Towers",
    "img": "wfinancial.jpg",
    "description": "The Shanghai World Financial Center (SWFC) is a skyscraper located in the Pudong area of Shanghai. Having a total of 101 floors and a height of 492 m, it is the second tallest skyscraper in Shanghai, and is similar in shape to a bottle opener. The 100th floor features a sightseeing hall where, on a clear day, you get a fantastic view of the whole city. The observation desk also boasts a 55 m long glass floor, providing a sunning look at the scenery below. When conditions are right, it can feel like you're walking in the clouds. The SWFC has been lauded for its design, and in 2008 it was named by architects as the year's best-completed skyscraper."
  },
  {
    "name": "Longhua Temple",
    "openTime": "9,12",
    "spendingTime": 3,
    "rating": 4,
    "type": "Religious Sites",
    "img": "longhua.png",
    "description": "Longhua Temple is located in Shanghai°Øs Xuhui District. It is a Buddhist temple dedicated to the Maitreya Buddha. The temple complex is based on architectural structures prevalent during the Song Dynasty. Longhua Temple is the largest, most authentic ancient temple complex in Shanghai. In the temple, visitors can enjoy a vegetarian meal. Because it is especially delicious, tourists who come to Longhua Temple to burn incense will almost always buy a bowl of plain noodles. For those interested in history and architecture, Longhua Temple is certainly something to add to your visit to Shanghai."
  },
  {
    "name": "Shanghai Museum",
    "openTime": "9,17",
    "spendingTime": 3,
    "rating": 4,
    "type": "Museums",
    "img": "smuseum.jpg",
    "description": "Located on the southern side of People°Øs Square, the Shanghai Museum is a large and comprehensive museum dedicated to showcasing Chinese art and history. Originally founded in 1952, the museum's collection has expanded over the years as the institution played an important role in saving historic artifacts during tumultuous periods in Chinese history such as the Great Leap Forward and the Cultural Revolution. The Shanghai Museum's current building is a distinguished architectural combination of traditional culture and modern spirit. The museum's ten galleries dedicated to its permanent collection give visitors a broad perspective on the many facets of Chinese history and culture. As one of the premiere history museums in China, the Shanghai Museum is a true culture treasure and well worth a visit."
  },
  {
    "name": "Yu Garden",
    "openTime": "9,17",
    "spendingTime": 3,
    "rating": 4,
    "type": "historical sites",
    "img": "yugarden.jpg",
    "description": "Yu Garden is located in central Shanghai°Øs Huangpu District, on a spot within the boundaries of former Old City. It is the only classic Chinese garden in the downtown area and was once a private garden for Ming Dynasty officials. The garden covers roughly two hectares and contains various rambling pathways, hidden pavilions, and classic flora. It is a good place to escape the bustling modern city outside. Take note of the hundreds of plaques and inscriptions written by well-known individuals, as well as the park°Øs collection of stone carvings. Yuyuan Bazaar, located nearby, is good to browse for antiques and souvenirs."
  },
  {
    "name": "The Bund",
    "openTime": "0,24",
    "spendingTime": 4,
    "rating": 4,
    "type": "Sightseeing",
    "img": "bund.jpg",
    "description": "Arguably Shanghai's most-famous tourist attraction, the Bund is a waterfront promenade and famous business district in central Shanghai. Historically, the Bund was the city°Øs main financial and trading center, and was located within the Shanghai International Settlement, an area under nominal British control between 1843 and 1941. The walking areas extend roughly 1.6 km along the west bank of the Huangpu River. Owing to its historic status and zoning restrictions, the Bund contains fantastic examples of classic Shanghai architecture. For this reason, it is a popular spot for photography, offering the best views across the river to Shanghai°Øs modern skyline in Lujiazui. No visit to Shanghai would be complete without a visit to the Bund."
  },
  {
    "name": "Shanghai Wild Animal Park",
    "openTime": "8,17",
    "spendingTime": 5,
    "rating": 4.7,
    "type": "Sightseeing",
    "img": "shzoo.jpg",
    "description": "Opened in 1995, the Shanghai Wild Animal Park was one of the first AAAAA (highest-rated) tourist attractions in China. Visitors can see more than 10,000 exotic animals, most of which are rare wildlife, including giant pandas, snub-nosed monkeys, takins, crested ibis, giraffes, zebras, antelopes, white rhinos, and cheetahs. The park is divided into drive-through and pedestrian areas. The drive-through portions are modeled on safari parks where animals roam through natural habitats. Another popular attraction is the park°Øs tiger feeding pen where you can witness up close giant tigers. With lots to see and do, the Shanghai Wild Animal Park is fun for people of all ages."
  },
  {
    "name": "Shanghai Science and Technology Museum",
    "openTime": "9,17",
    "spendingTime": 3,
    "rating": 4.7,
    "type": "Sightseeing",
    "img": "shsm.jpg",
    "description": "Located near Century Park, the Shanghai Science and Technology Museum (SSTM) is the city°Øs premiere museum dedicated to enhancing public awareness of and engagement with science and technology. The museum°Øs large collection covers everything from geology and plate tectonics to space exploration and human health. With many interactive features, SSTM is a great destination for families with young children. No matter who you are, there is something to spark your curiosity. You won°Øt regret spending a few hours exploring this vast museum."
  },
  {
    "name": "Nanjing Road Pedestrian Street",
    "openTime": "0,24",
    "spendingTime": 4,
    "rating": 5,
    "type": "Entertainment",
    "img": "shnjroad.jpg",
    "description": "Nanjing Road Pedestrian Street runs roughly east-west for 1,500 m from People°Øs Square to the Bund. Known to some as China°Øs Fifth Avenue, it is a premiere shopping destination with many well-known brands filling the retail space. After dark the street glows with light from all the signage and store displays. On most nights, the area is packed with a mixture of locals and tourists hunting for bargains or trying to find a table at one of the many restaurants. Given its central location and popularity, Nanjing Road Pedestrian Street should be on anyone°Øs must-see list of Shanghai attractions."
  },
  {
    "name": "Top of Shanghai Observatory",
    "openTime": "8,22",
    "spendingTime": 3,
    "rating": 4,
    "type": "Entertainment",
    "img": "Observatory.jpg",
    "description": "The Top of Shanghai Observatory is the observation desk in the Shanghai Tower, the world's second tallest building. Located in the Lujiazui section of Pudong, the Top of Shanghai Observatory is currently the world's tallest observation desk. Visitors can rocket up the 118 floors in elevators that travel 74 km/h! You will then enjoy stunning views of Shanghai from the 360-degree observation deck. On clear days it's nothing short of breathtaking. Access to the observation desk includes entry to the Top of Shanghai Exhibition Hall featuring information about the planning and construction of Shanghai Tower. Shutter bugs won't want to miss the chance to snap some truly memorable photos."
  },
  {
    "name": "Century Park",
    "openTime": "7,18",
    "spendingTime": 3,
    "rating": 4,
    "type": "Entertainment",
    "img": "centrypark.jpg",
    "description": "Located in the heart of Pudong, Century Park is one of the largest city parks in Shanghai. Covering some 346 acres, Century Park is a great place to escape the hectic city beyond. There are numerous lawns, gardens, and lakes throughout. One can easily spend several hours walking the many paths and visiting the park's distinctive sections. Designed by a British environmental consultancy, Century Park blends English, Japanese, and Chinese styles to create a harmonious and distinctive urban green space. Century Park offers something for everyone and is truly an oasis of tranquillity in the center of Shanghai. Taking some time to visit is well worth it."
  }]
};