const initiativeApiRouter = require('express').Router();

const { normalizePluginName } = require('@babel/preset-env/lib/normalize-options');
const { Initiative } = require('../../db/models');

const CardView = require('../../views/CardView');

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

initiativeApiRouter.post('/', async (req, res) => {
  const { userId } = req.session;

  const {title, text, votingDeadline, level} = req.body
  
  await Initiative.create({
    title, text, level, user_id:userId, voting_deadline: votingDeadline,
  });
  // title={initiative.title} text={initiative.text} level={initiative.level}
  res.renderComponent(CardView, {title, text, level}, {doctype:false})
});

initiativeApiRouter.put('/id', async (req, res) => {
  const { userId } = req.session;

  const {title, text, votingDeadline, level, id} = req.body
  
  const initiative = await Initiative.find({where:{id}});
  
  if(!initiative){return res.send('Инициатива не существует')}
  
  if(initiative.user_id!==Number(userId)){
    res.send('Вы не можете удалить чужую инициативу')
  }

  Initiative.Update(
    {title, text, votingDeadline, level, id},
    {where:{id:initiative.id}}
  )
  Initiative.save()
  // title={initiative.title} text={initiative.text} level={initiative.level}
  res.json({success:true})
});

module.exports = initiativeApiRouter;
