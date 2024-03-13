const wordList = [
    {
        word: "guitarra",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxigeno",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "montaña",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "pintura",
        hint: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomia",
        hint: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        hint: "A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "mariposa",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "historia",
        hint: "The study of past events and human civilization."
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camare",
        hint: "A device used to capture and record images or videos."
    },
    {
        word: "diamante",
        hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "aventura",
        hint: "An exciting or daring experience."
    },
    {
        word: "ciencia",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicicleta",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "atarceder",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "cafe",
        hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "danza",
        hint: "A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxia",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orquesta",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcan",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novela",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "escultura",
        hint: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "sinfonia",
        hint: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "arquitectura",
        hint: "The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronauta",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "cascada",
        hint: "A cascade of water falling from a height."
    },
    {
        word: "tecnologia",
        hint: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universo",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacaciones",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "teatro",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telefono",
        hint: "A device used to transmit sound over long distances."
    },
    {
        word: "lengua",
        hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desierto",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "girasol",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasia",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescopio",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "fotografia",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planeta",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "rio",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "misterioso",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradoja",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "sombra",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secreto",
        hint: "Something kept hidden or unknown to others."
    },
    {
        word: "curiosidad",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        hint: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        hint: "The light from the moon."
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "brillante",
        hint: "Exceptionally clever, talented, or impressive."
    },
];