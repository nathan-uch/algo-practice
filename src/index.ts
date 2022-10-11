import CreateRow from "./components/create-row.js";
import { AllAlgos } from "./components/data.js";

(function PopulateTables(): void {
    let e = 0;
    let m = 0;
    let h = 0;
    let enot = 0;
    let mnot = 0;
    let hnot = 0;
    for (let k = 0; k < AllAlgos.length; k++) {
        CreateRow(AllAlgos[k]);
        if (AllAlgos[k].difficulty.toLowerCase() === 'easy' && AllAlgos[k].completed === true) {
            e++;
        } else if (AllAlgos[k].difficulty.toLowerCase() === 'medium' && AllAlgos[k].completed === true) {
            m++;
        } else if (AllAlgos[k].difficulty.toLowerCase() === 'hard' && AllAlgos[k].completed === true) {
            h++;
        } else if (AllAlgos[k].difficulty.toLowerCase() === 'easy' && AllAlgos[k].completed === false) {
            mnot++;
        } else if (AllAlgos[k].difficulty.toLowerCase() === 'medium' && AllAlgos[k].completed === false) {
            mnot++;
        } else if (AllAlgos[k].difficulty.toLowerCase() === 'hard' && AllAlgos[k].completed === false) {
            hnot++;
        }
    }

    const $easyCompleted = document.getElementById('easy-completed')!;
    $easyCompleted.textContent = e.toString();
    const $mediumCompleted = document.getElementById('medium-completed')!;
    $mediumCompleted.textContent = m.toString();
    const $hardCompleted = document.getElementById('hard-completed')!;
    $hardCompleted.textContent = h.toString();
    const $questionsCompleted = document.getElementById('total-completed')!;
    $questionsCompleted.textContent = (Number(e) + Number(m) + Number(h)).toString();

    const $easyNotCompleted = document.getElementById('easy-not-completed')!;
    $easyNotCompleted.textContent = enot.toString();
    const $mediumNotCompleted = document.getElementById('medium-not-completed')!;
    $mediumNotCompleted.textContent = mnot.toString();
    const $hardNotCompleted = document.getElementById('hard-not-completed')!;
    $hardNotCompleted.textContent = hnot.toString();
    const $totalNotCompleted = document.getElementById('total-not-completed')!;
    $totalNotCompleted.textContent = (Number(enot) + Number(mnot) + Number(hnot)).toString();
} ())
