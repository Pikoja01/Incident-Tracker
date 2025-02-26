export class User{
    userName: string;
    password: string;

    constructor(){
        this.password = "";
        this.userName = ""
    }
}


export interface IAPIRESPONSE {
    
        message: string;
        result: boolean;
        data: any;
      
}