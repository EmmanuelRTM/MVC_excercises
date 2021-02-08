const Pet = require('../models/Pet.js');

const createPetControler = (req, res) => {
    console.log(req.body.age);

    if (req.body.name && req.body.age) {
        const newPet = new Pet(req.body.name, req.body.age);
        res.status(201).send(newPet.getPet());
    } else {
        res.status(400).send({ message: 'Datos incorrectos' })
    }
};

module.exports = createPetControler;