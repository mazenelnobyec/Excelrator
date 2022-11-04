
const meterics ={Inches:39.37, 	
              Feet:3.281,
              Yards:1.094} 	


function conversion(given,wanted_length){
    return given * meterics.wanted_length;
}

function rangeCreator(min,max){
    return Math.random() * (max-min + 1 ) + min 
}

class Table{
    constructor(rows ,  startingID, columns){
        this.rows = rows;
        this.columns = columns;
        this.startingID = startingID;
        this.tableObj = {}
    }


    idSetter(){
        const arrayOfLines=[]
        for (let index = 0; index < this.rows; index++) {
            arrayOfLines.push({"ID":this.startingID});
            this.startingID += 1;
            
        }
        this.tableObj = {"ID":arrayOfLines};
    }

    
}

export class ClothTable extends Table{
    constructor(rows,startingID,minLength,maxLength,width){
        super(rows,startingID);
        this.minLength=minLength;
        this.maxLength=maxLength;
        this.width = width;
    }

     lengthSetter(){
        let arr=[]
        for (let index = 0; index < this.tableObj["ID"].length; index++) {
            arr.push(rangeCreator(this.minLength,this.maxLength));   
            
        }
        this.tableObj.length=arr
    }
    printTable(){
        this.idSetter()
        this.lengthSetter()
        console.log(this.tableObj)
    }
}

