describe('Покупка аватара', function () {                               // название набора тестов
    it('Покупка нового аватара для тренера', function () {   // название теста
        cy.visit('https://pokemonbattle.me/'); 

        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); //вводим логин
        cy.get('#password').type('USER_PASSWORD'); // вводим пароль
        cy.get('.auth__button').click(); // нажимаем войти

        cy.wait(2000); // ожидание

        cy.get('.header__btns > [href="/shop"]').click();  // нажимаем кнопку магазин
        cy.get('.available > button').first().click();  // покупаем первого доступного

        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111'); // вводим номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('0127'); // вводим строк действия карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // вводим cvv код
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('QASTUDIO'); // вводим имя владельца карты
        cy.wait(2000); // ожидание
        cy.get('.pay-btn').click(); //нажимаем оплатить

        cy.get('#cardnumber').type('56456'); //вводим код из смс
        cy.get('.payment__submit-button').click(); //нажимаем отправить

        cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // проверяем что есть текст успешной покупки
        cy.get('.payment__font-for-success').should('be.visible'); //проверям что текст виден
        cy.get('.payment__adv').contains('Вернуться в битву покемонов'); // проверяем что есть кнопка вернуться
        cy.get('.payment__adv').should('be.visible'); // проверяем что кнопка видна

     })
 })

 
 
         // npx cypress run --spec cypress/e2e/pokemons.cy.js --browser chrome
         // npx cypress open
 
       

         

 
 