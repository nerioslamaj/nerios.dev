 function AppActions() {

  const enumDispatchTypes = {
    CHANGE_VALUE: "CHANGE_VALUE",
    GET_TABLE_DATA: ""
  }
   
  function onChangeHandler(value) {

    return dispatch({type: EnumDispatchTypes.CHANGE_VALUE, value: value})
  }

}