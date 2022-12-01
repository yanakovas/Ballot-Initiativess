const mainRouter = require('express').Router();
// const { User } = require('../../db/models');
const {Initiative} = require('../../db/models')

const HomePage = require('../../views/HomePage');

mainRouter.get('/', async (req, res) => {
  try{
    const initiatives = await Initiative.findAll({
        order: [
            ['createdAt', 'DESC'],
            ['id', 'DESC'],
        ],
    });
    console.log(initiatives);
    res.renderComponent(HomePage, {
        initiatives,
    });
}catch(error) {
    console.error(error);
    res.sendStatus(500)
}
})
  // const { userId } = req.session;
  // const user = userId && (await User.findByPk(Number(userId)));
//   res.renderComponent(HomePage, {});
// });

module.exports = mainRouter;
