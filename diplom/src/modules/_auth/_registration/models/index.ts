import { types } from "mobx-state-tree";
import { VMTextField } from "../../../../mvvm/TextField/VMTextField";
import { VMButton } from "../../../../mvvm/Button/VMButton";
import { setUserData } from "../../../../utils/user/userData";
import { VMSelect } from "../../../../mvvm/Select/VMSelect";
import { HOUSES } from "../constants/HOUSES";
import { api } from "../../../../api";
import VMNumberTextField from "../../../../mvvm/TextField/VMNumberTextField";

export const registration = types.model('registration')
.volatile(() => ({
	login: VMTextField.create({
		label: 'Логин'
	}),
	name: VMTextField.create({
		label: 'Имя'
	}),
	secondName: VMTextField.create({
		label: 'Фамилия'
	}),
	password: VMTextField.create({
		label: 'Пароль',
		isPassword: true,
	}),
	room: VMNumberTextField.create({
		label: 'Номер комнаты',
	}),
	house: VMSelect.create({label: 'Общежитие', options: HOUSES}),
	confirmButton: VMButton.create({
		text: 'Зарегистрироваться'
	}),
	toLogin: VMButton.create({
		text: 'Назад',
	}),
	errorMessage: '',
}))
.actions((self) => ({
	setErrorMessage(value: string) {
		self.errorMessage = value;
	}
}))
.actions((self) => ({
	afterCreate() {
		self.confirmButton.setOnClick(async () => {
			try {
				const res = await api.registraion({
					authData: {
						login: self.login.value,
						name: self.name.value,
						second_name: self.secondName.value,
						password: self.password.value,
						house_id: self.house.selected,
						room: Number(self.room.value),
					}
				});
				setUserData(res.data);
				window.location.reload()
			} catch(e: unknown) {
				console.log(e);
				self.setErrorMessage(e.response.data.message);
			}
		});

		self.toLogin.setOnClick(() => location.replace('../'))
	}
}))
.create({});