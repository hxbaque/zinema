import { Injectable } from "@angular/core";
import { SnackBar } from "src/assets/ts/MOCK_DATA_SnackBar";
import { SnackBars } from "../interfaces/snack.interface";

@Injectable()
export class SnackBarServices{
    private _snackBar: SnackBars[] = [...SnackBar]

    get snacksBar(): SnackBars[]{
        return this._snackBar;
    }
}