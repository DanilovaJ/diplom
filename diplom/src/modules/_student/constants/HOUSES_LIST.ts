import { withHouseAccess } from "../../../utils/house/withHousesAccess";
import { URLS } from "../../../utils/house/URLS";

export const HOUSES_LIST = [
	withHouseAccess({
		title: 'МСГ',
		url: URLS.MSG,
	}, ['msg']),
	withHouseAccess({
		title: 'Общежитие №8',
		url: URLS.HOUSE_8,
	}, ['house_8']),
].filter((page) => !!page);