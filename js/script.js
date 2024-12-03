/* jshint esversion: 6 */

const properties = [
    {
        id: 1,
        name: "Parauwanui Beach Getaway",
        location: "1824 Pataua North Road, Whangārei 0175",
        beachName: "Parauwanui Beach",
        description: "Welcome to Parauwanui Beach Getaway, where luxury meets coastal charm on the stunning shores of Ngunguru Bay. Our boutique hotel offers a haven of relaxation and sophistication, with each room elegantly appointed and thoughtfully designed to maximize comfort and ocean views. Enjoy waking up to the sound of waves crashing on the pristine beach just steps away. Indulge in locally sourced cuisine at our restaurant overlooking the Pacific Ocean or unwind with a cocktail at our stylish beachfront bar. Whether you're seeking adventure or tranquility, Parauwanui Beach Getaway promises a rejuvenating escape amidst nature's beauty.",
        price: "$157",
        peopleMin: 1,
        peopleMax: 2,
        minStay: 1,
        maxStay: 5,
        accommodationType: "Hotel",
        beachType: "<i class='fa-solid fa-water'></i> Surf Friendly",
        longitude: 174.51953345517197,
        latitude: -35.70839431334712, 
        image: "../imgs/hotel1.webp",
    },
    {
        id: 2,
        name: "Matauri Bay Backpackers",
        location: "Matauri Bay Road, Matauri Bay 0478",
        beachName: "Matauri Bay",
        description: "Welcome to Matauri Bay Backpackers, your laid-back haven nestled in the stunning Matauri Bay on New Zealand's Northland coast. Embrace the spirit of adventure and relaxation at our hostel, just a short walk from the white sands and crystal-clear waters of Matauri Bay Beach. Choose from comfortable dormitory-style rooms or private cabins, all equipped with modern amenities and surrounded by lush greenery. Socialize with fellow travelers in our communal lounge or outdoor BBQ area, or unwind on our sunny deck with views of the Pacific Ocean. Explore nearby attractions like the historic Rainbow Warrior memorial or indulge in water sports and hiking adventures. Matauri Bay Backpackers invites you to experience the beauty and charm of Northland in a welcoming and affordable setting.",
        price: "$30",
        peopleMin: 1,
        peopleMax: 1,
        minStay: 1,
        maxStay: 10,
        accommodationType: "Hostel",
        beachType: "<i class='fa-solid fa-droplet'></i> Snorkeling <br> <i class='fa-solid fa-fish'> </i> Fishing",
        longitude: 173.91551587106483,
        latitude: -35.02795539267217,
        image: "../imgs/hostel1.webp",
    },
    {
        id: 3,
        name: "Ahipara Motel",
        location: "245 Foreshore Road, Ahipara 0481",
        beachName: "Ahipara Beach",
        description: "Nestled in the tranquil coastal town of Ahipara, our motel offers a perfect retreat with breathtaking views of Ninety Mile Beach. Ahipara Motel combines modern comfort with a touch of Kiwi hospitality, featuring well-appointed rooms equipped with amenities like free Wi-Fi and flat-screen TVs. Ideal for adventurers, surfers, and families, we're just moments away from the beach and local attractions, ensuring a memorable stay. Relax on your private balcony, explore nearby hiking trails, or unwind in our garden. Whether you're here to surf the legendary waves or simply soak in the serene atmosphere, Ahipara Motel promises an unforgettable Northland experience.",
        price: "$90",
        peopleMin: 2,
        peopleMax: 4,
        minStay: 3,
        maxStay: 10,
        accommodationType: "Motel",
        beachType: "<i class='fa-solid fa-child-reaching'></i> Kid Friendly <br> <i class='fa-solid fa-car'></i> Vehicle Access <br> <i class='fa-solid fa-water'></i> Surf Friendly",
        longitude: 173.15571301435372,
        latitude: -35.16341860466816,
        image: "../imgs/motel1.webp",
    },
    {
        id: 4,
        name: "Maitai Bay Holiday Home",
        location: "Karikari Peninsula 0483",
        beachName: "Maitai Bay",
        description: "Welcome to our idyllic holiday home at Maitai Bay, a serene haven on the pristine shores of the Karikari Peninsula. Nestled amidst native bush, our retreat offers panoramic views of turquoise waters and golden sands. The spacious, tastefully furnished house features a fully equipped kitchen, comfortable bedrooms, and a cozy living area with expansive windows framing the ocean vista. Step outside to a sun-drenched deck for al fresco dining or stargazing by night. Just a short stroll to the beach, indulge in snorkeling, fishing, or beachcombing. Perfect for families or romantic getaways, Maitai Bay promises tranquility and natural beauty at its finest.",
        price: "$240",
        peopleMin: 1,
        peopleMax: 4,
        minStay: 2,
        maxStay: 15,
        accommodationType: "House",
        beachType: "<i class='fa-solid fa-child-reaching'></i> Kid Friendly <br> <i class='fa-solid fa-droplet'></i> Snorkeling",
        longitude: 173.40753253758675,
        latitude: -34.82910899451047, 
        image: "../imgs/house1.webp",
    },

    //extras Hotel
    {
        id: 5,
        name: "Ocean Breeze Hotel",
        location: "4704301, Whangārei Heads 0174",
        beachName: "Ocean Beach",
        description: "Welcome to Ocean Breeze Motel, where coastal charm meets comfort in the heart of Ocean Beach. Nestled just steps away from the golden sands and rolling waves of this iconic beach, our motel offers a perfect retreat for beach lovers and adventurers alike. Choose from our range of well-appointed rooms and suites, each featuring modern amenities and some with ocean views. Relax in our courtyard garden or take a short stroll to the beach for a day of sun and surf. Whether you're here to unwind or explore the nearby wineries and attractions, Ocean Breeze Motel promises a memorable stay on the scenic Ocean Beach coastline.",
        price: "$157",
        peopleMin: 1,
        peopleMax: 2,
        minStay: 1,
        maxStay: 5,
        accommodationType: "Hotel",
        beachType: "<i class='fa-solid fa-water'></i> Surf Friendly <br> <i class='fa-solid fa-child-reaching'></i> Kid Friendly",
        longitude: 174.57210900490173,
        latitude: -35.8386453316467,
        image: "../imgs/hotel2.webp",
    },
    {
        id: 6,
        name: "Mangonui Bay Resort",
        location: "57 Mill Bay Road, Mangōnui 0420",
        beachName: "Mill Bay",
        description: "Discover tranquility at Mangonui bay Resort, nestled amidst the rugged beauty of Northland's coastline. Our resort offers a serene escape with breathtaking views of the Pacific Ocean and lush native bush surroundings. Immerse yourself in comfort with stylishly appointed rooms and suites, each designed to ensure relaxation and rejuvenation. Enjoy locally inspired cuisine at our restaurant, featuring fresh seafood and regional specialties, or unwind with a cocktail at the bar overlooking the ocean. Explore nearby pristine beaches, embark on coastal hikes, or simply relax by the poolside oasis. Mangonui Bay Resort invites you to experience Northland's natural wonders in luxurious comfort.",
        price: "$157",
        peopleMin: 1,
        peopleMax: 2,
        minStay: 1,
        maxStay: 5,
        accommodationType: "Hotel",
        beachType: "<i class='fa-solid fa-fish'> </i> Fishing <br> <i class='fa-solid fa-droplet'></i> Snorkeling",
        longitude: 173.5288464793455,
        latitude: -34.98962965986871,
        image: "../imgs/motel4.webp",
    },
    {
        id: 7,
        name: "Bayview Retreat Hotel",
        location: "130 Marsden Road, Bay Of Islands, Paihia 0200",
        beachName: "Paihia Beach",
        description: "Welcome to Bayview Retreat Hotel, nestled in the heart of Paihia overlooking the tranquil waters of the Bay of Islands. Immerse yourself in comfort and luxury with our elegantly appointed rooms and suites, each offering panoramic views of the bay or lush gardens. Indulge in fresh, locally sourced cuisine at our waterfront restaurant, or unwind with a drink at the bar while soaking in stunning sunset vistas. Relax by the outdoor pool, rejuvenate in the spa, or explore the vibrant Paihia town center just a short stroll away. Whether you're here for adventure or relaxation, Bayview Retreat Hotel promises an unforgettable stay in paradise.",
        price: "$157",
        peopleMin: 1,
        peopleMax: 2,
        minStay: 1,
        maxStay: 5,
        accommodationType: "Hotel",
        beachType: "<i class='fa-solid fa-child-reaching'></i> Kid Friendly",
        longitude: 174.0869762757042,
        latitude: -35.27868259519467, 
        image: "../imgs/hotel4.webp",
    },
    {
        id: 8,
        name: "Pukenui Coastal Resort",
        location: "3 Pukenui Wharf Road, Pukenui 0484",
        beachName: "Houhora Beach",
        description: "Welcome to Pukenui Coastal Resort, a hidden gem nestled along New Zealand's stunning Northland coastline. Surrounded by pristine beaches and native bush, our resort offers a peaceful retreat for travelers seeking tranquility and natural beauty. Choose from our range of spacious rooms and suites, each elegantly appointed with modern amenities and views of the sea or garden. Enjoy delicious meals at our restaurant showcasing local flavors, or unwind with a drink at the bar overlooking the ocean. Explore nearby attractions such as Ninety Mile Beach or Cape Reinga, or simply relax by our outdoor pool and soak in the serenity of Pukenui Coastal Resort.",
        price: "$157",
        peopleMin: 1,
        peopleMax: 2,
        minStay: 1,
        maxStay: 5,
        accommodationType: "Hotel",
        beachType: "<i class='fa-solid fa-fish'></i> Fishing <br> <i class='fa-solid fa-child-reaching'></i> Kid Friendly",
        longitude: 173.1181487332489,
        latitude: -34.814152580472665, 
        image: "../imgs/hotel5.webp",
    },
    {
        id: 9,
        name: "Serene Sands Resort",
        location: "3 Rangiputa Road, Karikari Peninsula 0483",
        beachName: "Rangiputa Beach",
        description: "Nestled on the pristine shores of Rangiputa Beach, Serene Sands Resort offers a luxurious escape amidst the natural beauty of the Northland region. With its panoramic views of the azure waters and golden sands, this boutique hotel combines contemporary comfort with traditional Maori-inspired architecture. Each suite is elegantly furnished, featuring private balconies or terraces that overlook either the tranquil beachfront or the lush native gardens. Guests can indulge in gourmet cuisine at the oceanfront restaurant, relax with holistic treatments at the spa, or explore the nearby trails and water activities. Serene Sands Resort promises a rejuvenating retreat for those seeking tranquility and luxury in Rangiputa.",
        price: "$157",
        peopleMin: 1,
        peopleMax: 2,
        minStay: 1,
        maxStay: 5,
        accommodationType: "Hotel",
        beachType: "<i class='fa-solid fa-car'></i> Vehicle Access <br> <i class='fa-solid fa-child-reaching'></i> Kid Friendly",
        longitude: 173.29624153248,
        latitude: -34.88001610996153,
        image: "../imgs/hotel6.webp",
    },

    //extras Hostels
    {
        id: 10,
        name: "Ōmāpere Hostel",
        location: "334 Hokianga Harbour Drive, Ōmāpere 0473",
        beachName: "Ōmāpere Beach",
        description: "Welcome to Ōmāpere Hostel, nestled in the picturesque coastal village of Ōmāpere on the shores of Hokianga Harbour. Our hostel offers a warm and inviting atmosphere, perfect for travelers seeking a laid-back retreat in Northland. Choose from comfortable dormitory rooms or private cabins, all equipped with modern amenities and views of the tranquil harbor or lush surroundings. Socialize in our communal lounge or outdoor BBQ area, swap stories with fellow adventurers, or relax on our sunny deck with views of the harbor. Explore nearby attractions such as the giant sand dunes of the Hokianga or indulge in water sports and cultural experiences. Ōmāpere Hostel invites you to experience the beauty and charm of Ōmāpere in a friendly and affordable setting.",
        price: "$30",
        peopleMin: 1,
        peopleMax: 1,
        minStay: 1,
        maxStay: 10,
        accommodationType: "Hostel",
        beachType: "<i class='fa-solid fa-child-reaching'></i> Kid Friendly",
        longitude: 173.3903049060925,
        latitude: -35.53177836311934, 
        image: "../imgs/hostel2.webp",
    },
    {
        id: 11,
        name: "Russell Bay Hostel",
        location: "1 James Street, Russell 0202",
        beachName: "Long Beach",
        description: "Welcome to Russell Bay Hostel, situated in the heart of Russell, New Zealand's charming historic town. Our hostel offers budget-friendly accommodation with a warm and inviting atmosphere. Choose from comfortable dormitory rooms or private rooms, each equipped with modern amenities and some offering views of the bay. Relax in our communal lounge, swap stories with fellow travelers, or cook up a storm in the shared kitchen facilities. Stroll to nearby beaches, cafes, and Russell's historic sites, or embark on adventures like sailing in the Bay of Islands. Russell Bay Hostel invites you to explore the beauty and history of the Bay of Islands while enjoying a cozy and friendly stay.",
        price: "$30",
        peopleMin: 1,
        peopleMax: 1,
        minStay: 1,
        maxStay: 10,
        accommodationType: "Hostel",
        beachType: "<i class='fa-solid fa-child-reaching'></i> Kid Friendly",
        longitude: 174.12551214050876,
        latitude: -35.259408511021086,
        image: "../imgs/hostel3.webp",
    },
    {
        id: 12,
        name: "Henderson Bay Beach Hostel",
        location: "494 Henderson Bay Road, Houhora 0484",
        beachName: "Henderson Bay Beach",
        description: "Welcome to Henderson Bay Beach Hostel, a tranquil retreat nestled on the stunning coastline of Northland. Just a short walk from the pristine sands and crystal-clear waters of Henderson Bay, our hostel offers a perfect blend of relaxation and adventure. Choose from cozy dormitory rooms or private cabins, all comfortably furnished and surrounded by native bush. Socialize in our communal lounge, barbecue under the stars, or relax on the sun-drenched deck with views of the bay. Ideal for nature lovers and beachgoers, Henderson Bay Beach Hostel provides a laid-back atmosphere to unwind and explore the natural beauty of Northland's coastal treasures.",
        price: "$30",
        peopleMin: 1,
        peopleMax: 1,
        minStay: 1,
        maxStay: 10,
        accommodationType: "Hostel",
        beachType: "<i class='fa-solid fa-fish'></i> Fishing <br> <i class='fa-solid fa-water'></i> Surf Friendly",
        longitude: 173.10849402814793,
        latitude: -34.742895316487825,
        image: "../imgs/hostel4.webp",
    },
    {
        id: 13,
        name: "Tokerau Backpackers Lodge",
        location: "Melissa Road, Karikari Peninsula 0483",
        beachName: "Tokerau Beach",
        description: "Tokerau Backpackers Lodge welcomes travelers with its laid-back atmosphere and friendly hospitality in the heart of Tokerau. Located just a short walk from Tokerau Beach, renowned for its crystal-clear waters and gentle waves, this cozy hostel offers budget-friendly accommodation ideal for solo adventurers and groups alike. The lodge features a mix of dormitory-style rooms and private cabins, each comfortably furnished and equipped with modern amenities. Guests can unwind in the communal lounge, cook meals together in the fully equipped kitchen, or enjoy a barbecue under the starlit skies in the outdoor garden area. Tokerau Backpackers Lodge provides a perfect base for exploring the scenic beauty and cultural richness of the Far North, ensuring a memorable stay for budget-conscious travelers.",
        price: "$30",
        peopleMin: 1,
        peopleMax: 1,
        minStay: 1,
        maxStay: 10,
        accommodationType: "Hostel",
        beachType: "<i class='fa-solid fa-car'></i> Vehicle Access <br> <i class='fa-solid fa-water'></i> Surf Friendly",
        longitude: 173.3698564153485,
        latitude: -34.888078840697936,
        image: "../imgs/hostel5.webp",
    },
    {
        id: 14,
        name: "Bayview Backpackers",
        location: "327 State Highway 10, Cable Bay 0420",
        beachName: "Cable Bay",
        description: "Bayview Backpackers offers affordable and cozy accommodation just moments from Cable Bay Beach. Ideal for budget-conscious travelers, it features dormitory rooms and private suites with modern amenities. Guests can relax in the communal lounge, enjoy outdoor BBQs, or explore nearby attractions like Mangonui Village and Karikari Peninsula. Perfect for solo travelers and groups alike, Bayview Backpackers ensures a comfortable stay amidst Cable Bay's scenic charm.",
        price: "$30",
        peopleMin: 1,
        peopleMax: 1,
        minStay: 1,
        maxStay: 10,
        accommodationType: "Hostel",
        beachType: "<i class='fa-solid fa-water'></i> Surf Friendly <br> <i class='fa-solid fa-fish'></i> Fishing",
        longitude: 173.4862948766295,
        latitude: -34.990942754045776, 
        image: "../imgs/hostel6.webp",
    },

    //extras Motels
    {
        id: 15,
        name: "Hukatere Sands Motel",
        location: "809 Hukatere Road, Houhora 0460",
        beachName: "Ninety Mile Beach",
        description: "Welcome to Hukatere Beach Motel, your gateway to the pristine beauty of New Zealand's west coast. Nestled near the expansive dunes and turquoise waters of Hukatere Beach, our motel offers comfortable and affordable accommodation for travelers seeking a peaceful retreat. Choose from our range of cozy units, each equipped with modern amenities and some with views of the beach. Relax in our communal lounge or outdoor seating area, perfect for enjoying the sea breeze and stunning sunsets. Whether you're here to explore the nearby sand dunes, fish in the surf, or simply relax on the beach, Hukatere Beach Motel provides a convenient and welcoming base for your coastal adventure.",
        price: "$90",
        peopleMin: 2,
        peopleMax: 4,
        minStay: 3,
        maxStay: 10,
        accommodationType: "Motel",
        beachType: "<i class='fa-solid fa-fish'></i> Fishing <br> <i class='fa-solid fa-car'></i> Vehicle Access <br> <i class='fa-solid fa-water'></i> Surf Friendly",
        longitude: 173.09182105056422,
        latitude: -34.89839130029935,
        image: "../imgs/motel2.webp",
    },
    {
        id: 16,
        name: "Coastal Breeze Motel",
        location: "17 Whatuwhiwhi Road, Kaitaia 0483",
        beachName: "Parakerake",
        description: "Nestled in the tranquil village of Whatuwhiwhi, Coastal Breeze Motel offers a relaxing retreat with panoramic views of Doubtless Bay. Just a stone's throw from the pristine sands of Tokerau Beach, this charming motel provides comfortable and affordable accommodation for families, couples, and solo travelers alike. Each spacious unit is tastefully decorated and equipped with modern amenities, including kitchenettes for added convenience. Guests can start their day with a leisurely breakfast on their private balcony or patio, soaking in the fresh sea air and stunning sunrise views. The motel's central location makes it an ideal base for exploring nearby attractions such as Karikari Peninsula and Matai Bay. Whether you're here for a weekend getaway or an extended holiday, Coastal Breeze Motel promises a warm welcome and a memorable stay on the picturesque Northland coast.",
        price: "$90",
        peopleMin: 2,
        peopleMax: 4,
        minStay: 3,
        maxStay: 10,
        accommodationType: "Motel",
        beachType: "<i class='fa-solid fa-child-reaching'></i> Kid Friendly <br> <i class='fa-solid fa-droplet'></i> Snorkeling",
        longitude: 173.39258311389653,
        latitude: -34.87492838601033,
        image: "../imgs/motel3.webp",
    },
    {
        id: 17,
        name: "Waipapakauri Waves Motel",
        location: "6 Matai Street, Waipapakauri 0486",
        beachName: "Ninety Mile Beach",
        description: "Welcome to Waipapakauri Waves Motel, ideally located near the tranquil shores of Northland's Waipapakauri Beach. Our motel offers a cozy and inviting atmosphere, perfect for families, couples, and solo travelers alike. Enjoy comfortable and well-equipped units, each designed to ensure a relaxing stay with amenities such as free Wi-Fi and kitchen facilities. Take a short stroll to the beach for a day of sun and surf. Whether you're here to relax or explore, Waipapakauri Waves Motel provides a convenient and welcoming base for your Northland adventure.",
        price: "$90",
        peopleMin: 2,
        peopleMax: 4,
        minStay: 3,
        maxStay: 10,
        accommodationType: "Motel",
        beachType: "<i class='fa-solid fa-water'></i> Surf Friendly <br> <i class='fa-solid fa-fish'></i> Fishing <br> <i class='fa-solid fa-car'></i> Vehicle Access",
        longitude: 173.17171936139968,
        latitude: -35.038165979920706, 
        image: "../imgs/hotel3.webp",
    },
    {
        id: 18,
        name: "Sunset View Motel",
        location: "87 State Highway 10, Coopers Beach 0420",
        beachName: "Coopers Beach",
        description: "Perched atop a gentle rise overlooking the glistening waters of Coopers Beach, Sunset View Motel offers a tranquil retreat on the stunning Doubtless Bay coast. Each well-appointed unit features modern comforts including kitchenettes, ensuring a relaxing stay for families, couples, and solo travelers alike. Guests can unwind on their private balcony or patio, soaking in panoramic views of the bay's turquoise waters and golden sands. Just a short stroll from the beach, the motel provides easy access to swimming, fishing, and beachcombing adventures. Sunset View Motel is your perfect base for exploring Northland's natural beauty and local attractions.",
        price: "$90",
        peopleMin: 2,
        peopleMax: 4,
        minStay: 3,
        maxStay: 10,
        accommodationType: "Motel",
        beachType: "<i class='fa-solid fa-child-reaching'></i> Kid Friendly",
        longitude: 173.5133231636232,
        latitude: -34.99017813115105,
        image: "../imgs/motel5.webp",
    },
    {
        id: 19,
        name: "Bay Breeze Motel",
        location: "16 Williams Road, Paihia 0200",
        beachName: "Paihia Beach",
        description: "Welcome to Bay Breeze Motel, your comfortable retreat in the heart of Paihia, gateway to the spectacular Bay of Islands. Nestled just a stone's throw from the waterfront and bustling Paihia Wharf, our motel offers modern, well-appointed units suitable for families, couples, and solo travelers alike. Each room is tastefully furnished and equipped with amenities like kitchenettes, ensuring a relaxing stay. Guests can unwind in our sunny courtyard or take a short stroll to enjoy local cafes, restaurants, and adventure activities. Whether you're here to relax or explore, Bay Breeze Motel provides the perfect base for your Bay of Islands adventure.",
        price: "$90",
        peopleMin: 2,
        peopleMax: 4,
        minStay: 3,
        maxStay: 10,
        accommodationType: "Motel",
        beachType: "<i class='fa-solid fa-child-reaching'></i> Kid Friendly",
        longitude: 174.09585610525056,
        latitude: -35.28715360705407,
        image: "../imgs/motel6.webp",
    },

    //extras Houses
    {
        id: 20,
        name: "Taupō Bay Escape",
        location: "6 Marlin Drive, Taupō Bay 0494",
        beachName: "Taupō Bay Beach",
        description: "Welcome to Taupō Bay Escape, your private sanctuary nestled in the picturesque beauty of Northland's coast. This charming holiday home offers panoramic views of Taupō Bay and its turquoise waters, providing a serene backdrop for relaxation and adventure. The spacious and tastefully decorated interior features modern amenities, a fully equipped kitchen, and comfortable living areas ideal for families and groups. Step outside to a sun-drenched deck where you can enjoy al fresco dining or simply soak in the breathtaking sunsets. With direct access to the beach and nearby nature trails, Taupō Bay Escape promises a tranquil retreat amidst nature's splendor.",
        price: "$240",
        peopleMin: 1,
        peopleMax: 4,
        minStay: 2,
        maxStay: 15,
        accommodationType: "House",
        beachType: "<i class='fa-solid fa-child-reaching'></i> Kid Friendly",
        longitude: 173.70949404721185,
        latitude: -34.992364012087755, 
        image: "../imgs/house2.webp",
    },
    {
        id: 21,
        name: "Hihi Haven Retreat",
        location: "58 Hihi Beach Road, Hihi 0494",
        beachName: "Hihi Beach",
        description: "Welcome to Hihi Haven Retreat, a tranquil holiday home nestled in the serene coastal village of Hihi. Surrounded by lush gardens and just a short walk from the pristine waters of Doubtless Bay, this charming retreat offers peace and relaxation. The home features spacious and tastefully decorated interiors, including a fully equipped kitchen, cozy living areas, and comfortable bedrooms with views of the garden or sea. Enjoy outdoor dining on the sun-drenched patio or relax in the private garden oasis. Perfect for families or couples seeking a getaway, Hihi Haven Retreat provides a peaceful haven to explore the beauty of Northland's coastal treasures.",
        price: "$240",
        peopleMin: 1,
        peopleMax: 4,
        minStay: 2,
        maxStay: 15,
        accommodationType: "House",
        beachType: "<i class='fa-solid fa-fish'></i> Fishing <br> <i class='fa-solid fa-child-reaching'></i> Kid Friendly",
        longitude: 173.53800759506737,
        latitude: -34.97410180861059, 
        image: "../imgs/house3.webp",
    },
    {
        id: 22,
        name: "Rarawa Beach Retreat",
        location: "Rarawa Beach Road, Ngataki 0484",
        beachName: "Raraw Beach",
        description: "Welcome to Rarawa Beach Retreat, your exclusive haven nestled along the pristine shores of Rarawa Beach in Northland. This charming beach house offers unparalleled views of the turquoise waters and white sandy beaches, promising a serene escape from the hustle and bustle of everyday life. The house features spacious and elegantly appointed interiors, including a fully equipped kitchen, cozy living areas, and comfortable bedrooms with ocean views. Step outside to a sun-drenched deck where you can relax with a book or enjoy alfresco dining with the sound of waves in the background. Perfect for families or couples seeking a secluded getaway, Rarawa Beach Retreat provides the perfect setting to reconnect with nature and create lasting memories by the sea.",
        price: "$240",
        peopleMin: 1,
        peopleMax: 4,
        minStay: 2,
        maxStay: 15,
        accommodationType: "House",
        beachType: "<i class='fa-solid fa-car'></i> Vehicle Access <br> <i class='fa-solid fa-fish'></i> Fishing <br> <i class='fa-solid fa-water'></i> Surf Friendly",
        longitude: 173.08288905604715,
        latitude: -34.72571084736051, 
        image: "../imgs/house4.webp",
    },
    {
        id: 23,
        name: "Karikari Bliss Bach",
        location: "516 Matai Bay Road, Karikari Peninsula 0483",
        beachName: "Karikari Beach",
        description: "Karikari Bliss Bach offers a serene escape nestled amidst the natural beauty of Karikari Beach. This cozy holiday retreat is perfect for families and groups seeking a peaceful getaway on the stunning Karikari Peninsula. The bach is just a short stroll from the white sands and turquoise waters of Karikari Beach, where guests can swim, sunbathe, or indulge in water sports. The accommodation features a relaxed beach-style decor with comfortable furnishings and modern amenities, including a fully equipped kitchen and spacious living areas. Enjoy lazy afternoons on the expansive deck, soaking in panoramic views of the bay and surrounding countryside. Karikari Bliss Bach is an ideal base for exploring nearby attractions such as Matai Bay, Tokerau Beach, and local wineries. Whether you're seeking adventure or relaxation, this bach provides a perfect retreat for your holiday on the beautiful Northland coast.",
        price: "$240",
        peopleMin: 1,
        peopleMax: 4,
        minStay: 2,
        maxStay: 15,
        accommodationType: "House",
        beachType: "<i class='fa-solid fa-child-reaching'></i> Kid Friendly",
        longitude: 173.3964429041258,
        latitude: -34.829594570607654,
        image: "../imgs/house5.webp",
    },
    {
        id: 24,
        name: "Ahipara Seaside Retreat",
        location: "6 Korora Street, Ahipara 0481",
        beachName: "Ahipara Beach",
        description: "Ahipara Seaside Retreat offers a secluded haven nestled along the pristine shores of Ahipara Beach. This charming holiday home is ideal for families and small groups seeking a peaceful escape amidst Northland's natural beauty. The house features spacious living areas and comfortable bedrooms, complemented by a fully equipped kitchen for easy meal preparation. Guests can relax on the expansive deck, enjoying panoramic views of the Tasman Sea and stunning sunsets. Steps away from the beach, it's perfect for swimming, surfing, and beach walks. Ahipara Seaside Retreat promises a relaxing and memorable stay in this picturesque coastal community.",
        price: "$240",
        peopleMin: 1,
        peopleMax: 4,
        minStay: 2,
        maxStay: 15,
        accommodationType: "House",
        beachType: "<i class='fa-solid fa-child-reaching'></i> Kid Friendly <br> <i class='fa-solid fa-car'></i> Vehicle Access <br> <i class='fa-solid fa-water'></i> Surf Friendly",
        longitude: 173.17171936139968,
        latitude: -35.038165979920706, 
        image: "../imgs/house6.webp",
    }
];



$(document).ready(function () {
    // Fullpage Init:
    new fullpage("#fullpage", {
        licenseKey: "gplv3-license",
        autoScrolling: true,
        scrollHorizontally: true,
        controlArrows: false,
        fixedElements: "#navbar",
    });

    fullpage_api.setAllowScrolling(true);

    // MapBox Init:
    mapboxgl.accessToken = "pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJjbHY0ZW91YnYwOGV3MmlwOGQ5b3l3a3J3In0.EFWZEAWA13ehFAw5jdLqJA";

    function initaliseMap(longitude, latitude) {
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [longitude, latitude],
            zoom: 15
        });

        new mapboxgl.Marker()
            .setLngLat([longitude, latitude])
            .addTo(map);
    }

    // Swiper Init:
    let swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
    });

    // Validate Filters/Form
    function validateFilters() {
        let isValid = true;
        let errorMessage = "";

        if ($('#startDate').val() === "") {
            isValid = false;
            errorMessage += "Please select a start date.<br>";
        }
        if ($('#endDate').val() === "") {
            isValid = false;
            errorMessage += "Please select an end date.<br>";
        }

        if (!isValid) {
            $("#errorMessage").html(errorMessage).show();
        } else {
            $("#errorMessage").hide();
        }

        return isValid;
    }


    // DatePickers:
    $("#startDate").datepicker({
        dateFormat: "dd/mm/yy"
    });
    $("#endDate").datepicker({
        dateFormat: "dd/mm/yy"
    });


    //Calculate Days Staying Function
    function calculateDays() {
        const startDate = $("#startDate").datepicker("getDate");
        const endDate = $("#endDate").datepicker("getDate");

        if (startDate && endDate) {
            // calculate the difference:
            const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
            // convert to days:
            const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            return diffDays;
        } else {
            return 0;
        }
    }

    //sort functions
    //sort books by price high to low
    function sortPropertiesHighToLow(properties) {
        return properties.sort((a, b) => {
            const priceA = parseFloat(a.price.replace(/\$/g, ''));
            const priceB = parseFloat(b.price.replace(/\$/g, ''));
            return priceB - priceA;
        });
    }
    //sort books by price low to high
    function sortPropertiesLowToHigh(properties) {
        return properties.sort((a, b) => {
            const priceA = parseFloat(a.price.replace(/\$/g, ''));
            const priceB = parseFloat(b.price.replace(/\$/g, ''));
            return priceA - priceB;
        });
    }

    function filterAndDisplayProperties() {
        const guests = $("#guests").val();
        const accommodation = $("#accommodation").val();
        const beach = $("#beach").val();
        const diffDays = calculateDays();

        const filteredProperties = properties.filter(property => {
            return (property.peopleMin <= guests) &&
                (property.peopleMax >= guests) &&
                (property.accommodationType === accommodation || accommodation === "") &&
                (property.beachType === beach || beach === "") &&
                (property.minStay <= diffDays) &&
                (property.maxStay >= diffDays);
        });

        populateResults(filteredProperties);

        $("#sortHighToLow").click(function () {
            const sortedProperties = sortPropertiesHighToLow(filteredProperties);
            populateResults(sortedProperties);
        });

        $("#sortLowToHigh").click(function () {
            const sortedProperties = sortPropertiesLowToHigh(filteredProperties);
            populateResults(sortedProperties);
        });
    }

   

    //populate cards function
    function populateResults(filteredResults) {
        $("#results").html("");
        if (filteredResults.length === 0) {
            $("#results").append(`<p class="no-results">No Results Found</p>`);
        } else {
            // if filtered results is not empty
            filteredResults.forEach(property => {
                //create a card for that property
                const card = `
                    <div class="property-card" data-id="${property.id}"> 
                            <img src="${property.image}" alt="${property.name} image" class="card-image">
                        <div class="card-info">
                            <h2>${property.name}</h2>
                            <h4>${property.price} per night</h4>
                        </div>                    
                        <div class="card-bottom">
                            <h6>QUALMARK</h6>
                        </div>
                    </div>
            `;
                $("#results").append(card);
            });
        }
        fullpage_api.reBuild();

        $(".property-card").click(function () {
            const propertyId = $(this).data('id');
            populateSelectedOutput(propertyId);
            fullpage_api.moveTo(1, 2);
        });

    }


    // Search Button Click:
    $("#searchBtn").click(function (e) {
        e.preventDefault();
        if (validateFilters()) {
            fullpage_api.moveTo(1, 1);
            filterAndDisplayProperties();
        }
    });

    //Back Buttons
    $("#toForm").click(function () {
        fullpage_api.moveTo(1, 0);
    });

    $("#toProperties").click(function () {
        fullpage_api.moveTo(1, 1);
    });

    function populateSelectedOutput(selectedId) {
        const outputDiv = $("#selectedOutput");

        const detailsPage = `
            <div class="details">
                <h1>${properties[selectedId - 1].name}</h1>
                <h4>${properties[selectedId - 1].location} <br> ${properties[selectedId - 1].price} per night</h4>
                <div class="description">
                    <p>${properties[selectedId - 1].description}</p>
                    <div class="beach-details">
                        <h5>${properties[selectedId - 1].beachName}</h5>
                        <p>${properties[selectedId - 1].beachType}</p>
                    </div>
                </div>
                <div class="swiper">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide"><img src="${properties[selectedId - 1].image}" alt="${properties[selectedId - 1].name} image 1"></div>                              
                        <div class="swiper-slide"><img src="${properties[selectedId - 1].image}" alt="${properties[selectedId - 1].name} image 2"></div>
                        <div class="swiper-slide"><img src="${properties[selectedId - 1].image}" alt="${properties[selectedId - 1].name} image 3"></div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <h3>Estimated Cost</h3>
                <div class="cost-container">
                    <div class="menu-selection">
                        <h5> Meal Options</h5>
                        <input type="checkbox" id="breakfast" name="breakfast" value="breakfast">
                        <label for="breakfast"> Breakfast: $10 per person</label><br>
                        <input type="checkbox" id="lunch" name="lunch" value="lunch">
                        <label for="lunch"> Lunch: $15 per person</label><br>
                        <input type="checkbox" id="dinner" name="dinner" value="dinner">
                        <label for="dinner">Dinner: $25 per person</label><br>
                    </div>
                    <div class="calculate">
                        <h5> Estimated Total Cost </h5>
                        <button id="calculateButton">Calculate</button>
                        <div id="estimatedCosts"></div>
                    </div>
                </div>
                <h3>Location</h3>
                <div id="map"></div>
                <h3> Links </h3>
                <div class="details-buttons-container">
                    <a href="#" class="square-button">Book Now</a>
                    <a href="#" class="square-button">Visit Site</a>
                    <a href="#"><i class="fa-brands fa-facebook icon"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram icon"></i></a>
                    <a href="#"><i class="fa-solid fa-envelope icon"></i></a>
                    <a href="#"><i class="fa-solid fa-phone icon"></i></a>
                </div>
            </div>
        `;
        const longitude = properties[selectedId - 1].longitude;
        const latitude = properties[selectedId - 1].latitude;
        outputDiv.empty();
        outputDiv.append(detailsPage);
        initaliseMap(longitude, latitude);

        $("#calculateButton").click(function () {          
            estimatedCost();
        });


        function estimatedCost() {
            let breakfast = 0;
            let lunch = 0;
            let dinner = 0;
            let price = parseFloat(properties[selectedId -1].price.replace(/\$/g, ''));
            let guests = parseInt($("#guests").val());
            let diffDays = calculateDays();
            
            if ($("#breakfast").is(":checked")) {
                breakfast = 10;
            }
        
            if ($("#lunch").is(":checked")) {
                lunch = 15;
            }
        
            if ($("#dinner").is(":checked")) {
                dinner = 25;
            }
    
            let mealCost = (breakfast + lunch + dinner);
    
            let totalCost = (diffDays * price) + (mealCost * diffDays * guests);

            $("#estimatedCosts").html("");
            $("#estimatedCosts").append(`<p>$${totalCost.toFixed(2)}</p>`);
        }

 
        
        

        const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
        });
    }
    //end js
});