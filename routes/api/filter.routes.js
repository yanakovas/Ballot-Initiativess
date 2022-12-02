const filterRouter = require('express').Router();
const { Initiative } = require('../../db/models');

const HomePage = require('../../views/HomePage');

filterRouter.post('/filter/valueLevel', async (req, res) => {
  const { valueLevel } = req.body;
  const initiatives = await Initiative.findAll({
    where: { level: valueLevel },
    order: ['createdAt', 'DESC'],
  });
  res.renderComponent(HomePage, { initiatives });
});

filterRouter.post('/filter/valueSection', async (req, res) => {
  const { valueSection } = req.body;
  const initiatives = await Initiative.findAll({
    where: { section: valueSection },
    order: ['createdAt', 'DESC'],
  });
  res.renderComponent(HomePage, { initiatives });
});

filterRouter.post('/filter/valueStatus', async (req, res) => {
  const { valueStatus } = req.body;
  const initiatives = await Initiative.findAll({
    where: { is_active: valueStatus },
    order: ['createdAt', 'DESC'],
  });
  res.renderComponent(HomePage, { initiatives });
});

module.exports = filterRouter;
