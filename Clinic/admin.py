from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import *

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = [ 'username', 'email','first_name', 'last_name', 'companyName', 'status', 'is_staff']
    fieldsets = UserAdmin.fieldsets+(
        (None, {'fields': ('companyName','status')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('companyName', 'status')}),
    )

admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Clas)
admin.site.register(Etalon)
admin.site.register(Simptokompleks)
admin.site.register(Creator)
admin.site.register(Patient)
admin.site.register(Nolbir)
admin.site.register(Clas_ill_names)
admin.site.register(Patient_informs)
admin.site.register(Lsimptokompleks)
admin.site.register(Normallash)
