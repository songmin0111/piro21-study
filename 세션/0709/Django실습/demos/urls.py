from django.urls import path
from .views import *

app_name = "demos"

urlpatterns = [
     # 경로, 함수, 템플릿
    path('', calculator, name='calculator'),
]
   
