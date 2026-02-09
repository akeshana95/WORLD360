const destinations = [
    {
        id: 'santorini',
        name: 'Santorini',
        country: 'Greece',
        category: 'Coastal',
        description: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater).',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2000&auto=format&fit=crop',
        video: 'https://player.vimeo.com/external/371433846.hd.mp4?s=231da64962635926ec074d209d78401340b157a4&profile_id=175',
        details: [
            { label: 'Best Time', value: 'April to October' },
            { label: 'Currency', value: 'Euro' },
            { label: 'Language', value: 'Greek' },
            { label: 'Vibe', value: 'Romantic & Scenic' }
        ],
        highlights: ['Oia Sunset', 'Red Beach', 'Wine Tasting', 'Ancient Akrotiri']
    },
    {
        id: 'tokyo',
        name: 'Tokyo',
        country: 'Japan',
        category: 'Urban',
        description: "Tokyo, Japan's busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens.",
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2000&auto=format&fit=crop',
        video: 'https://player.vimeo.com/external/459389137.hd.mp4?s=888636e788bc1fcf8119616e6d1912d0016ba6ee&profile_id=174',
        details: [
            { label: 'Best Time', value: 'March to May (Cherry Blossoms)' },
            { label: 'Currency', value: 'Japanese Yen' },
            { label: 'Language', value: 'Japanese' },
            { label: 'Vibe', value: 'Electric & Traditional' }
        ],
        highlights: ['Shibuya Crossing', 'Sensō-ji Temple', 'Akihabara', 'Tsukiji Outer Market']
    },
    {
        id: 'borabora',
        name: 'Bora Bora',
        country: 'French Polynesia',
        category: 'Tropical',
        description: 'Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia. Surrounded by sand-fringed motus (islets) and a turquoise lagoon protected by a coral reef, it’s known for its scuba diving.',
        image: 'https://images.unsplash.com/photo-1506929197914-432292029419?q=80&w=2000&auto=format&fit=crop',
        video: 'https://player.vimeo.com/external/322364663.hd.mp4?s=d009228962635926ec074d209d78401340b157a4&profile_id=174',
        details: [
            { label: 'Best Time', value: 'May to October' },
            { label: 'Currency', value: 'CFP Franc' },
            { label: 'Language', value: 'French / Tahitian' },
            { label: 'Vibe', value: 'Luxurious & Tropical' }
        ],
        highlights: ['Overwater Bungalows', 'Shark & Ray Snorkeling', 'Mount Otemanu', 'Matira Beach']
    },
    {
        id: 'swissalps',
        name: 'Swiss Alps',
        country: 'Switzerland',
        category: 'Mountains',
        description: "The Swiss Alps are the highest mountain range system and lie entirely in Europe, stretching across eight Alpine countries. They are known for their peaks, snow-covered valleys, and quaint villages.",
        image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop',
        video: 'https://player.vimeo.com/external/434045526.hd.mp4?s=c1e1363e1fcf8119616e6d1912d0016ba6ee&profile_id=174',
        details: [
            { label: 'Best Time', value: 'December to March (Skiing)' },
            { label: 'Currency', value: 'Swiss Franc' },
            { label: 'Language', value: 'German/French/Italian' },
            { label: 'Vibe', value: 'Adventure & Serene' }
        ],
        highlights: ['Matterhorn', 'Zermatt Village', 'Jungfraujoch', 'Lucerne Lake']
    },
    {
        id: 'cappadocia',
        name: 'Cappadocia',
        country: 'Turkey',
        category: 'Desert',
        description: 'Cappadocia, a semi-arid region in central Turkey, is known for its distinctive “fairy chimneys,” tall, cone-shaped rock formations clustered in Monks Valley, Göreme and elsewhere. ',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop',
        video: 'https://player.vimeo.com/external/363996559.hd.mp4?s=690636e788bc1fcf8119616e6d1912d0016ba6ee&profile_id=174',
        details: [
            { label: 'Best Time', value: 'April to June' },
            { label: 'Currency', value: 'Turkish Lira' },
            { label: 'Language', value: 'Turkish' },
            { label: 'Vibe', value: 'Magical & Historic' }
        ],
        highlights: ['Hot Air Balloon Ride', 'Goreme Open Air Museum', 'Underground Cities', 'Uchisar Castle']
    },
    {
        id: 'amalfi',
        name: 'Amalfi Coast',
        country: 'Italy',
        category: 'Coastal',
        description: 'The Amalfi Coast is a 50-kilometer stretch of coastline along the southern edge of Italy’s Sorrentine Peninsula, in the Campania region. It’s a popular holiday destination, with sheer cliffs and a rugged shoreline dotted with small beaches and pastel-colored fishing villages.',
        image: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=2000&auto=format&fit=crop',
        video: 'https://player.vimeo.com/external/421118182.hd.mp4?s=7b6b36e788bc1fcf8119616e6d1912d0016ba6ee&profile_id=174',
        details: [
            { label: 'Best Time', value: 'May to September' },
            { label: 'Currency', value: 'Euro' },
            { label: 'Language', value: 'Italian' },
            { label: 'Vibe', value: 'Elegant & Sunny' }
        ],
        highlights: ['Positano Village', 'Ravello Gardens', 'Path of the Gods', 'Amalfi Cathedral']
    },
    {
        id: 'sigiriya',
        name: 'Sigiriya Rock',
        country: 'Sri Lanka',
        category: 'Mountains',
        description: 'Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka. It is a site of historical and archaeological significance that is dominated by a massive column of rock nearly 200 metres (660 ft) high.',
        image: 'https://images.unsplash.com/photo-1543731068-7e0f5beff43a?q=80&w=2000&auto=format&fit=crop',
        video: 'https://player.vimeo.com/external/517610486.hd.mp4?s=d009228962635926ec074d209d78401340b157a4&profile_id=174',
        gallery: [
            'https://images.unsplash.com/photo-1588598136852-d1197d6edf36?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1625416503611-d1c0734002e1?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1577457945926-259160533087?q=80&w=2000&auto=format&fit=crop'
        ],
        details: [
            { label: 'Best Time', value: 'January to April' },
            { label: 'Currency', value: 'LKR' },
            { label: 'Language', value: 'Sinhala / Tamil' },
            { label: 'Vibe', value: 'Ancient / Majestic' }
        ],
        highlights: ['Lion Gate', 'Mirror Wall', 'Frescoes', 'Water Gardens']
    },
    {
        id: 'iceland',
        name: 'Reykjavík & Beyond',
        country: 'Iceland',
        category: 'Mountains',
        description: 'Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields. Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks.',
        image: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=2000&auto=format&fit=crop',
        video: 'https://player.vimeo.com/external/332219808.hd.mp4?s=534636e788bc1fcf8119616e6d1912d0016ba6ee&profile_id=174',
        details: [
            { label: 'Best Time', value: 'September to March (Aurora)' },
            { label: 'Currency', value: 'Icelandic Króna' },
            { label: 'Language', value: 'Icelandic' },
            { label: 'Vibe', value: 'Otherworldly / Cold' }
        ],
        highlights: ['Northern Lights', 'Blue Lagoon', 'Golden Circle', 'Black Sand Beach']
    },
    {
        id: 'machupicchu',
        name: 'Machu Picchu',
        country: 'Peru',
        category: 'Mountains',
        description: 'Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it’s renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar.',
        image: 'https://images.unsplash.com/photo-1509216242873-7786f446f465?q=80&w=2000&auto=format&fit=crop',
        video: 'https://player.vimeo.com/external/391433846.hd.mp4?s=231da64962635926ec074d209d78401340b157a4&profile_id=175',
        details: [
            { label: 'Best Time', value: 'May to October' },
            { label: 'Currency', value: 'Sol' },
            { label: 'Language', value: 'Spanish / Quechua' },
            { label: 'Vibe', value: 'Mystical / Historic' }
        ],
        highlights: ['Sun Gate', 'Temple of the Sun', 'Intihuatana Stone', 'Huayna Picchu']
    },
    {
        id: 'pyramids',
        name: 'Great Pyramids',
        country: 'Egypt',
        category: 'Desert',
        description: 'The Great Pyramid of Giza is the largest Egyptian pyramid and the tomb of Fourth Dynasty pharaoh Khufu. Built in the early 26th century BC during a period of around 27 years, it is the oldest of the Seven Wonders of the Ancient World.',
        image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=2000&auto=format&fit=crop',
        video: 'https://player.vimeo.com/external/363996559.hd.mp4?s=690636e788bc1fcf8119616e6d1912d0016ba6ee&profile_id=174',
        details: [
            { label: 'Best Time', value: 'October to April' },
            { label: 'Currency', value: 'Egyptian Pound' },
            { label: 'Language', value: 'Arabic' },
            { label: 'Vibe', value: 'Ancient / Epic' }
        ],
        highlights: ['The Great Sphinx', 'Solar Boat Museum', 'Camel Ride', 'Saqqara Step Pyramid']
    },
    {
        id: 'bhutan',
        name: 'Paro Valley',
        country: 'Bhutan',
        category: 'Mountains',
        description: 'The Paro Valley is one of the widest and most fertile valleys in Bhutan. It is home to many of the country’s oldest temples and monasteries, including the famous Tiger’s Nest monastery perched on a cliffside.',
        image: 'https://images.unsplash.com/photo-1548682992-6901802d3856?q=80&w=2000&auto=format&fit=crop',
        video: 'https://player.vimeo.com/external/431118182.hd.mp4?s=7b6b36e788bc1fcf8119616e6d1912d0016ba6ee&profile_id=174',
        details: [
            { label: 'Best Time', value: 'March to May' },
            { label: 'Currency', value: 'Ngultrum' },
            { label: 'Language', value: 'Dzongkha' },
            { label: 'Vibe', value: 'Peaceful / Spiritual' }
        ],
        highlights: ["Tiger's Nest", "Rinpung Dzong", "Chele La Pass", "National Museum"]
    }
];

// Helper to get destination by ID
function getDestination(id) {
    return destinations.find(d => d.id === id);
}
