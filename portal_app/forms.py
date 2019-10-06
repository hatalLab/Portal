from django import forms
from . import models
import django.core.validators as valids

class NewUser(forms.Form):

	id             = forms.IntegerField(label="Mispar Ishi", widget=forms.TextInput)
	name     = forms.CharField(label='Name', max_length=64)
	rank       = forms.ChoiceField(label='Rank', choices=[(r.id, r.name) for r in models.Rank.objects.all()])
	bio          = forms.CharField(label='Biography', max_length=512, widget=forms.Textarea)
	mail        = forms.EmailField(max_length=128,
	                               validators=[valids.EmailValidator(message="Email is not valid")])
	pwd        = forms.CharField(label="Password", widget=forms.PasswordInput)
	re_pwd = forms.CharField(label="Confirm password", widget=forms.PasswordInput)

	def clean(self):
		cleaned_data = super().clean()
		pwd  = cleaned_data.get("pwd")
		re_pwd  = cleaned_data.get("re_pwd")
		if pwd != re_pwd:
			raise forms.ValidationError(
				"Passwords don't match"
			)

