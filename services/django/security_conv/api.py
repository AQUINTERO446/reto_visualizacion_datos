from security_conv.models import Security, Coexistence
from rest_framework import viewsets, permissions
from .serializers import SecuritySerializer, CoexistenceSerializer

# Security Viewset
class SecurityViewset(viewsets.ModelViewSet):
    queryset = Security.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = SecuritySerializer

# Coexistence Viewset
class CoexistenceViewset(viewsets.ModelViewSet):
    queryset = Coexistence.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CoexistenceSerializer