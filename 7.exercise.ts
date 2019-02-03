/*
Que : Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). The key will always be a string.

    Let's keep it simple and only add the following methods to the Map:

setItem(key: string, item: T) // should create a new key-value pair

getItem(key: string) // should retrieve the value of the provided key
clear() // should remove all key-value pairs
printMap() // should output key-value pairs
The map should be usable like shown below:

    const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();

*/


class MyMap <T extends string | number >{

    private map: { [keyName: string] : T }  = {};  /* [keyName:string] is not an array it's syntax to define an unknown property name where keyName can be anything and key value is of 'T' type          */

    setItem(key: string, item: T): void{
        this.map[key] = item ;  //valid bcz object can be accessed using '[]' or '.'
        // this.map.key = item ;  //we cannot explicitly defined value when we use this syntax bcz compiler will set all value as key property
    }

    getItem(key: string){
        return this.map[key];
    }

    clear(){
        this.map = {} ;
    }

    printMap(){
        for(let key in this.map){
            console.log(key, this.map[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log(numberMap.getItem("apple"));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
console.log(stringMap.getItem("name"));
stringMap.printMap();

