// Copyright (c) 2022 Joanne Santhosh All rights reserved
//
// Created by: Joanne Santhosh
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * This function calculates the area of a trapezoid.
 */
function calculate() {
  // input
  const aBaseOfTrapezoid = parseInt(document.getElementById('a-base-of-trapezoid').value)
  const bBaseOfTrapezoid = parseInt(document.getElementById('b-base-of-trapezoid').value)
  const heightOfTrapezoid = parseInt(document.getElementById('height-of-trapezoid').value)

  // process
  const area = ((aBaseOfTrapezoid + bBaseOfTrapezoid) / 2) * heightOfTrapezoid

  // output
  document.getElementById('area').innerHTML = '<p>The area of the trapezoid is: ' + area + ' cm²</p>'
  }
