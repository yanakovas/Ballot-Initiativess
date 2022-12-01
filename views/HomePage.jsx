const React = require('react');
const Layout = require('./Layout');

// React-компонент
function HomePage({ user }) {
return (
<Layout title="Home Page" user={user}>
  <div className='container'>  <button type= 'click' id='createCard'>Создать инициативу</button>
    <h1 className='intro'>Все инициативы</h1>
    <div className='cardsInitiativess'>
      <div className='card'>
        <div>Заголовок</div>
        <div>Краткое описание</div>
        <div>10 человек ЗА</div>
        <div>Уровень: Район</div>
        <button type='click' className='vote'>Проголосовать</button>
         </div>
         <div className='card'>
        <div>Заголовок</div>
        <div>Краткое описание</div>
        <div>10 человек ЗА</div>
        <div>Уровень: Район</div>
        <button type='click' className='vote'>Проголосовать</button>
         </div>
         <div className='card'>
        <div>Заголовок</div>
        <div>Краткое описание</div>
        <div>10 человек ЗА</div>
        <div>Уровень: Район</div>
        <button type='click' className='vote'>Проголосовать</button>
         </div>
         <div className='card'>
        <div>Заголовок</div>
        <div>Краткое описание</div>
        <div>10 человек ЗА</div>
        <div>Уровень: Район</div>
        <button type='click' className='vote'>Проголосовать</button>
         </div>
         <div className='card'>
        <div>Заголовок</div>
        <div>Краткое описание</div>
        <div>10 человек ЗА</div>
        <div>Уровень: Район</div>
        <button type='click' className='vote'>Проголосовать</button>
         </div>
         <div className='card'>
        <div>Заголовок</div>
        <div>Краткое описание</div>
        <div>10 человек ЗА</div>
        <div>Уровень: Район</div>
        <button type='click' className='vote'>Проголосовать</button>
         </div>
         <div className='card'>
        <div>Заголовок</div>
        <div>Краткое описание</div>
        <div>10 человек ЗА</div>
        <div>Уровень: Район</div>
        <button type='click' className='vote'>Проголосовать</button>
         </div>
         <div className='card'>
        <div>Заголовок</div>
        <div>Краткое описание</div>
        <div>10 человек ЗА</div>
        <div>Уровень: Район</div>
        <button type='click' className='vote'>Проголосовать</button>
         </div>
    </div>
  </div>
</Layout>
);
}

module.exports = HomePage;