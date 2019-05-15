from api.models import Category, Product, Orders
from django.contrib.auth.models import User
from api.serializers import *
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404


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


class Products(generics.ListCreateAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        try:
            category = Category.objects.get(id=self.kwargs['pk'])
        except Category.DoesNotExist:
            raise Http404

        queryset = category.product_set.all()
        return queryset


class OrdersGetCreate(generics.ListCreateAPIView):
    serializer_class = OrderSerializer
    queryset = Orders.objects.all()
