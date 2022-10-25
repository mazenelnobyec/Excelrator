export class Table{
    constructor(rows , columns , startingID){
        this.rows = rows;
        this.columns = columns;
        this.startingID = startingID;
    }


    idSetter(lengthOfRows,startingID){
        const arrayOfLines=[]
        for (let index = 0; index < lengthOfRows; index++) {
            arrayOfLines.push({"ID":startingID});
            startingID += 1;
            
        }
        return arrayOfLines;
    }
}








function rangeCreator(min,max){
    return Math.random() * (max-min + 1 ) + min 
}


