let tableParamters = {
    rows:null,
    columns:null,
}

export function tablePrams(params) {
    tableParamters={rows:params.rows,
                    columns:params.columns}
}

export function testTable(){
    console.log(`${tableParamters.rows}   ${tableParamters.columns}`)
}


