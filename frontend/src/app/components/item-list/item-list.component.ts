import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  items: any[] = [];
  newItem: any = {
    name: '',
    description: ''
  };
  editingItem: any = null;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItems();
  }

  // Obtener todos los items
  getItems(): void {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
    });
  }

  // Crear un nuevo item
  createItem(): void {
    this.itemService.createItem(this.newItem).subscribe(data => {
      this.items.push(data);
      this.newItem = { name: '', description: '' };
    });
  }

  // Editar un item
  editItem(item: any): void {
    this.editingItem = { ...item };
  }

  // Guardar cambios en un item
  saveItem(): void {
    this.itemService.updateItem(this.editingItem._id, this.editingItem).subscribe(data => {
      const index = this.items.findIndex(i => i._id === data._id);
      this.items[index] = data;
      this.editingItem = null;
    });
  }

  // Eliminar un item
  deleteItem(id: string): void {
    this.itemService.deleteItem(id).subscribe(() => {
      this.items = this.items.filter(item => item._id !== id);
    });
  }
}

