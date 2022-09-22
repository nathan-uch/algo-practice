import CreateRow from "./src/create-row.js";
import { AllAlgos } from "./src/data.js";

(function PopulateTables() {
    let e = 0;
    let m = 0;
    let h = 0;
    let enot = 0;
    let mnot = 0;
    let hnot = 0;
    for (let k = 0; k < AllAlgos.length; k++) {
        CreateRow(AllAlgos[k]);
        if (AllAlgos[k].difficulty.toLowerCase() === 'easy' && AllAlgos[k].complete === true) {
            e++;
        } else if (AllAlgos[k].difficulty.toLowerCase() === 'medium' && AllAlgos[k].complete === true) {
            m++;
        } else if (AllAlgos[k].difficulty.toLowerCase() === 'hard' && AllAlgos[k].complete === true) {
            h++;
        } else if (AllAlgos[k].difficulty.toLowerCase() === 'easy' && AllAlgos[k].complete === false) {
            mnot++;
        } else if (AllAlgos[k].difficulty.toLowerCase() === 'medium' && AllAlgos[k].complete === false) {
            mnot++;
        } else if (AllAlgos[k].difficulty.toLowerCase() === 'hard' && AllAlgos[k].complete === false) {
            hnot++;
        }
    }

    const $easyCompleted = document.getElementById('easy-completed');
    $easyCompleted.textContent = e;
    const $mediumCompleted = document.getElementById('medium-completed');
    $mediumCompleted.textContent = m;
    const $hardCompleted = document.getElementById('hard-completed');
    $hardCompleted.textContent = h;
    const $questionsCompleted = document.getElementById('total-completed');
    $questionsCompleted.textContent = Number(e) + Number(m) + Number(h);

    const $easyNotCompleted = document.getElementById('easy-not-completed');
    $easyNotCompleted.textContent = enot;
    const $mediumNotCompleted = document.getElementById('medium-not-completed');
    $mediumNotCompleted.textContent = mnot;
    const $hardNotCompleted = document.getElementById('hard-not-completed');
    $hardNotCompleted.textContent = hnot;
    const $totalNotCompleted = document.getElementById('total-not-completed');
    $totalNotCompleted.textContent = Number(enot) + Number(mnot) + Number(hnot);
} ())
