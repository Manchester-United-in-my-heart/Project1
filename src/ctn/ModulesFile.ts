import { IsArray, isNumber, IsNumber, IsString, validate } from "class-validator";
import { validateEach } from "@nestjs/common/utils/validate-each.util";

export class Element {
    @IsString()
    public poolId: string;
    @IsArray()
    public poolValue: number[];

    constructor(poolId: string, poolValue: number[]) {
        this.poolId = poolId;
        this.poolValue = poolValue;
    }
}
export class Query
{
    @IsString()
    public poolId:string;
    @IsNumber()
    public percentile:number;
}