import ProblemInfo from './info-class';

export default function CreateRow(info: ProblemInfo): void {
  const $columns = document.getElementsByClassName('col-header');
  const $tableBody = document.querySelector('.table-body')!;
  const $row = document.createElement('tr');
  for (let i = 0; i < $columns.length; i++) {
    const id = $columns[i].getAttribute('id');
    const $td = document.createElement('td');
    if (id === 'name') {
      $td.textContent = info.name;
    } else if (id === 'difficulty') {
      $td.textContent = info.difficulty;
      if (info.difficulty.toLowerCase() === 'easy')
        $td.setAttribute('class', 'text-success');
      if (info.difficulty.toLowerCase() === 'medium')
        $td.setAttribute('class', 'text-warning');
      if (info.difficulty.toLowerCase() === 'hard')
        $td.setAttribute('hard', 'text-danger');
    } else if (id === 'date') {
      $td.textContent = info.date;
    } else if (id === 'link') {
      const $link = document.createElement('a');
      $link.textContent = info.source;
      $link.setAttribute('target', '_blank');
      $link.setAttribute('href', info.link);
      $td.appendChild($link);
    } else if (id === 'summary') {
      $td.textContent = info.summary;
    } else if (id === 'completed') {
      const $icon = document.createElement('i');
      if (info.completed) $icon.className = 'fa-solid fa-check text-success';
      if (!info.completed) $icon.className = 'fa-solid fa-x text-danger';
      $td.appendChild($icon);
    } else if (id === 'usedHelp') {
      if (!info.usedHelp || info.usedHelp === undefined) $td.textContent = 'No';
      if (info.usedHelp) {
        const $link = document.createElement('a');
        if (info.helpSource !== '#') {
          $link.setAttribute('target', '_blank');
        }
        $link.setAttribute('href', info.helpSource);
        $link.textContent = 'Yes';
        $td.appendChild($link);
      }
    } else if (id === 'topics') {
      if (info.topics) $td.textContent = info.topics;
    }
    $row.appendChild($td);
  }
  $tableBody.appendChild($row);
}
