from django.contrib import admin
from apps.main.models import Teacher, CourseCategory, Course, Student

# Register your models here.

admin.site.register(Teacher)
admin.site.register(CourseCategory)
admin.site.register(Course)
admin.site.register(Student)
