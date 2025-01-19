from django.shortcuts import render
from rest_framework.views import APIView
from apps.main.serializers import TeacherSerializer
from apps.main.models import Teacher
from rest_framework.response import Response


# Create your views here.
class TeacherListView(APIView):
    def get(self, request, format=None):
        teachers = Teacher.objects.all()
        serializer = TeacherSerializer(teachers, many=True)
        return Response(serializer.data)
