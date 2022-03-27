// const fruits = [{nme: 'apple'}, {name: 'bedena'}, {name: 'origin'}];
// const election = ['abir', 'hasa', 'jihad', 'jihad', 'sakinkhan'];
// const election2 = {
//     abir: 1,
//     hasan: 1,
//     jihad: 1,
//     jibon: 4,
// }
// console.log(election2);

const db = {};

let addToDb = item => {
    // db.alom = 1;
    // db['alom'] = 1;
    // db[item] = 1 ;

    const storeTracker = localStorage.setItem('cheka-teka');
    if(storeTracker){
        db = JSON.parse(storeTracker);
    }

    if(item in db){
        db[item] = db[item] + 1; 
    }
    else{
        db[item] = 1;
    }
    localStorage.setItem('cheka-teka', JSON.stringify(db));
}

const removeItemem = item =>{
    const storeTracker = localStorage.getItem('cheka-teka');
    if(storeTracker){
        const storyObjrt = JSON.parse(storeTracker);
        delete storyObjrt[item];
        localStorage.setItem('cheka-teka', JSON.stringify(storyObjrt));
    }
}