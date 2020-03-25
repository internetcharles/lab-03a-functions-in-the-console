const felix = { name: 'felix', age: 13, weight: 20};
const dave = { name: 'dave', age: 3, weight: 14};
const jorn = { name: 'jorn', age: 5, weight: 18};
const brandon = { name: 'brandon', age: 85, weight: 45};
const mondo = { name: 'mondo', age: 12, weight: 13};
const johnny = {name: 'johnny', age: 10, weight: 32};

const cats = [felix, dave, jorn, brandon, mondo, johnny];


for(let i = 0; i < cats.length; i++) {
    const cat = cats[i];
    console.log(cat);
}

function logOutThings(n) {
    console.log('Here are your ' + n.length + ' things!');
}

logOutThings(cats);