from django.urls import path, re_path
from . import views
urlpatterns = [
    path('api/contact', views.contact),
    re_path(r'^(?P<url>\w+)*', views.index),

]
