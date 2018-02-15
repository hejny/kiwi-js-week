import {observable} from "mobx/lib/mobx";





const result = {
    from: 'Prague',
    to: 'Barcelona',
    date: '2018/03/18',
    time: '18:30',
    price: '150€',
};





export default function searchFlights(request){
    return new Promise((resolve, reject)=>{





        setTimeout(()=>{

            resolve([result,result,result,result,result,result]);

        },1550)



    });
}