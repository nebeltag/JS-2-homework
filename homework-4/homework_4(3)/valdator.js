"use strict"

class Validator {
  constructor(fofm) {
    this.patterns = {
      name: /^[a-zа-яё]+$/i,
      phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
      email: /^[\w_.-]+@\w+\.[a-z]{2,4}$/i,
    };

    this.errors = {
      name: 'Имя содержит только буквы',
      phone: 'Телефон подчиняется шаблону +7(000)000-0000',
      email: 'Email выглядит как mymail@mail.ru или my.mail@mail.ru, или my-mail@mail.ru'
    };

    this.errorClass = 'error-msg';
    this.form = form;
    this.valid = false;
    this._validateForm();
  }
  // дальше 47-00
}