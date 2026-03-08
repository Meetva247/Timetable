
import { generateTimetable, init } from './src/data.js';

// Mock localStorage for Node.js
global.localStorage = {
    _data: {},
    setItem: function (id, val) { this._data[id] = String(val); },
    getItem: function (id) { return this._data.hasOwnProperty(id) ? this._data[id] : null; },
    removeItem: function (id) { delete this._data[id]; },
    clear: function () { this._data = {}; }
};

init();

const tt = generateTimetable(4, '4CE-A', 60, 'evening');

console.log('Days:', tt.days);
console.log('Periods:', tt.periods);

console.dir(tt.grid, { depth: null });
