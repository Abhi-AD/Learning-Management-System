from django.urls import path
from apps.main.views import TeacherListView

urlpatterns = [
    path("teachers/", TeacherListView.as_view(), name="teachers"),
]
