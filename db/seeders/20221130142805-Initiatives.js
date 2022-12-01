/* eslint-disable camelcase */
const bcrypt = require('bcrypt');
// const path = require('path')
// const fs = require('fs').promises;
// const districtReltions = require('../districtRelations');

const {User, Initiative, Federal_disrict, Region, Municipality} = require('../models')
/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up () {
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
  
  
  },

  async down () {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};





