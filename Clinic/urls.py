from django.urls import path
from .views import *

urlpatterns = [
    path('login/', log_in, name='login'),
    path('doctor/', doctorView, name='doctor'),
    path('adminmain/', adminView, name='admin'),
    path('etalon/', EtalonView, name='etalon'),
    path('signup/', signUpView, name='signup'),
    path('classpost/', classRenderView, name='classrender'),
    path('simptokompleks/', simptokompleksView, name='simptokompleks'),
    path('nolbir/', nolbirView, name='nolbir'),
    path('normallashtirish/', normView, name='norm'),
    path('normresult/', normresultView, name='resultadmin'),
    path('', main, name='main'),
    path('sinflashtirish/', sinfview, name='sinfview'),
    path('logout/', logoutView, name='logout'),
    path('last-patients/', lastPatientView, name='lastpatient'),
    path('add-patients/', addPatientView, name='addpatient'),
    path('diagnosised-patients/', diagnosedPatientView, name='diagnosed-patient'),
    path('patient/<int:id>/', PatientView, name='patient'),
    path('patient-render-shikoyat/', patient_render_shikoyat, name='rendershikoyat'),
    path('final-result/', final_result, name='finalresult'),
    path('savepatient/', save_patient, name='savepatient'),
    path('userpage/', user_page, name='userpage')
]
