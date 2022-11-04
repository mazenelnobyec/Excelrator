
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
        this.tableArray = []
    }

    getFields(){
        return Object.getOwnPropertyNames(this.tableArray[0])
    }

    idSetter(){
        for (let index = 0; index < this.rows; index++) {
            this.tableArray.push({"ID":this.startingID});
            this.startingID += 1;
            
        }
        
    }
    
    rowNumberSetter(){
        for (let index = 0; index < this.tableArray.length; index++) {
            this.tableArray[index]["No"]=index+1;   
            
        }
    }
    
    getData(){
        return this.tableArray;
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
        
        for (let index = 0; index < this.tableArray.length; index++) {
            this.tableArray[index]["length"]=rangeCreator(this.minLength,this.maxLength);   
            
        }
        // this.tableObj.length=arr
    }

    printTable(){
        this.idSetter()
        this.lengthSetter()
        this.rowNumberSetter()
        console.log(this.tableArray)
    }
}

