import React, { useState, Fragment } from 'react';
import {
  faSearch,
  faShieldAlt,
  faLayerGroup,
  faPen,
  faCaretDown,
  faUpload,
  faFilter,
  faUserPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  DatePicker,
  Switch,
  Slider,
  message,
  Modal,
  Spin,
  Button,
  Radio,
  Table,
  Divider,
  Tag,
} from 'antd';
import { connect } from 'react-redux';
import moment from 'moment';
import { DownloadOutlined } from '@ant-design/icons';

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

const MainBoard = (props) => {
  const [showHideCal, setShowHideCal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState(null);
  const [selectionType, setSelectionType] = useState('checkbox');
  const { authedUser } = props;

  return (
    <Fragment>
      <Modal
        centered
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
        width={
          window.screen.width < 520
            ? window.screen.width - 100
            : window.screen.width - 500
        }
      >
        {/* Content here */}
      </Modal>

      <div className="container m-5">
        <div className="row">
          <div className="table-title-container">
            <div>
              <span className="table-title mr-2">Contacts</span>
              <FontAwesomeIcon icon={faPen} size="1x" color="#023465" />
              <span className="ml-2">20 000 contacts</span>
            </div>
            <div>
              <Button type="primary" value="large" className="new-custom-btn">
                <span className="btn-label">Settings</span>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  size="1x"
                  className="colored-icon"
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="table-toolbar">
            <div className="mr-2">
              <Button
                type="primary"
                value="large"
                className="new-custom-btn-colored"
              >
                <FontAwesomeIcon
                  icon={faUserPlus}
                  size="1x"
                  className="white-icon"
                />
                <span className="btn-label">Add</span>
              </Button>
            </div>
            <div className="mr-2">
              <Button type="primary" value="large" className="new-custom-btn">
                <FontAwesomeIcon
                  icon={faUpload}
                  size="1x"
                  className="colored-icon"
                />
                <span className="btn-label">Upload</span>
              </Button>
            </div>
            <div className="mr-2">
              <Button type="primary" value="large" className="new-custom-btn">
                <FontAwesomeIcon
                  icon={faFilter}
                  size="1x"
                  className="colored-icon"
                />
                <span className="btn-label">Filter</span>
              </Button>
            </div>
            <div>
              <input
                type="text"
                className="seach-txt-box"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="width-90">
            <Table
              rowSelection={{
                type: selectionType,
                ...rowSelection,
              }}
              columns={columns}
              dataSource={data}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(MainBoard);

const columns = [
  {
    title: 'NAME',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'SURNAME',
    dataIndex: 'surname',
  },
  {
    title: 'PHONE NUMBER',
    dataIndex: 'phone',
  },
  {
    title: 'EMAIL',
    dataIndex: 'email',
  },
  {
    title: 'LISTS',
    dataIndex: 'lists',
  },
  {
    title: 'TAGS',
    dataIndex: 'tags',
    render: (tags) => {
      return (
        <>
          <Tag color={'green'} key={tags}>
            {tags[0]}
          </Tag>

          <Tag color={'green'} key={tags}>
            {tags[1]}
          </Tag>
          <span>{'  '}</span>
          <FontAwesomeIcon
            icon={faPen}
            size="1x"
            color="#023465"
            className="mr-3"
          />
          <FontAwesomeIcon icon={faTrash} size="1x" color="#023465" />
        </>
      );
    },
  },
];
const data = [
  {
    key: '1',
    name: 'John',
    surname: 'Doe',
    phone: '731-787-1344',
    email: 'arianna.tillman@hotmail.com',
    lists: 23,
    tags: ['Development', 'Marketing'],
  },
  {
    key: '2',
    name: 'John',
    surname: 'Doe',
    phone: '731-787-1344',
    email: 'arianna.tillman@hotmail.com',
    lists: 23,
    tags: ['Development', 'Marketing'],
  },
  {
    key: '3',
    name: 'John',
    surname: 'Doe',
    phone: '731-787-1344',
    email: 'arianna.tillman@hotmail.com',
    lists: 23,
    tags: ['Development', 'Marketing'],
  },
  {
    key: '4',
    name: 'John',
    surname: 'Doe',
    phone: '731-787-1344',
    email: 'arianna.tillman@hotmail.com',
    lists: 23,
    tags: ['Development', 'Marketing'],
  },
  {
    key: '5',
    name: 'John',
    surname: 'Doe',
    phone: '731-787-1344',
    email: 'arianna.tillman@hotmail.com',
    lists: 23,
    tags: ['Development', 'Marketing'],
  },
  {
    key: '6',
    name: 'John',
    surname: 'Doe',
    phone: '731-787-1344',
    email: 'arianna.tillman@hotmail.com',
    lists: 23,
    tags: ['Development', 'Marketing'],
  },
  {
    key: '7',
    name: 'John',
    surname: 'Doe',
    phone: '731-787-1344',
    email: 'arianna.tillman@hotmail.com',
    lists: 23,
    tags: ['Development', 'Marketing'],
  },
  {
    key: '8',
    name: 'John',
    surname: 'Doe',
    phone: '731-787-1344',
    email: 'arianna.tillman@hotmail.com',
    lists: 23,
    tags: ['Development', 'Marketing'],
  },
  {
    key: '9',
    name: 'John',
    surname: 'Doe',
    phone: '731-787-1344',
    email: 'arianna.tillman@hotmail.com',
    lists: 23,
    tags: ['Development', 'Marketing'],
  },
  {
    key: '10',
    name: 'John',
    surname: 'Doe',
    phone: '731-787-1344',
    email: 'arianna.tillman@hotmail.com',
    lists: 23,
    tags: ['Development', 'Marketing'],
  },
  {
    key: '11',
    name: 'John',
    surname: 'Doe',
    phone: '731-787-1344',
    email: 'arianna.tillman@hotmail.com',
    lists: 23,
    tags: ['Development', 'Marketing'],
  },
  {
    key: '12',
    name: 'John',
    surname: 'Doe',
    phone: '731-787-1344',
    email: 'arianna.tillman@hotmail.com',
    lists: 23,
    tags: ['Development', 'Marketing'],
  },
  {
    key: '13',
    name: 'John',
    surname: 'Doe',
    phone: '731-787-1344',
    email: 'arianna.tillman@hotmail.com',
    lists: 23,
    tags: ['Development', 'Marketing'],
  },
  {
    key: '14',
    name: 'John',
    surname: 'Doe',
    phone: '731-787-1344',
    email: 'arianna.tillman@hotmail.com',
    lists: 23,
    tags: ['Development', 'Marketing'],
  },
];
