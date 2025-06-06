import { Component, DestroyRef, OnChanges, OnDestroy, SimpleChanges, ViewChild, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NgxResizerDirective } from '../material/resizeble';
import { FormBuilderEditorComponent } from '../form-builder-editor/form-builder-editor.component';

@Component({
  selector: 'app-confriguration-panel',
  templateUrl: './confriguration-panel.component.html',
  styleUrls: ['./confriguration-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfrigurationPanelComponent implements OnInit, OnChanges, OnDestroy {
  @Output() save = new EventEmitter();
  @Input() configuration: any = null
  componentrender = false
  done: any = [];
  dataDetails: any = {};
  optionData: any = '';
  items: any[] = [];
  value: any = '0'
  value1: any = '-1'
  rating: number = 0;
  months: any[] = []
  daysOfWeek: any[] = []
  genders: any[] = []
  setRating(rating: number) {
    this.rating = rating
  }

  disableothers = false;

  selectedTab1: any = 'general'

  ngOnDestroy(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.configuration) {
      this.componentrender = true;
      console.log('Config', this.configuration)
      const data: any = JSON.stringify(this.configuration);
      this.dataDetails = JSON.parse(data);
      this.fieldType = this.dataDetails.icon?.toLowerCase();
      console.log(this.fieldType)
      if (this.fieldType) {
        this.months = [
          { key: 1, label: 'January', Selected: false, inputType: this.fieldType },
          { key: 2, label: 'February', Selected: false, inputType: this.fieldType },
          { key: 3, label: 'March', Selected: false, inputType: this.fieldType, },
          { key: 4, label: 'April', Selected: false, inputType: this.fieldType, },
          { key: 5, label: 'May', Selected: false, inputType: this.fieldType, },
          { key: 6, label: 'June', Selected: false, inputType: this.fieldType, },
          { key: 7, label: 'July', Selected: false, inputType: this.fieldType, },
          { key: 8, label: 'August', Selected: false, inputType: this.fieldType, },
          { key: 9, label: 'September', Selected: false, inputType: this.fieldType, },
          { key: 10, label: 'October', Selected: false, inputType: this.fieldType, },
          { key: 11, label: 'November', Selected: false, inputType: this.fieldType, },
          { key: 12, label: 'December', Selected: false, inputType: this.fieldType, },
        ];

        this.daysOfWeek = [
          { key: 0, label: 'Sunday', Selected: false, inputType: this.fieldType, },
          { key: 1, label: 'Monday', Selected: false, inputType: this.fieldType, },
          { key: 2, label: 'Tuesday', Selected: false, inputType: this.fieldType, },
          { key: 3, label: 'Wednesday', Selected: false, inputType: this.fieldType, },
          { key: 4, label: 'Thursday', Selected: false, inputType: this.fieldType, },
          { key: 5, label: 'Friday', Selected: false, inputType: this.fieldType, },
          { key: 6, label: 'Saturday', Selected: false, inputType: this.fieldType, },
        ];

  this.genders= [
    { key: 1, label: 'Male', Selected: false ,inputType: this.fieldType,},
    { key: 2, label: 'Female', Selected: false ,inputType: this.fieldType,},
    { key: 3, label: 'Other', Selected: false ,inputType: this.fieldType,},
  ];

  this.otherChecBox.inputType =this.fieldType

      
      }

    }
    const data: any = JSON.stringify(this.configuration);
    this.dataDetails = JSON.parse(data);

  }

  ngOnInit(): void {
    this.defaultlist = this.defaultoptions
  }

  updatingdefault(event: any) {
    const selectedOptionIndex = event.target.value;
    console.log(typeof selectedOptionIndex)
    this.dataDetails.items.forEach((option: any, index: any) => {
      console.log(option)
      if (option.key.toString() === selectedOptionIndex) {
        option.Selected = true;
        this.dataDetails.selecteddefault = event.target.value
      } else {
        option.Selected = false;
      }
    })
    this.dataDetails
  }

  defaultlist: any[] = [];

  fontOptions: { key: string, value: string }[] = [
    { key: 'Arial', value: "Arial, Helvetica, sans-serif" },
    { key: 'TimesNewRoman', value: "Times New Roman, Times, serif" },
    { key: 'Georgia', value: "Georgia, serif" },
    { key: 'Garamond', value: "Garamond, serif" },
    { key: 'Courier New', value: "Courier New" },
    { key: 'Verdana', value: "Verdana, sans-serif" },
    { key: 'Brush Script MT', value: "Brush Script MT, cursive" },
    { key: 'Copperplate', value: "Copperplate, Papyrus, fantasy" }
  ];

  fontSize: { key: number, value: string }[] = [
    { key: 1, value: '1px' },
    { key: 2, value: '2px' },
    { key: 4, value: '4px' },
    { key: 6, value: '6px' },
    { key: 8, value: '8px' },
    { key: 10, value: '10px' },
    { key: 11, value: '11px' },
    { key: 12, value: '12px' },
    { key: 14, value: '14px' },
    { key: 16, value: '16px' },
    { key: 18, value: '18px' },
    { key: 20, value: '20px' },
    { key: 22, value: '22px' },
    { key: 24, value: '24px' },
    { key: 26, value: '26px' },
    { key: 28, value: '28px' },
    { key: 30, value: '30px' },
  ]

  otherChecBox = {
    label: 'other',
    value: null,
    placeHolder: '',
    inputType: 'checkbox',
    isother: true,
    Selected: false
  };
  fontWeight: { key: number, value: number }[] = [
    { key: 100, value: 100 },
    { key: 200, value: 200 },
    { key: 300, value: 300 },
    { key: 400, value: 400 },
    { key: 500, value: 500 },
    { key: 600, value: 600 },
    { key: 700, value: 700 },
    { key: 800, value: 800 },
    { key: 900, value: 900 },
  ]
  fieldType: string = ""


  defaultoptions: any[] = [
    {
      key: 0,
      inputType: 'checkbox',
      label: 'option1',
      Selected: false,
      value: null,
      placeHolder: '',
    },
    {
      key: 1,
      label: 'option2',
      Selected: false,
      inputType: 'checkbox',
      value: null,
      placeHolder: '',
    },
    {
      key: 2,
      label: 'option3',
      Selected: false,
      inputType: 'checkbox',
      value: null,
      placeHolder: '',
    },
    {
      key: 3,
      label: 'option4',
      Selected: false,
      inputType: 'checkbox',
      value: null,
      placeHolder: '',
    },

  ]

  addnewlabel() {
    if (this.dataDetails.name == 'Select') {
      this.dataDetails.items.push({
        label: 'label',
        value: null,
        placeHolder: '',
        inputType: this.dataDetails.items[0].inputType,
        options: []
      });
    } else {

      this.dataDetails.items.push({
        label: 'label',
        value: null,
        placeHolder: '',
        inputType: this.dataDetails.items[0].inputType,
      });
    }
  }

  deletelabel(id: any) {
    if (this.dataDetails.items.length > 1) {
      this.dataDetails.items.splice(id, 1);
    }
  }

  labellist: any[] = [{ label: 'label' }, { label: 'label' }];

  saveData() {
    const changeData = JSON.stringify(this.dataDetails);
    const copyData = JSON.parse(changeData)
    this.save.emit(copyData);
  }

  selectOptions(item: any) {
    let option = item?.map((item: any) => item.value);
    this.optionData = option?.join('\n');
    return option?.join('\n');

  }

  gotOptionData(event: any, index: any) {
    let option = event.target.value.split('\n');
    let data: any[] = []
    option.forEach((element: any, index: any) => {
      data.push({ key: index, value: element })
    });

    this.dataDetails.items[index].options = data;

  }


  showPlaceholder(item: any) {

    if (item === 'Select') {
      return false;
    } else if (item === 'Checkbox') {
      return false;
    }
    else if (item === 'Radio') {
      return false;
    }
    else {
      return true;
    }
  }

  textFormat(item: any) {
    this.dataDetails.textFormat = item;
  }

  textAlignment(item: any) {
    this.dataDetails.inputAlignment = item;
  }

  showAddDelete(item: any) {
    switch (item) {
      case 'Select':
        return true;
      case 'Checkbox':
        return true;
      case 'Radio':
        return true;
      case 'StarRating':
        return true
      default:
        return false;
    }
  }

  showTextAlignment(item: any) {
    if (item === 'Text Box') {
      return true;
    } else if (item === 'Number') {
      return true;
    } else if (item === 'Text-Area') {
      return true;
    } else {
      return false;
    }
  }

  showpredefinedoptions(item: any) {

    switch (item) {
      case 'Checkbox':
        return true;
      case 'Radio':
        return true;
      case 'Select':
        return true;
      default:
        return false;
    }
  }

  showdefaultoptions(item: any) {
    switch (item) {
      case 'Checkbox':
        return true;
      case 'Radio':
        return true;
      case 'Select':
        return true;
      default:
        return false;
    }
  }


  showReadonly(item: any) {
    if (item === 'Checkbox') {
      return true;
    } else if (item === 'Radio') {
      return true
    } else {
      return false
    }
  }

  showdisplayotheroptions(item: any) {
    if (item === 'Checkbox' && this.dataDetails.predefinedOptions === '0') {
      return true;
    } else if (item === 'Radio') {
      return true
    } else {
      return false
    }
  }

  showsuffeloption(item: any) {
    switch (item) {
      case 'Checkbox':
        return true;
      case 'Radio':
        return true;
      case 'Select':
        return true;
      default:
        return false;
    }
  }

  changeAlign(item: any) {

  }

  Otheroption(event: any) {
    console.log(event.target.value);
    if (event.target.checked) {
      this.dataDetails.items.push(this.otherChecBox)
    } else {
      const index = this.dataDetails.items.findIndex((item: any) => item.isother == true);
      this.dataDetails.items.splice(index, 1)
    }
  }

  Predefineoptions(event: any) {
    let value = event.target.value
    if (value === '0') {
      this.dataDetails.items=this.defaultoptions
      this.disableothers = true
    } else if (value === '1') {
      this.dataDetails.items=[]
      this.disableothers = true
    } else if (value === '2') {
      this.dataDetails.items = this.months
      this.disableothers = true
    } else if (value === '3') {
      this.dataDetails.items = this.daysOfWeek
      this.disableothers = true
    } else if (value === '4') {
      this.dataDetails.items = this.genders
      this.disableothers = true
    }
  }

  isAllowDomains(item: any) {
    let option = item?.map((item: any) => item);
    this.optionData = option?.join('\n');
    return option?.join('\n');
  }
  cahngeAllowDomains(event: any) {
    let option = event.target.value.split('\n');
    let data: any[] = []
    option.forEach((element: any) => {
      data.push(element)
    });
    this.dataDetails.allowDomains = data;
  }

  uploadFile(event: any) {
    console.log(event)
  }
  handleUpload(event: any, index: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.dataDetails.image = reader.result;
    };
  }

  readonlyproperty(event:any){
    if (event.target.checked) {
      this.dataDetails.readonly=true;
    }
    else{
      this.dataDetails.readonly=false;
    }
  }

  selectedColor: string = ''; // Initialize with an empty string

  changeBackground(color: string) {
    this.selectedColor = color;
  }

  activeRatingcolor:any=null

  activeRatingTab(item:any){
   this.activeRatingcolor=item
   this.dataDetails.Ratingcolor=item
  }

}

