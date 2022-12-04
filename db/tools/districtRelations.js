/* eslint-disable camelcase */
const path = require('path');
const fs = require('fs').promises;
const FederalDistrict = require('../models')
const Region = require('../models')
const Municipality = require('../models')


// const data = await (await fs.readFile(path.join(__dirname,'db/mun_obr.csv'),'utf-8'))
// .split('\n')
// .shift()
// .map((row)=>row.splt(';'))
// .map((values)=>({municipalityName:values[3], regionName:values[7]}))
// .array.filter((pairOfValues)=>
//   districtReltions.some((district)=>
//   district.some(()=>
//   district.Regions.some((region)=>
//   region.name===pairOfValues[0])))
// )
// const regions = '';


const districtRelations = [
    {name: 'Центральный федеральный округ',
    Regions:[{
      name:'Белгородская область' 
    },
    {
      name:'Брянская область' 
    },
    {
      name:'Владимирская область' 
    },
    {
      name:'Воронежская область' 
    },
    {
      name:'Ивановская область' 
    },
    {
      name:'Калужская область' 
    },
    {
      name:'Костромская область' 
    },
    {
      name:'Курская область' 
    },
    {
      name:'Липецкая область' 
    },
    {
      name:'Московская область' 
    },
    {
      name:'Орловская область' 
    },
    {
      name:'Рязанская область' 
    },
    {
      name:'Тамбовская область' 
    },
    {
      name:'Тверская область' 
    },
    {
      name:'Тульская область' 
    },
    {
      name:'Ярославская область' 
    },
    {  
      name:'Ярославская область' 
    },]},
  
    {
      name: 'Южный федеральный округ',
      Regions:[{
        name:'Республика Адыгея' 
      },
      {
        name:'Республика Калмыкия' 
      },
      {
        name:'Краснодарский край' 
      },
      {
        name:'Астраханская область' 
      },
      {
        name:'Ивановская область' 
      },
      {
        name:'Ростовская область' 
      },]
    },
  
      {
      name: 'Северо-Западный федеральный округ',
      Regions:[{
        name:'Республика Карелия' 
      },
      {
        name:'Республика Коми' 
      },
      {
        name:'Архангельская область' 
      },
      {
        name:'Вологодская область' 
      },
      {
        name:'Калининградская область' 
      },
      {
        name:'Ленинградская область' 
      },
      {
        name:'Мурманская область' 
      },
      {
        name:'Новгородская область' 
      },
      {
        name:'Псковская область' 
      },
      {
        name:'Город федерального значения Санкт-Петербург' 
      },
      {
        name:'Ненецкий автономный округ' 
      },]
    },
  
    {
      name: 'Дальневосточный федеральный округ',
      Regions:[{
        name:'Республика Саха' 
      },
      {
        name:'Камчатский край' 
      },
      {
        name:'Приморский край' 
      },
      {
        name:'Хабаровский край' 
      },
      {
        name:'Амурская область' 
      },
      {
        name:'Магаданская область' 
      },
      {
        name:'Сахалинская область' 
      },
      {
        name:'Еврейская автономная область' 
      },
      {
        name:'Чукотский автономный округ' 
      },]
    },
  
    {
      name: 'Сибирский федеральный округ',
      Regions:[{
        name:'Республика Алтай' 
      },
      {
        name:'Республика Бурятия' 
      },
      {
        name:'Республика Тыва' 
      },
      {
        name:'Республика Хакасия' 
      },
      {
        name:'Алтайский край' 
      },
      {
        name:'Забайкальский край' 
      },
      {
        name:'Красноярский край' 
      },
      {
        name:'Иркутская область' 
      },
      {
        name:'Кемеровская область' 
      },
      {
        name:'Новосибирская область' 
      },
      {
        name:'Омская область' 
      },
      {
        name:'Томская область' 
      },]
    },
  
    {
      name: 'Уральский федеральный округ',
      Regions:[{
        name:'Курганская область' 
      },
      {
        name:'Свердловская область' 
      },
      {
        name:'Тюменская область' 
      },
      {
        name:'Челябинская область' 
      },
      {
        name:'Челябинская область' 
      },
      {
        name:'Ямало-Ненецкий автономный округ' 
      },]
    },
  
    {
      name: 'Приволжский федеральный округ',
      Regions:[{
        name:'Республика Башкортостан' 
      },
      {
        name:'Республика Марий Эл' 
      },
      {
        name:'Республика Мордовия' 
      },
      {
        name:'Республика Татарстан' 
      },
      {
        name:'Удмуртская Республика' 
      },
      {
        name:'Чувашская Республика' 
      },
      {
        name:'Кировская область' 
      },
      {
        name:'Нижегородская область' 
      },
      {
        name:'Оренбургская область' 
      },
      {
        name:'Пензенская область' 
      },
      {
        name:'Пермский край' 
      },
      {
        name:'Самарская область' 
      },
      {
        name:'Саратовская область' 
      },
      {
        name:'Ульяновская область' 
      },]
    },
    
    {
        name: 'Северо-Кавказский федеральный округ',
        Regions:[{
          name:'Республика Дагестан' 
        },
        {
          name:'Республика Ингушетия' 
        },
        {
          name:'Кабардино-Балкарская Республика' 
        },
        {
          name:'Карачаево-Черкесская Республика' 
        },
        {
          name:'Республика Северная Осетия — Алания' 
        },
        {
          name:'Чеченская Республика' 
        },
        {
          name:'Ставропольский край' 
        }]
    }
  ]

  async function main(){
    const data = await ( fs.readFile(path.join(__dirname,'/mun_obr.csv'),'utf-8'))
    const valuePairs = data.split('\n')
    .map((row)=>row.split(';'))
    .map((values)=>({municipalityName:values[3], regionName:values[7]}))
    // console.log(valuePairs)
    const filteredPairs = valuePairs.filter((obj1)=>districtRelations.some((obj2)=>obj2.Regions.some((obj3)=>obj3.name === obj1.regionName))) 
    const obj = {}
    filteredPairs.map((pair)=>{

    })
    // console.log(filteredPairs)
}




  module.exports = districtRelations;
