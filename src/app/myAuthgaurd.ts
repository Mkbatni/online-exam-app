import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";


@Injectable()
export class myAuthGaurd implements CanActivate{
    canActivate(){
        
        if(sessionStorage.getItem('token') != null)
        {
            return true;
        }
        else
        {return false;
        }

    }
}