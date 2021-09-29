import Vue from "vue";

import {
  Tooltip,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Form,
  FormItem,
  Input,
  Checkbox,
  Radio,
  Button,
  Row,
  Col,
  RadioGroup,
  RadioButton,
  Menu,
  MenuItem,
  Submenu,
  Tabs,
  TabPane,
  Tag,
  Card,
  Scrollbar,
  Message,
  Table,
  TableColumn,
  Select,
  Option,
  Pagination,
  Drawer,
  MessageBox,
  Dialog,
  Cascader,
  DatePicker,
  Loading,
  Badge,
  Link,
  Image,
  Popover,
  InputNumber,
  Upload,
  Collapse,
  CollapseItem,
  Switch,
  TimePicker,
  Divider,
  Breadcrumb,
  BreadcrumbItem,
  Rate,
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Autocomplete,
  Tree,
  CheckboxGroup,
  TimeSelect,
  Carousel,
  CarouselItem,
  Notification,
  Transfer
} from "element-ui";

// 在调用 Vue.use 前，给 Message 添加 install 方法
Message.install = function(Vue) {
  Vue.prototype.$message = Message;
};

MessageBox.install = function(Vue) {
  Vue.prototype.$messagebox = MessageBox;
};

Notification.install = function(Vue) {
  Vue.prototype.$notify = Notification;
};

Vue.use(Container)
  .use(Header)
  .use(Aside)
  .use(Main)
  .use(Footer)
  .use(Form)
  .use(FormItem)
  .use(Input)
  .use(Checkbox)
  .use(Radio)
  .use(Button)
  .use(Row)
  .use(Col)
  .use(RadioGroup)
  .use(RadioButton)
  .use(Menu)
  .use(MenuItem)
  .use(Submenu)
  .use(Tabs)
  .use(TabPane)
  .use(Card)
  .use(Scrollbar)
  .use(Message)
  .use(Table)
  .use(TableColumn)
  .use(Select)
  .use(Option)
  .use(Pagination)
  .use(Drawer)
  .use(MessageBox)
  .use(Dialog)
  .use(Cascader)
  .use(DatePicker)
  .use(Loading)
  .use(Badge)
  .use(Link)
  .use(Image)
  .use(Popover)
  .use(InputNumber)
  .use(Tag)
  .use(Switch)
  .use(Upload)
  .use(Collapse)
  .use(CollapseItem)
  .use(Tooltip)
  .use(TimePicker)
  .use(Divider)
  .use(Breadcrumb)
  .use(BreadcrumbItem)
  .use(Rate)
  .use(Avatar)
  .use(Dropdown)
  .use(DropdownItem)
  .use(DropdownMenu)
  .use(Autocomplete)
  .use(Tree)
  .use(CheckboxGroup)
  .use(TimeSelect)
  .use(Carousel)
  .use(CarouselItem)
  .use(Notification)
  .use(Transfer);
