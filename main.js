/*
 * File: main.js
 * Created Date: Tuesday January 21st 2025 01:55:46
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Tuesday January 21st 2025 02:12:36
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */

import Tick from '@pqina/flip';
import '@pqina/flip/dist/flip.min.css';

// see Tick API in console
console.log(Tick);

// create visual counter
Tick.DOM.create(document.querySelector('.tick'), {
  didInit: function (tick) {
    // create the countdown counter
    var counter = Tick.count.down('2029-01-20 19:00:00');

    counter.onupdate = function (value) {
      console.log('onupdate', value);
      tick.value = value;
    };

    counter.onended = function () {
      console.log('onended');
    };

    console.log('initialized');
  },
});