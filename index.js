import CreateRow from "./src/create_row.js";
import {AllAlgos} from "./src/data.js";

for ( const obj of Object.keys(AllAlgos)) {
    CreateRow(AllAlgos[obj]);
}