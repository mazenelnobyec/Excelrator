import { Table } from "./modules/table_generator.js";

let testingTable  = {rows:50, columns:5, startingID:52134};

const table = new Table(testingTable.rows,testingTable.columns,testingTable.startingID)

table.idSetter()
