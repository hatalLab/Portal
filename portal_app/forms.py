from django import forms
from . import models
import django.core.validators as valids
from django.template import loader
from django.utils.safestring import mark_safe

class ImageWidget(forms.widgets.Widget):

	template_name = 'widgets/picture.jin'

	def get_context(self, name, value, attrs=None):
		return {'widget': {
			'name': name,
			'value': value,
			'attrs': attrs
		}}

	def render(self, name, value, attrs=None, renderer=None):
		context = self.get_context(name, value, self.attrs)
		print(context)
		template = loader.get_template(self.template_name).render(context)
		return mark_safe(template)

class SignIn(forms.Form):
	military_id = forms.IntegerField(label="Mispar Ishi", widget=forms.TextInput)
	pwd              = forms.CharField(label="Password", widget=forms.PasswordInput)

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

class NewProject(forms.Form):

	img_preview = forms.FileField(label="", widget=ImageWidget(attrs={'class':'preview_pic','alt':'Upload picture', 'src':'/media/project-default.png'}))
	img                     = forms.ImageField(label="", widget=forms.FileInput(attrs={'style':'visibility:hidden'}))
	name                 = forms.CharField(label="Title", max_length=64)
	description     = forms.CharField(label="Description", max_length=2048, widget=forms.Textarea)
	tags                    = forms.MultipleChoiceField(choices=[(m.html_name(), m.human_name()) for m in models.Category.objects.all()])