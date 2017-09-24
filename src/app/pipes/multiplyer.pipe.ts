import { PipeTransform, Pipe } from "@angular/core";


@Pipe({ name: "multiplyer" })
export class MultiplyerPipe implements PipeTransform {
    transform(value: number, by: number): number {
        let sumvalue = this.doSum(value, by);
        let calculated = this.doCalculation(sumvalue, by);
        return calculated;
    }

    doCalculation(value: number, by: number) {
        return value * (by || 2)
    }

    doSum(value, by) {
        return value + by;
    }
}

@Pipe({ name: "lower" })
export class LowercasePipe implements PipeTransform {
    transform(value: string): string {
        return value.toLowerCase();
    }
  

}