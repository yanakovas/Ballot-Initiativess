const mainApiRouter = require('express').Router();
const {Initiative} = require('../../db/models')

const HomePage = require('../../views/HomePage');

mainApiRouter.post('/success', async (req, res) => {
  try{
      const initiative = await Initiative.findByPk(req.body.id)
      if(req.body.value === 'success') {
    await initiative.update({
        votes_for: (Number(initiative.votes_for)+1),
    })
    await initiative.save()
    res.json(initiative)
   }else{
    await initiative.update({
        votes_against: (Number(initiative.votes_against)+1),
    })
    await initiative.save()
    res.json(initiative)
   }
}
catch(error) {
    console.error(error);
    res.sendStatus(500)
}
})

module.exports = mainRouter;
