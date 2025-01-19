from rest_framework import serializers
from apps.main.models import Teacher


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = [
            "full_name",
            "email",
            "password",
            "qualification",
            "mobile_no",
            "address",
        ]
