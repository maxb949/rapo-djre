from django.urls import path, re_path
from . import views


urlpatterns = [
    path('', views.index ),
    path('login/', views.index ),
    path('about/', views.index ),
    #re_path(r'^.*', views.index),
]
