import * as assert from 'assert';

import sum from '../server.mjs';

describe("Test server.mjs", function() {
    it("Test the sum method", function() {
        assert.equal(sum(1, 2), 3);
    })
})

/*
import {MyClass} from "../zuTestenVersuch.mjs"

//import {validFiletype} from "../modules/fileService.mjs";

//var MyClass = requrie("../src/myClass.js");

var myObj = new MyClass();
//var assert = require('assert');

describe("Test suit", function() {
    it("Test the add method", function() {
        assert.equal(myObj.add(1, 2), 3);
    })
})
*/
