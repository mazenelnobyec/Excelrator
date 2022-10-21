let tableParamters = {
    rows:null,
    columns:null,
    startingID:null
}

export function tablePrams(params) {
    tableParamters={rows:params.rows,
                    columns:params.columns,
                    startingID:params.startingID}
}

export function testTable(){
    console.log(`${tableParamters.rows}   ${tableParamters.columns}`)
    console.log(idSetter(tableParamters.columns,tableParamters.startingID))
}


function idSetter(lengthOfColumn,startingID){
    const arrayOfLines=[]
    for (let index = 0; index < lengthOfColumn; index++) {
        arrayOfLines.push({"ID":startingID,
                          "Length":rangeCreator(100,250)});
        startingID += 1;
        
    }
    return arrayOfLines;
}

function rangeCreator(min,max){
    return Math.random() * (max-min + 1 ) + min 
}


