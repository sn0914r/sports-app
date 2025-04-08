const Categories = {
    cricket:{
        name: "Cricket",
        bgImg: "./assets/cricket.jpg",
        players:[
            {
                id:1,
                name: "Virat Kohli",
                bgImg: "../assets/virat.webp",
            },
            {
                id:2,
                name: "Rohit Sharma",
                bgImg: "../assets/rohit.jpg",
            },
            {
                id:3,
                name: "Mohammed Shami",
                bgImg:"../assets/Shami.avif",
            },
            {
                id:4,
                name: "Suryakumar Yadav",
                bgImg:"../assets/suryaKumar.webp",
            },
            {
                id:5,
                name: "Rishabh Pant",
                bgImg:"../assets/pant.avif",
            },
            {
                id:6,
                name: "Rinku Singh",
                bgImg:"../assets/rinku.jpg",
            },
            {
                id:7,
                name: "Ravichandran Ashwin",
                bgImg:"../assets/ravichandran.webp",
            },
            {
                id:8,
                name: "Tilak Varma",
                bgImg:"../assets/tilakVarma.webp",
            },
            {
                id:9,
                name: "Mohammed Siraj",
                bgImg:"../assets/siraj.webp",
            },
            {
                id:10,
                name: "Hardik Pandya",
                bgImg:"../assets/panda.webp"
            }
        ]
    },
    footBall:{
        name: "Football",
        bgImg: "./assets/football.jpg",
        players:[
            {
                id: 1,
                name: "Cristiano Ronaldo",
                bgImg: "../assets/cr7.jpg",
            },
            {
                id: 2,
                name: "Lionel Messi",
                bgImg: "../assets/messi.webp",
            },
            {
                id: 3,
                name: "Sunil Chhetri",
                bgImg: "../assets/SunilChhetri.jpg",
            },
            {
                id: 4,
                name: "Kylian Mbappé",
                bgImg: "../assets/mbappe.jpeg",
            },
        ]
    }
}

const descriptions = {
    cricket:[
        {
            id:1,
          "name": "Virat Kohli",
          "dateOfBirth": "1988-11-05",
          "fatherName": "Prem Kohli",
          "motherName": "Saroj Kohli",
          "placeOfBirth": "Delhi, India",
          "description": "Virat Kohli is a prominent Indian cricketer known for his aggressive batting style and leadership skills. He has served as the captain of the Indian national team and has numerous records to his name, making him one of the most successful batsmen in the world.",
            img: "https://library.sportingnews.com/styles/crop_style_16_9_mobile_2x/s3/2023-04/RON_3732.JPG?h=0cfde3e1&itok=M-yCYWx-",
            url: "https://en.wikipedia.org/wiki/Virat_Kohli"
        },
        {
            id:2,
          "name": "Rohit Sharma",
          "dateOfBirth": "1987-04-30",
          "fatherName": "Gurunath Sharma",
          "motherName": "Purnima Sharma",
          "placeOfBirth": "Nagpur, Maharashtra, India",
          "description": "Rohit Sharma is an Indian cricketer renowned for his elegant batting and ability to score big centuries. He is the captain of the Indian national team and the Mumbai Indians in the IPL. Rohit is the only player to have scored three double centuries in ODIs.",
          url: "https://en.wikipedia.org/wiki/Rohit_Sharma",
          img: "https://im.indiatimes.in/facebook/2019/Oct/rohit_sharma_1572353374.jpg"
        },
        {
            id:3,
          "name": "Mohammed Shami",
          "dateOfBirth": "1990-09-03",
          "fatherName": "Tousif Ali",
          "motherName": "Anjum Ara",
          "placeOfBirth": "Amroha, Uttar Pradesh, India",
          "description": "Mohammed Shami is an Indian fast bowler known for his pace and swing. He has been a crucial part of India's bowling attack across all formats and has played significant roles in many of India's victories.",
          url: "https://en.wikipedia.org/wiki/Mohammed_Shami",
          img: "https://cricketaddictor.com/wp-content/uploads/2023/11/Mohammed-Shami.jpg"
        },
        {
            id:4,
          "name": "Suryakumar Yadav",
          "dateOfBirth": "1990-09-14",
          "fatherName": "Ashok Kumar Yadav",
          "motherName": "Swapna Yadav",
          "placeOfBirth": "Mumbai, Maharashtra, India",
          "description": "Suryakumar Yadav is an Indian cricketer known for his versatile batting and innovative shot-making. He has been a consistent performer in domestic cricket and the IPL, earning him a place in the national team. :contentReference[oaicite:0]{index=0}",
          url: "https://en.wikipedia.org/wiki/Suryakumar_Yadav",
          img: "https://wallpaperaccess.com/full/8668151.jpg",
        },
        {
            id:5,
          "name": "Rishabh Pant",
          "dateOfBirth": "1997-10-04",
          "fatherName": "Rajendra Pant",
          "motherName": "Saroj Pant",
          "placeOfBirth": "Haridwar, Uttarakhand, India",
          "description": "Rishabh Pant is an Indian wicketkeeper-batsman known for his aggressive batting and match-winning performances. He has been instrumental in several memorable victories for India, especially in Test cricket.",
          url:"https://en.wikipedia.org/wiki/Rishabh_Pant",
          img: "https://images.moneycontrol.com/static-mcnews/2025/04/20250404071530_pntlsg.png?impolicy=website&width=770&height=431"
        },
        {
            id:6,
          "name": "Rinku Singh",
          "dateOfBirth": "1997-10-12",
          "fatherName": "Khanchandra Singh",
          "motherName": "Veena Devi",
          "placeOfBirth": "Aligarh, Uttar Pradesh, India",
          "description": "Rinku Singh is an Indian cricketer recognized for his hard-hitting abilities and finishing skills. Coming from a humble background, he has made a mark in domestic cricket and the IPL with his consistent performances. :contentReference[oaicite:1]{index=1}",
          url:"https://en.wikipedia.org/wiki/Rinku_Singh_(cricketer)",
          img:"https://images.indianexpress.com/2023/08/Rinku-IND.jpg"
        },
        {
            id:7,
          "name": "Ravichandran Ashwin",
          "dateOfBirth": "1986-09-17",
          "fatherName": "Ravichandran",
          "motherName": "Chitra",
          "placeOfBirth": "Chennai, Tamil Nadu, India",
          "description": "Ravichandran Ashwin is an Indian off-spin bowler and all-rounder known for his tactical acumen and variations. He has been a mainstay in India's Test team and has numerous records to his name.",
          url:"https://en.wikipedia.org/w/index.php?search=ravichnadran+ashwin&title=Special%3ASearch&ns0=1",
          img: "https://images.thequint.com/thequint%2F2018-02%2F0cf72d82-acb4-46da-9c12-00f8b0491c09%2FAshwin-hero.jpg?rect=0%2C0%2C1654%2C930&auto=format%2Ccompress&fmt=webp",
        },
        {
            id:8,
          "name": "Tilak Varma",
          "dateOfBirth": "2002-11-08",
          "fatherName": "Namboori Nagaraju",
          "motherName": "Gayatri Devi",
          "placeOfBirth": "Hyderabad, Telangana, India",
          "description": "Tilak Varma is a young Indian cricketer who has shown promise with his consistent performances in domestic cricket. He has been recognized for his batting skills and potential to be a future star. :contentReference[oaicite:2]{index=2}",
          url:"https://en.wikipedia.org/wiki/Tilak_Varma",
          img: "https://st3.cricketcountry.com/wp-content/uploads/2025/04/Tilak-Varma-1-1.jpg"
        },
        {
            id:9,
          "name": "Mohammed Siraj",
          "dateOfBirth": "1994-03-13",
          "fatherName": "Mirza Mohammed Ghaus",
          "motherName": "Shabana Begum",
          "placeOfBirth": "Hyderabad, Telangana, India",
          "description": "Mohammed Siraj is an Indian fast bowler known for his pace and determination. Rising from a modest background, he has become a key player in India's bowling lineup, delivering impactful performances in international cricket. :contentReference[oaicite:3]{index=3}",
          url:"https://en.wikipedia.org/wiki/Mohammed_Siraj",
          img: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1CbFRF.img?w=1280&h=720&m=4&q=91",
        },
        {
            id:10,
          "name": "Hardik Pandya",
          "dateOfBirth": "1993-10-11",
          "fatherName": "Himanshu Pandya",
          "motherName": "Nalini Pandya",
          "placeOfBirth": "Surat, Gujarat, India",
          "description": "Hardik Pandya is an Indian all-rounder known for his explosive batting and effective bowling. He has been a vital asset to the Indian team in limited-overs cricket, contributing in multiple facets of the game.",
          url:"https://en.wikipedia.org/wiki/Hardik_Pandya",
          img: "https://i.ytimg.com/vi/i1sz9d8OLGs/maxresdefault.jpg"
        }
      ],

    footBall:[
        {
          "id": 1,
          "name": "Cristiano Ronaldo",
          "dateOfBirth": "1985-02-05",
          "fatherName": "José Dinis Aveiro",
          "motherName": "Maria Dolores dos Santos Aveiro",
          "placeOfBirth": "Funchal, Madeira, Portugal",
          "description": "Cristiano Ronaldo is a Portuguese professional footballer renowned for his exceptional goal-scoring abilities and athleticism. He has played for top clubs including Sporting CP, Manchester United, Real Madrid, Juventus, and currently Al Nassr. Ronaldo has won numerous individual awards, including five Ballon d'Or titles, and is considered one of the greatest footballers of all time.",
          url: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo",
          img: "https://media.cnn.com/api/v1/images/stellar/prod/230621042149-01-cristiano-ronaldo-euro-200-apps-062023-restricted.jpg?c=16x9&q=h_833,w_1480,c_fill"
        },
        {
          "id": 2,
          "name": "Lionel Messi",
          "dateOfBirth": "1987-06-24",
          "fatherName": "Jorge Messi",
          "motherName": "Celia Cuccittini",
          "placeOfBirth": "Rosario, Argentina",
          "description": "Lionel Messi is an Argentine professional footballer celebrated for his extraordinary dribbling, playmaking skills, and goal-scoring prowess. He spent the majority of his career at FC Barcelona, winning multiple La Liga and UEFA Champions League titles, before moving to Paris Saint-Germain and later Inter Miami. Messi has won eight Ballon d'Or awards and is widely regarded as one of the greatest players in football history.",
          url: "https://en.wikipedia.org/wiki/Lionel_Messi",
          img: "https://e0.365dm.com/23/07/2048x1152/skysports-lionel-messi-inter-miami_6230632.jpg?20230726111947"
        },
        {
          "id": 3,
          "name": "Sunil Chhetri",
          "dateOfBirth": "1984-08-03",
          "fatherName": "K. B. Chhetri",
          "motherName": "Sushila Chhetri",
          "placeOfBirth": "Secunderabad, India",
          "description": "Sunil Chhetri is an Indian professional footballer known for his leadership and goal-scoring abilities. He has played for various clubs in India and abroad, including Bengaluru FC and Kansas City Wizards. Chhetri is the captain of the Indian national team and is among the top international goal scorers in the world.",
          url: "https://en.wikipedia.org/wiki/Sunil_Chhetri",
          img: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/rgzymghj9bxfyibw2gl3"
        },
        {
          "id": 4,
          "name": "Kylian Mbappé",
          "dateOfBirth": "1998-12-20",
          "fatherName": "Wilfrid Mbappé",
          "motherName": "Fayza Lamari",
          "placeOfBirth": "Paris, France",
          "description": "Kylian Mbappé is a French professional footballer recognized for his incredible speed, dribbling, and finishing skills. He began his professional career with AS Monaco, winning the Ligue 1 title, before moving to Paris Saint-Germain and later Real Madrid. Mbappé has been instrumental in France's national team successes, including winning the 2018 FIFA World Cup.",
          url:  "https://en.wikipedia.org/wiki/Kylian_Mbapp%C3%A9",
          img:"https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1665957107/ay71zyslsrsfopsdgweh.jpg"
        }
      ]
      
}

export { Categories, descriptions }