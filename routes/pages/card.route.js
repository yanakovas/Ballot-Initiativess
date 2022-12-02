// const cardRoute = require('express').Router()
// const HomePage = require('../../views/HomePage')
// const {Initiative} = require('../../db/models')

// cardRoute.get('/', async (req, res) => {
// try{
//     const initiatives = await Initiative.findAll({
//         order: [
//             ['createdAt', 'DESC'],
//             ['id', 'DESC'],
//         ],
//     });
//     console.log(initiatives);
//     res.renderComponent(HomePage, {
//         initiatives,
//     });
// }catch(error) {
//     console.error(error);
//     res.sendStatus(500)
// }
// })
// module.exports = cardRoute