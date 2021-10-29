import { SalesByDate, SalesData } from "../components/salesByBarStack";
import { ProductsByDate } from "../components/salesCountByProduct";

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

export function formatRevenueData(data: SalesData[]): SalesByDate[] {
  const dataMassaged = data.map(newObj => {
    const returnObj = ({date: newObj.Date, salesPerson: newObj.Salesperson, revenue: newObj.Revenue.slice(1)})
     return returnObj
   }).reduce((a: Array<string>, c: any) => {
     let x = a.find((e: any)=> e.date === c.date && e.salesPerson === c.salesPerson);
     if(!x) {
       a.push(Object.assign({}, c))
     } else {
       (x as any).sales = Number(c.revenue) + Number((x as any).revenue)
     }
     return a
   }, []).map((newObj: any) => {
     return ({
       date: newObj.date,
       [newObj.salesPerson]: newObj.revenue,
     })
   });
  
   const result:SalesByDate[] = Object.values(dataMassaged.reduce((a: Accumulator, c) => {
    a[c.date] = Object.assign(a[c.date] || {}, c);
    return a;
}, {}))
return result;
  }

  //product data
export function formatSalesByProductData(data: SalesData[], newKeys: string[]): ProductsByDate[] {
  const dataBetween = data.map(newObj => {
    const returnObj = ({date: newObj.Date, product: newObj.Product, sales: newObj.Sales})
     return returnObj
   }).reduce((a: Array<string>, c: any) => {
     let x = a.find((e: any) => e.date === c.date && e.product === c.product);
     if(!x) {
       c.sales = parseInt(c.sales.toString().replace('$', ''));
       a.push(Object.assign({}, c))
     } else {
       (x as any).sales = parseInt(c.sales.toString().replace('$', '')) + Number((x as any).sales)
     }
     return a
   }, []);
   
   const dataMassaged = dataBetween.map((newObj: any) => {
     return ({
       date: newObj.date,
       [newObj.product]: newObj.sales,
     })
   })

   const preResult = Object.values(dataMassaged.reduce((a: Accumulator, c) => {
       a[c.date] = Object.assign(a[c.date] || {}, c);
       return a;
   }, {}))
   
   const result:ProductsByDate[] = preResult.map((day: any) => {
     newKeys.forEach(key => {
       if (day[key] as any === undefined) {
         day[key] = 0;
       }
     });
     return day;
   });

return result;
  }
