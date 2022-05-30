// class Car{
//     constructor(name){
//         this.brand=name;

import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";

//     }
//     IHave(model){
//          var x= "I Have a "+this.brand+ " "+model+ "\n" + `I Have a ${this.brand} ${model}`;     
//          return console.log(x);
//     }
// }
// const myCar=new Car("Ford");
// myCar.IHave("Focus");
// ------------------------------------------------------------------------------------------------
//  class Car{
//      constructor(name){
//          this.brand=name;

//      }
//    IHave(){
//     return "I Have a "+ this.brand;
         
//      }
// }
// class Model extends Car{
//     constructor(name,mdl){
// super(name);
// this.model=mdl;
//     }
//     BenimVar(){
//        return this.IHave() + ", it is a" + " "+ this.model;
//     }
// }
//  const myCar=new Model("Ford","Mustang");
//  myCar.BenimVar();
//  -------------------------------------------------------------------------------------------------------
//Asenkron - Promise Kavramı-------------------------------------------------------------------------------
// let isim;
// setTimeout(()=>{
//     isim="Bilal";
//      console.log(asyncOrnek())
// },3000);
// function asyncOrnek(){
// return `asyncOrnek fonksiyonu çalişti ve isim değişkeninin değeri: ${isim}`
// }
// --------------------------------------------------------------------------------------------------------------