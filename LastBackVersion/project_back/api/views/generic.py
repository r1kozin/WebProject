from api.models import Category, Product
from django.contrib.auth.models import User
from api.serializers import CategorySerializer2, ProductSerializer
from rest_framework import generics,status
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404


class CategoryList(generics.ListCreateAPIView):
  	queryset = Category.objects.all()
  	serializer_class = CategorySerializer2


class CategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer2


class Products(generics.ListCreateAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        try:
            category = Category.objects.get(id=self.kwargs['pk'])
        except Category.DoesNotExist:
            raise Http404

        queryset = category.product_set.all()
        return queryset


