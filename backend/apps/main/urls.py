from django.urls import path
from apps.main.views import TeacherListView, TeacherDetails

urlpatterns = [
    path("teachers/", TeacherListView.as_view(), name="teachers"),
    path("teacher/<int:pk>/", TeacherDetails.as_view(), name="teachers"),
]
