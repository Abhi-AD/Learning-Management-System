from django.shortcuts import render
from rest_framework.views import APIView
from apps.main.serializers import TeacherSerializer
from apps.main.models import Teacher
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import generics


# # Create your views here.
# class TeacherListView(APIView):
#     def get(self, request, format=None):
#         teachers = Teacher.objects.all()
#         serializer = TeacherSerializer(teachers, many=True)
#         return Response(serializer.data)


class TeacherListView(generics.ListCreateAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    permission_classes = [IsAuthenticated]


class TeacherDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    permission_classes = [IsAuthenticated]
