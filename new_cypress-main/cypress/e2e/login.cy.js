describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); //зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // цвет кнопки восстановления пароля


         cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
         cy.get('#loginButton').click(); // нажала войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю что крестик виден

     })

     it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // цвет кнопки восстановления пароля

        cy.get('#forgotEmailButton').should('be.visible'); //кнопка "забыли пароль" видна пользователю
        cy.get('#forgotEmailButton').click();  // нажала "забыли пароль"
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввела логин
        cy.get('#restoreEmailButton').click(); // нажала кнопку отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю что вижу текст отправки пароля
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю что крестик виден

    })
 
    it('Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // цвет кнопки восстановления пароля


        cy.get('#mail').type('german@dolnikov.ru'); //ввели верный логин
        cy.get('#pass').type('iLoveqastudio'); //ввели НЕверный пароль
        cy.get('#loginButton').click(); // нажала войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что вижу текст не верного логина или пароля
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю что крестик виден

    })
    
    it('НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // цвет кнопки восстановления пароля


        cy.get('#mail').type('ger@dolnikov.ru'); //ввели НЕверный логин
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').click(); // нажала войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю что вижу текст не верного логина или пароля
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю что крестик виден

    })
       
    it('Логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // цвет кнопки восстановления пароля


        cy.get('#mail').type('germandolnikov.ru'); //ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').click(); // нажала войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю что вижу текст ошибки валидации
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю что крестик виден

    })

    it('Строчные и заглавные буквы в логине и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); //зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // цвет кнопки восстановления пароля


        cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели логин строчными и заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').click(); // нажала войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяю что крестик виден

    })


 
        
 })
 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome


 