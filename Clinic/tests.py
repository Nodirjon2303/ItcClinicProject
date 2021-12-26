from django.forms import model_to_dict
from django.test import TestCase
from models import Etalon

etalon = Etalon.objects.get(id=503)

dic = model_to_dict(etalon)

print(dic)