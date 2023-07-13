


const generateCardProduct = (title, description, image) => { 

  const card = document.createElement('div');
  card.className = 'card-product';
card.reset()
  card.innerHTML = `

  
        <div class="card-image">
          <img src="https://avatars.mds.yandex.net/i?id=f1ffc7e7623bc154c5d4d24a9353f340e438b504-8497218-images-thumbs&n=13" width="300" height="200" alt="" class="card-product-img">
        </div>
        <h2 class="card-product-name">${title}</h2>
        <p class="card-product-description">
          ${description}
        </p>
        <button class="open-card">
          Открыть карточку
        </button>
     


  `;

  document.querySelector('.cards-container').insertAdjacentElement('beforeend', card)

};



// generateCardProduct('HLEB CHERNIY', 'HOROSHIY CEHRNIY HLEB')
// generateCardProduct('HLEB BELI', 'HOROSHUY')
// generateCardProduct('BATON', 'BELIY TOJE HOROSHIY')



const whiteBread = [{  
    itemName: 'Хлеб белый',
    description: 'Дрожжевой пшеничный хлеб на закваске',
    image: "https://avatars.mds.yandex.net/i?id=f1ffc7e7623bc154c5d4d24a9353f340e438b504-8497218-images-thumbs&n=13",
    id: 01,
    flour: 300,
    water: 325,
    salt: 8,
    sugar: 20,
    yeast: 8
}];

const borodinoBread = [{
  itemName: 'Хлеб Бородинский',
    description: 'Бездрожжевой бородинский хлеб на закваске',
    image: "./pics/borodino.jpeg",
    id: 02,
    brew: 60,
    fermentGrey: 100,
    flour: 85,
    flourGrey: 100,
    water: 85,
    yeast: 1.5
}];

const darnitsaBread =  [{
    itemName: 'Хлеб Дарницкий',
    description: 'Хлеб бездрожжевой на ржаной закваске.</br> Прозводится согласно рецептуре соответствующей стандарту качества',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuQtzqPpSXV32FqUoCWRyDeHIWYJTNv0_uLXJ_4vubTs06Q-qOxjDGjnld7gWAkSny-c4&usqp=CAU",
    id: 03,
    flour: 150,
    flourGrey: 120,
    water: 170,
    fermentGrey: 220,
    salt: 7,
    caneSugar: 20,
    yeast: 1.5,

  }];

  const croissant =  [{
    itemName: 'Круасcан',
    description: 'Французский круасcан по классической рецептуре на кефире',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyulwap_tBm07pYnFFsWo9v1L30TzTRgDLMg&usqp=CAU",
    id: 04,
    flour: 42,
    kefir: 21,
    salt: 0.5,
    sugar: 4.25,
    yeastPress: 2.5,
    eggs: 8,


  }];

  const croissantButter = [{
    itemName: 'Круассан сливочный 5-ти слойный',
    description: 'Французский круассан особой рецептуры на сливочном масле',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyulwap_tBm07pYnFFsWo9v1L30TzTRgDLMg&usqp=CAU',
    id: 05,
    flour: 150,
    flourFrench: 220,
    yeast: 20,
    sugar: 38,
    butter72Percent: 250,
    salt: 0.5,
    water: 105,
    butter84Percent: 210,
  }];


const generateItemProduct = (data) => {

  data.forEach(item => {



  

const itemElem = document.createElement('ul');
itemElem.className = 'ingredients ingredients-wrapper';

itemElem.innerHTML = `
   
          <h3 class="item-product__description">${item.description}</h3>
        <img src=${item.image} alt="Хлеб белый" class="product-image" width="300" height="200">
      <div class="count-elements">

      ${item.id === 5 ? `<div class="product-count">
         Ниже представлена рецептура из расчета на 1 кг готового теста
        </div>` : `<div class="product-count">
         Ниже представлена рецептура из расчета на еденицу продукта
        </div>`}


        <input type="text" required name="количество булок для расчета" class="change-count-input">

        <button class="change-count" data-idd="${item.id}">изменить кол-во для расчета</button>
      </div>
        <h2 class="product-elem-name">
          Рецептура продукта: ${item.itemName}
        </h2>
<ul class="ing-elem_parent">
        <li class="ingredient-elem">мука пшеничная В/С
          <span class="count flour-count">${item.flour}</span> <span>гр.</span>
          </li>

         ${item.flourGrey ? `<li class="ingredient-elem">мука ржаная
          <span class="count flourGrey-count">${item.flourGrey}</span> <span>гр.</span>
          </li>` : ''} 

             ${item.flourFrench ? `<li class="ingredient-elem">мука пш. франц. В/С
          <span class="count flourFrench-count">${item.flourFrench}</span> <span>гр.</span>
          </li>` : ''}

             ${item.butter72Percent ? `<li class="ingredient-elem">масло сл-слив. 72.5%
          <span class="count butter72Percent-count">${item.butter72Percent}</span> <span>гр.</span>
          </li>` : ''} 

              ${item.butter84Percent ? `<li class="ingredient-elem">масло сл-слив 84.5% для закатки слоев
          <span class="count butter84Percent-count">${item.butter84Percent}</span> <span>гр.</span>
          </li>` : ''} 

            ${item.sugar ? `<li class="ingredient-elem">сахар
          <span class="count sugar-count">${item.sugar}</span> <span>гр.</span>
          </li>` : ''}

            ${item.caneSugar ? `<li class="ingredient-elem">сахар тростниковый
          <span class="count caneSugar-count">${item.caneSugar}</span> <span>гр.</span>
          </li>` : ''}

            ${item.salt ? `<li class="ingredient-elem">соль
          <span class="count salt-count">${item.salt}</span> <span>гр.</span>
          </li>` : ''}

         ${item.yeast ? `<li class="ingredient-elem">дрожжи
          <span class="count yeast-count">${item.yeast}</span> <span>гр.</span>
          </li>` : ''} 

          ${item.yeastPress ? `<li class="ingredient-elem">дрожжи пресс.
          <span class="count yeastPress-count">${item.yeastPress}</span> <span>гр.</span>
          </li>` : ''} 

          ${item.water ? `<li class="ingredient-elem">вода
          <span class="count water-count">${item.water}</span> <span>гр.</span>
          </li>` : ''}

          ${item.kefir ? `<li class="ingredient-elem">кефир
          <span class="count kefir-count">${item.kefir}</span> <span>гр.</span>
          </li>` : ''}

           ${item.eggs ? `<li class="ingredient-elem">яйца
          <span class="count eggs-count">${item.eggs}</span> <span>гр.</span>
          </li>` : ''}

          ${item.oil ? ` <li class="ingredient-elem">масло подсолнечное
          <span class="count oil-count">${item.oil}</span> <span>гр.</span>
          </li>` : ''}

          ${item.brew ? ` <li class="ingredient-elem">заварка солодовая
          <span class="count brew-count">${item.brew}</span> <span>гр.</span>
          </li>` : ''}

          ${item.fermentGrey ? ` <li class="ingredient-elem">закваска ржаная
          <span class="count fermentGrey-count">${item.fermentGrey}</span> <span>гр.</span>
          </li>` : ''}

          ${item.oil ? ` <li class="ingredient-elem">масло подсолнечное
          <span class="count oil-count">${item.oil}</span> <span>гр.</span>
          </li>` : ''}
</ul>
          <button class="refresh-card" data-idd="${item.id}">Посчитать еще раз</button>
         
  
`;


const generateModal = () => {
          const modalButton = document.createElement('button');
        modalButton.classList.add('open_modal_btn');
        modalButton.textContent = 'Описание процесса'
       
        itemElem.insertAdjacentElement('beforeend', modalButton);

      const modalWrapper = document.querySelector('.modal');
      const contentWrapper = document.querySelector('.content-product');

const closeModal = function(event) {
        const target = event.target;

        if (target.className === 'close_modal_elem' || target.className === 'okeyModalBtn') {
          modalWrapper.classList.remove('active_modal');
          contentWrapper.style.opacity = '';
          
          
        };
        
        if (target.className === 'readmoreModalBtn') {
          alert('Извините, данный раздел в разработке...');
          console.log('ALERT ALERT');
        }

      }

        modalButton.addEventListener('click', () => {
          modalWrapper.classList.add('active_modal');
          contentWrapper.style.opacity = '10%';
      
          
        contentWrapper.addEventListener('click', e => {
          if (e.target.className !== 'open_modal_btn') {
          modalWrapper.classList.remove('active_modal');
          contentWrapper.style.opacity = '';
          
          }
        });
          
        });
        
      modalWrapper.addEventListener('click', closeModal);
}

const modalWrapper = document.querySelector('.modal_description');

    if (item.id === 5) {
      generateModal()    
      

      modalWrapper.innerHTML = `
     <p>   Технология приготовления:
  <br>
     На первой скорости перемешивают до момента, когда тесто берет всю муку.
    <br>
Достают готовое тесто из тестомеса, делят на куски по 2.7кг и убирают в шоковую камеру на 2.5 часа.
    <br>
Готовят масло-заготовку: из сливочного масла формируют пласт с помощью тестораскатки размером 25см на 30см
Пласт масла должен быть весом — 800 гр.
    <br>
Слоение теста: достают охлажденное тесто из шокера (шок. камеры) и раскатывают на тестораскатке толщиной до 7мм
   <br>
1. Закладывают в пласт теста весом 2.7кг масло-заготовку 800 гр. ровно в центр и закрывают оставшимся тестом масло в форме прямоугольника. Края теста соединяют без нахлеста.
Раскатывают тесто на раскатке до толщины 5.5мм 
Края теста отрезают до видимой полосы сливочного масла от края до края 
Складывают тесто методом сложного сложения в два этапа.
<br>
Этап 1: <br>
Левый край теста складывают вправо на 10см, правый край теста складывают к левому краю без нахлеста, соединение теста должно быть ровным. <br>
Полученную заготовку складывают пополам соединением внутрь. ВАЖНО: тестовая заготовка должна иметь правильную прямоугольную форму! <br>
Тесто охлаждают в шоковой заморозке в течение 30 минут. Тесто не должно замерзнуть полностью!<br>
Тесто должно оставаться холодным и эластичным.<br>
Края теста отрезают до видимой полосы сливочного масла от края до края.<br>
Этап 2 — Сложное сложение:
<br>
Левый край теста складывают в право на 10см, правый край теста складывают к левому без нахлеста. Соединение теста должно быть ровным. Полученную заготовку складывают пополам, соединением внутрь. 
<br>
ВАЖНО: тестовая заготовка должна иметь правильную прямоугольную форму.<br>
Тесто охлаждаем в шоковой заморозке в течение 30 минут. Тесто не должно замерзнуть полностью.<br>
Тесто должно оставаться холодным и эластичным.
<br>
Этап 3 — Охлажденное тесто достают из шокера и раскатывают на раскатке до 3.5 мм 
<br>
Далее нарезаем прямоугольники весом 100 грамм. 10 см ширина у основания, 27 см высота.
<br>

Формовка: 
Тестовую заготовку слегка вытягивают руками в длину , загибают основания треугольника и закручивают симметрично к вершине.
Тестовые заготовки с круассанами укладывают на лист и убирают в шоковую заморозку до полной заморозки изделия -18 градусов цельсия.
    </p>  `;
    };

    if (item.id === 3) {
      generateModal();
      

      modalWrapper.innerHTML = `
      <p>
      <h3>Дарница</h3>
     <br>
     1) Замес:
     
     <br>
     Согласно рецептуре закладываем ингредиенты, заливаем холодной водой.
     <br>
     В тестомесильной машине вымешиваем содержимое около 5 минут на первой скорости. После, открываем и собираем все непромесы в радиусе дежы тестомеса.
     <br>
     Закрываем и включаем на 10 минут на второй скорости.
     <br>
     Далее органолептическими методами доводим до готовности и выкладываем в тару, подготавливаем место для формовки.
     <br>
     <br>
     2) Формовка:
     <br>
     Выставляем две формы на весы и сбрасываем тару. Двумя шпателямя, через воду, выкладываем тестовые заготовки в форму. Каждая по 600 грамм веса. Далее разравниваем верхний слой теста до аккуратного ровного состояния. 
     Отправляем тесто в расстоечный шкаф с температурой не превыщающей 30 градусов цельсия. Процесс расстойки занимает от 60 до 80 минут. 
     <br>
     ВАЖНО! своевременно посадить заготовки в печь, в противном случае рискуем получить деформацию верхней корки.
     <br>
     <br>
     3) Выпекание:
     <br>
    Печь разогреть до 250 градусов цельсия, после посадки выдать отпаривание 3 раза с задержкой 2-3 секунды, не более.
    <br>
    Таймер выставляем на 40 минут.
    <br>
    Далее опускаем температуру печи до 200 градусов цельсия и оставляем неизменно на 7-8 минут. 
    После этого, понижаем температурный режим до 160 градусов и продолжаем отпекать до готовности.
    <br>
    Готовность обязательно проверяем технологическим термометром. Температура готового хлеба составляет 96 градусов и выше.
    <br>
    <br>
    4) Заключительный процесс:
    <br>
    После завершения отпекания, вытягиваем формы и оставляем остывать на шпильке около 10 минут. Далее выбиваем хлеб из формы и выставляем остывать на решетки.
    <br>
    <br>
    На этом всё.
      </p>
      `;
    };

    if (item.id === 2) {

    generateModal();
    

    modalWrapper.innerHTML = `
    <p>
       <h3>Бородино</h3>
     <br>
     1) Замес:
     
     <br>
     Согласно рецептуре закладываем ингредиенты, заливаем холодной водой.
     <br>
     В тестомесильной машине вымешиваем содержимое около 5 минут на первой скорости. После, открываем и собираем все непромесы в радиусе дежы тестомеса.
     <br>
     Закрываем и включаем на 10 минут на второй скорости.
     <br>
     Далее органолептическими методами доводим до готовности и выкладываем в тару, подготавливаем место для формовки.
     <br>
     <br>
     2) Формовка:
     <br>
     Выставляем две формы на весы и сбрасываем тару. Двумя шпателямя, через воду, выкладываем тестовые заготовки в форму. Каждая по 500 грамм веса. Далее разравниваем верхний слой теста до аккуратного ровного состояния. 
     Отправляем тесто в расстоечный шкаф с температурой не превыщающей 30 градусов цельсия. Процесс расстойки занимает от 60 до 80 минут. 
     <br>
     ВАЖНО! своевременно посадить заготовки в печь, в противном случае рискуем получить деформацию верхней корки.
     <br>
     <br>
     3) Выпекание:
     <br>
    Печь разогреть до 250 градусов цельсия, после посадки выдать отпаривание 3 раза с задержкой 2-3 секунды, не более.
    <br>
    Таймер выставляем на 40 минут.
    <br>
    Далее опускаем температуру печи до 200 градусов цельсия и оставляем неизменно на 7-8 минут. 
    После этого, понижаем температурный режим до 160 градусов и продолжаем отпекать до готовности.
    <br>
    Готовность обязательно проверяем технологическим термометром. Температура готового хлеба составляет 96 градусов и выше.
    <br>
    <br>
    4) Заключительный процесс:
    <br>
    После завершения отпекания, вытягиваем формы и оставляем остывать на шпильке около 10 минут. Далее выбиваем хлеб из формы и выставляем остывать на решетки.
    <br>
    <br>
    На этом всё.
    </p>
    `;
    };

document.querySelector('.ingredients-wrapper').textContent = '';


document.querySelector('.ingredients-wrapper').insertAdjacentElement('beforebegin', itemElem);

const changeCountInput = document.querySelector('.change-count-input'),
changeCountButton = document.querySelector('.change-count'),
ingredientsElements = document.querySelectorAll('.count');
const refreshCardButton = document.querySelector('.refresh-card');
refreshCardButton.disabled = true;
refreshCardButton.classList.add('hide');

refreshCardButton.addEventListener('click', (event) => {

      event.preventDefault();

      document.querySelector('.ingredients-wrapper').remove();
      const target = event.target.dataset.idd;

      
    if (target === '1') { 
      generateItemProduct(whiteBread)
    } else if (target === '2') { 
      generateItemProduct(borodinoBread)
    } else if (target === '3') { 
      generateItemProduct(darnitsaBread)
    }
      else if (target === '4') {
        generateItemProduct(croissant)
        
      }
      else if (target === '5') {
        generateItemProduct(croissantButter);

      }

  });

changeCountInput.addEventListener('input', () => {

  changeCountInput.value ? changeCountButton.style.backgroundColor = 'green' : changeCountButton.style.backgroundColor = '';
});

changeCountButton.addEventListener('click', () => {

  console.log(typeof(changeCountInput.value));

if (changeCountInput.value <= 0) { 
  alert('Поле ввода не может быть пустым, а так же иметь отрицательное значение. Пожалуйста, убедитесь в правильности введенных данных.')
  
} else {
  refreshCardButton.disabled = false;
  refreshCardButton.classList.remove('hide');

  ingredientsElements.forEach(item => {

 item.textContent *= changeCountInput.value;

changeCountButton.style.display = 'none';
changeCountInput.style.display = 'none';

const productCounter = document.querySelector('.product-count');

if (changeCountInput.value > 20) {
  productCounter.textContent = changeCountInput.value + ' шт. ВНИМАНИЕ! Большой объем, лейте воду постепенно'
} else if (changeCountInput.value < 5) {
productCounter.textContent = changeCountInput.value + ` шт.`

} else if (changeCountInput.value > 30) {
productCounter.textContent = changeCountInput.value + ` шт.`
} else { 
productCounter.textContent = changeCountInput.value + ` шт.`
}

  });
  
  const inputWrapper = document.querySelector('.count-elements');
  const totalPriceElem = document.createElement('li');
  
  const totalPriceElemSecond = document.createElement('li');
  totalPriceElem.className = 'total-price-firstly'
  totalPriceElemSecond.className = 'total-price-secondly'

  inputWrapper.append(totalPriceElem);
  inputWrapper.append(totalPriceElemSecond);

  const countColor = document.querySelectorAll('.count');
  countColor.forEach(item => item.classList.add('active'))
}
});

changeCountButton.addEventListener('click', event => {
  const target = event.target;

  if (target.dataset.idd === '4') {
    let sum = 0;

    ingredientsElements.forEach(elem => { 

  sum += parseInt(elem.textContent);   
  }); 


  const ingElemParent = document.querySelector('.ing-elem_parent');
  const margarinElem = document.createElement('li');
  margarinElem.className = `spread-elem`;
  const sumElem = document.createElement('span');
  sumElem.className = `sum-elem`;
  sumElem.textContent = (sum * 0.25);

  margarinElem.textContent = ` гр. — Маргарин для закатки слоёв на общую массу теста ` + sum + ` гр.` ;
  
  ingElemParent.insertAdjacentElement('beforeend', margarinElem);
   margarinElem.insertAdjacentElement('afterbegin', sumElem);
  console.log(`totalWeightDough = ` + sum);
  console.log(`spreadForCroissants =  ` + (sum * 0.25));
  }
  
})

});

};

const openCardButton = document.querySelectorAll('.open-card');
const productsListWrapper = document.querySelector('.products-list');
const productWrapper = document.querySelector('.content-product');
const backToListBtn = document.querySelector('.back-to-list');


openCardButton.forEach(item => {
  item.addEventListener('click', (e) => { 

    e.preventDefault();
    productsListWrapper.classList.add('hide');
    productWrapper.classList.add('open');
  
    const target = e.target.dataset.idd;
    
    if (target === '01') { 
      generateItemProduct(whiteBread)
    } else if (target === '02') { 
      generateItemProduct(borodinoBread)
    } else if (target === '03') { 
      generateItemProduct(darnitsaBread)
    } else if (target === '04') {
      generateItemProduct(croissant)
    }
      else if (target === '05') {
      generateItemProduct(croissantButter)
    }
    
  })
});

backToListBtn.addEventListener('click', (e) => { 
    e.preventDefault();
    productsListWrapper.classList.remove('hide');
    productWrapper.classList.remove('open');
    document.querySelector('.ingredients-wrapper').remove();
});




