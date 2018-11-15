import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AntDemoComponent } from './ant-demo.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home', loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'use-ant', loadChildren: './use-ant/use-ant.module#UseAntModule'
      },
      {
        path: 'use-bgx-legion', loadChildren: './use-bgx-legion/bgx-legion.module#BgxLegionModule'
      },
      {
        path: 'change-log', loadChildren: './change-log/change-log.module#ChangeLogModule'
      },
      {
        path: 'dropdown-search', loadChildren: './dropdown-search/dropdown-demo.module#DropDownDemoModule'
      },
      {
        path: 'select', loadChildren: './select/select-demo.module#SelectDemoModule'
      },
      {
        path: 'select-box', loadChildren: './select-box/select-box-demo.module#BgxDemoSelectBoxModule'
      },
      {
        path: 'tree-select', loadChildren: './tree-select/tree-select-demo.module#BgxDemoTreeSelectModule'
      },
      {
        path: 'modal', loadChildren: './modal/modal-demo.module#BgxModalDemoModule'
      },
      {
        path: 'message', loadChildren: './message/message-demo.module#MessageDemoModule'
      },
      {
        path: 'table', loadChildren: './table/table-demo.module#TableDemoModule'
      },
      {
        path: 'drag-and-drop', loadChildren: './drag-and-drop/dnd-demo.module#DndDemoModule'
      },
      {
        path: 'editor', loadChildren: './editor/editor-demo.module#EditorDemoModule'
      },
      {
        path: 'ueditor', loadChildren: './ueditor/ueditor-demo.module#UEditorDemoModule'
      },
      {
        path: 'viewer', loadChildren: './viewer/viewer-demo.module#ViewerDemoModule'
      },
      {
        path: 'upload', loadChildren: './upload/upload-demo.module#UploadDemoModule'
      },
      {
        path: 'search-area', loadChildren: './search-area/search-area-demo.module#SearchAreaDemoModule'
      },
      {
        path: 'dropdown-search', loadChildren: './dropdown-search/dropdown-demo.module#DropDownDemoModule'
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AntDemoRoutingModule {
}
