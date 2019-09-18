import { Injectable } from "@angular/core";

@Injectable()

export class ValidatorService {
    private regexForNum = new RegExp(/^[0-9]+$/);

    constructor() {}

    validateInput(val) {
        return this.regexForNum.test(val);
    }
}