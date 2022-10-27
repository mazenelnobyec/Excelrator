 class Table{
    constructor(rows ,  startingID, columns){
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

export class ClothTable extends Table{
    constructor(rows,startingID,length,width){
        super(rows,startingID);
        this.length=length;
        this.width = width;
        
    }
}

function rangeCreator(min,max){
    return Math.random() * (max-min + 1 ) + min 
}


