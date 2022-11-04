import { ClothTable } from "./table_generator.js";
let testingTable  = {rows:50, columns:['length','width','weight'], startingID:52134};

const table = new ClothTable(testingTable.rows,testingTable.startingID,50,100,45)

table.idSetter()
table.printTable()

