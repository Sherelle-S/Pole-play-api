const express = require('express');
const app = express()
const PORT = 8000

const move = {
     'anastasia frog':{
    'difficulty' : 'Beginner',
    'fear factor' : 1.5,
    'Variations': ['Frog', 'Extended Frog'],
    'contact points' : ['hands', 'back of thighs','knee pits','calves'],
    },
    'back front hook spin':{
    'difficulty' : 'Beginner',
    'fear factor' : 1,
    'contact points': ['hands', 'back of the knee'],
    },
    
    'ballerina':{
        'difficulty' : 'Beginner',
        'fear factor' : 2,
        'contact points' : ['hand', 'side', 'inner thigh', 'calf'],
    },

    'climb and hug seat':{
    'difficulty' : 'Beginner',
    'fear factor' : 1.5,
    'contact points' : ['hands', 'thighs'],
    },
    'conditioning day':{
        'difficulty' : 'Conditioning should be happening at All Levels',
        'fear factor' : 10,
        'contact points' : ['legs', 'arms', 'core', 'everything that can hurt'],
    },

    'crawl':{
        'difficulty' : 'Easy',
        'fear factor' : 0,
        'contact points' : ['hands', 'knees', 'on floor'],
    },

    'embrace':{
    'difficulty' : 'Beginner',
    'fear factor' : 2,
    'contact points' : ['elbows', 'Back of leading foot', 'leading shin', 'ankle of tailing foot', 'trailing calf'],
    },

    'fake titanic':{
    'difficulty' : 'Beginner',
    'fear factor' : 1.5,
    'contact points' : ['hands', 'thighs'],
    },

    'fold over':{
        'difficulty' : 'Beginner',
        'fear factor' : 2,
        'contact points' : ['thighs', 'shin'],
    },
    
    'forearm climb':{
    'difficulty' : 'Beginner',
    'fear factor' : 1.5,
    'contact points' : ['hands', 'forearm','shin','ankle','calf','back of foot'],
    },

    'fireman':{
    'difficulty' : 'Beginner',
    'fear factor' : 1,
    'contact points': ['hands','top of leading foot', 'back of trailing ankle'],
    },

    'floating flamingo':{
    'difficulty' : 'Begin-termediate',
    'fear factor' : 6,
    'contact points' : ['hand', 'thigh', 'Activated Core'],
    },

    'flying climb':{
        'difficulty' : 'Begin-termediate',
        'fear factor' : 3,
        'contact points' : ['shin', 'back of foot', 'knees'],
    },
    
    'hood ornament':{
    'difficulty' : 'Beginner',
    'fear factor' : 2.5,
    'contact points' : ['armpit', 'side','inner thigh','back of foot'],
    },

    'invert':{
    'difficulty' : 'Intermediate',
    'fear factor' : 3,
    'contact points' : ['hands', 'side'],
    },
    
    'jamilla':{
        'difficulty' : 'Begin-termediate',
        'fear factor' : 3,
        'contact points' : ['hands', 'thighs', 'side of belly'],
    },
    
    'jasmine':{
    'difficulty' : 'Begin-termediate',
    'fear factor' :3,
    'contact points' : ['hand', 'thigh', 'calf'],
    },

        'layout':{
    'difficulty' : 'Beginner',
    'fear factor' : 1.5,
    'contact points' : ['hands', 'thighs'],
    },
    
    'leanback':{
    'difficulty' : 'Begin-termediate',
    'fear factor' : 8,
    'contact points' : ['knee pit', 'inner thighs'],
    },
    
    'martini':{
    'difficulty' : 'Intermediate',
    'fear factor' : 4,
    'contact points' : ['hand', 'outer thigh', 'elbow','side'],
    },
    
    'mercury':{
    'difficulty' : 'Beginner',
    'fear factor' : 2,
    'contact points' : ['hands', 'outer thigh', 'knee pit', 'side', 'inner elbow'],
    },

    'teddy':{
    'difficulty' : 'Beginner',
    'fear factor' : 1.5,
    'contact points' : ['hands', 'thighs', 'armpit','side'],
    },

    'wrist sit':{
    'difficulty' : 'Beginner',
    'fear factor' : 1.5,
    'contact points' : ['hands', 'thighs'],
    },
}


app.get('/', (req, res)=>{
res.sendFile(__dirname + '/index.html')
})

app.get('/api/:moveName',(req, res)=>{
    const moveName = req.params.moveName.toLowerCase()
    if(move[moveName]){
        res.json(move[moveName])
    }else{
        res.json(move['conditioning day'])
    }
   
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Your server is running on port ${PORT}!. lets go!`)
})