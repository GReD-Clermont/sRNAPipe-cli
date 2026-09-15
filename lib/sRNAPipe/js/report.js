(function () {
  'use strict';

  function parseValue(value) {
    var trimmed = value.replace(/^\s+|\s+$/g, '');
    var numeric = Number(trimmed);

    if (trimmed !== '' && !Number.isNaN(numeric)) {
      return { value: numeric, numeric: true };
    }

    return { value: trimmed.toLowerCase(), numeric: false };
  }

  function sortTable(table, columnIndex, ascending) {
    var tbody = table.tBodies[0];

    if (!tbody) {
      return;
    }

    var rows = Array.prototype.slice.call(tbody.rows);

    rows.sort(function (leftRow, rightRow) {
      var left = parseValue(leftRow.cells[columnIndex].textContent || '');
      var right = parseValue(rightRow.cells[columnIndex].textContent || '');

      if (left.value < right.value) {
        return ascending ? -1 : 1;
      }

      if (left.value > right.value) {
        return ascending ? 1 : -1;
      }

      return 0;
    });

    rows.forEach(function (row) {
      tbody.appendChild(row);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var tables = document.querySelectorAll('table.wb-tables');

    Array.prototype.forEach.call(tables, function (table) {
      var headers = table.querySelectorAll('thead th[data-sortable="true"]');

      Array.prototype.forEach.call(headers, function (header, columnIndex) {
        header.addEventListener('click', function () {
          var ascending = header.getAttribute('data-sort-order') !== 'asc';

          Array.prototype.forEach.call(headers, function (th) {
            th.removeAttribute('data-sort-order');
          });

          header.setAttribute('data-sort-order', ascending ? 'asc' : 'desc');
          sortTable(table, columnIndex, ascending);
        });
      });
    });
  });
}());
