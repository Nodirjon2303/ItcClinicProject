from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import *
from django import forms

class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm):
        model = CustomUser
        fields = ('username', 'first_name', 'last_name', 'email',)


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = CustomUser
        fields = ('username', 'first_name', 'last_name', 'email', 'companyName', 'status')

class ExcelFileUploudForm(forms.Form):
    file = forms.FileField


class SimptokompleksForm(forms.Form):
    myfile = forms.FileField(
        label='Select a file',
        help_text='max. 42 megabytes'
    )






