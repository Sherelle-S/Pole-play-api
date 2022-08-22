const express = require('express');
const app = express()
const PORT = 8000

const move = {
     'Anastasia Frog':{
    'difficulty' : 'Beginner',
    'fear factor' : 1.5,
    'Variations': ['Frog', 'Extended Frog'],
    'contact points' : ['hands', 'back of thighs','knee pits','calves'],
    },
    'Back/Front Hook Spin':{
    'difficulty' : 'Beginner',
    'fear factor' : 1,
    'contact points': ['hands', 'back of the knee'],
    },
    
    'Ballerina':{
        'difficulty' : 'Beginner',
        'fear factor' : 2,
        'contact points' : ['hand', 'side', 'inner thigh', 'calf'],
    },

    'Climb and Hug Seat':{
    'difficulty' : 'Beginner',
    'fear factor' : 1.5,
    'contact points' : ['hands', 'thighs'],
    },

    'Crawl':{
        'difficulty' : 'Easy',
        'fear factor' : 0,
        'contact points' : ['hands', 'knees', 'on floor'],
    },

    'Embrace':{
    'difficulty' : 'Beginner',
    'fear factor' : 2,
    'contact points' : ['elbows', 'Back of leading foot', 'leading shin', 'ankle of tailing foot', 'trailing calf'],
    },

    'Fake Titanic':{
    'difficulty' : 'Beginner',
    'fear factor' : 1.5,
    'contact points' : ['hands', 'thighs'],
    },

    'Fold Over':{
        'difficulty' : 'Beginner',
        'fear factor' : 2,
        'contact points' : ['thighs', 'shin'],
    },
    
    'Forearm Climb':{
    'difficulty' : 'Beginner',
    'fear factor' : 1.5,
    'contact points' : ['hands', 'forearm','shin','ankle','calf','back of foot'],
    },

    'Fireman':{
    'difficulty' : 'Beginner',
    'fear factor' : 1,
    'contact points': ['hands','top of leading foot', 'back of trailing ankle'],
    },

    'Floating Flamingo':{
    'difficulty' : 'Begin-termediate',
    'fear factor' : 6,
    'contact points' : ['hand', 'thigh', 'Activated Core'],
    },

    'Flying Climb':{
        'difficulty' : 'Begin-termediate',
        'fear factor' : 3,
        'contact points' : ['shin', 'back of foot', 'knees'],
    },
    
    'Hood Ornament':{
    'difficulty' : 'Beginner',
    'fear factor' : 2.5,
    'contact points' : ['armpit', 'side','inner thigh','back of foot'],
    },

    'Invert':{
    'difficulty' : 'Intermediate',
    'fear factor' : 3,
    'contact points' : ['hands', 'side'],
    },
    
    'Jamilla':{
        'difficulty' : 'Begin-termediate',
        'fear factor' : 3,
        'contact points' : ['hands', 'thighs', 'side of belly'],
    },
    
    'Jasmine':{
    'difficulty' : 'Begin-termediate',
    'fear factor' :3,
    'contact points' : ['hand', 'thigh', 'calf'],
    },

        'Layout':{
    'difficulty' : 'Beginner',
    'fear factor' : 1.5,
    'contact points' : ['hands', 'thighs'],
    },
    
    'Leanback':{
    'difficulty' : 'Begin-termediate',
    'fear factor' : 8,
    'contact points' : ['knee pit', 'inner thighs'],
    },
    
    'Martini':{
    'difficulty' : 'Intermediate',
    'fear factor' : 4,
    'contact points' : ['hand', 'outer thigh', 'elbow','side'],
    },
    
    'Mercury':{
    'difficulty' : 'Beginner',
    'fear factor' : 2,
    'contact points' : ['hands', 'outer thigh', 'knee pit', 'side', 'inner elbow'],
    },

    'Teddy':{
    'difficulty' : 'Beginner',
    'fear factor' : 1.5,
    'contact points' : ['hands', 'thighs', 'armpit','side'],
    },

    'Wrist Sit':{
    'difficulty' : 'Beginner',
    'fear factor' : 1.5,
    'contact points' : ['hands', 'thighs'],
    },
}


app.get('/', (req, res)=>{
res.sendFile(__dirname + '/index.html')
})

app.get('/api/:moveName', (req, res)=>{
    const moveName = req.params.moveName.toLowerCase()
    if(move[moveName]){
        res.json(move[moveName])
    }else{
        res.json(move['Conditioning Day'])
    }
   
})

app.listen(PORT, ()=>{
    console.log(`Your server is running. lets go!`)
})