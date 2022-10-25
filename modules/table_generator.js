export class Table{
    constructor(rows , columns , startingID){
        this.rows = rows;
        this.columns = columns;
        this.startingID = startingID;
    }


    idSetter(){
        const arrayOfLines=[]
        for (let index = 0; index < this.rows; index++) {
            arrayOfLines.push({"ID":this.startingID});
            this.startingID += 1;
            
        }
        console.log(arrayOfLines)
        return arrayOfLines;
    }
}








function rangeCreator(min,max){
    return Math.random() * (max-min + 1 ) + min 
}


