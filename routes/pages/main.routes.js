const mainRouter = require('express').Router();
const { Initiative, User } = require('../../db/models');

const HomePage = require('../../views/HomePage');

mainRouter.get('/', async (req, res) => {
  const { userId } = req.session;
  const user = userId && (await User.findByPk(Number(userId)));
  res.renderComponent(HomePage, { user });
});

mainRouter.post('/filter/valueLevel', async (req, res) => {
  const { valueLevel } = req.body;
  const initiatives = await Initiative.findAll({
    where: { level: valueLevel },
    order: ['createdAt', 'DESC'],
  });
  res.renderComponent(HomePage, { initiatives });
});

mainRouter.post('/filter/valueSection', async (req, res) => {
  const { valueSection } = req.body;
  const initiatives = await Initiative.findAll({
    where: { section: valueSection },
    order: ['createdAt', 'DESC'],
  });
  res.renderComponent(HomePage, { initiatives });
});

mainRouter.post('/filter/valueStatus', async (req, res) => {
  const { valueStatus } = req.body;
  const initiatives = await Initiative.findAll({
    where: { is_active: valueStatus },
    order: ['createdAt', 'DESC'],
  });
  res.renderComponent(HomePage, { initiatives });
});

module.exports = mainRouter;
