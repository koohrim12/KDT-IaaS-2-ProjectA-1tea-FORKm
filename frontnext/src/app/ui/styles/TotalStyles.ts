const TotalStyles = {
  // Modal Styles
  ModalOverlay:
    'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50',
  ModalContent: 'bg-white p-6 rounded-lg relative max-w-lg w-full mx-4',
  ModalCloseButton: 'absolute top-2 right-2 text-gray-500 hover:text-gray-700',
  ModalButton: 'px-4 py-2 rounded-lg text-white', // 버튼 스타일 추가
  ModalCancelButton: 'bg-gray-500 hover:bg-gray-600', // 취소 버튼 스타일
  ModalConfirmButton: 'bg-blue-500 hover:bg-blue-600', // 확인 버튼 스타일

  // Create Table Styles
  CreateTableContainer: 'flex flex-col items-start mb-2.5 w-full',
  CreateTableInput: 'border rounded-lg p-2 w-full',
  CreateTableErrorText: 'text-red-500 text-sm mt-1',
  CreateTableButtonContainer: 'space-x-10',
  CreateTableButton: 'px-4 py-2 text-white rounded-lg hover:bg-blue-600',
  CreateTableAddButton: 'bg-blue-500',
  CreateTableCreateButton: 'bg-green-500 hover:bg-green-600',
  CreateTableInputError: 'border-red-500',
  CreateTableRecommendButton:
    'px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full mb-4',

  // Login Styles
  LoginCardContainer:
    'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50', // z-index 추가
  LoginCardContent:
    'flex items-center justify-center flex-col bg-white p-6 rounded-lg relative max-w-lg w-full mx-4',
  LoginCardHeader: 'text-lg font-semibold text-gray-900 mb-4',
  LoginCardBody: 'text-gray-700 text-base mb-4',
  LoginCardFooter: 'flex justify-end mt-4',
  LoginCardButton:
    'bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
  LoginCardImage: 'w-full h-48 object-cover rounded-t-lg mb-4',
  LoginCardTitle: 'text-xl font-bold text-gray-800',
  LoginCardSubtitle: 'text-sm text-gray-500',
  LoginCardLink: 'text-blue-600 hover:text-blue-700 underline',
  LoginInput:
    'mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm',
  LoginForm: 'bg-white p-6 rounded shadow-lg w-full max-w-sm',
  LoginButton:
    'w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
  LoginContainer: 'flex items-center justify-center min-h-screen bg-gray-100',
  LoginLabel: 'block text-sm font-medium text-gray-700',
  LoginMessageContainer: 'text-center',
  LoginLabelInputContainer: 'mb-4',
  LoginSuccessText: 'text-blue-500 text-4xl font-bold',
  LoginFailureText: 'text-red-500 text-4xl font-bold',

  // Create Table Modal Styles
  CreateTableModalContainer: 'flex flex-col items-start mb-2.5 w-full',
  CreateTableModalInput: 'border rounded-lg p-2 w-full',
  CreateTableModalErrorText: 'text-red-500 text-sm mt-1',
  CreateTableModalButtonContainer: 'space-x-10',
  CreateTableModalButton: 'px-4 py-2 text-white rounded-lg hover:bg-blue-600',
  CreateTableModalAddButton: 'bg-blue-500',
  CreateTableModalCreateButton: 'bg-green-500 hover:bg-green-600',
  CreateTableModalInputError: 'border-red-500',
  CreateTableModalRecommendButton:
    'px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full mb-4',

  // Sidebar Styles
  sidebar: 'w-64 bg-gray-800 text-white flex flex-col p-4 space-y-4',
  SidebarButton: 'px-4 py-2 rounded-lg text-white hover:bg-gray-700',
  SidebarAddColumnButton: 'bg-orange-500 hover:bg-orange-600',
  SidebarTableItem: 'py-2 px-4 hover:bg-gray-700 cursor-pointer',
  SidebarContainer: 'flex',
  SidebarHeight: 'h-[calc(100vh-4rem)]',
  SidebarButtonContainer: 'space-x-4 mt-4',

  // 메인 컨텐츠 영역 스타일
  SidebarMainContent: 'flex-grow p-4 w-[calc(100%-16rem)] overflow-auto', // 고정된 너비와 스크롤 처리
  SidebarMainTitle: 'text-2xl font-bold',
  SidebarTableTitle: 'text-xl font-bold mb-4',
  SidebarInput: 'w-full px-2 py-1 border rounded', // 기본 인풋 너비 설정
  SidebarSaveButton:
    'bg-blue-500 hover:bg-blue-600 mt-4 px-4 py-2 rounded-lg text-white',

  // Main Content Rendering Styles
  MainContentTableContainer: 'overflow-x-auto',
  MainContentTable: 'min-w-full bg-white',
  MainContentThead: '',
  MainContentTh:
    'relative px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600',
  MainContentDeleteColumnButton:
    'absolute top-1/2 right-1 transform -translate-y-1/2 bg-red-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600',
  MainContentTbody: '',
  MainContentTr: 'hover:bg-gray-100',
  MainContentTd:
    'relative px-4 py-2 border-b border-gray-200 text-sm text-gray-700',
  MainContentDeleteRowButton:
    'absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600',
  MainContentErrorText: 'text-red-500 text-xs mt-1',
  MainContentTableWrapper: 'min-w-full overflow-x-auto',
  MainContentInputWide: 'w-32 px-2 py-1 border rounded',

  // Header Styles
  Header:
    'h-16 flex items-center justify-between bg-gray-100 border-b border-t border-gray-300 relative',
  HeaderLeft: 'flex items-center mr-4',
  HeaderCenter: 'flex flex-grow justify-end',
  HeaderRight: 'flex items-center ml-4 box-border pr-2.5',
  HeaderButton:
    'px-4 py-2 w-36 h-16 bg-gray-100 text-gray-700 cursor-pointer border-r border -l border-gray-300 box-border transition duration-300 hover:bg-gray-200 hover:border-gray-400',
  HeaderButtonFirst:
    'px-4 py-2 w-36 h-16 bg-gray-100 text-gray-700 cursor-pointer border -l border-gray-300 box-border transition duration-300 hover:bg-gray-200 hover:border-gray-400',
  HeaderButtonLogout:
    'flex items-center justify-center text-sm font-bold bg-gray-100 text-gray-700 underline',
  HeaderSpan: 'text-base font-bold text-gray-700 mr-4',

  // Setting Styles
  SettingSidebar:
    'w-64 h-screen bg-gray-800 text-white flex flex-col p-4 relative',
  SettingContainerStyle: 'flex h-screen relative',
  SettingContentStyle: 'flex-grow p-6',
  SettingToggleButton:
    'fixed right-4 top-15 text-black p-2 rounded cursor-pointer z-50 transition-all duration-300 text-xl',
  SettingToggleButtonOpen: 'right-[87.5rem]',
  SettingToggleButtonClosed: 'right-[103.5rem]',
  SettingEmail: 'text-blue-500',
  SettingButtonContainer: 'flex flex-col space-y-4',
  SettingButton:
    'px-4 py-2 rounded-lg hover:bg-gray-700 active:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-200 cursor-pointer',
};

export default TotalStyles;
