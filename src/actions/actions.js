const EnumPageActions = Object.freeze({
	GET_LIST: 'GET_LIST'
})

exports.EnumPageActions = EnumPageActions;

class PageActions {
	getList(){
		let list = [1,2,3];
    return dispatch({type:EnumPageActions.GET_LIST, list: list})
	}
}

const pageActions = new PageActions();

export default pageActions;