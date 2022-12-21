import { Injectable, NotFoundException } from "@nestjs/common";
import { Element, Query, QuerySolution } from "./ModulesFile";
@Injectable()
export class ContainerServices
{
  public Storage: Element[] = [];

  getHello(): string {
    return this.Storage.length.toString();
  }

  getElement(s: string) {
    let z: Element=this.Storage.find(item => item.poolId===s)
    if (z)
    {
      return z;
    }
    else throw new NotFoundException("Khong tim thay Pool");
  }

  postElement(element: Element): string {
    let checkElement: Element =this.Storage.find(item =>item.poolId===element.poolId);
    if (!checkElement) {
      this.Storage.push(element);
      return "Inserted";
    } else {
      let z = this.Storage.indexOf(checkElement);
      let newElement: Element = new Element(
        checkElement.poolId,
        checkElement.poolValue.concat(element.poolValue)
      );
      ;
      this.Storage[z] = newElement;
      return "Appended";
    }
  }
  Calculate1(query:Query):QuerySolution|String
  {
    let x: Element=this.getElement(query.poolId);
    if (!x) return "notFound";
    x.poolValue=x.poolValue.sort((a:number,b:number)=>(a-b));
    if (query.percentile<=0) return new QuerySolution(x.poolValue.length,x.poolValue[0]-1); // percentile<=0 thi tra ve min-1
    if (query.percentile>=100) return new QuerySolution(x.poolValue.length,x.poolValue[x.poolValue.length-1]+1); // percentile<=0 thi tra ve max+1
    let n=x.poolValue.length;
    let rank=query.percentile/100;
    let res:number=rank*n;
    res=Math.ceil(res);
    return new QuerySolution(n,x.poolValue[res-1]);
  }
  Calculate2(query:Query):QuerySolution|String
  {
    let x: Element=this.getElement(query.poolId);
    if (!x) return "notFound";
    x.poolValue=x.poolValue.sort((a:number,b:number)=>(a-b));
    if (query.percentile<=0) return new QuerySolution(x.poolValue.length,x.poolValue[0]-1); // percentile<=0 thi tra ve min-1
    if (query.percentile>=100) return new QuerySolution(x.poolValue.length,x.poolValue[x.poolValue.length-1]+1); // percentile<=0 thi tra ve max+1
    let n=x.poolValue.length;
    let rank=query.percentile/100;
    let res=rank*n;
    if (Math.ceil(res)===Math.floor(res)) return new QuerySolution(n,x.poolValue[res]);
    res=res-1;
    let x0=Math.floor(res);
    let x1=Math.ceil(res);
    let p1=x.poolValue[x1];
    let p0=x.poolValue[x0];
    let result:number=(res-x0)*(p1-p0)/(x1-x0)+p0;
    // console.log(`${x0}  ${res}  ${x1}  ${p0}   ${result}   ${p1}`);
    return new QuerySolution(n,result);
  }
}