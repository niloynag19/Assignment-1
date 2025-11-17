type cnt=number|string|boolean;
const FormatValue=(value:cnt):cnt=>{
    if(typeof value==='number')
    {
        return value*10;
    }
    else if(typeof value ==='string')
    {
        return value.toUpperCase();
    }
    else 
    {
        return !value;
    }
}



type arr=Array<number>
type str=string

const getLength=(value:arr|str):number=>{
    if( typeof value ==='string')
    {
        return value.length;
    }
    else 
    {
        return value.length;
    }
}



class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    getDetails():string{
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}



type bookType={
    title:string;
    rating:number;
}
const filterByRating=(books:bookType[]):bookType[]=>{

    const value=books.filter((book)=>book.rating>=4)
    return value;
}



type person={
    id:number;
    name:string;
    email:string;
    isActive:boolean;
}

const filterActiveUsers=(users:person[]):person[]=>{
    const ans=(users.filter((user)=>user.isActive));
    return ans;
}



interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean,
};

const printBookDetails=(book:Book)=>{
    return(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable?"Yes":"NO"}`)
}




type Arr = (number | string)[];

const getUniqueValues=(arr1:Arr,arr2:Arr):Arr=>{

    const newArray:Arr=[];

    for(let it of arr2)
    {
        arr1[arr1.length]=it;
    }
    
    for(let it1 of arr1)
    {
        let flag=false;

        for(let it2 of newArray)
        {
            if(it1 === it2)
            {
                flag= true;
            }
        }
        if(!flag)
        {
            newArray[newArray.length]=it1;
        }
    }
    return newArray;
   
}




type Item = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

const calculateTotalPrice = (values: Item[]): number => {

    const ans = values.map((value) => {

        const cnt = value.price * value.quantity;

        if (value.discount) 
        {
            return cnt * (1 - value.discount / 100);
        }
        else 
        {
            return cnt;
        }
    })

    let result = 0;

    for (let it of ans) 
    {
        result += it;
    }

    return result;
}