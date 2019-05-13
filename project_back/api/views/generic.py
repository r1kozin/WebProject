from api.models import Category
from django.contrib.auth.models import User
from api.serializers import CategorySerializer2, UserSerializer
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated


class CategoryList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return Category.objects.for_user_order_by_name(self.request.user)

    def get_serializer_class(self):
        return CategorySerializer2

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer2
