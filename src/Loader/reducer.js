import * as ACTION from './action'
import t from "../lib/LocaleStrings"
export const loading = (state = false, action) => {

	switch (action.type) {
		case ACTION.LOADING_ON  :
			return true

		case ACTION.LOADING_OFF :
			return false

		default:      
			return state
	}

}

export const message = (state = 'Please wait', action) => {

	switch (action.type) {
		case ACTION.LOADING_ON  :
			return action.message

		case ACTION.LOADING_OFF :
			return t('string_loading')

		default:      
			return state
	}

}
