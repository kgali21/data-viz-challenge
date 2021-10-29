

export default function dataMassaged = (data) = data.map(newObj => {
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
   })