'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';


import SQLite from 'react-native-sqlite-storage';
SQLite.DEBUG(true);
SQLite.enablePromise(false);

const database_name = "Test.db";
const database_version = "1.0";
const database_displayname = "SQLite Test Database";
const database_size = 200000;
let db;

class DBHandler {

  populateDB = (tx) => {
    tx.executeSql('DROP TABLE IF EXISTS Sounds;');

    tx.executeSql('CREATE TABLE IF NOT EXISTS Sounds( '
      + 'sound_id INTEGER PRIMARY KEY NOT NULL, '
      + 'name VARCHAR(30),'
      + 'audio VARCHAR(30) ); ', [], this.successCB, this.errorCB);

      tx.executeSql('INSERT INTO Sounds (name, audio) VALUES ("Ese niño tiene senos", "senos");', []);
  }

  getSounds = () => {
    return db.executeSql('SELECT * FROM Sounds', [],null ,null );
  }

  openDB = () => {
    db = SQLite.openDatabase(database_name, database_version, database_displayname, database_size, this.openCB, this.errorCB);
    this.populateDB(db);
  }
}
