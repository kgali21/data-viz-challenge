import { SalesByDate, SalesData } from "../components/salesByBarStack";

interface Accumulator {
  [key: string]: SalesByDate
}

export function formatSalesData(data: SalesData[]): SalesByDate[] {
  const dataMassaged = data.map(newObj => {
    const returnObj = ({date: newObj.Date, salesPerson: newObj.Salesperson, sales: newObj.Sales})
     return returnObj
   }).reduce((a: Array<string>, c: any) => {
     let x = a.find((e: any)=> e.date === c.date && e.salesPerson === c.salesPerson);
     if(!x) {
       a.push(Object.assign({}, c))
     } else {
       (x as any).sales = Number(c.sales) + Number((x as any).sales)
     }
     return a
   }, []).map((newObj: any) => {
     return ({
       date: newObj.date,
       [newObj.salesPerson]: newObj.sales,
     })
   });
  
   const result:SalesByDate[] = Object.values(dataMassaged.reduce((a: Accumulator, c) => {
    a[c.date] = Object.assign(a[c.date] || {}, c);
    return a;
}, {}))
return result;
  }