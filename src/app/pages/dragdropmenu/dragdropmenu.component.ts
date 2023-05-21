import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop-menu',
  templateUrl: './dragdropmenu.component.html',
})
export class DragdropmenuComponent implements OnInit {
  ngOnInit(): void {
    this.initializeDragDropMenu();
  }

  initializeDragDropMenu() {
    const sortableLists = Array.from(
      document.querySelectorAll<HTMLElement>('.sortable-list')
    );

    sortableLists.forEach((sortableList) => {
      const items = Array.from(
        sortableList.querySelectorAll<HTMLElement>('.item')
      );

      items.forEach((item) => {
        item.addEventListener('dragstart', () => {
          // Adding dragging class to item after a delay
          setTimeout(() => item.classList.add('dragging'), 0);
        });

        item.addEventListener('dragend', () => {
          // Removing dragging class from item on dragend event
          item.classList.remove('dragging');
        });
      });

      sortableList.addEventListener('dragover', (e: DragEvent) => {
        e.preventDefault();
        const draggingItem =
          sortableList.querySelector<HTMLElement>('.dragging');
        const afterElement = getDragAfterElement(sortableList, e.clientY);
        if (afterElement == null) {
          if (draggingItem) {
            sortableList.appendChild(draggingItem);
          }
        } else {
          if (draggingItem) {
            sortableList.insertBefore(draggingItem, afterElement);
          }
        }
      });
    });

    function getDragAfterElement(container: HTMLElement, y: number) {
      const draggableElements = Array.from(
        container.querySelectorAll<HTMLElement>('.item:not(.dragging)')
      );

      return draggableElements.reduce(
        (closest, child) => {
          const box = child.getBoundingClientRect();
          const offset = y - box.top - box.height / 2;
          if (offset < 0 && offset > closest.offset) {
            return { offset, element: child };
          } else {
            return closest;
          }
        },
        {
          offset: Number.NEGATIVE_INFINITY,
          element: null as HTMLElement | null,
        }
      ).element;
    }

    const list2 = document.getElementById('list2');
    const list1 = document.getElementById('list1');

    if (list2 && list1) {
      list2.addEventListener('dragover', (e) => e.preventDefault());
      list2.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggingItem = list1?.querySelector<HTMLElement>('.dragging');
        if (draggingItem) {
          list2.appendChild(draggingItem);
          draggingItem.classList.remove('dragging');
        }
      });

      list1.addEventListener('dragover', (e) => e.preventDefault());
      list1.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggingItem = list2?.querySelector<HTMLElement>('.dragging');
        if (draggingItem) {
          list1.appendChild(draggingItem);
          draggingItem.classList.remove('dragging');
        }
      });
    }
  }
}
