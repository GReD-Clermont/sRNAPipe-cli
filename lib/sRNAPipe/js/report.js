(function () {
  'use strict';

  function parseValue(value) {
    var trimmed = value.replace(/^\s+|\s+$/g, '');
    var numeric = Number(trimmed);

    if (trimmed !== '' && !isNaN(numeric)) {
      return { number: numeric, text: trimmed.toLowerCase(), numeric: true };
    }

    return { number: null, text: trimmed.toLowerCase(), numeric: false };
  }

  function compareValues(left, right, ascending) {
    if (left.numeric && right.numeric) {
      if (left.number < right.number) {
        return ascending ? -1 : 1;
      }

      if (left.number > right.number) {
        return ascending ? 1 : -1;
      }

      return 0;
    }

    if (left.text < right.text) {
      return ascending ? -1 : 1;
    }

    if (left.text > right.text) {
      return ascending ? 1 : -1;
    }

    return 0;
  }

  function setSortState(headers, activeHeader, ascending) {
    Array.prototype.forEach.call(headers, function (th) {
      th.setAttribute('aria-sort', 'none');
      th.removeAttribute('data-sort-order');
    });

    activeHeader.setAttribute('data-sort-order', ascending ? 'asc' : 'desc');
    activeHeader.setAttribute('aria-sort', ascending ? 'ascending' : 'descending');
  }

  function activateSort(table, headers, header) {
    var ascending = header.getAttribute('data-sort-order') !== 'asc';
    var columnIndex = header.cellIndex;

    setSortState(headers, header, ascending);
    sortTable(table, columnIndex, ascending);
  }

  function sortTable(table, columnIndex, ascending) {
    var tbody = table.tBodies[0];

    if (!tbody) {
      return;
    }

    var rows = Array.prototype.slice.call(tbody.rows);

    rows.sort(function (leftRow, rightRow) {
      var leftCell = leftRow.cells[columnIndex];
      var rightCell = rightRow.cells[columnIndex];
      var left = parseValue(leftCell ? leftCell.textContent || '' : '');
      var right = parseValue(rightCell ? rightCell.textContent || '' : '');

      return compareValues(left, right, ascending);
    });

    Array.prototype.forEach.call(rows, function (row) {
      tbody.appendChild(row);
    });
  }

  function initializeSortableTables() {
    var tables = document.querySelectorAll('table');

    Array.prototype.forEach.call(tables, function (table) {
      var headers = table.querySelectorAll('thead th[data-sortable="true"]');

      if (!headers.length) {
        return;
      }

      Array.prototype.forEach.call(headers, function (header) {
        header.setAttribute('tabindex', '0');
        header.setAttribute('role', 'button');
        header.setAttribute('aria-sort', 'none');

        header.addEventListener('click', function () {
          activateSort(table, headers, header);
        });

        header.addEventListener('keydown', function (event) {
          if (event.key === 'Enter' || event.key === ' ' || event.key === 'Space' || event.key === 'Spacebar') {
            event.preventDefault();
            activateSort(table, headers, header);
          }
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSortableTables);
  } else {
    initializeSortableTables();
  }
}());
