import { Injectable, NotFoundException } from "@nestjs/common";
import {Element,Query} from './ModulesFile';
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
  Calculate(query:Query)
  {
    let x: Element=this.getElement(query.poolId);
    if (!x) return "notFound";
    x.poolValue.sort();
    let n=x.poolValue.length;
    let rank=query.percentile/100;
    let res:number=rank*n;
    if (res%1!==0) res=Math.floor(res)+1;
    return x.poolValue[res-1];
  }
}