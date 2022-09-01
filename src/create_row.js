export default function CreateRow(info) {
    const $columns = document.getElementsByClassName('col-header'); 
    const $tableBody = document.querySelector('.table-body');
    const $row = document.createElement('tr');
    for (let i = 0; i < $columns.length; i++) {
        const id = $columns[i].getAttribute('id');
        const $td = document.createElement('td')
        if (id === 'name') {
            $td.textContent = info.name;
        } else if (id === 'link') {
            const $link = document.createElement('a');
            $link.textContent = info.website;
            $link.setAttribute('target', '_blank');
            $link.setAttribute('href', info.link);
            $td.appendChild($link);
        } else if (id === 'difficulty') {
            $td.textContent = info.difficulty;
            if (info.difficulty.toLowerCase() === 'easy') $td.setAttribute('class', 'text-success');
            if (info.difficulty.toLowerCase() === 'medium') $td.setAttribute('class', 'text-warning');
            if (info.difficulty.toLowerCase() === 'hard') $td.setAttribute('hard', 'text-danger');
        } else if (id === 'date') {
            $td.textContent = info.date;
        } else if (id === 'recommendedTime') {
            $td.textContent = info.recommendedTime;
        } else if (id === 'timeToComplete') {
            const $bold = document.createElement('strong');
            $bold.textContent = info.timeToComplete;
            if (info.completedOnTime() === false) $bold.setAttribute('class', 'text-danger');
            if (info.completedOnTime() === true) $bold.setAttribute('class', 'text-success');
            $td.appendChild($bold);
        } else if (id === 'complete') {
            const $icon = document.createElement('i');
            if (info.complete) $icon.className = 'fa-solid fa-check text-success';
            if (!info.complete) $icon.className = 'fa-solid fa-x text-danger';
            $td.appendChild($icon);
        } else if (id === 'problem') {
            $td.textContent = info.problem;
        } else if (id === 'usedHelp') {
            if (!info.usedHelp || info.usedHelp === undefined) $td.textContent = 'No';
            if (info.usedHelp) $td.textContent = 'Yes';
        }
        $row.appendChild($td)
    }
    $tableBody.appendChild($row);
}