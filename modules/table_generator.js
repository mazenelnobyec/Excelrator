export class Table{
    constructor(rows , columns , startingID){
        this.rows = rows;
        this.columns = columns;
        this.startingID = startingID;
    }


    idSetter(){
        const arrayOfLines=[]
        for (let index = 0; index < this.rows; index++) {
            arrayOfLines.push({"Index":index,"ID":this.startingID});
            this.startingID += 1;
            
        }
        return arrayOfLines;
    }

    printTable(){
        const dataHolder = this.idSetter()
        console.log(dataHolder)
    }
}








function rangeCreator(min,max){
    return Math.random() * (max-min + 1 ) + min 
}


