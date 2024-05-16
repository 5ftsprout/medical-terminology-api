const express = require('express')
const app = express()
const PORT = 8000

const systems = {
    'skeletal system':{
        'majorFunction': 'Support and shape the body. Protection, storage of minerals, and production of blood cells.',
        'commonRoots': ['Bones: oste/o','Joints: arthr/o','Cartilage: chondr/o'],
        'doctor': 'orthopedist',
        'specialty': 'orthopedics'
    },
    'muscular system':{
        'majorFunction': 'Movement of the body. Holds the body erect and generates body heat.',
        'commonRoots': ['Muscles: my/o','Fascia: fasci/o','Tendons: ten/o, tend/o, tendin/o'],
        'doctor': 'orthopedist',
        'specialty': 'orthopedics'
    },
    'unknown':{
        'majorFunction': 'unknown',
        'commonRoots': [],
        'doctor': 'unknown',
        'specialty': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/api', (req, res) => {
    res.json(systems)
})
app.get('/api/:bodySystem', (req, res) => {
    const bodySystem = req.params.bodySystem.toLowerCase()
    if(systems[bodySystem]){
        res.json(systems[bodySystem])
    }else{
        res.json(systems['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})