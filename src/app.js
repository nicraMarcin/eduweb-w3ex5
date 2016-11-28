import {
    Programmer
} from './person.js';
import {
    ColorPoint
} from './point.js';

let jsDev = new Programmer("Jan", "Kowalski", "Python");
jsDev.work();

let cp = new ColorPoint(25, 8, "Zielony");
cp.toString();
