
export enum Category {
    SPORT = "SPORT",
    VACATION = "VACATION",
    FOOD = "FOOD",
    ELECTRICITY = "ELECTRICITY",
    map = "map"
}

export class CouponModel{



    public id?:number;
    public company?:string;
    public category?:Category;
    public title?:string;
    public description?:string;
    public startDate?:Date;
    public endDate?:Date;
    public amount?:number;
    public price?:number;
    public image?:string;



    public constructor(id?:number,company?:string,category?:Category,title?:string,description?:string,startDate?:Date,endDate?:Date,amount?:number,price?:number,image?:string){
        this.id=id;
        this.company=company;
        this.category=category;
        this.title=title;
        this.description=description;
        this.startDate=startDate;
        this.endDate=endDate;
        this.amount=amount;
        this.price=price;
        this.image=image;
    
    }

}


    export class CouponResModel{


        public company?:string;
        public category?:Category;
        public title?:string;
        public description?:string;
        public startDate?:Date;
        public endDate?:Date;
        public amount?:number;
        public price?:number;
        public image?:string;
    
    
        public constructor(company?:string,category?:Category,title?:string,description?:string,startDate?:Date,endDate?:Date,amount?:number,price?:number,image?:string){
          
            this.company=company;
            this.category=category;
            this.title=title;
            this.description=description;
            this.startDate=startDate;
            this.endDate=endDate;
            this.amount=amount;
            this.price=price;
            // const strImage=JSON.parse(image)
            this.image=image;
        
        }
    
    }

