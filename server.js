// ------------------ //
//    DEPENDENCIES    //
// ------------------ //

const express = require('expresss');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;

// ------------------ //
//        PORT        //
// ------------------ //

const PORT = process.env.PORT || 3000;
