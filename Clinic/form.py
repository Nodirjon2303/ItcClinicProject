from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.forms import ModelForm

from Clinic.models import Patient


class PatientUpdateForm(ModelForm):
    class Meta:
        model = Patient
        fields = ['first_name', 'last_name', 'middle_name', 'birthday', 'home_phone', 'work_phone', 'region', 'city',
                  'adress', 'gen', 'work_place']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['first_name'].widget.attrs.update({'class': 'form-control'})
        self.fields['last_name'].widget.attrs.update({'class': 'form-control'})
        self.fields['middle_name'].widget.attrs.update({'class': 'form-control'})
        self.fields['birthday'].widget.attrs.update({'class': 'form-control'})
        self.fields['home_phone'].widget.attrs.update({'class': 'form-control'})
        self.fields['work_phone'].widget.attrs.update({'class': 'form-control'})
        self.fields['region'].widget.attrs.update({'class': 'form-control'})
        self.fields['city'].widget.attrs.update({'class': 'form-control'})
        self.fields['adress'].widget.attrs.update({'class': 'form-control'})
        self.fields['gen'].widget.attrs.update({'class': 'form-control'})
        self.fields['work_place'].widget.attrs.update({'class': 'form-control'})

    def clean(self):
        cleaned_data = super().clean()
        first_name = cleaned_data.get('first_name')
        last_name = cleaned_data.get('last_name')
        middle_name = cleaned_data.get('middle_name')
        birthday = cleaned_data.get('birthday')
        home_phone = cleaned_data.get('home_phone')
        work_phone = cleaned_data.get('work_phone')
        region = cleaned_data.get('region')
        city = cleaned_data.get('city')
        adress = cleaned_data.get('adress')
        gen = cleaned_data.get('gen')
        work_place = cleaned_data.get('work_place')

        if not first_name and not last_name and not middle_name and not birthday and not home_phone and not work_phone and not region and not city and not adress and not gen and not work_place:
            raise forms.ValidationError('You have to write something!')
