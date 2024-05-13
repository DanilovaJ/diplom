import { types } from "mobx-state-tree";
import { VMTextField } from "../../../../mvvm/TextField/VMTextField";
import { VMButton } from "../../../../mvvm/Button/VMButton";
import { setUserData } from "../../../../utils/user/userData";
import { api } from "../../../../api";

export const login = types.model('login')
.volatile(() => ({
	login: VMTextField.create({
		label: 'Логин'
	}),
	password: VMTextField.create({
		label: 'Пароль',
		isPassword: true,
	}),
	confirmButton: VMButton.create({
		text: 'Войти'
	}),
	toRegistration: VMButton.create({
		text: 'Зарегистрироваться'
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
				const res = await api.login({
					authData: {
						login: self.login.value,
						password: self.password.value,
					}
				});
				setUserData(res.data);
				window.location.replace('/');
			} catch(e: unknown) {
				self.setErrorMessage(e.response?.data?.message || 'Неизвестная ошибка');
			}
		});

		self.toRegistration.setOnClick(() => location.replace('/registration'))
	}
}))
.create({});