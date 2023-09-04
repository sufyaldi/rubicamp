import path from 'path'
import sqlite3  from "sqlite3";
import readline from 'readline';

const _dirname = path.resolve();
const dbpath = path.join(_dirname, 'db', 'university.db');

export const db = new sqlite3.Database(dbpath);
export const rl = readline.createInterface({input: process.stdin, output: process.stdout})