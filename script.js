// ----------------------------------------------------
// RRB MOCK TEST SITE - STATE & DATABASE (TCS iON STYLE)
// ----------------------------------------------------

// Question Database (30 questions, 10 per section)
const questionsData = [
    // === SECTION 1: GENERAL AWARENESS (0 to 9) ===
    {
        id: 1,
        section: "awareness",
        correctAnswer: 0, // Option indices: 0, 1, 2, 3
        en: {
            text: "Which of the following is the largest freshwater lake in India?",
            options: ["Wular Lake", "Chilika Lake", "Vembanad Lake", "Dal Lake"],
            explanation: "Wular Lake is one of the largest freshwater lakes in Asia, situated in Jammu and Kashmir, India. It was formed due to tectonic activity."
        },
        hi: {
            text: "निम्नलिखित में से कौन सी भारत की सबसे बड़ी मीठे पानी की झील है?",
            options: ["वुलर झील", "चिलिका झील", "वेम्बनाड झील", "डल झील"],
            explanation: "वुलर झील एशिया की सबसे बड़ी मीठे पानी की झीलों में से एक है, जो भारत के जम्मू और कश्मीर में स्थित है। इसका निर्माण विवर्तनिक (tectonic) गतिविधि के कारण हुआ था।"
        }
    },
    {
        id: 2,
        section: "awareness",
        correctAnswer: 0,
        en: {
            text: "Who is known as the Father of the Indian Constitution?",
            options: ["Dr. B.R. Ambedkar", "Mahatma Gandhi", "Jawaharlal Nehru", "Dr. Rajendra Prasad"],
            explanation: "Dr. Bhimrao Ramji Ambedkar was the chairman of the Drafting Committee and is widely regarded as the architect/Father of the Indian Constitution."
        },
        hi: {
            text: "भारतीय संविधान के जनक के रूप में किसे जाना जाता है?",
            options: ["डॉ. बी.आर. अम्बेडकर", "महात्मा गांधी", "जवाहरलाल नेहरू", "डॉ. राजेन्द्र प्रसाद"],
            explanation: "डॉ. भीमराव रामजी अम्बेडकर मसौदा समिति के अध्यक्ष थे और उन्हें व्यापक रूप से भारतीय संविधान के निर्माता/जनक के रूप में जाना जाता है।"
        }
    },
    {
        id: 3,
        section: "awareness",
        correctAnswer: 0,
        en: {
            text: "What is the chemical symbol for Gold?",
            options: ["Au", "Ag", "Fe", "Gd"],
            explanation: "The chemical symbol for Gold is Au, which comes from the Latin word 'Aurum', meaning shining dawn."
        },
        hi: {
            text: "सोने का रासायनिक प्रतीक क्या है?",
            options: ["Au", "Ag", "Fe", "Gd"],
            explanation: "सोने का रासायनिक प्रतीक Au है, जो लैटिन शब्द 'Aurum' से आया है, जिसका अर्थ है चमकती हुई भोर।"
        }
    },
    {
        id: 4,
        section: "awareness",
        correctAnswer: 0,
        en: {
            text: "Which planet in our solar system is known as the Red Planet?",
            options: ["Mars", "Venus", "Jupiter", "Saturn"],
            explanation: "Mars is called the Red Planet because iron minerals in its soil oxidize, or rust, causing the soil and atmosphere to look red."
        },
        hi: {
            text: "हमारे सौरमंडल के किस ग्रह को लाल ग्रह के नाम से जाना जाता है?",
            options: ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
            explanation: "मंगल को लाल ग्रह कहा जाता है क्योंकि इसकी मिट्टी में लौह खनिज ऑक्सीकृत हो जाते हैं, या जंग खा जाते हैं, जिससे मिट्टी और वातावरण लाल दिखता है।"
        }
    },
    {
        id: 5,
        section: "awareness",
        correctAnswer: 0,
        en: {
            text: "Who was the first Governor-General of independent India?",
            options: ["Lord Mountbatten", "C. Rajagopalachari", "Lord Canning", "Warren Hastings"],
            explanation: "Lord Mountbatten was the first Governor-General of independent India. C. Rajagopalachari was the first and last Indian Governor-General of independent India."
        },
        hi: {
            text: "स्वतंत्र भारत के पहले गवर्नर-जनरल कौन थे?",
            options: ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "लॉर्ड कैनिंग", "वारेन हेस्टिंग्स"],
            explanation: "लॉर्ड माउंटबेटन स्वतंत्र भारत के पहले गवर्नर-जनरल थे। सी. राजगोपालाचारी स्वतंत्र भारत के पहले और अंतिम भारतीय गवर्नर-जनरल थे।"
        }
    },
    {
        id: 6,
        section: "awareness",
        correctAnswer: 0,
        en: {
            text: "Where is the headquarters of the Indian Space Research Organisation (ISRO) located?",
            options: ["Bengaluru", "Sriharikota", "New Delhi", "Mumbai"],
            explanation: "ISRO was established in 1969 and its headquarters is located in Bengaluru, Karnataka."
        },
        hi: {
            text: "भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO) का मुख्यालय कहाँ स्थित है?",
            options: ["बेंगलोर", "श्रीहरिकोटा", "नई दिल्ली", "मुंबई"],
            explanation: "इसरो की स्थापना 1969 में हुई थी और इसका मुख्यालय बेंगलुरु, कर्नाटक में स्थित है।"
        }
    },
    {
        id: 7,
        section: "awareness",
        correctAnswer: 0,
        en: {
            text: "In which year was the First Battle of Panipat fought?",
            options: ["1526", "1556", "1761", "1498"],
            explanation: "The First Battle of Panipat was fought on 21 April 1526 between the invading forces of Babur and the Lodi dynasty, establishing the Mughal Empire."
        },
        hi: {
            text: "पानीपत की पहली लड़ाई किस वर्ष लड़ी गई थी?",
            options: ["1526", "1556", "1761", "1498"],
            explanation: "पानीपत की पहली लड़ाई 21 अप्रैल 1526 को बाबर और लोदी राजवंश की हमलावर सेनाओं के बीच लड़ी गई थी, जिसने मुगल साम्राज्य की नींव रखी।"
        }
    },
    {
        id: 8,
        section: "awareness",
        correctAnswer: 0,
        en: {
            text: "Which Indian state has the longest coastline?",
            options: ["Gujarat", "Andhra Pradesh", "Tamil Nadu", "Maharashtra"],
            explanation: "Gujarat has the longest coastline in India, stretching over 1,600 km, followed by Andhra Pradesh."
        },
        hi: {
            text: "किस भारतीय राज्य की तटरेखा सबसे लंबी है?",
            options: ["गुजरात", "आंध्र प्रदेश", "तमिलनाडु", "महाराष्ट्र"],
            explanation: "गुजरात की भारत में सबसे लंबी तटरेखा है, जो 1,600 किमी से अधिक फैली हुई है, जिसके बाद आंध्र प्रदेश का स्थान आता है।"
        }
    },
    {
        id: 9,
        section: "awareness",
        correctAnswer: 0,
        en: {
            text: "What is the SI unit of power?",
            options: ["Watt", "Joule", "Newton", "Pascal"],
            explanation: "The SI unit of power is the Watt, named after James Watt. One Watt is equal to one Joule per second."
        },
        hi: {
            text: "शक्ति का SI मात्रक क्या है?",
            options: ["वॉट", "जूल", "न्यूटन", "पास्कल"],
            explanation: "शक्ति का SI मात्रक वॉट (Watt) है, जिसका नाम जेम्स वॉट के नाम पर रखा गया है। एक वॉट प्रति सेकंड एक जूल के बराबर होता है।"
        }
    },
    {
        id: 10,
        section: "awareness",
        correctAnswer: 0,
        en: {
            text: "Who composed the national song of India, 'Vande Mataram'?",
            options: ["Bankim Chandra Chattopadhyay", "Rabindranath Tagore", "Sarojini Naidu", "Sri Aurobindo"],
            explanation: "'Vande Mataram' was composed in Sanskrit by Bankim Chandra Chattopadhyay and was first published in his novel Anandamath in 1882."
        },
        hi: {
            text: "भारत के राष्ट्रीय गीत 'वन्दे मातरम्' की रचना किसने की थी?",
            options: ["बंकिम चंद्र चट्टोपाध्याय", "रवींद्रनाथ टैगोर", "सरोजिनी नायडू", "श्री अरविंदो"],
            explanation: "'वन्दे मातरम्' की रचना बंकिम चंद्र चट्टोपाध्याय द्वारा संस्कृत में की गई थी और यह पहली बार 1882 में उनके उपन्यास आनंदमठ में प्रकाशित हुई थी।"
        }
    },

    // === SECTION 2: MATHEMATICS (10 to 19) ===
    {
        id: 11,
        section: "mathematics",
        correctAnswer: 0,
        en: {
            text: "The average of first five prime numbers is:",
            options: ["5.6", "5.2", "5.4", "5.8"],
            explanation: "The first five prime numbers are 2, 3, 5, 7, and 11. Sum = 2 + 3 + 5 + 7 + 11 = 28. Average = 28 / 5 = 5.6."
        },
        hi: {
            text: "प्रथम पांच अभाज्य संख्याओं का औसत है:",
            options: ["5.6", "5.2", "5.4", "5.8"],
            explanation: "प्रथम पांच अभाज्य संख्याएं 2, 3, 5, 7 और 11 हैं। योग = 2 + 3 + 5 + 7 + 11 = 28. औसत = 28 / 5 = 5.6।"
        }
    },
    {
        id: 12,
        section: "mathematics",
        correctAnswer: 0,
        en: {
            text: "If 15% of A is equal to 20% of B, then ratio A:B is equal to:",
            options: ["4:3", "3:4", "17:16", "16:17"],
            explanation: "15% of A = 20% of B => 15/100 * A = 20/100 * B => 15A = 20B => A/B = 20/15 = 4/3. Thus A:B = 4:3."
        },
        hi: {
            text: "यदि A का 15%, B के 20% के बराबर है, तो अनुपात A:B किसके बराबर है?",
            options: ["4:3", "3:4", "17:16", "16:17"],
            explanation: "A का 15% = B का 20% => 15/100 * A = 20/100 * B => 15A = 20B => A/B = 20/15 = 4/3. इसलिए A:B = 4:3।"
        }
    },
    {
        id: 13,
        section: "mathematics",
        correctAnswer: 0,
        en: {
            text: "A train running at a speed of 60 km/h crosses a pole in 9 seconds. What is the length of the train?",
            options: ["150 meters", "120 meters", "180 meters", "324 meters"],
            explanation: "Speed in m/s = 60 * 5/18 = 50/3 m/s. Length of train = Speed * Time = (50/3) * 9 = 150 meters."
        },
        hi: {
            text: "60 किमी/घंटा की गति से चलने वाली एक ट्रेन 9 सेकंड में एक खंभे को पार करती है। ट्रेन की लंबाई क्या है?",
            options: ["150 मीटर", "120 मीटर", "180 मीटर", "324 मीटर"],
            explanation: "मीटर/सेकंड में गति = 60 * 5/18 = 50/3 मीटर/सेकंड। ट्रेन की लंबाई = गति * समय = (50/3) * 9 = 150 मीटर।"
        }
    },
    {
        id: 14,
        section: "mathematics",
        correctAnswer: 0,
        en: {
            text: "Find the simple interest on Rs. 5000 at 8% per annum for 3 years.",
            options: ["Rs. 1200", "Rs. 1000", "Rs. 1500", "Rs. 800"],
            explanation: "Simple Interest = (P * R * T) / 100 = (5000 * 8 * 3) / 100 = Rs. 1200."
        },
        hi: {
            text: "₹5000 पर 8% वार्षिक दर से 3 वर्ष के लिए साधारण ब्याज ज्ञात कीजिए।",
            options: ["₹1200", "₹1000", "₹1500", "₹800"],
            explanation: "साधारण ब्याज (SI) = (P * R * T) / 100 = (5000 * 8 * 3) / 100 = ₹1200।"
        }
    },
    {
        id: 15,
        section: "mathematics",
        correctAnswer: 0,
        en: {
            text: "A sum of money doubles itself at compound interest in 15 years. In how many years will it become eight times of itself?",
            options: ["45 years", "30 years", "60 years", "40 years"],
            explanation: "If sum becomes 2 times in 15 years, it will become 2^3 (8) times in 15 * 3 = 45 years."
        },
        hi: {
            text: "चक्रवृद्धि ब्याज पर कोई धनराशि 15 वर्षों में स्वयं की दोगुनी हो जाती है। यह कितने वर्षों में स्वयं की आठ गुनी हो जाएगी?",
            options: ["45 वर्ष", "30 वर्ष", "60 वर्ष", "40 वर्ष"],
            explanation: "यदि राशि 15 वर्षों में 2 गुनी हो जाती है, तो यह 2^3 (8) गुनी 15 * 3 = 45 वर्षों में हो जाएगी।"
        }
    },
    {
        id: 16,
        section: "mathematics",
        correctAnswer: 0,
        en: {
            text: "A and B can do a work in 12 days, B and C in 15 days, C and A in 20 days. In how many days can A, B, and C together finish the work?",
            options: ["10 days", "8 days", "12 days", "6 days"],
            explanation: "Work = LCM(12,15,20) = 60. Efficiency: A+B = 5, B+C = 4, C+A = 3. Combined: 2(A+B+C) = 12 => A+B+C = 6. Days = 60 / 6 = 10 days."
        },
        hi: {
            text: "A और B एक काम को 12 दिनों में, B और C 15 दिनों में, C और A 20 दिनों में कर सकते हैं। A, B और C मिलकर इस काम को कितने दिनों में पूरा कर सकते हैं?",
            options: ["10 दिन", "8 दिन", "12 दिन", "6 दिन"],
            explanation: "काम = LCM(12,15,20) = 60. कार्यक्षमता: A+B = 5, B+C = 4, C+A = 3. संयुक्त: 2(A+B+C) = 12 => A+B+C = 6. दिन = 60 / 6 = 10 दिन।"
        }
    },
    {
        id: 17,
        section: "mathematics",
        correctAnswer: 0,
        en: {
            text: "What is the value of (cos 30° · cos 60° - sin 30° · sin 60°)?",
            options: ["0", "1", "1/2", "√3/2"],
            explanation: "This is of the form cos(A)cos(B) - sin(A)sin(B) = cos(A+B). Hence cos(30° + 60°) = cos(90°) = 0."
        },
        hi: {
            text: "(cos 30° · cos 60° - sin 30° · sin 60°) का मान क्या है?",
            options: ["0", "1", "1/2", "√3/2"],
            explanation: "यह cos(A)cos(B) - sin(A)sin(B) = cos(A+B) के रूप में है। इसलिए cos(30° + 60°) = cos(90°) = 0।"
        }
    },
    {
        id: 18,
        section: "mathematics",
        correctAnswer: 0,
        en: {
            text: "The radius of a cylinder is 7 cm and its height is 10 cm. Find its volume. (Take pi = 22/7)",
            options: ["1540 cm³", "770 cm³", "2200 cm³", "440 cm³"],
            explanation: "Volume of cylinder = pi * r^2 * h = (22/7) * 7 * 7 * 10 = 1540 cm³."
        },
        hi: {
            text: "एक बेलन की त्रिज्या 7 सेमी और उसकी ऊँचाई 10 सेमी है। इसका आयतन ज्ञात कीजिए। (pi = 22/7 लें)",
            options: ["1540 सेमी³", "770 सेमी³", "2200 सेमी³", "440 सेमी³"],
            explanation: "बेलन का आयतन = pi * r^2 * h = (22/7) * 7 * 7 * 10 = 1540 सेमी³।"
        }
    },
    {
        id: 19,
        section: "mathematics",
        correctAnswer: 0,
        en: {
            text: "A shopkeeper sells an item for Rs. 960 and makes a profit of 20%. What was the cost price of the item?",
            options: ["Rs. 800", "Rs. 750", "Rs. 850", "Rs. 900"],
            explanation: "Cost Price = Selling Price / (1 + Profit%) = 960 / 1.20 = Rs. 800."
        },
        hi: {
            text: "एक दुकानदार एक वस्तु को ₹960 में बेचता है और 20% का लाभ कमाता है। वस्तु का क्रय मूल्य क्या था?",
            options: ["₹800", "₹750", "₹850", "₹900"],
            explanation: "क्रय मूल्य = विक्रय मूल्य / (1 + लाभ%) = 960 / 1.20 = ₹800।"
        }
    },
    {
        id: 20,
        section: "mathematics",
        correctAnswer: 0,
        en: {
            text: "The sum of two numbers is 45 and their ratio is 7:8. Find the larger number.",
            options: ["24", "21", "28", "30"],
            explanation: "Let numbers be 7x and 8x. 7x + 8x = 45 => 15x = 45 => x = 3. Larger number is 8 * 3 = 24."
        },
        hi: {
            text: "दो संख्याओं का योग 45 है और उनका अनुपात 7:8 है। बड़ी संख्या ज्ञात कीजिए।",
            options: ["24", "21", "28", "30"],
            explanation: "मान लें कि संख्याएँ 7x और 8x हैं। 7x + 8x = 45 => 15x = 45 => x = 3. बड़ी संख्या 8 * 3 = 24 है।"
        }
    },

    // === SECTION 3: REASONING (20 to 29) ===
    {
        id: 21,
        section: "reasoning",
        correctAnswer: 0,
        en: {
            text: "If in a certain code language, 'ROSE' is written as 'TQUG', how will 'BISCUIT' be written in that code?",
            options: ["DKUEWKV", "DKUFVJW", "CJDTVJU", "DKUEWKU"],
            explanation: "Each letter is shifted by +2 places: R(+2)=T, O(+2)=Q, S(+2)=U, E(+2)=G. Similarly, B(+2)=D, I(+2)=K, S(+2)=U, C(+2)=E, U(+2)=W, I(+2)=K, T(+2)=V. Result is DKUEWKV."
        },
        hi: {
            text: "यदि एक निश्चित कूट भाषा में, 'ROSE' को 'TQUG' लिखा जाता है, तो उसी कूट में 'BISCUIT' को कैसे लिखा जाएगा?",
            options: ["DKUEWKV", "DKUFVJW", "CJDTVJU", "DKUEWKU"],
            explanation: "प्रत्येक अक्षर को +2 स्थान स्थानांतरित किया जाता है: R(+2)=T, O(+2)=Q, S(+2)=U, E(+2)=G। इसी प्रकार, B(+2)=D, I(+2)=K, S(+2)=U, C(+2)=E, U(+2)=W, I(+2)=K, T(+2)=V। परिणाम DKUEWKV है।"
        }
    },
    {
        id: 22,
        section: "reasoning",
        correctAnswer: 0,
        en: {
            text: "Pointing to a photograph, a man said, 'I have no brother or sister but that man's father is my father's son.' Whose photograph was it?",
            options: ["His son's", "His own", "His father's", "His nephew's"],
            explanation: "'My father's son' since he has no brother or sister is the man himself. So, that man's father is 'me'. Therefore, it is his son's photograph."
        },
        hi: {
            text: "एक तस्वीर की ओर इशारा करते हुए एक व्यक्ति ने कहा, 'मेरा कोई भाई या बहन नहीं है, लेकिन उस आदमी का पिता मेरे पिता का पुत्र है।' वह तस्वीर किसकी थी?",
            options: ["उसके पुत्र की", "उसकी स्वयं की", "उसके पिता की", "उसके भतीजे की"],
            explanation: "'मेरे पिता का पुत्र' चूंकि उसका कोई भाई या बहन नहीं है, वह व्यक्ति स्वयं है। तो, उस आदमी का पिता 'मैं' हूँ। इसलिए, यह उसके बेटे की तस्वीर है।"
        }
    },
    {
        id: 23,
        section: "reasoning",
        correctAnswer: 3, // Coal is option index 3
        en: {
            text: "Choose the odd one out of the given alternatives:",
            options: ["Copper", "Iron", "Gold", "Coal"],
            explanation: "Copper, Iron, and Gold are metals, whereas Coal is a carbonaceous mineral / non-metal."
        },
        hi: {
            text: "दिए गए विकल्पों में से विषम का चयन करें:",
            options: ["तांबा", "लोहा", "सोना", "कोयला"],
            explanation: "तांबा, लोहा और सोना धातुएं हैं, जबकि कोयला एक कार्बनयुक्त खनिज / अधातु है।"
        }
    },
    {
        id: 24,
        section: "reasoning",
        correctAnswer: 0,
        en: {
            text: "Look at this series: 2, 1, 1/2, 1/4, ... What number should come next?",
            options: ["1/8", "1/12", "2/8", "1/16"],
            explanation: "Each number in the series is half of the preceding number. Therefore, 1/4 * 1/2 = 1/8."
        },
        hi: {
            text: "इस श्रृंखला को देखें: 2, 1, 1/2, 1/4, ... आगे कौन सी संख्या आनी चाहिए?",
            options: ["1/8", "1/12", "2/8", "1/16"],
            explanation: "श्रृंखला की प्रत्येक संख्या पिछली संख्या की आधी है। इसलिए, 1/4 * 1/2 = 1/8।"
        }
    },
    {
        id: 25,
        section: "reasoning",
        correctAnswer: 0,
        en: {
            text: "Elephant is related to Calf in the same way as Dog is related to:",
            options: ["Puppy", "Kitten", "Cub", "Kid"],
            explanation: "The offspring of an Elephant is called a Calf. Similarly, the offspring of a Dog is called a Puppy."
        },
        hi: {
            text: "हाथी का संबंध बछड़े (Calf) से उसी प्रकार है जैसे कुत्ते का संबंध है:",
            options: ["पिल्ला (Puppy)", "बिल्ली का बच्चा (Kitten)", "शावक (Cub)", "मेमना (Kid)"],
            explanation: "हाथी के बच्चे को बछड़ा (Calf) कहा जाता है। उसी प्रकार, कुत्ते के बच्चे को पिल्ला (Puppy) कहा जाता है।"
        }
    },
    {
        id: 26,
        section: "reasoning",
        correctAnswer: 0,
        en: {
            text: "If '+' means '×', '-' means '÷', '×' means '+' and '÷' means '-', then: 16 + 4 ÷ 10 - 5 × 8 = ?",
            options: ["70", "60", "50", "80"],
            explanation: "Replace signs: 16 × 4 - 10 ÷ 5 + 8. Applying BODMAS rule: 64 - 2 + 8 = 72 - 2 = 70."
        },
        hi: {
            text: "यदि '+' का अर्थ '×' है, '-' का अर्थ '÷' है, '×' का अर्थ '+' है और '÷' का अर्थ '-' है, तो: 16 + 4 ÷ 10 - 5 × 8 = ?",
            options: ["70", "60", "50", "80"],
            explanation: "चिह्न बदलें: 16 × 4 - 10 ÷ 5 + 8. बोडमास (BODMAS) नियम लागू करने पर: 64 - 2 + 8 = 72 - 2 = 70।"
        }
    },
    {
        id: 27,
        section: "reasoning",
        correctAnswer: 0,
        en: {
            text: "Choose the word that is a necessary part of the word 'BOOK':",
            options: ["Pages", "Cover", "Pictures", "Bookmark"],
            explanation: "A book cannot exist without pages. It can exist without a cover, pictures, or a bookmark."
        },
        hi: {
            text: "वह शब्द चुनें जो 'पुस्तक' (BOOK) शब्द का एक आवश्यक हिस्सा है:",
            options: ["पृष्ठ (Pages)", "आवरण (Cover)", "चित्र (Pictures)", "बुकमार्क (Bookmark)"],
            explanation: "पृष्ठों के बिना पुस्तक का अस्तित्व नहीं हो सकता। यह आवरण, चित्रों या बुकमार्क के बिना भी अस्तित्व में रह सकती है।"
        }
    },
    {
        id: 28,
        section: "reasoning",
        correctAnswer: 0,
        en: {
            text: "Arrange the words in a logical sequence: 1. Country, 2. District, 3. State, 4. Village, 5. Continent",
            options: ["4, 2, 3, 1, 5", "4, 3, 2, 1, 5", "2, 4, 3, 5, 1", "1, 3, 2, 4, 5"],
            explanation: "The logical order from smallest unit to largest is: Village (4) -> District (2) -> State (3) -> Country (1) -> Continent (5). Thus, 4, 2, 3, 1, 5."
        },
        hi: {
            text: "शब्दों को तार्किक क्रम में व्यवस्थित करें: 1. देश, 2. जिला, 3. राज्य, 4. गांव, 5. महाद्वीप",
            options: ["4, 2, 3, 1, 5", "4, 3, 2, 1, 5", "2, 4, 3, 5, 1", "1, 3, 2, 4, 5"],
            explanation: "सबसे छोटी इकाई से सबसे बड़ी इकाई तक का तार्किक क्रम है: गाँव (4) -> जिला (2) -> राज्य (3) -> देश (1) -> महाद्वीप (5)। इसलिए, 4, 2, 3, 1, 5।"
        }
    },
    {
        id: 29,
        section: "reasoning",
        correctAnswer: 0,
        en: {
            text: "In a row of 30 children, A is 11th from the right end. What is A's position from the left end?",
            options: ["20th", "19th", "21st", "22nd"],
            explanation: "Left Position = Total - Right Position + 1 = 30 - 11 + 1 = 20th position."
        },
        hi: {
            text: "30 बच्चों की एक पंक्ति में, A दायें छोर से 11वें स्थान पर है। बायें छोर से A का स्थान क्या है?",
            options: ["20वां", "19वां", "21वां", "22वां"],
            explanation: "बायें से स्थान = कुल - दायें से स्थान + 1 = 30 - 11 + 1 = 20वां स्थान।"
        }
    },
    {
        id: 30,
        section: "reasoning",
        correctAnswer: 0,
        en: {
            text: "Statements: All dogs are cats. All cats are bats. Conclusions: I. All dogs are bats. II. Some bats are dogs.",
            options: ["Both I and II follow", "Only I follows", "Only II follows", "Neither I nor II follows"],
            explanation: "Since all dogs are cats and all cats are bats, all dogs are bats (I follows). Since all dogs are bats, there are some bats that are dogs (II follows). Both follow."
        },
        hi: {
            text: "कथन: सभी कुत्ते बिल्ली हैं। सभी बिल्ली चमगादड़ हैं। निष्कर्ष: I. सभी कुत्ते चमगादड़ हैं। II. कुछ चमगादड़ कुत्ते हैं।",
            options: ["I और II दोनों अनुसरण करते हैं", "केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "न तो I और न ही II अनुसरण करता है"],
            explanation: "चूंकि सभी कुत्ते बिल्ली हैं और सभी बिल्ली चमगादड़ हैं, इसलिए सभी कुत्ते चमगादड़ हैं (I अनुसरण करता है)। चूंकि सभी कुत्ते चमगादड़ हैं, इसलिए कुछ चमगादड़ कुत्ते हैं (II भी अनुसरण करता है)। दोनों अनुसरण करते हैं।"
        }
    }
];

// App State
let currentView = "login-screen";
let currentLanguage = "en"; // 'en' or 'hi'
let examDuration = 90 * 60; // 90 minutes in seconds
let timeRemaining = examDuration;
let timerInterval = null;
let activeQuestionIndex = 0; // global index from 0 to 29
let selectedSection = "awareness"; // current section: awareness, mathematics, reasoning
let userAnswers = Array(questionsData.length).fill(null).map((_, idx) => ({
    questionId: questionsData[idx].id,
    selectedOption: null, // null or 0, 1, 2, 3
    draftOption: null,    // draft selection before saving
    status: "not_visited"  // 'not_visited', 'not_answered', 'answered', 'marked', 'answered_marked'
}));

// DOM Elements
const views = {
    login: document.getElementById("login-screen"),
    instructions: document.getElementById("instructions-screen"),
    declaration: document.getElementById("declaration-screen"),
    exam: document.getElementById("exam-screen"),
    result: document.getElementById("result-screen")
};

// --- View Navigation ---
function switchView(viewId) {
    Object.keys(views).forEach(key => {
        if (views[key].id === viewId) {
            views[key].classList.add("active");
        } else {
            views[key].classList.remove("active");
        }
    });
    currentView = viewId;
    window.scrollTo(0, 0);
}

// --- Login Logic ---
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    switchView("instructions-screen");
});

// --- Instructions Logic ---
const instLangSelect = document.getElementById("inst-lang-select");
instLangSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    document.querySelector(".inst-body.text-en").style.display = lang === "en" ? "block" : "none";
    document.querySelector(".inst-body.text-hi").style.display = lang === "hi" ? "block" : "none";
});

document.querySelector(".btn-next").addEventListener("click", () => {
    switchView("declaration-screen");
});

// --- Declaration Logic ---
const agreeCheckbox = document.getElementById("agree-checkbox");
const btnReadyBegin = document.getElementById("btn-ready-begin");
const examDefaultLang = document.getElementById("exam-default-lang");

agreeCheckbox.addEventListener("change", (e) => {
    btnReadyBegin.disabled = !e.target.checked;
});

btnReadyBegin.addEventListener("click", () => {
    currentLanguage = examDefaultLang.value;
    document.getElementById("current-default-lang-label").textContent = currentLanguage === "hi" ? "Hindi" : "English";
    startExam();
});

// --- Exam Initialisation ---
function startExam() {
    switchView("exam-screen");
    
    // Initialise answers state
    userAnswers = Array(questionsData.length).fill(null).map((_, idx) => ({
        questionId: questionsData[idx].id,
        selectedOption: null,
        draftOption: null,
        status: "not_visited"
    }));
    
    // First question is automatically visited & active
    activeQuestionIndex = 0;
    selectedSection = "awareness";
    userAnswers[0].status = "not_answered";

    // Set countdown
    timeRemaining = examDuration;
    updateTimerDisplay();
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("Time is up! Submitting your exam.");
            submitExam();
        }
    }, 1000);

    // Initialise UI elements
    renderSectionTabs();
    renderQuestionPalette();
    loadQuestion(activeQuestionIndex);
    updateLegendsCount();
}

// --- Timer Display ---
function updateTimerDisplay() {
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;
    
    const hStr = String(hours).padStart(2, '0');
    const mStr = String(minutes).padStart(2, '0');
    const sStr = String(seconds).padStart(2, '0');
    
    document.getElementById("exam-timer").textContent = `${hStr}:${mStr}:${sStr}`;
}

// --- Render Section Tabs ---
function renderSectionTabs() {
    const tabsContainer = document.getElementById("section-tabs-container");
    tabsContainer.innerHTML = `
        <button class="tab-btn ${selectedSection === 'awareness' ? 'active' : ''}" data-section="awareness">${currentLanguage === 'hi' ? 'सामान्य जागरूकता' : 'GENERAL AWARENESS'}</button>
        <button class="tab-btn ${selectedSection === 'mathematics' ? 'active' : ''}" data-section="mathematics">${currentLanguage === 'hi' ? 'गणित' : 'MATHEMATICS'}</button>
        <button class="tab-btn ${selectedSection === 'reasoning' ? 'active' : ''}" data-section="reasoning">${currentLanguage === 'hi' ? 'सामान्य बुद्धिमत्ता और तर्कशक्ति' : 'PSYCHOLOGICAL TEST / REASONING'}</button>
    `;

    // Add event listeners
    tabsContainer.querySelectorAll(".tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const sec = btn.getAttribute("data-section");
            if (selectedSection !== sec) {
                // Find first question index of the selected section
                const firstIdx = questionsData.findIndex(q => q.section === sec);
                if (firstIdx !== -1) {
                    jumpToQuestion(firstIdx);
                }
            }
        });
    });
}

// --- Load Question Details ---
function loadQuestion(index) {
    activeQuestionIndex = index;
    const q = questionsData[index];
    selectedSection = q.section;
    
    // Update active class on section tabs
    renderSectionTabs();

    // Check language translation setting
    const langData = q[currentLanguage] || q.en;
    
    // Set Question title & text
    document.getElementById("question-number-display").textContent = `${currentLanguage === 'hi' ? 'प्रश्न संख्या' : 'Question No.'} ${index + 1}`;
    document.getElementById("question-text-content").textContent = langData.text;

    // View translation toggle button text
    const langToggleBtn = document.getElementById("lang-toggle-btn");
    langToggleBtn.textContent = `View in: ${currentLanguage === 'en' ? 'Hindi' : 'English'}`;

    // Options rendering
    const optionsContainer = document.getElementById("options-list-container");
    optionsContainer.innerHTML = "";
    
    // Sync draft option with committed answer or draft option
    const userAns = userAnswers[index];
    // If we already have a committed selection, sync the draft to it
    if (userAns.selectedOption !== null && userAns.draftOption === null) {
        userAns.draftOption = userAns.selectedOption;
    }

    langData.options.forEach((optText, optIdx) => {
        const optionItem = document.createElement("div");
        optionItem.className = `option-item ${userAns.draftOption === optIdx ? 'selected' : ''}`;
        optionItem.innerHTML = `
            <input type="radio" name="q-option" id="opt-${optIdx}" value="${optIdx}" ${userAns.draftOption === optIdx ? 'checked' : ''}>
            <label for="opt-${optIdx}">
                <span class="option-idx">${optIdx + 1}.</span> ${optText}
            </label>
        `;
        
        // Click behavior
        optionItem.addEventListener("click", () => {
            userAns.draftOption = optIdx;
            // Highlight the selected option item
            optionsContainer.querySelectorAll(".option-item").forEach((item, idx) => {
                if (idx === optIdx) {
                    item.classList.add("selected");
                    item.querySelector("input").checked = true;
                } else {
                    item.classList.remove("selected");
                    item.querySelector("input").checked = false;
                }
            });
        });
        
        optionsContainer.appendChild(optionItem);
    });

    // Update active highlight in palette
    const paletteContainer = document.getElementById("question-palette-grid");
    paletteContainer.querySelectorAll(".pal-btn").forEach((btn, idx) => {
        if (idx === index) {
            btn.classList.add("active");
            // Scroll palette button into view if container is scrollable
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            btn.classList.remove("active");
        }
    });
}

// Language view toggle inside question
document.getElementById("lang-toggle-btn").addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "hi" : "en";
    loadQuestion(activeQuestionIndex);
});

// --- Render Question Palette ---
function renderQuestionPalette() {
    const paletteGrid = document.getElementById("question-palette-grid");
    paletteGrid.innerHTML = "";

    questionsData.forEach((q, idx) => {
        const btn = document.createElement("button");
        btn.className = `pal-btn ${userAnswers[idx].status}`;
        btn.textContent = idx + 1;
        btn.setAttribute("data-index", idx);

        btn.addEventListener("click", () => {
            // If jumping via palette, reset uncommitted draft for current question to match actual saved option
            const currentAns = userAnswers[activeQuestionIndex];
            currentAns.draftOption = currentAns.selectedOption; // reset uncommitted draft
            
            // If the question we are leaving was 'not_visited', turn it into 'not_answered'
            if (currentAns.status === "not_visited") {
                currentAns.status = "not_answered";
            }

            jumpToQuestion(idx);
        });

        paletteGrid.appendChild(btn);
    });
}

// Filter palette based on select value
const paletteFilterSelect = document.getElementById("palette-filter");
paletteFilterSelect.addEventListener("change", (e) => {
    const filter = e.target.value;
    const paletteGrid = document.getElementById("question-palette-grid");
    paletteGrid.querySelectorAll(".pal-btn").forEach((btn, idx) => {
        const status = userAnswers[idx].status;
        
        let show = false;
        if (filter === "all") show = true;
        else if (filter === "answered" && (status === "answered" || status === "answered_marked")) show = true;
        else if (filter === "not_answered" && status === "not_answered") show = true;
        else if (filter === "marked" && (status === "marked" || status === "answered_marked")) show = true;
        else if (filter === "not_visited" && status === "not_visited") show = true;

        btn.style.display = show ? "flex" : "none";
    });
});

// --- Jumps & Transitions ---
function jumpToQuestion(idx) {
    // If the target question was 'not_visited', update it to 'not_answered'
    if (userAnswers[idx].status === "not_visited") {
        userAnswers[idx].status = "not_answered";
    }
    
    activeQuestionIndex = idx;
    loadQuestion(idx);
    renderQuestionPalette();
    updateLegendsCount();
    
    // Sync the select box filter value
    paletteFilterSelect.value = "all";
    paletteFilterSelect.dispatchEvent(new Event('change'));

    // Close mobile sidebar drawer if it was open
    const rightPanel = document.querySelector(".exam-right-panel");
    const backdrop = document.getElementById("sidebar-backdrop");
    if (rightPanel && rightPanel.classList.contains("active")) {
        rightPanel.classList.remove("active");
    }
    if (backdrop && backdrop.classList.contains("active")) {
        backdrop.classList.remove("active");
    }
}

// --- Action: Save & Next ---
document.getElementById("btn-save-next").addEventListener("click", () => {
    const userAns = userAnswers[activeQuestionIndex];
    
    // Commit the draft option
    userAns.selectedOption = userAns.draftOption;
    
    if (userAns.selectedOption !== null) {
        userAns.status = "answered";
    } else {
        userAns.status = "not_answered";
    }

    navigateToNext();
});

// --- Action: Mark for Review & Next ---
document.getElementById("btn-mark-review").addEventListener("click", () => {
    const userAns = userAnswers[activeQuestionIndex];
    
    // Commit the draft option
    userAns.selectedOption = userAns.draftOption;
    
    if (userAns.selectedOption !== null) {
        userAns.status = "answered_marked";
    } else {
        userAns.status = "marked";
    }

    navigateToNext();
});

// --- Action: Clear Response ---
document.getElementById("btn-clear").addEventListener("click", () => {
    const userAns = userAnswers[activeQuestionIndex];
    userAns.selectedOption = null;
    userAns.draftOption = null;
    userAns.status = "not_answered";
    
    // Reload question options list to clear selectors
    loadQuestion(activeQuestionIndex);
    renderQuestionPalette();
    updateLegendsCount();
});

function navigateToNext() {
    // Move to next question index (wrap around)
    const nextIdx = (activeQuestionIndex + 1) % questionsData.length;
    jumpToQuestion(nextIdx);
}

// --- Update Legends Count ---
function updateLegendsCount() {
    const counts = {
        not_visited: 0,
        not_answered: 0,
        answered: 0,
        marked: 0,
        answered_marked: 0
    };

    userAnswers.forEach(ans => {
        counts[ans.status]++;
    });

    const legendsGrid = document.querySelector(".legends-grid");
    legendsGrid.innerHTML = `
        <div class="legend-item"><span class="badge not-visited">${counts.not_visited}</span> Not Visited</div>
        <div class="legend-item"><span class="badge not-answered">${counts.not_answered}</span> Not Answered</div>
        <div class="legend-item"><span class="badge answered">${counts.answered}</span> Answered</div>
        <div class="legend-item"><span class="badge marked">${counts.marked}</span> Marked for Review</div>
        <div class="legend-item"><span class="badge answered-marked">${counts.answered_marked}</span> Answered &amp; Mark For Review</div>
    `;
}

// --- Modals logic ---
const instModal = document.getElementById("instructions-modal");
document.getElementById("btn-sidebar-inst").addEventListener("click", () => {
    instModal.classList.add("active");
});

instModal.querySelector(".close-modal-btn").addEventListener("click", () => {
    instModal.classList.remove("active");
});
instModal.querySelector(".btn-modal-close").addEventListener("click", () => {
    instModal.classList.remove("active");
});

const submitModal = document.getElementById("submit-confirm-modal");
document.getElementById("btn-sidebar-submit").addEventListener("click", () => {
    // Compile counts
    let answered = 0;
    let marked = 0;
    let notAnswered = 0;

    userAnswers.forEach(ans => {
        if (ans.status === "answered" || ans.status === "answered_marked") answered++;
        if (ans.status === "marked" || ans.status === "answered_marked") marked++;
        if (ans.status === "not_answered" || ans.status === "not_visited") notAnswered++;
    });

    document.getElementById("confirm-answered").textContent = answered;
    document.getElementById("confirm-marked").textContent = marked;
    document.getElementById("confirm-not-answered").textContent = notAnswered;

    submitModal.classList.add("active");
});

document.getElementById("btn-cancel-submit").addEventListener("click", () => {
    submitModal.classList.remove("active");
});

document.getElementById("btn-confirm-submit").addEventListener("click", () => {
    submitModal.classList.remove("active");
    clearInterval(timerInterval);
    submitExam();
});

// --- SUBMIT EXAM & GENERATE RESULTS ---
function submitExam() {
    switchView("result-screen");

    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;
    
    // Subject scores
    const subjectMetrics = {
        awareness: { total: 0, attempted: 0, correct: 0, incorrect: 0, marks: 0 },
        mathematics: { total: 0, attempted: 0, correct: 0, incorrect: 0, marks: 0 },
        reasoning: { total: 0, attempted: 0, correct: 0, incorrect: 0, marks: 0 }
    };

    questionsData.forEach((q, idx) => {
        const userAns = userAnswers[idx];
        const sub = q.section;
        
        subjectMetrics[sub].total++;

        // Evaluate answer
        if (userAns.selectedOption === null) {
            unattemptedCount++;
        } else {
            subjectMetrics[sub].attempted++;
            if (userAns.selectedOption === q.correctAnswer) {
                correctCount++;
                subjectMetrics[sub].correct++;
                subjectMetrics[sub].marks += 1;
            } else {
                incorrectCount++;
                subjectMetrics[sub].incorrect++;
                subjectMetrics[sub].marks -= (1/3); // negative marks
            }
        }
    });

    const totalMarks = correctCount - (incorrectCount * (1/3));
    const finalScore = Math.max(0, totalMarks).toFixed(2); // Floor negative scores at 0
    const accuracy = correctCount + incorrectCount > 0 
        ? Math.round((correctCount / (correctCount + incorrectCount)) * 100) 
        : 0;

    // Set dashboard display
    document.getElementById("result-score").textContent = `${finalScore} / ${questionsData.length}`;
    document.getElementById("result-accuracy").textContent = `${accuracy}%`;
    document.getElementById("result-correct-count").textContent = correctCount;
    document.getElementById("result-incorrect-count").textContent = incorrectCount;
    document.getElementById("result-unattempted-count").textContent = unattemptedCount;
    document.getElementById("result-accuracy-val").textContent = `${accuracy}%`;

    // Render Subject-wise table
    const tableBody = document.getElementById("result-table-body");
    tableBody.innerHTML = "";

    const sectionLabels = {
        awareness: "General Awareness",
        mathematics: "Mathematics",
        reasoning: "General Intelligence & Reasoning"
    };

    Object.keys(subjectMetrics).forEach(sub => {
        const met = subjectMetrics[sub];
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${sectionLabels[sub]}</strong></td>
            <td>${met.total}</td>
            <td>${met.attempted}</td>
            <td>${met.correct}</td>
            <td>${met.incorrect}</td>
            <td class="${met.marks >= 0 ? 'green-text' : 'red-text'}">${met.marks.toFixed(2)}</td>
        `;
        tableBody.appendChild(tr);
    });

    // Render Review Solutions List
    renderSolutions("all");
}

// --- Solutions Render & Filter ---
function renderSolutions(filter) {
    const solContainer = document.getElementById("solutions-list-container");
    solContainer.innerHTML = "";

    questionsData.forEach((q, idx) => {
        const userAns = userAnswers[idx];
        const isCorrect = userAns.selectedOption === q.correctAnswer;
        const isUnattempted = userAns.selectedOption === null;

        // Apply solutions tab filter
        if (filter === "correct" && (!isCorrect || isUnattempted)) return;
        if (filter === "incorrect" && (isCorrect || isUnattempted)) return;
        if (filter === "unattempted" && !isUnattempted) return;

        let statusClass = "unattempted";
        let statusText = "Unattempted";
        if (!isUnattempted) {
            statusClass = isCorrect ? "correct" : "incorrect";
            statusText = isCorrect ? "Correct" : "Incorrect";
        }

        const solItem = document.createElement("div");
        solItem.className = "sol-item";
        
        // Construct options HTML
        let optionsHtml = "";
        const langData = q[currentLanguage] || q.en;
        langData.options.forEach((opt, optIdx) => {
            let lineClass = "";
            if (optIdx === q.correctAnswer) {
                lineClass = "correct";
            } else if (userAns.selectedOption === optIdx) {
                lineClass = "user-wrong";
            }
            optionsHtml += `<div class="sol-option-line ${lineClass}">${optIdx + 1}. ${opt} ${optIdx === q.correctAnswer ? '✓ (Correct)' : (userAns.selectedOption === optIdx ? '✗ (Your Choice)' : '')}</div>`;
        });

        solItem.innerHTML = `
            <div class="sol-item-header">
                <span class="sol-q-label">Q. ${idx + 1} (${q.section.toUpperCase()})</span>
                <span class="status-tag ${statusClass}">${statusText}</span>
            </div>
            <div class="sol-q-text">${langData.text}</div>
            <div class="sol-options">
                ${optionsHtml}
            </div>
            <div class="sol-explanation">
                <strong>Explanation:</strong> ${langData.explanation}
            </div>
        `;
        solContainer.appendChild(solItem);
    });
}

// Solutions filters click listeners
const solFilterBtns = document.querySelectorAll(".sol-filter-btn");
solFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        solFilterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderSolutions(btn.getAttribute("data-filter"));
    });
});

// Restart button listener
document.getElementById("btn-restart-exam").addEventListener("click", () => {
    switchView("login-screen");
    agreeCheckbox.checked = false;
    btnReadyBegin.disabled = true;
});

// Mobile palette sidebar toggle
const btnMobilePalette = document.getElementById("btn-mobile-palette");
const rightPanel = document.querySelector(".exam-right-panel");
const sidebarBackdrop = document.getElementById("sidebar-backdrop");

if (btnMobilePalette && rightPanel && sidebarBackdrop) {
    btnMobilePalette.addEventListener("click", () => {
        rightPanel.classList.toggle("active");
        sidebarBackdrop.classList.toggle("active");
    });

    sidebarBackdrop.addEventListener("click", () => {
        rightPanel.classList.remove("active");
        sidebarBackdrop.classList.remove("active");
    });
}
