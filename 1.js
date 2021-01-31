'use strict';
// console.log(false == '')//true
// console.log(false == [])//true
// console.log(false == {})//false
// console.log('' == 0)//true
// console.log('' == [])//true
// console.log('' == {})//false
// console.log(0 == [])//true
// console.log(0 == {})//false
// console.log(0 == null)//false
//#4
// const meetups = [
//     { name: 'JavaScript', isActive: true, members: 100 },
//     { name: 'Angular', isActive: true, members: 900 },
//     { name: 'Node', isActive: false, members: 600 },
//     { name: 'React', isActive: true, members: 500 },
// ]
// const membersOnActiveMeetups = meetups => meetups
//     .filter(meetup => meetup.isActive)
//     .reduce((sum, meetup) => sum + meetup.members, 0);
// console.log(membersOnActiveMeetups(meetups));
//#5
// let a = '25';
// a.test = '1';
// console.log(a);
//#6
// const str = 'h2h40h';
// const result = str
//     .split('h')
//     .map(s => s + 10)
//     .filter(s => s.length < 4);
// console.log(result);
//#10
// let obj = {
//     '0': 1,
//     0: 2
// };
// console.log(obj['0'] + obj[0]);
//#15
// var c = 'hello';
// (function b() {
//     console.log(c);
//     var c = 'world';
//     console.log(c);
// })();
//#16
// const a = {};
// (function (obj) {
//     obj.x = 40;
//     obj = null;
// })(a);
// console.log(a);
//#19
// const VALID_STATUSES = new Set(['SUCCESS', 'FINAL', 'DONE']);
// const people = [
//     { name: 'Max', age: 20, status: 'IN_PROGRESS' },
//     { name: 'Sam', age: 21, status: 'DONE' },
//     { name: 'Dax', age: 30, status: 'SUCCESS' }
// ]
// const peopleWithValidStatus = people
//     .filter(person => VALID_STATUSES.has(person.status))
//     .map(person => person.name)
// console.log(peopleWithValidStatus);
//#21
// class GODListener {
//     constructor() {
//         this.counter = 0;
//     }
//     handleClick() {
//         // this.counter === undefined ? this.counter = 0 : this.counter;
//         this.counter += 1;
//         console.log(this.counter);
//     }
// }
// const element = document.getElementById('testBtn');
// const listener = new GODListener();
// element.addEventListener('click', listener.handleClick);
//#22
// Promise.reject('a')
//     .catch(p => p + 'b')
//     .catch(p => p + 'c')
//     .then(p => p + 'd')
//     .finally(p => p + 'e')
//     .then(p => console.log(p))
//#27
// setTimeout(function timeout() {
//     console.log('1');
// }, 0);
// Promise.resolve('2')
//     .then(console.log);
// console.log('3');

// class GODListener {
//     constructor() {
//         this.counter = 0;
//     }
//     handleClick() {
//         this.counter += 1;
//         console.log(this.counter);
//     }
// }
// const element = document.getElementById('testBtn');
// const listener = new GODListener();
// element.addEventListener('click', listener.handleClick);
// element.addEventListener('click', listener.handleClick.bind(listener));

// var output = (function (x) {
//     delete x;
//     return x;
// })(0);
// console.log(output);
function func(a) {
    var a = 2;
    return a;
}
func.get = function (a) {
    return func();
}
console.log(func.get(1));