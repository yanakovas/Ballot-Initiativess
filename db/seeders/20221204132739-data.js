/* eslint-disable camelcase */
const bcrypt = require('bcrypt')
const fs = require('fs').promises;
const path = require('path');
const districtRelations = require('../tools/districtRelations')
const {Initiative, User, FederalDistrict, Municipality, Region } = require('../models')

module.exports = {
  async up (queryInterface, Sequelize) {

    const testUser1 = await User.create({
      password: await (bcrypt.hash("qwertyui", 10)),
      full_name:"Тестович Тест Тестов",
      login:"test@test.com",
      registration_id:1,
    })

    const initiatives = await Initiative.bulkCreate([
      {
        user_id:testUser1.id,
        title:'Инициатива',
        text:'Текст инициативы',
        votes_for:0,
        votes_against:0,
        voting_deadline: new Date,
        level:'Уровень',
        is_active:true,
      },
      {
        user_id:testUser1.id,
        title:'Инициатива',
        text:'Текст инициативы',
        votes_for:0,
        votes_against:0,
        voting_deadline: new Date,
        level:'Уровень',
        is_active:true,
      },
      {
        user_id:testUser1.id,
        title:'Инициатива',
        text:'Текст инициативы',
        votes_for:0,
        votes_against:0,
        voting_deadline: new Date,
        level:'Уровень',
        is_active:true,
      },
      {
        user_id:testUser1.id,
        title:'Инициатива',
        text:'Текст инициативы',
        votes_for:0,
        votes_against:0,
        voting_deadline: new Date,
        level:'Уровень',
        is_active:true,
      },
      {
        user_id:testUser1.id,
        title:'Инициатива',
        text:'Текст инициативы',
        votes_for:0,
        votes_against:0,
        voting_deadline: new Date,
        level:'Уровень',
        is_active:true,
      },
      {
        user_id:testUser1.id,
        title:'Инициатива',
        text:'Текст инициативы',
        votes_for:0,
        votes_against:0,
        voting_deadline: new Date,
        level:'Уровень',
        is_active:true,
      },
      {
        user_id:testUser1.id,
        title:'Инициатива',
        text:'Текст инициативы',
        votes_for:0,
        votes_against:0,
        voting_deadline: new Date,
        level:'Уровень',
        is_active:true,
      },
      {
        user_id:testUser1.id,
        title:'Инициатива',
        text:'Текст инициативы',
        votes_for:0,
        votes_against:0,
        voting_deadline: new Date,
        level:'Уровень',
        is_active:true,
      },
      {
        user_id:testUser1.id,
        title:'Инициатива',
        text:'Текст инициативы',
        votes_for:0,
        votes_against:0,
        voting_deadline: new Date,
        level:'Уровень',
        is_active:true,
      },
      {
        user_id:testUser1.id,
        title:'Инициатива',
        text:'Текст инициативы',
        votes_for:0,
        votes_against:0,
        voting_deadline: new Date,
        level:'Уровень',
        is_active:true,
      },
  ])
    const districts = await FederalDistrict.bulkCreate(districtRelations, {include:[FederalDistrict.Regions]})

    const data = await ( fs.readFile(path.join(__dirname,'../tools/mun_obr.csv'),'utf-8'))
    const valuePairs = data.split('\n')
    .map((row)=>row.split(';'))
    .map((values)=>({municipalityName:values[3], regionName:values[7]}))
    // console.log(valuePairs)
    const filteredPairs = valuePairs.filter((obj1)=>districtRelations.some((obj2)=>obj2.Regions.some((obj3)=>obj3.name === obj1.regionName))) 

    const result = await filteredPairs.map(async (pair)=>{
      const {regionName, municipalityName} = pair;
      const region = await Region.findOne({where:{name:regionName}})
      console.log(region)
      const municipality = await Municipality.create({name:municipalityName, region_id:region.id})
      return municipality.s
    })
    const info = await Promise.all(result)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
