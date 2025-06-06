import { Component, OnInit, ViewChild, Output, ViewChildren, QueryList } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList, copyArrayItem, } from '@angular/cdk/drag-drop';
import { NgxResizerDirective } from '../material/resizeble';
import { ConfrigurationPanelComponent } from '../confriguration-panel/confriguration-panel.component';
import { Router } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form-builder-editor',
  templateUrl: './form-builder-editor.component.html',
  styleUrls: ['./form-builder-editor.component.scss']
})
export class FormBuilderEditorComponent implements OnInit {

  itemDetail: any = null
  selectedTab: any = 'basic'
  selectedTab1: any = 'Properties'
  selectedIndex: any = null;
  selectedChildIndex: any = null;

  @ViewChild(NgxResizerDirective, { static: false }) private resizeItem!: NgxResizerDirective;
  @ViewChild('configurationComponent') configurationComponent: ConfrigurationPanelComponent | undefined;

  labellist: any[] = [{ label: 'label' }, { label: 'label' }];

  todo: any[] = [
    {
      id: 0,
      name: 'Text Box',
      icon: 'TextBox',
      boxSize: 100,
      items: [
        {
          name: 'Text Box',
          icon: 'TextBox',
          label: 'Enter Text',
          value: null,
          placeHolder: 'Text Box',
          inputType: 'text',
          labelAlignment: 'block',
          required: false,
          advance: false,
          preFix: false,
          readonly: false,
          min: null,
          max: null,
          textFormat: 'initial',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          fontColor: '#ffffff',
          inputAlignment: 'left',
          fontWeight: 400,
        },
      ],
    },
    {
      id: 1,
      name: 'Number',
      icon: 'Phone',
      boxSize: 100,
      items: [
        {
          name: 'Number',
          icon: 'Phone',
          advance: false,
          labelAlignment: 'block',
          required: false,
          preFix: false,
          readonly: false,
          charLimit: false,
          min: null,
          max: null,
          textFormat: 'initial',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          fontColor: '#ffffff',
          inputAlignment: 'left',
          fontWeight: 400,
          label: 'Enter Number',
          value: null,
          placeHolder: 'Number',
          inputType: 'text',
        },
      ],
    },
    {
      id: 2,
      name: 'Full Name',
      icon: 'Name',
      boxSize: 100,
      items: [
        {
          name: 'Full Name',
          icon: 'Name',
          labelAlignment: 'block',
          required: false,
          advance: false,
          preFix: false,
          min: null,
          max: null,
          readonly: false,
          textFormat: 'initial',
          inputAlignment: 'left',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          fontColor: '#ffffff',
          fontWeight: 400,
          label: 'First Name',
          value: null,
          placeHolder: '',
          inputType: 'text',
        },
        {
          name: 'Full Name',
          icon: 'Name',
          labelAlignment: 'block',
          required: false,
          advance: false,
          preFix: false,
          min: null,
          max: null,
          readonly: false,
          textFormat: 'initial',
          inputAlignment: 'left',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          fontColor: '#ffffff',
          fontWeight: 400,
          label: 'Last Name',
          value: null,
          placeHolder: '',
          inputType: 'text'
        },
        {
          name: 'Full Name',
          icon: 'Name',
          labelAlignment: 'block',
          required: false,
          advance: false,
          preFix: false,
          min: null,
          max: null,
          readonly: false,
          textFormat: 'initial',
          inputAlignment: 'left',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          fontColor: '#ffffff',
          fontWeight: 400,
          label: 'Middle Name',
          value: null,
          placeHolder: '',
          inputType: 'text'
        }
      ],
    },
    {
      id: 3,
      name: 'Email',
      icon: 'Email',
      items: [
        {
          name: 'Email',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          advance: false,
          required: false,
          textFormat: 'initial',
          fontColor: '#ffffff',
          fontWeight: 400,
          label: 'Email',
          value: null,
          placeHolder: '',
          inputType: 'email'
        }
      ],
    },
    {
      id: 4,
      name: 'Address',
      icon: 'Address',
      // disable
      items : [
        {
          name: 'Address',
          icon: 'Address',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          required: false,
          readonly: false,
          advance: true,
          fontColor: '#ffffff',
          textFormat: 'initial',
          fontWeight: 400,
          label: 'Street line 1',
          staticlabel: 'Street line 1',
          value: null,
          show : true,
          placeHolder: '',
          address : true,
          inputType: 'text',
        },
        {
          name: 'Address',
          icon: 'Address',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          required: false,
          readonly: false,
          advance: true,
          fontColor: '#ffffff',
          textFormat: 'initial',
          fontWeight: 400,
          label: 'Street line 2',
          staticlabel: 'Street line 2',
          value: null,
          show : true,
          placeHolder: '',
          address : true,
          inputType: 'text',
        },
        {
          name: 'Address',
          icon: 'Address',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          required: false,
          readonly: false,
          advance: true,
          fontColor: '#ffffff',
          textFormat: 'initial',
          fontWeight: 400,
          label: 'Country',
          staticlabel: 'Country',
          value: null,
          show : true,
          placeHolder: '',
          inputType: 'autocomplete',
          options : []
        },
        {
          name: 'Address',
          icon: 'Address',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          required: false,
          readonly: false,
          advance: true,
          fontColor: '#ffffff',
          textFormat: 'initial',
          fontWeight: 400,
          label: 'State/Pronvince',
          staticlabel: 'State/Pronvince',
          value: null,
          show : true,
          placeHolder: '',
          inputType: 'autocomplete',
          options : []
        },
        {
          name: 'Address',
          icon: 'Address',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          required: false,
          readonly: false,
          advance: true,
          fontColor: '#ffffff',
          textFormat: 'initial',
          fontWeight: 400,
          label: 'City',
          staticlabel: 'City',
          value: null,
          show : true,
          placeHolder: '',
          inputType: 'autocomplete',
          options : []
        },
        {
          name: 'Address',
          icon: 'Address',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          required: false,
          readonly: false,
          advance: true,
          fontColor: '#ffffff',
          textFormat: 'initial',
          fontWeight: 400,
          label: 'Zip/Postal Code',
          staticlabel: 'Zip/Postal Code',
          value: null,
          show : true,
          placeHolder: '',
          inputType: 'number',
        }
      ]

      
    },
    {
      id: 5,
      name: 'Select',
      icon: 'Dropdown',
      items: [
        {
          name: 'Select',
          icon: 'Dropdown',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          optionShuffel: false,
          required: false,
          fontColor: '#ffffff',
          advance: true,
          predefinedOptions: '0',
          textFormat: 'initial',
          fontWeight: 400,
          multiple: false,
          label: 'Select',
          value: null,
          inputType: 'select',
          labelAlignment: 'block',
          options: [
            {
              key: 0,
              value: 'option1'
            },
            {
              key: 1,
              value: 'option2'
            },
            {
              key: 2,
              value: 'option3'
            },
            {
              key: 3,
              value: 'option4'
            },
          ]
        }
      ]
    },
    {
      id: 6,
      name: 'Date Picker',
      icon: 'DatePicker',
      items: [
        {
          name: 'Date Picker',
          icon: 'DatePicker',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: "11px",
          fontColor: '#fff',
          advance: true,
          timeIsShown: true,
          textFormat: 'initial',
          fontWeight: 400,
          isTimeAvlaibel: false,
          label: 'Date',
          value: null,
          placeHolder: 'Select Date',
          inputType: 'date',
          required: false,
          labelAlignment: 'block',
        }
      ],
    },
    {
      id: 7,
      name: 'Checkbox',
      icon: 'Checkbox',
      items: [
        {
          name: 'Checkbox',
          icon: 'Checkbox',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          fontColor: '#ffffff',
          textFormat: 'initial',
          predefinedOptions: '0',
          selecteddefault: '-1',
          readonly: false,
          optionShuffel: true,
          advance: true,
          fontWeight: 400,
          parentlabel: 'Type your question',
          other: false,
          required: false,
          key: 0,
          inputType: 'checkbox',
          label: 'option1',
          Selected: false,
          value: null,
          placeHolder: '',
        },
        {
          name: 'Checkbox',
          icon: 'Checkbox',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          fontColor: '#ffffff',
          textFormat: 'initial',
          predefinedOptions: '0',
          selecteddefault: '-1',
          readonly: false,
          optionShuffel: true,
          advance: true,
          fontWeight: 400,
          parentlabel: 'Type your question',
          other: false,
          required: false,
          key: 1,
          label: 'option2',
          Selected: false,
          inputType: 'checkbox',
          value: null,
          placeHolder: '',
        },
        {
          name: 'Checkbox',
          icon: 'Checkbox',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          fontColor: '#ffffff',
          textFormat: 'initial',
          predefinedOptions: '0',
          selecteddefault: '-1',
          readonly: false,
          optionShuffel: true,
          advance: true,
          fontWeight: 400,
          parentlabel: 'Type your question',
          other: false,
          required: false,
          key: 2,
          label: 'option3',
          Selected: false,
          inputType: 'checkbox',
          value: null,
          placeHolder: '',
        },
        {
          name: 'Checkbox',
          icon: 'Checkbox',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          fontColor: '#ffffff',
          textFormat: 'initial',
          predefinedOptions: '0',
          selecteddefault: '-1',
          readonly: false,
          optionShuffel: true,
          advance: true,
          fontWeight: 400,
          parentlabel: 'Type your question',
          other: false,
          required: false,
          key: 3,
          label: 'option4',
          Selected: false,
          inputType: 'checkbox',
          value: null,
          placeHolder: '',
        },

      ],
    },
    {
      id: 8,
      name: 'Text-Area',
      icon: 'TextArea',
      
      items: [
        {
          name: 'Text-Area',
          icon: 'TextArea',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          rows: 3,
          fontColor: '#ffffff',
          textFormat: 'initial',
          inputAlignment: 'left',
          fontWeight: 400,
          required: false,
          label: 'Text-Area',
          value: null,
          placeHolder: 'Enter Description Here....',
          inputType: 'textarea'
        }
      ],
    },
    {
      id: 9,
      name: 'Radio',
      icon: 'Radio',
      fontStyle: 'Arial, Helvetica, sans-serif',
      fontSize: '11px',
      fontColor: '#ffffff',
      advance: true,
      predefinedOptions: '0',
      selecteddefault: '-1',
      textFormat: 'initial',
      fontWeight: 400,
      required: false,
      parentlabel: 'Type your question',
      other: false,
      readonly: false,
      items: [

        {
          name: 'Radio',
          icon: 'Radio',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          fontColor: '#ffffff',
          advance: true,
          predefinedOptions: '0',
          selecteddefault: '-1',
          textFormat: 'initial',
          fontWeight: 400,
          required: false,
          parentlabel: 'Type your question',
          other: false,
          readonly: false,
          key: 0,
          inputType: 'radio',
          label: 'option1',
          Selected: false,
          value: null,
          placeHolder: '',
        },
        {
          key: 1,
          name: 'Radio',
          icon: 'Radio',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          fontColor: '#ffffff',
          advance: true,
          predefinedOptions: '0',
          selecteddefault: '-1',
          textFormat: 'initial',
          fontWeight: 400,
          required: false,
          parentlabel: 'Type your question',
          other: false,
          readonly: false,
          label: 'option2',
          Selected: false,
          inputType: 'radio',
          value: null,
          placeHolder: '',
        },
        {
          key: 2,
          name: 'Radio',
          icon: 'Radio',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          fontColor: '#ffffff',
          advance: true,
          predefinedOptions: '0',
          selecteddefault: '-1',
          textFormat: 'initial',
          fontWeight: 400,
          required: false,
          parentlabel: 'Type your question',
          other: false,
          readonly: false,
          label: 'option3',
          Selected: false,
          inputType: 'radio',
          value: null,
          placeHolder: '',
        },
        {
          key: 3,
          name: 'Radio',
          icon: 'Radio',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          fontColor: '#ffffff',
          advance: true,
          predefinedOptions: '0',
          selecteddefault: '-1',
          textFormat: 'initial',
          fontWeight: 400,
          required: false,
          parentlabel: 'Type your question',
          other: false,
          readonly: false,
          label: 'option4',
          Selected: false,
          inputType: 'radio',
          value: null,
          placeHolder: '',
        },

      ],
    },
    {
      id: 10,
      name: 'Phone',
      icon: 'Phone',
      boxSize: 100,
      items: [
        {
          name: 'Phone',
          icon: 'Phone',
          labelAlignment: 'block',
          required: false,
          code: false,
          preFix: false,
          textFormat: 'initial',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          fontColor: '#ffffff',
          inputAlignment: 'left',
          fontWeight: 400,
          label: 'Phone',
          value: null,
          placeHolder: 'Number',
          inputType: 'Number',
        },
      ],
    },
    {
      id: 11,
      name: 'StarRating',
      icon: 'StarRating',
      boxSize: 100,
      items: [
        {
          name: 'StarRating',
          icon: 'StarRating',
          labelAlignment: 'block',
          required: false,
          textFormat: 'initial',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          fontColor: '#ffffff',
          inputAlignment: 'left',
          fontWeight: 400,
          advance: true,
          parentlabel: 'Type your question',
          sublabel: 'Type Description',
          Ratingcolor:'',
          label: 'Star Rating',
          value: null,
          placeHolder: 'Number',
          inputType: 'StarRating',
          rating: 5,
          default:2
        },
      ],
    },
    {
      id: 12,
      name: 'Long Text',
      icon: 'TextArea',
      items: [
        {
          name: 'Long Text',
          icon: 'TextArea',
          labelAlignment: 'block',
          required: false,
          textFormat: 'initial',
          fontStyle: 'Arial, Helvetica, sans-serif',
          fontSize: '11px',
          fontColor: '#ffffff',
          inputAlignment: 'left',
          fontWeight: 400,
          advance: true,
          label: 'Long Text',
          value: null,
          placeHolder: '',
          inputType: 'texteditor'
        }
      ]
    }
  ];

  done: any = [];
  storedData: any = [];
  countryList: any = [];
  storedCityList: any = [];
  cityList: any = [];
  storedStateList: any = [];
  stateList: any = [];
  storeJson:any = null;
  test: any = "<b><i><u>example</b><u></i>"

  updateitems() {

  }
  constructor(private router: Router, public formService: FormService) {

  }
  ngOnInit(): void {
    this.storeJson = JSON.parse(JSON.stringify(this.todo))
    this.formService.getCountryList().subscribe((res: any) => {
      console.log(res)
      this.storedData = res;
      this.countryList = res;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    this.selectedIndex = null;
  }
  dropItems(event: CdkDragDrop<string[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    this.selectedIndex = null;
  }
  dropGroup(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.done, event.previousIndex, event.currentIndex);
  }
  noReturnPredicate() {
    return false;
  }

  reSizeBox(event: any, item: any) {
    console.log(event, item)
  }

  getItemDetails(event: any, item: any, index: number, index2: number,) {
    console.log('item', item, event);
    this.selectedChildIndex = index2;
    this.selectedIndex = index;
    this.itemDetail = null;
    setTimeout(() => {
      this.itemDetail = item
    })
    console.log(this.resizeItem?.width, this.done)
  }

  save(event: any) {
    this.done[this.selectedIndex].items[this.selectedChildIndex] = event;
    this.done[this.selectedIndex].boxSize = this.resizeItem?.width;
    console.log('event', event, this.done)
  }

  deleteSection(index: any) {
    this.done.splice(index, 1);
    this.itemDetail = null;
  }

  redirictToPreview(id: any) {
    this.router.navigate([`/preview/${id}`]);
  }

  filterCity(item : any, type : any){
    let data = item.target.value;
    if(type == 'city'){
      this.cityList = this.storedCityList.filter((city : any) => city.name.toLowerCase().includes(data.toLowerCase()));
      console.log(this.cityList, 'city');

    }
    if(type == 'state'){
      this.cityList = [];
      this.stateList = this.storedStateList.filter((city : any) => city.name.toLowerCase().includes(data.toLowerCase()));
      console.log(this.cityList, 'state');
    }
    if(type == 'country'){
      this.stateList = [];
      this.cityList = [];
      this.countryList = this.storedData.filter((country : any) => country.name.toLowerCase().includes(data.toLowerCase()));
      console.log(this.countryList, 'country');
    }
  }

  getCountry(event: any){
    this.storedData.find((country : any) => {
      if(country.name == event.option.value){
        this.stateList = country.states;
        this.storedStateList = country.states;
      }
    })
  }
  getState(event: any){
    this.storedStateList.find((state : any) => {
      if(state.name == event.option.value){
        this.cityList = state.cities;
        this.storedCityList = state.cities;
      }
    })
  }

  rateConvert(data: any) {
    let dataSet: any = [];
    for (let i = 0; i < data; i++) {
      dataSet.push(i)
    }
    return dataSet
  }
  addItemInSection(dataSet:any, index:number){
    console.log(dataSet)
    this.todo = JSON.parse(JSON.stringify(this.storeJson))
    const data = JSON.parse(JSON.stringify(this.storeJson[index].items))
    this.done[this.selectedIndex]?.items.push(...data);
    console.log(this.todo)
  }

}



