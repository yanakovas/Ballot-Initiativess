const initiativeApiRouter = require('express').Router();
const { Initiative } = require('../../db/models');

initiativeApiRouter.delete('/:id', async (req, res) => {
  const { userId } = req.session;

  const count = await Initiative.destroy({
    where: {
      id: Number(req.params.id),
      user_id: userId,
    },
  });

  if (count === 0) {
    res.status(420).send('Вы не можете удалить эту инициативу');
  } else {
    res.json({ success: true });
  }
});

module.exports = initiativeApiRouter;
